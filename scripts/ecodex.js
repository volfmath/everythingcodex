#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { listProfiles } from "./catalog.js";
import { installProfile } from "./install.js";

function printHelp() {
  console.log(`everything-codex

Usage:
  ecodex list
  ecodex doctor
  ecodex install <target> [--profile minimal|core|full]
`);
}

function runList() {
  for (const profile of listProfiles()) {
    console.log(`${profile.name} (${profile.count})`);
    for (const file of profile.files) {
      console.log(`  - ${file}`);
    }
  }
}

function runDoctor() {
  const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
  const required = [
    "AGENTS.md",
    "manifests/components.json",
    "scripts/install.js",
    "skills/repo-onboarding/SKILL.md"
  ];
  let ok = true;
  for (const relativePath of required) {
    const absolutePath = path.join(root, relativePath);
    const exists = fs.existsSync(absolutePath);
    console.log(`${exists ? "OK" : "MISSING"} ${relativePath}`);
    ok = ok && exists;
  }
  process.exitCode = ok ? 0 : 1;
}

function readProfile(args) {
  const flagIndex = args.indexOf("--profile");
  if (flagIndex === -1) {
    return "core";
  }
  return args[flagIndex + 1] || "core";
}

function runInstall(args) {
  const target = args[1];
  if (!target) {
    throw new Error("Missing install target.");
  }
  const profile = readProfile(args);
  const result = installProfile(path.resolve(target), profile);
  console.log(`Installed profile '${result.profile}' into ${path.join(result.targetRoot, ".codex", "everything-codex")}`);
  console.log("Next step: merge .codex/everything-codex/AGENTS.snippet.md into the target repo root AGENTS.md if needed.");
}

try {
  const args = process.argv.slice(2);
  const command = args[0];
  if (!command || command === "help" || command === "--help" || command === "-h") {
    printHelp();
  } else if (command === "list") {
    runList();
  } else if (command === "doctor") {
    runDoctor();
  } else if (command === "install") {
    runInstall(args);
  } else {
    throw new Error(`Unknown command: ${command}`);
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exit(1);
}

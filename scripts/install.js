import fs from "node:fs";
import path from "node:path";
import { loadCatalog } from "./catalog.js";

const scriptDir = path.dirname(new URL(import.meta.url).pathname);
const root = path.resolve(scriptDir, "..");

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function copyFileRelative(relativePath, targetRoot) {
  const source = path.join(root, relativePath);
  const destination = path.join(targetRoot, ".codex", "everything-codex", relativePath);
  ensureDir(path.dirname(destination));
  fs.copyFileSync(source, destination);
}

export function installProfile(targetRoot, profile) {
  const catalog = loadCatalog();
  const files = catalog.profiles[profile];
  if (!files) {
    throw new Error(`Unknown profile: ${profile}`);
  }
  for (const relativePath of files) {
    copyFileRelative(relativePath, targetRoot);
  }
  const snippetSource = path.join(root, "AGENTS.snippet.md");
  const snippetDestination = path.join(targetRoot, ".codex", "everything-codex", "AGENTS.snippet.md");
  ensureDir(path.dirname(snippetDestination));
  fs.copyFileSync(snippetSource, snippetDestination);
  return {
    profile,
    targetRoot,
    installedCount: files.length
  };
}

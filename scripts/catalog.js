import fs from "node:fs";
import path from "node:path";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const manifestPath = path.join(root, "manifests", "components.json");

export function loadCatalog() {
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

export function listProfiles() {
  const catalog = loadCatalog();
  return Object.entries(catalog.profiles).map(([name, files]) => ({
    name,
    count: files.length,
    files
  }));
}

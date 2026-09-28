// Fails the build if a page uses a Material Symbols icon that isn't in lib/icons.ts.
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const listed = new Set([...readFileSync("lib/icons.ts", "utf8").matchAll(/"([a-z_]+)"/g)].map((m) => m[1]));
const used = new Set();
const walk = (dir) => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (/\.(tsx?|mjs)$/.test(f)) {
      const src = readFileSync(p, "utf8");
      for (const m of src.matchAll(/(?:Icon name=|icon=|icon: |ic: )"([a-z_]+)"/g)) used.add(m[1]);
      for (const m of src.matchAll(/name=\{[^}]*\}/g)) for (const n of m[0].matchAll(/"([a-z_]+)"/g)) used.add(n[1]);
    }
  }
};
["app", "components", "content"].forEach(walk);
const missing = [...used].filter((i) => !listed.has(i));
if (missing.length) {
  console.error(`Icons missing from lib/icons.ts: ${missing.join(", ")}`);
  process.exit(1);
}
console.log(`Icons OK (${used.size} used).`);

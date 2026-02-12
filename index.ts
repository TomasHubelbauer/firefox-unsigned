import jwtIssuer from "./jwtIssuer.ts";
import jwtSecret from "./jwtSecret.ts";
import manifest from "./manifest.json";
import { $, write } from "bun";

manifest.version = new Date()
  .toISOString()
  .slice("yy".length, "yyyy-mm-ddThh:m".length)
  .replace(/[-T:]/g, "");
write("manifest.json", JSON.stringify(manifest, null, 2));

await $`bun build extension.ts --outfile extension.js`;

await $`rm -rf web-ext-artifacts`;
await $`web-ext sign --api-key=${jwtIssuer} --api-secret=${jwtSecret} --channel=unlisted --ignore-files '**/*.ts'`.nothrow();

manifest.version = "0.0.0.0";
write("manifest.json", JSON.stringify(manifest, null, 2));

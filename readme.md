# Firefox unsigned

This repository shows how to create a web extension for Firefox without having
to go through AMO approval and publishing process while avoiding the untrusted
local extension warning.

It is an evolved version of this older repository where I explored the same a
few years ago:
https://github.com/TomasHubelbauer/firefox-permanent-unsigned-extension

0. Bootstrap your extension's source code in this repository, for my use-case I
   added these features here:
   - Print message on all pages to indicate the extension is active on them:
     > Tomas Hubelbauer extension v######### is running…
   - Clean Hacker News comments from noisy commenters / on noisy topics
   - Clean Hacker News posts from uninteresting domains

   Use imports in `extension.ts` to apply select scripts on per-domain basis.

   Use `bun temp ….ts` to build the JavaScript counterpart of the TypeScript
   file with self-call usable for quick testing in the browser developer tools
   console.

1. Sign into AMO and with 2FA and get your JWT API credentials
   https://addons.mozilla.org/en-US/developers/addon/api/key
2. Create `jwtIssuer.ts` (Git-ignored):

   ```typescript
   export default "user:########:###";
   ```

3. Create `jwtSecret.ts` (Git-ignored):

   ```typescript
   export default "################################################################";
   ```

4. Install https://github.com/mozilla/web-ext: `bun add -g web-ext`
5. Run `bun install` and then `bun .` and wait for the output (~1-10 minutes):

   ```
   Building web extension from ./firefox-unsigned
   Waiting for validation...
   Waiting for approval...
   Signed xpi downloaded: ./firefox-unsigned/web-ext-artifacts/####################-#.0.xpi
   ```

6. Go to `about:addons` and click the gear icon, then Install Add-On From File

   This will replace (bump) the prior installation so it doesn't need to be
   manually removed prior to the installation.

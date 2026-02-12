import manifest from "./manifest.json";

export default function printWelcomeMessage() {
  console.log(`${manifest.name} extension v${manifest.version} is running…`);
}

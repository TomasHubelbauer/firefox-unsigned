import { $, argv, write } from "bun";
import ts from "typescript";

await $`bun build ${argv[2]} --outfile temp.js`;

const sourceText = await Bun.file("temp.js").text();
const statements = ts.createSourceFile(
  "temp.js",
  sourceText,
  ts.ScriptTarget.ESNext,
  true,
  ts.ScriptKind.JS,
).statements;

write(
  "temp.js",
  `${sourceText.slice(0, statements.at(-1)!.getFullStart()).trimEnd()}\n` +
    `${(statements[0] as ts.FunctionDeclaration).name!.text}();\n`,
);

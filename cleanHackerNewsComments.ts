// Test on https://news.ycombinator.com/item?id=46991240
export default function cleanHackerNewsComments() {
  const hiddenUser = "simonw";
  const hiddenWord = /\bpelican\b/i;
  let hiddenSubtreeIndent: number | undefined;

  for (const comment of document.querySelectorAll<HTMLTableRowElement>(
    "tr.athing.comtr",
  )) {
    const indent = +(
      comment.querySelector(".ind img")?.getAttribute("width") || -1
    );

    if (hiddenSubtreeIndent !== undefined) {
      if (indent > hiddenSubtreeIndent) {
        comment.remove();
        continue;
      }

      hiddenSubtreeIndent = undefined;
    }

    const user = comment
      .querySelector(".hnuser")
      ?.textContent?.trim()
      .toLowerCase();
    const text = comment.querySelector(".commtext")?.textContent ?? "";

    if (user !== hiddenUser || !hiddenWord.test(text)) {
      continue;
    }

    comment.remove();
    hiddenSubtreeIndent = indent;
  }
}

// Test on https://news.ycombinator.com/front?day=2010-12-01
export default function clearHackerNewsPosts() {
  const targetDomain = "paulgraham.com";

  for (const post of document.querySelectorAll<HTMLTableRowElement>("tr.athing")) {
    const siteDomain = post.querySelector(".sitestr")?.textContent?.trim().toLowerCase();
    if (!siteDomain?.endsWith(targetDomain)) {
      continue;
    }

    const metadataRow = post.nextElementSibling;
    const spacerRow = metadataRow?.nextElementSibling;

    post.remove();
    metadataRow?.remove();
    if (spacerRow?.classList.contains("spacer")) {
      spacerRow.remove();
    }
  }
}

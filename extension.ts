import cleanHackerNewsComments from "./cleanHackerNewsComments.ts";
import clearHackerNewsPosts from "./clearHackerNewsPosts.ts";
import printWelcomeMessage from "./printWelcomeMessage.ts";

printWelcomeMessage();

if (location.hostname === "news.ycombinator.com") {
  if (location.pathname === "/item") {
    cleanHackerNewsComments();
  }

  if (location.pathname === "/front" || location.pathname === "/news") {
    clearHackerNewsPosts();
  }
}

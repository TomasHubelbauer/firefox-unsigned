import cleanHackerNewsComments from "./cleanHackerNewsComments.ts";
import printWelcomeMessage from "./printWelcomeMessage.ts";

printWelcomeMessage();

if (
  location.hostname === "news.ycombinator.com" &&
  location.pathname === "/item"
) {
  cleanHackerNewsComments();
}

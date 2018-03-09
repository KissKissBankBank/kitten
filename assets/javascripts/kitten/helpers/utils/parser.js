import HtmlToReact from "html-to-react";

// We add a span to make parseHtml works with strings.
export const parseHtml = value =>
  new HtmlToReact.Parser().parse(`<span>${value}</span>`).props.children;

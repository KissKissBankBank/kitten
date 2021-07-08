import HtmlToReact from 'html-to-react';
import DOMPurify from 'dompurify'; // We add a span to make parseHtml works with strings.

export var parseHtml = function parseHtml(value) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
    sanitize: true
  };
  if (!value) return; // We need to escape "<3" common emoji

  var clean = typeof value === 'string' ? value.replace('<3', '&lt;3') : value;

  if (options.sanitize) {
    clean = DOMPurify.sanitize(clean);
  }

  return new HtmlToReact.Parser().parse("<span>".concat(clean, "</span>")).props.children;
};
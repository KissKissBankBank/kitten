import HtmlToReact from 'html-to-react'
import DOMPurify from 'dompurify'

// We add a span to make parseHtml works with strings.
export const parseHtml = (value, options = { sanitize: true }) => {
  if (!value) return

  // We need to escape "<3" common emoji
  let clean = typeof value === 'string' ? value.replace('<3', '&lt;3') : value

  if (options.sanitize) {
    clean = DOMPurify.sanitize(clean)
  }

  return new HtmlToReact.Parser().parse(`<span>${clean}</span>`).props.children
}

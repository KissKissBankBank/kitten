import HtmlToReact from 'html-to-react'

// We add a span to make parseHtml works with strings.
export const parseHtml = value => {
  if (!value) return

  // We need to escape "<3" common emoji
  const encodedValue =
    typeof value === 'string' ? value.replace('<3', '&lt;3') : value

  return new HtmlToReact.Parser().parse(`<span>${encodedValue}</span>`).props
    .children
}

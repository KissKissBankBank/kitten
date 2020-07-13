import HtmlToReact from 'html-to-react'

// We add a span to make parseHtml works with strings.
export const parseHtml = value => {
  if (!value) return

  const encodedValue = value.replace(/[\u00A0-\u9999<>\&]/gim, i => {
    return '&#' + i.charCodeAt(0) + ';'
  })

  return new HtmlToReact.Parser().parse(`<span>${encodedValue}</span>`).props
    .children
}

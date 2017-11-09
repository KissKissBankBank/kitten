import HtmlToReact from 'html-to-react'

export const parseHtml = value => new HtmlToReact.Parser().parse(value)

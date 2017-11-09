import HtmlToReact from 'html-to-react'

export const Parser = value => new HtmlToReact.Parser().parse(value)

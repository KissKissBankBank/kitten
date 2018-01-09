import { parseHtml } from 'kitten/helpers/utils/parser'
import ReactDOMServer from 'react-dom/server'

describe('parseHtml()', () => {
  it('converts HTML to React with HTML tags', () => {
    const html = '<strong>Foo <br/>Bar</strong>'
    const html_parsed = parseHtml(html)

    expect(ReactDOMServer.renderToStaticMarkup(html_parsed)).toBe(html)
  })

  it('converts HTML to React with &nbsp;', () => {
    const html = 'FooBar&nbsp;!'
    const html_parsed = parseHtml(html)
    const nbsp = '\xa0'

    console.log(html_parsed);

    expect(html_parsed).toBe(`FooBar${nbsp}!`)
  })
})

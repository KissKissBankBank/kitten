import { parseHtml } from '../../helpers/utils/parser'
import ReactDOMServer from 'react-dom/server'

describe('parseHtml()', () => {
  it('converts HTML to React with HTML tags', () => {
    const parsedHtml = parseHtml('<strong>Foo <br/>Bar</strong>')
    const escapedHtml = '&lt;strong&gt;Foo &lt;br/&gt;Bar&lt;/strong&gt;'

    expect(ReactDOMServer.renderToStaticMarkup(parsedHtml)).toBe(escapedHtml)
  })

  it('converts HTML to React with &nbsp;', () => {
    const html = 'FooBar&nbsp;!'
    const parsedHtml = parseHtml(html)

    expect(parsedHtml).toBe(`FooBar&nbsp;!`)
  })

  it('converts HTML to React with <3 // html entities', () => {
    const html = 'FooBar <3'
    const parsedHtml = parseHtml(html)

    expect(parsedHtml).toBe('FooBar <3')
  })
})

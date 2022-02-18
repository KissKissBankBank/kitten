import { parseHtml } from 'kitten'
import ReactDOMServer from 'react-dom/server'

describe('parseHtml()', () => {
  it('converts HTML to React with HTML tags', () => {
    const html = '<strong>Foo <br/>Bar</strong>'
    const parsedHtml = parseHtml(html)

    expect(ReactDOMServer.renderToStaticMarkup(parsedHtml)).toBe(html)
  })

  it('converts HTML to React with &nbsp;', () => {
    const html = 'FooBar&nbsp;!'
    const parsedHtml = parseHtml(html)
    const nbsp = '\xa0'

    expect(parsedHtml).toBe(`FooBar${nbsp}!`)
  })

  it('converts HTML to React with <3 // html entities', () => {
    const html = 'FooBar <3'
    const parsedHtml = parseHtml(html)

    expect(parsedHtml).toBe('FooBar <3')
  })

  it('sanitize HTML by default', () => {
    const html = "<iframe/src='javascript:alert(document.cookie)'>"
    const parsedHtml = parseHtml(html)

    expect(parsedHtml).toBeUndefined()
  })

  it('not sanitize HTML if options set to false', () => {
    const html = "<iframe/src='javascript:alert(document.cookie)'>"
    const parsedHtml = parseHtml(html, { sanitize: false })

    expect(parsedHtml).not.toBeUndefined()
  })
})

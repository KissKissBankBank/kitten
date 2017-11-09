import { expect } from 'chai'
import { Parser } from 'kitten/helpers/utils/parser'
import ReactDOMServer from 'react-dom/server'

describe('Parser', () => {
  it('converts HTML to React with HTML tags', () => {
    const html = '<strong>Foo <br/>Bar</strong>'
    const html_parsed = Parser(html)

    expect(ReactDOMServer.renderToStaticMarkup(html_parsed)).to.be.equal(html)
  })

  it('converts HTML to React with &nbsp;', () => {
    const html = 'FooBar&nbsp;!'
    const html_parsed = Parser(html)
    const nbsp = '\xa0'

    expect(html_parsed).to.be.equal(`FooBar${nbsp}!`)
  })
})

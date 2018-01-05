import React from 'react'
import { shallow } from 'enzyme'
import { HeaderLogo } from 'kitten/components/headers/header-logo'

describe('<HeaderLogo />', () => {
  const logo = shallow(<HeaderLogo />)

  it('renders a <a class="k-Header__logo" />', () => {
    expect(logo).to.have.tagName('a')
    expect(logo).to.have.className('k-Header__logo')
  })

  it('renders a default href', () => {
    expect(logo).to.have.attr('href', '#')
  })

  describe('with props', () => {
    const logo = shallow(
      <HeaderLogo href="http://…"
                  className="test-Header__logo"
                  src="http://…/assets/…"
                  alt="Logo"
                  width="420"
                  height="42" />
    )

    it('has a href', () => {
      expect(logo).to.have.attr('href', 'http://…')
    })

    it('has a custom class', () => {
      expect(logo).to.have.className('test-Header__logo')
    })

    it('has an image', () => {
      const image = logo.find('img')

      expect(image).to.have.attr('src', 'http://…/assets/…')
      expect(image).to.have.attr('alt', 'Logo')
      expect(image).to.have.attr('width', '420')
      expect(image).to.have.attr('height', '42')
    })
  })
})

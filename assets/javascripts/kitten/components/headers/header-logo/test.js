import React from 'react'
import { HeaderLogo } from './index'

describe('<HeaderLogo />', () => {
  const logo = shallow(<HeaderLogo />)

  it('renders a <a class="k-Header__logo" />', () => {
    expect(logo.is('a')).toBe(true)
    expect(logo.hasClass('k-Header__logo')).toBe(true)
  })

  it('renders a default href', () => {
    expect(logo.props().href).toBe('#')
  })

  describe('with props', () => {
    const logo = shallow(
      <HeaderLogo
        href="http://…"
        className="test-Header__logo"
        src="http://…/assets/…"
        alt="Logo"
        width="420"
        height="42"
      />,
    )

    it('has a href', () => {
      expect(logo.props().href).toBe('http://…')
    })

    it('has a custom class', () => {
      expect(logo.hasClass('test-Header__logo')).toBe(true)
    })

    it('has an image', () => {
      const image = logo.find('img')

      expect(image.props().src).toBe('http://…/assets/…')
      expect(image.props().alt).toBe('Logo')
      expect(image.props().width).toBe('420')
      expect(image.props().height).toBe('42')
    })
  })
})

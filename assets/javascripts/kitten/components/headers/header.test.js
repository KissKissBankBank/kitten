import React from 'react'
import { Header, HeaderItems, HeaderItem, headerHeight } from './header'

describe('<Header />', () => {
  const header = shallow(
    <Header>
      <p>Test</p>
    </Header>,
  )

  it('renders a <header class="k-Header" />', () => {
    expect(header.is('header')).toBe(true)
    expect(header.hasClass('k-Header')).toBe(true)
    expect(header.props().role).toBe('banner')
  })

  it('renders a container', () => {
    const container = header.find('.k-Header__container')
    expect(container).toHaveLength(1)
  })

  it('renders a row', () => {
    const row = header.find('.k-Header__row')
    expect(row).toHaveLength(1)
  })

  it('renders children', () => {
    expect(header.text()).toBe('Test')
  })

  describe('with fixed version', () => {
    const header = shallow(<Header fixed={true} />)

    it('has `.is-fixed` class', () => {
      expect(header.hasClass('is-fixed')).toBe(true)
    })
  })
})

describe('<HeaderItems />', () => {
  const headerItems = shallow(
    <HeaderItems>
      <p>Test</p>
    </HeaderItems>,
  )

  it('renders a <div class="k-Header__items" />', () => {
    expect(headerItems.hasClass('k-Header__items')).toBe(true)
  })

  it('renders children', () => {
    expect(headerItems.text()).toBe('Test')
  })

  describe('with fixed size version', () => {
    const headerItems = shallow(<HeaderItems fixedSize={true} />)

    it('has a custom class', () => {
      expect(headerItems.hasClass('k-Header__items--fixedSize')).toBe(true)
    })
  })
})

describe('<HeaderItem />', () => {
  const headerItem = shallow(
    <HeaderItem>
      <p>Test</p>
    </HeaderItem>,
  )

  it('renders a <div class="k-Header__item" />', () => {
    expect(headerItem.hasClass('k-Header__item')).toBe(true)
  })

  it('renders children', () => {
    expect(headerItem.text()).toBe('Test')
  })

  describe('with fixed size version', () => {
    const headerItem = shallow(<HeaderItem fixedSize={true} />)

    it('has a custom class', () => {
      expect(headerItem.hasClass('k-Header__item--fixedSize')).toBe(true)
    })
  })

  describe('with centered version', () => {
    const headerItem = shallow(<HeaderItem centered={true} />)

    it('has a custom class', () => {
      expect(headerItem.hasClass('k-Header__item--centered')).toBe(true)
    })
  })

  describe('with custom tag', () => {
    const headerItem = shallow(<HeaderItem tag="nav" />)

    it('renders a <nav />', () => {
      expect(headerItem.is('nav')).toBe(true)
    })
  })
})

describe('headerHeight', () => {
  it('is equal to 65', () => {
    expect(headerHeight).toBe(65)
  })
})

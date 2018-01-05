import React from 'react'

import {
  Header,
  HeaderItems,
  HeaderItem,
} from 'kitten/components/headers/header'

describe('<Header />', () => {
  const header = shallow(
    <Header>
      <p>Test</p>
    </Header>
  )

  test('renders a <header class="k-Header" />', () => {
    expect(header).to.have.tagName('header')
    expect(header.hasClass('k-Header')).to.equal(true)
    expect(header).to.have.attr('role', 'banner')
  })

  test('renders a container', () => {
    const container = header.find('.k-Header__container')
    expect(container).toHaveLength(1)
  })

  test('renders a row', () => {
    const row = header.find('.k-Header__row')
    expect(row).toHaveLength(1)
  })

  test('renders children', () => {
    expect(header).to.have.text('Test')
  })

  describe('with fixed version', () => {
    const header = shallow(<Header fixed={ true } />)

    test('has `.is-fixed` class', () => {
      expect(header.hasClass('is-fixed')).to.equal(true)
    })
  })
})

describe('<HeaderItems />', () => {
  const headerItems = shallow(
    <HeaderItems>
      <p>Test</p>
    </HeaderItems>
  )

  test('renders a <div class="k-Header__items" />', () => {
    expect(headerItems.hasClass('k-Header__items')).to.equal(true)
  })

  test('renders children', () => {
    expect(headerItems).to.have.text('Test')
  })

  describe('with fixed size version', () => {
    const headerItems = shallow(<HeaderItems fixedSize={ true } />)

    test('has a custom class', () => {
      expect(headerItems.hasClass('k-Header__items--fixedSize')).to.equal(true)
    })
  })
})

describe('<HeaderItem />', () => {
  const headerItem = shallow(
    <HeaderItem>
      <p>Test</p>
    </HeaderItem>
  )

  test('renders a <div class="k-Header__item" />', () => {
    expect(headerItem.hasClass('k-Header__item')).to.equal(true)
  })

  test('renders children', () => {
    expect(headerItem).to.have.text('Test')
  })

  describe('with fixed size version', () => {
    const headerItem = shallow(<HeaderItem fixedSize={ true } />)

    test('has a custom class', () => {
      expect(headerItem.hasClass('k-Header__item--fixedSize')).to.equal(true)
    })
  })

  describe('with centered version', () => {
    const headerItem = shallow(<HeaderItem centered={ true } />)

    test('has a custom class', () => {
      expect(headerItem.hasClass('k-Header__item--centered')).to.equal(true)
    })
  })

  describe('with custom tag', () => {
    const headerItem = shallow(<HeaderItem tag="nav" />)

    test('renders a <nav />', () => {
      expect(headerItem).to.have.tagName('nav')
    })
  })
})

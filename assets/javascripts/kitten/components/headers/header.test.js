import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
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

  it('renders a <header class="k-Header" />', () => {
    expect(header).to.have.tagName('header')
    expect(header).to.have.className('k-Header')
    expect(header).to.have.attr('role', 'banner')
  })

  it('renders a container', () => {
    const container = header.find('.k-Header__container')
    expect(container).to.have.length(1)
  })

  it('renders a row', () => {
    const row = header.find('.k-Header__row')
    expect(row).to.have.length(1)
  })

  it('renders children', () => {
    expect(header).to.have.text('Test')
  })

  describe('with fixed version', () => {
    const header = shallow(<Header fixed={ true } />)

    it('has `.is-fixed` class', () => {
      expect(header).to.have.className('is-fixed')
    })
  })
})

describe('<HeaderItems />', () => {
  const headerItems = shallow(
    <HeaderItems>
      <p>Test</p>
    </HeaderItems>
  )

  it('renders a <div class="k-Header__items" />', () => {
    expect(headerItems).to.have.className('k-Header__items')
  })

  it('renders children', () => {
    expect(headerItems).to.have.text('Test')
  })

  describe('with fixed size version', () => {
    const headerItems = shallow(<HeaderItems fixedSize={ true } />)

    it('has a custom class', () => {
      expect(headerItems).to.have.className('k-Header__items--fixedSize')
    })
  })
})

describe('<HeaderItem />', () => {
  const headerItem = shallow(
    <HeaderItem>
      <p>Test</p>
    </HeaderItem>
  )

  it('renders a <div class="k-Header__item" />', () => {
    expect(headerItem).to.have.className('k-Header__item')
  })

  it('renders children', () => {
    expect(headerItem).to.have.text('Test')
  })

  describe('with fixed size version', () => {
    const headerItem = shallow(<HeaderItem fixedSize={ true } />)

    it('has a custom class', () => {
      expect(headerItem).to.have.className('k-Header__item--fixedSize')
    })
  })

  describe('with centered version', () => {
    const headerItem = shallow(<HeaderItem centered={ true } />)

    it('has a custom class', () => {
      expect(headerItem).to.have.className('k-Header__item--centered')
    })
  })

  describe('with custom tag', () => {
    const headerItem = shallow(<HeaderItem tag="nav" />)

    it('renders a <nav />', () => {
      expect(headerItem).to.have.tagName('nav')
    })
  })
})

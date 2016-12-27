import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Stepper } from '../../components/steppers/stepper'

const items = [
  {
    text: "Catopuma\n Temminckii",
    href: "http://…",
  },
  {
    text: "Prionaelurus\n planiceps",
    href: "#",
    linkClassNames: "k-Stepper__link--inProgress",
  },
  {
    text: "Serval",
    href: "#",
    linkClassNames: "k-Stepper__link--inactive",
    focusable: false,
  },
]

describe('<Stepper />', () => {

  const component = shallow(
    <Stepper items={ items } />
  )

  it('renders a <nav class="k-Stepper" />', () => {
    expect(component).to.have.tagName('nav')
    expect(component).to.have.className('k-Stepper')
  })

  it('has a list', () => {
    expect(component.find('ul.k-Stepper__list')).to.have.length(1)
  })

  it('renders items', () => {
    expect(component.find('li.k-Stepper__item')).to.have.length(3)
  })

  it('renders links', () => {
    const links = component.find('.k-Stepper__link')

    expect(links).to.have.length(3)
    expect(links.find('.k-Stepper__link--inProgress')).to.have.length(1)
    expect(links.find('.k-Stepper__link--inactive')).to.have.length(1)
    expect(links.first()).to.have.attr('href', 'http://…')
  })

  it('renders an unfocusable link', () => {
    const spanLink = component.find('span.k-Stepper__link')

    expect(spanLink).to.have.length(1)
    expect(spanLink).not.to.have.attr('href')
  })

  it('replaces line feed by <br class"k-Stepper__break" />', () => {
    expect(component.find('br.k-Stepper__break')).to.have.length(2)
  })

  describe('with align start', () => {
    const componentWithAlignStart = shallow(
      <Stepper items={ items }
               withAlignStart={ true } />
    )

    it('renders a list with `.k-Stepper__list--alignStart`', () => {
      const list = componentWithAlignStart.find('.k-Stepper__list')

      expect(list).to.have.className('k-Stepper__list--alignStart')
    })
  })

  describe('with tiny spacing', () => {
    const componentWithTinySpacing = shallow(
      <Stepper items={ items }
               withTinySpacing={ true } />
    )

    it('renders items with `.k-Stepper__item--tinySpacing`', () => {
      const items = componentWithTinySpacing.find('.k-Stepper__item')

      items.map(item => {
        expect(item).to.have.className('k-Stepper__item--tinySpacing')
      })
    })
  })
})

import React from 'react'

import { Stepper } from 'kitten/components/steppers/stepper'
import {
  StepperIconDefault,
  StepperIconInProgress,
  StepperIconValidated,
} from 'kitten/components/steppers/stepper-icon'

const items = [
  {
    text: "Catopuma\n Temminckii",
    href: "http://…",
    iconType: "default",
    onClick: () => {},
  },
  {
    text: "Prionaelurus\n planiceps",
    href: "#",
    linkClassNames: "k-Stepper__link",
    iconType: "default",
  },
  {
    text: "Serval",
    href: "#",
    linkClassNames: "k-Stepper__link",
    iconType: "validated",
  },
  {
    text: "Idea of",
    href: "#",
    linkClassNames: "k-Stepper__link--inProgress",
    iconType: "inProgress",
  },
  {
    text: "Lynx\n pardinus",
    linkClassNames: "k-Stepper__link--inactive",
    iconType: "default",
  },
]

describe('<Stepper />', () => {

  const component = shallow(
    <Stepper items={ items } />
  )

  test('renders a <nav class="k-Stepper" />', () => {
    expect(component).to.have.tagName('nav')
    expect(component.hasClass('k-Stepper')).to.equal(true)
  })

  test('has a list', () => {
    expect(component.find('ul.k-Stepper__list')).toHaveLength(1)
  })

  test('renders items', () => {
    expect(component.find('li.k-Stepper__item')).toHaveLength(5)
  })

  test('renders links', () => {
    const links = component.find('.k-Stepper__link')

    expect(links).toHaveLength(5)
    expect(links.find('.k-Stepper__link--inProgress')).toHaveLength(1)
    expect(links.find('.k-Stepper__link--inactive')).toHaveLength(1)
    expect(links.first()).to.have.attr('href', 'http://…')
    expect(typeof links.first().props().onClick).toBe('function')
  })

  test('renders an unfocusable link', () => {
    const spanLink = component.find('span.k-Stepper__link')

    expect(spanLink).toHaveLength(1)
    expect(spanLink).not.to.have.attr('href')
  })

  test('replaces line feed by <br class"k-Stepper__break" />', () => {
    expect(component.find('br.k-Stepper__break')).toHaveLength(3)
  })

  describe('with align start', () => {
    const componentWithAlignStart = shallow(
      <Stepper items={ items }
               withAlignStart={ true } />
    )

    test('renders a list with `.k-Stepper__list--alignStart`', () => {
      const list = componentWithAlignStart.find('.k-Stepper__list')

      expect(list.hasClass('k-Stepper__list--alignStart')).to.equal(true)
    })
  })

  describe('with tiny spacing', () => {
    const componentWithTinySpacing = shallow(
      <Stepper items={ items }
               withTinySpacing={ true } />
    )

    test('renders items with `.k-Stepper__item--tinySpacing`', () => {
      const items = componentWithTinySpacing.find('.k-Stepper__item')

      items.map(item => {
        expect(item.hasClass('k-Stepper__item--tinySpacing')).to.equal(true)
      })
    })
  })

  describe('with different icon types', () => {
    test('renders a <StepperIconDefault />', () => {
      const icon = component.find('.k-Stepper__link').at(0).children().first()

      expect(icon).to.have.type(StepperIconDefault)
    })

    test('renders a <StepperIconInProgress />', () => {
      const icon = component.find('.k-Stepper__link--inProgress').at(0).children().first()

      expect(icon).to.have.type(StepperIconInProgress)
    })

    test('renders a <StepperIconValidated />', () => {
      const icon = component.find('.k-Stepper__link').at(2).children().first()

      expect(icon).to.have.type(StepperIconValidated)
    })
  })
})

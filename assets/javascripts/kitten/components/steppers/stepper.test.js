import React from 'react'
import { Stepper } from './stepper'
import {
  StepperIconDefault,
  StepperIconInProgress,
  StepperIconValidated,
} from './stepper-icon'

const items = [
  {
    text: 'Catopuma\n Temminckii',
    href: 'http://…',
    iconType: 'default',
    onClick: () => {},
  },
  {
    text: 'Prionaelurus\n planiceps',
    href: '#',
    linkClassNames: 'k-Stepper__link',
    iconType: 'default',
  },
  {
    text: 'Serval',
    href: '#',
    linkClassNames: 'k-Stepper__link',
    iconType: 'validated',
  },
  {
    text: 'Idea of',
    href: '#',
    linkClassNames: 'k-Stepper__link--inProgress',
    iconType: 'inProgress',
  },
  {
    text: 'Lynx\n pardinus',
    linkClassNames: 'k-Stepper__link--inactive',
    iconType: 'default',
  },
]

describe('<Stepper />', () => {
  const component = shallow(<Stepper items={items} />)

  it('renders a <nav class="k-Stepper" />', () => {
    expect(component.type()).toBe('nav')
    expect(component.hasClass('k-Stepper')).toBe(true)
  })

  it('has a list', () => {
    expect(component.find('ul.k-Stepper__list')).toHaveLength(1)
  })

  it('renders items', () => {
    expect(component.find('li.k-Stepper__item')).toHaveLength(5)
  })

  it('renders links', () => {
    const links = component.find('.k-Stepper__link')

    expect(links).toHaveLength(5)
    expect(links.find('.k-Stepper__link--inProgress')).toHaveLength(1)
    expect(links.find('.k-Stepper__link--inactive')).toHaveLength(1)
    expect(links.first().props().href).toBe('http://…')
    expect(typeof links.first().props().onClick).toBe('function')
  })

  it('renders an unfocusable link', () => {
    const spanLink = component.find('span.k-Stepper__link')

    expect(spanLink).toHaveLength(1)
    expect(spanLink.props().href).toBeFalsy()
  })

  it('replaces line feed by <br class"k-Stepper__break" />', () => {
    expect(component.find('br.k-Stepper__break')).toHaveLength(3)
  })

  describe('with align start', () => {
    const componentWithAlignStart = shallow(
      <Stepper items={items} withAlignStart={true} />,
    )

    it('renders a list with `.k-Stepper__list--alignStart`', () => {
      const list = componentWithAlignStart.find('.k-Stepper__list')

      expect(list.hasClass('k-Stepper__list--alignStart')).toBe(true)
    })
  })

  describe('with tiny spacing', () => {
    const componentWithTinySpacing = shallow(
      <Stepper items={items} withTinySpacing={true} />,
    )

    it('renders items with `.k-Stepper__item--tinySpacing`', () => {
      const items = componentWithTinySpacing.find('.k-Stepper__item')

      items.map(item => {
        expect(item.hasClass('k-Stepper__item--tinySpacing')).toBe(true)
      })
    })
  })

  describe('with different icon types', () => {
    it('renders a <StepperIconDefault />', () => {
      const icon = component.find('.k-Stepper__link').at(0).children().first()

      expect(icon.type()).toBe(StepperIconDefault)
    })

    it('renders a <StepperIconInProgress />', () => {
      const icon = component
        .find('.k-Stepper__link--inProgress')
        .at(0)
        .children()
        .first()

      expect(icon.type()).toBe(StepperIconInProgress)
    })

    it('renders a <StepperIconValidated />', () => {
      const icon = component.find('.k-Stepper__link').at(2).children().first()

      expect(icon.type()).toBe(StepperIconValidated)
    })
  })
})

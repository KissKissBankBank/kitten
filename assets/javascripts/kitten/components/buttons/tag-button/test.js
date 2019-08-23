import React from 'react'
import { TagButton } from '../../components/buttons/tag-button'

describe('TagButton', () => {
  const defaultComponent = shallow(<TagButton />)

  it('renders <div class="k-TagButton">', () => {
    expect(defaultComponent.find('.k-TagButton')).toHaveLength(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent.type()).toBe('button')
  })

  it('with children', () => {
    expect(defaultComponent.text()).toBe('Tag')
  })

  describe('<TagButton />', () => {
    describe('basic props', () => {
      const component = shallow(
        <TagButton className="k-TagButton--custom" selected={false} />,
      )

      it('renders a <Button class="k-TagButton" />', () => {
        expect(component.type()).toBe('button')
        expect(component.text()).toBe('Tag')
        expect(component.hasClass('k-TagButton--custom')).toBe(true)
      })

      describe('with tiny prop', () => {
        const component = shallow(<TagButton tiny />)

        it('renders a <Button class="k-TagButton--tiny" />', () => {
          expect(component.hasClass('k-TagButton--tiny')).toBe(true)
        })
      })

      describe('with big prop', () => {
        const component = shallow(<TagButton big />)

        it('renders a <Button class="k-TagButton--big" />', () => {
          expect(component.hasClass('k-TagButton--big')).toBe(true)
        })
      })

      describe('tag prop', () => {
        const component = shallow(<a className="k-TagButton" />)

        it('accepts <a className"k-TagButton" />', () => {
          expect(component.type()).toBe('a')
        })
      })

      describe('children', () => {
        const component = shallow(
          <TagButton>
            <svg />
          </TagButton>,
        )

        it('has children', () => {
          expect(component.children().type()).toBe('svg')
        })
      })
    })

    describe('modifier prop', () => {
      it('adds a class to the component', () => {
        const component = shallow(<TagButton modifier="helium" />)

        expect(component.hasClass('k-TagButton--helium')).toBe(true)
      })
    })
  })
})

import React from 'react'

import { TagButton } from 'kitten/components/buttons/tag-button'

describe('TagButton', () => {
  const defaultComponent = shallow(
    <TagButton />)

  test('renders <div class="k-TagButton">', () => {
    expect(defaultComponent.find('.k-TagButton')).toHaveLength(1)
  })

  test('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('button')
  })

  test('with children', () => {
    expect(defaultComponent).to.have.text('Tag')
  })

  describe('<TagButton />', () => {

    describe('basic props', () => {
      const component = shallow(
        <TagButton className="k-TagButton--custom"
                   selected={ false } />)

      test('renders a <Button class="k-TagButton" />', () => {
        expect(component).to.have.tagName('button')
        expect(component).to.have.text('Tag')
        expect(component.hasClass('k-TagButton--custom')).toBe(true)
        expect(component.hasClass('k-TagButton--hydrogen')).toBe(true)
      })

      describe('with tiny prop', () => {
        const component = shallow(
          <TagButton tiny />
        )

        test('renders a <Button class="k-TagButton--tiny" />', () => {
          expect(component.hasClass('k-TagButton--tiny')).toBe(true)
        })
      })

      describe('with big prop', () => {
        const component = shallow(
          <TagButton big />
        )

        test('renders a <Button class="k-TagButton--big" />', () => {
          expect(component.hasClass('k-TagButton--big')).toBe(true)
        })
      })

      describe('tag prop', () => {
        const component = shallow(
          <a className="k-TagButton" />)

        test('accepts <a className"k-TagButton" />', () => {
          expect(component).to.have.tagName('a')
        })
      })

      describe('children', () => {
        const component = shallow(
          <TagButton>
            <svg />
          </TagButton>)

        test('has children', () => {
          expect(component.children()).to.have.tagName('svg')
        })
      })
    })
  })
})

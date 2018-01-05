import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { TagButton } from 'kitten/components/buttons/tag-button'

describe('TagButton', () => {
  const defaultComponent = shallow(
    <TagButton />)

  it('renders <div class="k-TagButton">', () => {
    expect(defaultComponent.find('.k-TagButton')).to.have.length(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('button')
  })

  it('with children', () => {
    expect(defaultComponent).to.have.text('Tag')
  })

  describe('<TagButton />', () => {

    describe('basic props', () => {
      const component = shallow(
        <TagButton
          className="k-TagButton--custom"
          selected={ false }
        />
      )

      it('renders a <Button class="k-TagButton" />', () => {
        expect(component).to.have.tagName('button')
        expect(component).to.have.text('Tag')
        expect(component).to.have.className('k-TagButton--custom')
      })

      describe('with tiny prop', () => {
        const component = shallow(
          <TagButton tiny />
        )

        it('renders a <Button class="k-TagButton--tiny" />', () => {
          expect(component).to.have.className('k-TagButton--tiny')
        })
      })

      describe('with big prop', () => {
        const component = shallow(
          <TagButton big />
        )

        it('renders a <Button class="k-TagButton--big" />', () => {
          expect(component).to.have.className('k-TagButton--big')
        })
      })

      describe('tag prop', () => {
        const component = shallow(
          <a className="k-TagButton" />)

        it('accepts <a className"k-TagButton" />', () => {
          expect(component).to.have.tagName('a')
        })
      })

      describe('children', () => {
        const component = shallow(
          <TagButton>
            <svg />
          </TagButton>)

        it('has children', () => {
          expect(component.children()).to.have.tagName('svg')
        })
      })
    })
  })
})

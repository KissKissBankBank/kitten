import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { TagButton } from 'kitten/components/buttons/tag-button'


describe('TagButton with default props', () => {
  const defaultComponent = shallow(
    <TagButton />)

  it('renders <div class="k-TagButton">', () => {
    expect(defaultComponent.find('.k-TagButton')).to.have.length(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('button')
  })

  it('renders children', () => {
    expect(defaultComponent).to.have.text('Tag')
  })

  describe('<Button />', () => {
    const component = shallow(
      <TagButton className="k-TagButton--custom"
                 selected={ false } />
    )

    it('renders a <Button class="k-TagButton" />', () => {
      expect(component).to.have.tagName('button')
      expect(component).to.have.text('Tag')
      expect(component).to.have.className('k-TagButton--custom')
      expect(component).to.have.className('k-TagButton--hydrogen')
    })

    describe('tag prop', () => {
      const component = shallow(
        <a className="k-TagButton" />
      )

      it('it renders a <a className"k-TagButton" />', () => {
        expect(component).to.have.tagName('a')
      })
    })

    describe('button with selected', () => {
      const componentWithSelected = shallow(
        <TagButton selected={ true } />
      )

      it('has an is-selected class', () => {
        expect(componentWithSelected).to.have.className('is-selected')
      })
    })
  })
})

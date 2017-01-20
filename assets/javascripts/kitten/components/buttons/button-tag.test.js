import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { ButtonTag } from 'kitten/components/buttons/button-tag'


describe('ButtonTag with default props', () => {
  const defaultComponent = shallow(
    <ButtonTag />)

  it('renders <div class="k-ButtonTag">', () => {
    expect(defaultComponent.find('.k-ButtonTag')).to.have.length(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('button')
  })

  it('has an is-selected class', () => {
    expect(defaultComponent.find('is-selected')).to.have.length(0)
  })

  describe('<Button />', () => {
     const component = shallow(
      <ButtonTag className="k-ButtonTag--custom" />
    )

    it('renders a <Button class="k-ButtonTag" />', () => {
      expect(component).to.have.tagName('button')
      expect(component).to.have.className('k-ButtonTag--custom')
      expect(component).to.have.className('k-ButtonTag--hydrogen')
    })

    describe('button with is-selected class', () => {
      const componentWithIsSelected = shallow(
        <ButtonTag isSelected={ true } />
      )

      it('has an is-selected', () => {
        expect(componentWithIsSelected).to.have.className('is-selected')
      })
    })
  })
})

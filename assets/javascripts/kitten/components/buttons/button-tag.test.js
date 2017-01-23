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

  it('renders children', () => {
    expect(defaultComponent).to.have.text('Tag')
  })

  it('renders <class> without is-selected', () => {
    expect(defaultComponent).not.to.have.attr('selected')
  })

  describe('<Button />', () => {
     const component = shallow(
      <ButtonTag className="k-ButtonTag--custom"
                 selected={ false } />
    )

    it('renders a <Button class="k-ButtonTag" />', () => {
      expect(component).to.have.tagName('button')
      expect(component).to.have.text('Tag')
      expect(component).to.have.className('k-ButtonTag--custom')
      expect(component).to.have.className('k-ButtonTag--hydrogen')
    })

    describe('button with is-selected class', () => {
      const componentWithSelected = shallow(
        <ButtonTag selected={ true } />
      )

      it('has an is-selected', () => {
        expect(componentWithSelected).to.have.className('is-selected')
      })
    })
  })
})

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { InformationBox } from 'kitten/components/box/information-box'

describe('<InformationBox />', () => {
  describe('by default', () => {
    const defaultComponent = shallow(<InformationBox />)

    it('renders <div class="k-InformationBox">', () => {
      expect(defaultComponent.find('.k-InformationBox')).to.have.length(1)
    })

    it('has a default title', () => {
      expect(defaultComponent.find('.k-InformationBox__title')).to.have.length(1)
    })

    it('has a default children', () => {
      expect(defaultComponent.find('.k-InformationBox__text')).to.have.length(1)
    })
  })

  it('renders a <InformationBox class="k-InformationBox" />', () => {
    const component = shallow(
      <InformationBox className="k-InformationBox--custom" />
    )
    expect(component).to.have.className('k-InformationBox--custom')
  })
})

import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { DocLinkBox } from 'kitten/components/box/doc-link-box'
import { LinkBox } from 'kitten/components/box/link-box'

describe('<DocLinkBox />', () => {
  const component = shallow(<DocLinkBox />)

  it('renders a <LinkBox />', () => {
    expect(component).to.have.type(LinkBox)
  })

  it('renders an svg icon', () => {
    expect(component).to.have.prop('displayIcon', true)
    expect(component.find('.k-LinkBox__icon--svg')).to.have.length(1)
  })
})

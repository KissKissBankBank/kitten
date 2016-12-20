import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import DocLinkBox from '../../components/box/doc-link-box'
import LinkBox from '../../components/box/link-box'

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

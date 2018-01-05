import React from 'react'
import { DocLinkBox } from 'kitten/components/box/doc-link-box'
import { LinkBox } from 'kitten/components/box/link-box'

describe('<DocLinkBox />', () => {
  const component = shallow(<DocLinkBox />)

  test('renders a <LinkBox />', () => {
    expect(component).toContain(LinkBox)
  })

  test('renders an svg icon', () => {
    expect(component).to.have.prop('displayIcon', true)
    expect(component.find('.k-LinkBox__icon--svg')).toHaveLength(1)
  })
})

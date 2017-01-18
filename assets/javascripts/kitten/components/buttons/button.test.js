import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Button } from 'kitten/components/buttons/button'

describe('Button with default props', () => {
  const defaultComponent = shallow(
    <Button />)

  it('has a default button attributes', () => {
    expect(defaultComponent.find('.k-Button')).to.have.length(1)
  })

  it('has a default tag', () => {
    expect(defaultComponent).to.have.tagName('button')
  })

  it('has an iconRight svg', () => {
    expect(defaultComponent.find('k-Button--iconRight')).to.have.length(0)
  })

  describe('<Button />', () => {
    const component = shallow(
      <Button className="k-Button" Button />
    )

    it('renders a <Button class="k-Button" />', () => {
      expect(component).to.have.tagName('button')
      expect(component).to.have.className('k-Button')
      expect(component).to.have.className('k-Button--hydrogen')
    })

    describe('modifier', () => {
      it('accepts helium', () => {
        const component = shallow(<Button modifier="helium" />)
        expect(component).to.have.className('k-Button--helium')
      })
    })

    describe('button with iconRight svg', () => {
      const componentWithIconRight = shallow(
        <Button iconOnRight="true" />
      )

      it('has an icon right', () => {
        expect(componentWithIconRight).to.have.className('k-Button--iconRight')
      })
    })
  })
})

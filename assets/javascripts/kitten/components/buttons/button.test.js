import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import Button from 'kitten/components/buttons/button'

describe('<Button />', () => {
  const component = shallow(
    <Button className="k-Button"
            name="hydrogen"
            disabled="true"
            text="Button" />
  )

  it('has a <Button class="k-Button" />', () => {
    expect(component).to.have.tagName('button')
    expect(component).to.have.className('k-Button')
    expect(component).to.have.className('k-Button--hydrogen')
    expect(component).to.not.have.className('k-Button--helium')
    expect(component).to.have.attr('disabled')
  })

  describe('name', () => {
    it('accepts helium', () => {
      const component = shallow(<Button name="helium" />)
      expect(component).to.have.className('k-Button--helium')
    })
  })

  describe('size', () => {
    it('accepts tiny', () => {
      const component = shallow(<Button size="tiny" />)
      expect(component).to.have.className('k-Button--tiny')
    })

    it('accepts big', () => {
      const component = shallow(<Button size="big" />)
      expect(component).to.have.className('k-Button--big')
    })
  })

  describe('with iconRight svg', () => {
    const componentWithIconRight = shallow(
      <Button iconOnRight="true" />
    )

    it('has an icon right', () => {
      expect(componentWithIconRight).to.have.className('k-Button--iconRight')
    })
  })

  describe('with default props', () => {
    const defaultComponent = shallow(<Button />)

    it('has a default name', () => {
      expect(defaultComponent).attr('name', 'hydrogen')
    })

    it('has a default text', () => {
      expect(defaultComponent).attr('text', 'Button')
    })

    it('has a default tag', () => {
      expect(defaultComponent).attr('tag', 'button')
    })

  })
})

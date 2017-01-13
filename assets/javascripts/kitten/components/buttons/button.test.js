import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { Button } from 'kitten/components/buttons/button'

describe('Button with default props', () => {
  const defaultComponent = shallow(
    <Button />)

  it('has a default button attributes', () => {
    expect(defaultComponent).not.to.have.attr('tag', 'button')
    expect(defaultComponent.find('k-Button')).to.have.length(0)
  })

  it('has a default name', () => {
    expect(defaultComponent).attr('name')
  })

  it('has a default disabled', () => {
    expect(defaultComponent).attr('disabled')
  })

  it('has a default size', () => {
    expect(defaultComponent).not.to.have.attr('size')
  })

  it('has an iconRight svg', () => {
    expect(defaultComponent.find('k-Button--iconRight')).to.have.length(0)
  })

  describe('<Button />', () => {
    const component = shallow(
      <Button className="k-Button"
              text="Button" />
    )

    it('has a <Button class="k-Button" />', () => {
      expect(component).to.have.tagName('button')
      expect(component).to.have.className('k-Button')
      expect(component).to.have.className('k-Button--hydrogen')
    })

    describe('name', () => {
      it('accepts helium', () => {
        const component = shallow(<Button name="helium" />)
        expect(component).to.have.className('k-Button--helium')
      })
    })

    describe('disabled', () => {
      it('has a disabled attribute', () => {
        const component = shallow(<Button disabled="true" />)
        expect(component).to.have.attr('disabled')
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

import React from 'react'
import { mount, shallow } from 'enzyme'
import { Label } from 'kitten/components/form/label'

describe('<Label />', () => {
  const component = shallow(
    <Label />
  )

  test('renders a <label class="k-Label" />', () => {
    expect(component).to.have.tagName('label')
    expect(component.hasClass('k-Label')).to.equal(true)
  })

  test('renders default children', () => {
    expect(component).to.have.text('Label')
  })

  describe('with custom props', () => {
    const component = shallow(
      <Label tag="span"
             className="custom-class"
             focusId="custom-id"
             size="tiny">
        <span>Custom label</span>
      </Label>
    )

    test('renders a span with options', () => {
      expect(component).to.have.tagName('span')
      expect(component.hasClass('custom-class')).to.equal(true)
      expect(component.hasClass('k-Label--tiny')).to.equal(true)
      expect(component).not.to.have.attr('for', 'custom-id')
    })
  })

  describe('with `focusId` prop', () => {
    const wrapper = mount(
      <div>
        <Label tag="span" focusId="focus" children="Label" />
        <input type="text" id="focus" />
      </div>,
      { attachTo: document.body }
    )

    test('simulates click event on label', () => {
      const input = wrapper.find('#focus').at(0).node
      const label = wrapper.find('.k-Label')

      label.simulate('click')

      expect(input).toBe(document.activeElement)
    })
  })

  describe('with false `focusId` prop', () => {
    const wrapper = mount(
      <Label focusId={ false } />
    )

    test('do not render for attribute', () => {
      expect(wrapper).to.not.have.attr('for')
    })
  })

  describe('with withoutPointerEvents prop', () => {
    const component = shallow(<Label withoutPointerEvents />)

    test('has a good class', () => {
      expect(component.hasClass('k-Label--withoutPointerEvents')).to.equal(true)
    })
  })
})

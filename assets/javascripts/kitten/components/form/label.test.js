import React from 'react'
import { mount, shallow } from 'enzyme'
import { Label } from 'kitten/components/form/label'

describe('<Label />', () => {
  const component = shallow(
    <Label />
  )

  it('renders a <label class="k-Label" />', () => {
    expect(component).to.have.tagName('label')
    expect(component).to.have.className('k-Label')
  })

  it('renders default children', () => {
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

    it('renders a span with options', () => {
      expect(component).to.have.tagName('span')
      expect(component).to.have.className('custom-class')
      expect(component).to.have.className('k-Label--tiny')
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

    it('simulates click event on label', () => {
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

    it('do not render for attribute', () => {
      expect(wrapper).to.not.have.attr('for')
    })
  })

  describe('with withoutPointerEvents prop', () => {
    const component = shallow(<Label withoutPointerEvents />)

    it('has a good class', () => {
      expect(component).to.have.className('k-Label--withoutPointerEvents')
    })
  })
})

import React from 'react'
import { Label } from '../../../components/form/label'

describe('<Label />', () => {
  const component = shallow(<Label />)

  it('renders a <label class="k-Label" />', () => {
    expect(component.is('label')).toBe(true)
    expect(component.hasClass('k-Label')).toBe(true)
  })

  it('renders default children', () => {
    expect(component.text()).toBe('Label')
  })

  describe('with custom props', () => {
    const component = shallow(
      <Label
        tag="span"
        className="custom-class"
        focusId="custom-id"
        size="tiny"
      >
        <span>Custom label</span>
      </Label>,
    )

    it('renders a span with options', () => {
      expect(component.is('span')).toBe(true)
      expect(component.hasClass('custom-class')).toBe(true)
      expect(component.hasClass('k-Label--tiny')).toBe(true)
      expect(component.props().htmlFor).not.toBe('custom-id')
    })
  })

  describe('with `focusId` prop', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)

    const wrapper = mount(
      <div>
        <Label tag="span" focusId="focus" children="Label" />
        <input type="text" id="focus" onFocus={jest.fn()} />
      </div>,
      { attachTo: div },
    )

    it('simulates click event on label', () => {
      const input = wrapper.find('#focus')
      const label = wrapper.find('.k-Label')

      label.simulate('click')

      expect(input.props().onFocus).toBeCalled()
    })
  })

  describe('with false `focusId` prop', () => {
    const wrapper = mount(<Label focusId={false} />)

    it('do not render for attribute', () => {
      expect(wrapper.props().htmlFor).toBeFalsy()
    })
  })

  describe('with withoutPointerEvents prop', () => {
    const component = shallow(<Label withoutPointerEvents />)

    it('has a good class', () => {
      expect(component.hasClass('k-Label--withoutPointerEvents')).toBe(true)
    })
  })
})

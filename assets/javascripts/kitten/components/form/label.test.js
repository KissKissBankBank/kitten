import React from 'react'
import { expect } from 'chai'
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

    it('renders a label with options', () => {
      expect(component).to.have.tagName('span')
      expect(component).to.have.className('custom-class')
      expect(component).to.have.className('k-Label--tiny')
      expect(component).not.to.have.attr('for', 'custom-id')
    })
  })
})

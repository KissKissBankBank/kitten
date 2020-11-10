import React from 'react'
import { RadioButtonSet } from '../../../components/form/radio-button-set'
import renderer from 'react-test-renderer'

describe('<RadioButtonSet />', () => {
  describe('default', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(
          <RadioButtonSet
            name="test-radio-button-set"
            label="Label"
            items={[
              {
                text: 'Option A',
                id: 'option-a',
                defaultChecked: true,
              },
              {
                text: 'Option B',
                id: 'option-b',
              },
              {
                text: 'Option C',
                id: 'option-c',
              },
            ]}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

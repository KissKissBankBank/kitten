import React from 'react'
import { RadioButtonSet } from '../../form/radio-button-set'
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

  describe('with children', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(
          <RadioButtonSet
            name="test-radio-button-set"
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
          >
            <h1>Legend test</h1>
          </RadioButtonSet>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('with children and label', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(
          <RadioButtonSet
            name="test-radio-button-set"
            label="Label test"
            labelProps={{ 'data-test': true, className: 'customClass' }}
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
          >
            <h1>Legend test</h1>
          </RadioButtonSet>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

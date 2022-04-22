import React from 'react'
import { CheckboxButtonSet } from '../../form/checkbox-button-set'
import renderer from 'react-test-renderer'

describe('<CheckboxButtonSet />', () => {
  describe('default', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(
          <CheckboxButtonSet
            name="test-checkbox-set"
            label="Label"
            items={[
              {
                label: 'Option A',
                id: 'option-a',
                defaultChecked: true,
              },
              {
                label: 'Option B',
                id: 'option-b',
              },
              {
                label: 'Option C',
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
          <CheckboxButtonSet
            name="test-checkbox-set"
            items={[
              {
                label: 'Option A',
                id: 'option-a',
                defaultChecked: true,
              },
              {
                label: 'Option B',
                id: 'option-b',
              },
              {
                label: 'Option C',
                id: 'option-c',
              },
            ]}
          >
            <h1>Legend test</h1>
          </CheckboxButtonSet>,
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
          <CheckboxButtonSet
            name="test-checkbox-set"
            label="Label test"
            items={[
              {
                label: 'Option A',
                id: 'option-a',
                defaultChecked: true,
              },
              {
                label: 'Option B',
                id: 'option-b',
              },
              {
                label: 'Option C',
                id: 'option-c',
              },
            ]}
          >
            <h1>Legend test</h1>
          </CheckboxButtonSet>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

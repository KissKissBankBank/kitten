import React from 'react'
import { CheckboxSet } from '../../../components/form/checkbox-set'
import renderer from 'react-test-renderer'

describe('<CheckboxSet />', () => {
  describe('default', () => {
    let component
    beforeEach(() => {
      component = renderer
        .create(
          <CheckboxSet
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
          <CheckboxSet
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
          </CheckboxSet>,
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
          <CheckboxSet
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
          </CheckboxSet>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

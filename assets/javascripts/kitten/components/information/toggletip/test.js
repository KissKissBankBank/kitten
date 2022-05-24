import React from 'react'
import renderer from 'react-test-renderer'
import { Toggletip } from './index'

describe('<Toggletip />', () => {
  let component

  describe('Default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Toggletip actionLabel="Sample label" id="Toggletip-demo">
            This is the content of the Toggletip
          </Toggletip>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('CustomTargetElement', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Toggletip
            targetElement={
              <p className="k-u-weight-600">
                This is the target of my tooltip
              </p>
            }
            actionLabel="Sample label"
            id="Toggletip-demo"
          >
            This is the content of the Toggletip
          </Toggletip>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('With props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Toggletip
            actionLabel="Sample label"
            id="Toggletip-demo"
            modifier="warning"
            bubbleProps={{
              className: 'customClassName',
              zIndex: 500,
              color: 'black',
              style: { width: '100%' },
            }}
          >
            <div>This is the custom content of the Toggletip</div>
          </Toggletip>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import { ModalFooterInput } from './index'

describe('<ModalFooterInput />', () => {
  let component

  describe('with empty snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(<ModalFooterInput id="Id" aria-label="Input Label" />, {
          createNodeMock: element => {
            if (element.type === 'textarea') {
              return document.createElement('textarea')
            }
          },
        })
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

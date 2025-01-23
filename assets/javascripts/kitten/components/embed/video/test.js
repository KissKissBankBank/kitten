import React from 'react'
import renderer from 'react-test-renderer'
import { Video } from './index'
import { Loader } from '../../graphics/animations/loader'

describe('<Video />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<Video />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Video autoPlay={false} playsInline loop muted src="" poster="">
            <Video.Loader>
              <Loader />
            </Video.Loader>
          </Video>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

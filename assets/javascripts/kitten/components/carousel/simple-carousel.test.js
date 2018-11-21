import React from 'react'
import renderer from 'react-test-renderer'
import { SimpleCarousel } from 'kitten/components/carousel/simple-carousel'

describe('<SimpleCarousel />', () => {
  const initialWindow = global.window
  let component

  beforeEach(() => {
    global.window.HTMLCanvasElement.prototype.getContext = () => {}
  })

  afterEach(() => {
    global.window = initialWindow
  })

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SimpleCarousel>
            <p key="1">Foo</p>
            <p key="2">Bar</p>
          </SimpleCarousel>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with only one item', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SimpleCarousel>
            <p key="1">Foo</p>
          </SimpleCarousel>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

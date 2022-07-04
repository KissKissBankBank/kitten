import React from 'react'
import renderer from 'react-test-renderer'
import { SimpleCard } from './index'
import { Title, Text } from 'kitten'

describe('<SimpleCard />', () => {
  let component

  describe('by default', () => {
    beforeAll(() => {
      component = renderer.create(<SimpleCard />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('without horizontalStroke prop', () => {
    it('matches snapshot', () => {
      component = renderer
        .create(<SimpleCard horizontalStroke={false} />)
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with withPlayerButtonOnImage props', () => {
    beforeEach(() => {
      component = renderer
        .create(<SimpleCard withPlayerButtonOnImage />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with imageContainerRatio props', () => {
    beforeEach(() => {
      component = renderer
        .create(<SimpleCard imageContainerRatio={16 / 9} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

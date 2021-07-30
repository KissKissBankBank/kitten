import React from 'react'
import renderer from 'react-test-renderer'
import { HorizontalCrowdfundingCard } from './index'

describe('<HorizontalCrowdfundingCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <HorizontalCrowdfundingCard
            title="Custom title"
            description="Custom description"
            href="#"
            imageProps={{ src: '#image', alt: '' }}
            noProgressOnMobile
            progress={50}
            progressColor="transparent"
            info={(<span>Test info</span>)}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

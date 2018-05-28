import React from 'react'
import renderer from 'react-test-renderer'
import { BackerCard } from 'kitten/components/cards/backer-card'

describe('<BackerCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <BackerCard
            title="Backer name"
            imgProps={{ src: '#custom-src' }}
            description="Description"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with subTitle prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <BackerCard
            title="Backer name"
            subTitle="SubTitle"
            imgProps={{ src: '#custom-src' }}
            description="Description"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

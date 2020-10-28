import React from 'react'
import renderer from 'react-test-renderer'
import { BackerCard } from '../../../components/cards/backer-card'

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

  describe('with subtitle prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <BackerCard
            title="Backer name"
            subtitle="Subtitle"
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

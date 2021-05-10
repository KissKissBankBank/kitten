import React from 'react'
import renderer from 'react-test-renderer'
import { EngagementCard } from './index'
import { KissKissBankBankIcon } from '../../../components/graphics/icons/kisskissbankbank-icon'

describe('<EngagementCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <EngagementCard
            icon={<KissKissBankBankIcon />}
            textColor="font1"
            href="#"
            title="Hello word"
            backgroundColor="background1"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import { TeamCard } from 'kitten/components/cards/team-card'

describe('<TeamCard />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<TeamCard />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with some props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TeamCard
            image="Custom image"
            firstName="Custom firstName"
            lastName="Custom lastName"
            jobTitle="Custom jobTitle"
            mail="Custom mail"
            phoneNumber="Custom phone number"
            socialLink="Custom social link"
            imgTitle="Custom img title"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

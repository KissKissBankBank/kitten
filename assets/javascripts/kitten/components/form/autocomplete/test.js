import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Autocomplete } from './index'
import { LocationIcon } from '../../icons/location-icon'

describe('<Autocomplete />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Autocomplete
            id="autocomplete"
            name="autocomplete"
            placeholder="Search a kitten…"
            items={[
              'Abyssin',
              'Anatoli',
              'Angora turc',
              'Asian',
              'Chartreux',
              'Cymric',
              'Mandarin',
              'Oriental shorthair',
              'Persan',
              'Sibérien',
            ]}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <Autocomplete
            id="autocomplete"
            name="autocomplete"
            placeholder="Search a kitten…"
            icon={<LocationIcon />}
            items={[
              'Abyssin',
              'Anatoli',
              'Angora turc',
              'Asian',
              'Chartreux',
              'Cymric',
              'Mandarin',
              'Oriental shorthair',
              'Persan',
              'Sibérien',
            ]}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

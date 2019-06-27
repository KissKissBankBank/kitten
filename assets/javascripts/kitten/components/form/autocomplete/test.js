import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { Autocomplete } from './index'

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
})

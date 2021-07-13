import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { SearchInput } from './index'

describe('<SearchInput />', () => {
  let component

  describe('Basic search input', () => {
    beforeEach(() => {
      component = renderer.create(<SearchInput />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('Search input with attributes', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <SearchInput
            aria-label="Rechercher"
            placeholder="Rechercher"
            className="k-testClass"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

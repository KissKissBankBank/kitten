import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithIcon } from './index'
import { SearchIcon } from '../../../graphics/icons/search-icon'

describe('<TextInputWithIcon />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithIcon id="TextInputWithButton" icon={<SearchIcon />} />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithIcon
            id="TextInputWithButton"
            icon={<SearchIcon />}
            placeholder="Les props sont transmises"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with disabled prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithIcon
            id="TextInputWithButton"
            disabled
            icon={<SearchIcon />}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with disabled prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithIcon
            id="TextInputWithButton"
            valid
            icon={<SearchIcon />}
            iconPosition="right"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

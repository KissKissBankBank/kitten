import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithIcon } from './index'
import { SearchIcon } from '../../../components/icons/search-icon'

describe('<TextInputWithIcon />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithIcon>
            <SearchIcon />
          </TextInputWithIcon>,
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
          <TextInputWithIcon placeholder="Les props sont transmises">
            <SearchIcon />
          </TextInputWithIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with valid prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithIcon valid>
            <SearchIcon />
          </TextInputWithIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with error prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithIcon error>
            <SearchIcon />
          </TextInputWithIcon>,
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
          <TextInputWithIcon disabled>
            <SearchIcon />
          </TextInputWithIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with tiny prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithIcon tiny>
            <SearchIcon />
          </TextInputWithIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

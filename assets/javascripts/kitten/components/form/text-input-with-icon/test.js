import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithIcon } from './index'
import { SearchIcon } from '../../../components/icons/search-icon'

describe('<TextInputWithIcon />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithIcon />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with props', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithIcon placeholder="Les props sont transmises" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with children prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithIcon children={<SearchIcon />} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with valid prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithIcon valid />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with error prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithIcon error />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with disabled prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithIcon disabled />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with tiny prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithIcon tiny />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

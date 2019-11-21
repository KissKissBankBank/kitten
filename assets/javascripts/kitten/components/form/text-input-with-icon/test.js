import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithIcon } from './index'
import { SearchIcon } from '../../../components/icons/search-icon'

describe('<TextInputWithIcon />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithIcon icon={<SearchIcon />} />)
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
        .create(<TextInputWithIcon disabled icon={<SearchIcon />} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

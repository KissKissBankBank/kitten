import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithButton } from './index'
import { Loader } from '../../../components/atoms/loader'

describe('<TextInputWithButton />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithButton />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithButton
            buttonValue="Button"
            inputValue="foobar"
            placeholder="Les props sont transmises"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with component inside button value', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithButton
            buttonValue={<Loader />}
            placeholder="Les props sont transmises"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with valid prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithButton valid />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with error prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithButton error />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with disabled prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithButton disabled />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with tiny prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithButton tiny />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with huge prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithButton huge />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with giant prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInputWithButton giant />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with buttonProps prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInputWithButton buttonProps={{ onClick: () => {} }} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

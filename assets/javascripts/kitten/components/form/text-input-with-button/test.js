import React from 'react'
import renderer from 'react-test-renderer'
import { TextInputWithButton } from './index'

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

  describe('with textInputProps', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInputWithButton
            textInputProps={{
              placeholder: 'Les props sont transmises',
              value: 'Button',
            }}
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
})

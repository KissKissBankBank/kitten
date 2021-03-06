import React from 'react'
import renderer from 'react-test-renderer'
import { TextInput } from './index'

describe('<TextInput />', () => {
  let component

  describe('with `valid` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput valid />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `error` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput error />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `disabled` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput disabled />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `size` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput size="regular" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `center` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput center />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `name` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput name="foobar" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `tag` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput tag="input" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `digits` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput digits={12} />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `textarea` tag', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput tag="textarea" name="message" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `variant` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput variant="orion" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

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
      component = renderer.create(<TextInput size="medium" />).toJSON()
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

  describe('with `darkBackground` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput darkBackground />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `autoresize` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput tag="autoresize" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=button` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInput has="button" buttonProps={{ children: 'Hello world' }} />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=button buttonIsInset` props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInput
            has="button"
            buttonIsInset
            buttonProps={{ children: 'Hello world' }}
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=icon` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput has="icon" icon={<svg />} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=icon iconPosition=right` props', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput has="icon" icon={<svg />} iconPosition="right" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=limit` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput has="limit" limit={90} />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=unit` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput has="unit" unit="€" />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=unit unitIsWord` props', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput has="unit" unit="grand" unitIsWord />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

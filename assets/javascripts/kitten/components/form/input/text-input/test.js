import React from 'react'
import renderer from 'react-test-renderer'
import { TextInput } from './index'

describe('<TextInput />', () => {
  let component

  describe('with `valid` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput id="TextInput" valid />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `error` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput id="TextInput" error />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `disabled` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" disabled />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `size` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" size="medium" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `center` prop', () => {
    beforeEach(() => {
      component = renderer.create(<TextInput id="TextInput" center />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `name` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" name="foobar" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `tag` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" tag="input" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `digits` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" digits={12} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `textarea` tag', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" tag="textarea" name="message" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `darkBackground` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" darkBackground />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `autoresize` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" tag="autoresize" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=button` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInput
            id="TextInput"
            has="button"
            buttonProps={{ children: 'Hello world' }}
          />,
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
            id="TextInput"
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
        .create(<TextInput id="TextInput" has="icon" icon={<svg />} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=icon iconPosition=right` props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TextInput
            id="TextInput"
            has="icon"
            icon={<svg />}
            iconPosition="right"
          />,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=limit` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" has="limit" limit={90} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=unit` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" has="unit" unit="€" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `has=unit unitIsWord` props', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" has="unit" unit="grand" unitIsWord />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with controlled value', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" value="controlled_value" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with uncontrolled value', () => {
    beforeEach(() => {
      component = renderer
        .create(<TextInput id="TextInput" defaultValue="uncontrolled_value" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

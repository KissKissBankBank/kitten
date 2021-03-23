import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { TagButton } from './index'
import { VisaIcon } from '../../icons/visa-icon'

describe('<TagButton />', () => {
  let component

  describe('with text', () => {
    beforeEach(() => {
      component = renderer.create(<TagButton>MyButton</TagButton>).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `size="huge"` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TagButton size="huge">MyButton</TagButton>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `modifier` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TagButton modifier="helium">MyButton</TagButton>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with `selected` prop', () => {
    beforeEach(() => {
      component = renderer
        .create(<TagButton selected>MyButton</TagButton>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with icon', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TagButton icon>
            <VisaIcon />
          </TagButton>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

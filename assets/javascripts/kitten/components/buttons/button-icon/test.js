import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonIcon } from '../../../components/buttons/button-icon'

describe('<ButtonIcon />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ButtonIcon>
            <svg className="k-ButtonIcon__svg" />
          </ButtonIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('modifier prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ButtonIcon modifier="helium">
            <svg className="k-ButtonIcon__svg" />
          </ButtonIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('className prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ButtonIcon className="test_className_prop">
            <svg className="k-ButtonIcon__svg" />
          </ButtonIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('size prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ButtonIcon size="nano">
            <svg className="k-ButtonIcon__svg" />
          </ButtonIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('tag prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ButtonIcon tag="span">
            <svg className="k-ButtonIcon__svg" />
          </ButtonIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('rounded prop', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ButtonIcon rounded>
            <svg className="k-ButtonIcon__svg" />
          </ButtonIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with tag="a" and no href', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ButtonIcon tag="a">
            <svg className="k-ButtonIcon__svg" />
          </ButtonIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with tag="a" href="foo"', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <ButtonIcon tag="a" href="foo">
            <svg className="k-ButtonIcon__svg" />
          </ButtonIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('without children', () => {
    beforeEach(() => {
      component = renderer.create(<ButtonIcon />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

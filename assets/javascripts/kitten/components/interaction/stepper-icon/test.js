import React from 'react'
import renderer from 'react-test-renderer'
import {
  StepperIcon,
  StepperIconDefault,
  StepperIconInProgress,
  StepperIconValidated,
} from './index'

describe('<StepperIcon />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<StepperIcon />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('state = progress', () => {
    beforeEach(() => {
      component = renderer
        .create(<StepperIcon className="custom-class-name" state="progress" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('state = valid', () => {
    beforeEach(() => {
      component = renderer
        .create(<StepperIcon className="custom-class-name" state="valid" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('StepperIconDefault', () => {
    beforeEach(() => {
      component = renderer
        .create(<StepperIconDefault className="custom-class-name" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('StepperIconInProgress', () => {
    beforeEach(() => {
      component = renderer
        .create(<StepperIconInProgress className="custom-class-name" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('StepperIconValidated', () => {
    beforeEach(() => {
      component = renderer
        .create(<StepperIconValidated className="custom-class-name" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

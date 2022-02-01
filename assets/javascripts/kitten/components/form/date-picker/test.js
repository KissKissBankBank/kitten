import React, { Component } from 'react'
import renderer from 'react-test-renderer'
import { DatePicker } from './index'

class CustomInput extends Component {
  render() {
    return <input type="text" autoComplete="off" {...this.props} />
  }
}

describe('<DatePicker />', () => {
  let component

  describe('by default', () => {
    beforeEach(() => {
      component = renderer.create(<DatePicker />).toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('with custom input', () => {
    beforeEach(() => {
      component = renderer
        .create(<DatePicker>{CustomInput}</DatePicker>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

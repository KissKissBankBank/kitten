import React from 'react'
import renderer from 'react-test-renderer'
import { DatePicker } from './index'

describe('<DatePicker />', () => {
  let component

  beforeEach(() => {
    component = renderer.create(<DatePicker />).toJSON()
  })

  it('matches with snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import { AlertBox } from './'

describe('<AlertBox />', () => {
  it('should matches with default snapshot', () => {
    const component = renderer.create(<AlertBox>Alert !</AlertBox>).toJSON()
    expect(component).toMatchSnapshot()
  })
})

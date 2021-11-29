import React from 'react'
import renderer from 'react-test-renderer'
import { AlertBox } from './'
import { CrossIconNext } from 'kitten'

describe('<AlertBox />', () => {
  it('should matches with default snapshot', () => {
    const component = renderer.create(<AlertBox>Alert !</AlertBox>).toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with custom fit snapshot', () => {
    const component = renderer
      .create(<AlertBox fit="content">Alert !</AlertBox>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with custom iconPosition snapshot', () => {
    const component = renderer
      .create(<AlertBox iconPosition="center">Alert !</AlertBox>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with custom status snapshot', () => {
    const component = renderer
      .create(<AlertBox status="danger">Alert !</AlertBox>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with no icon snapshot', () => {
    const component = renderer
      .create(<AlertBox displayIcon={false}>Alert !</AlertBox>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with custom icon snapshot', () => {
    const component = renderer
      .create(<AlertBox icon={<CrossIconNext />}>Alert !</AlertBox>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})

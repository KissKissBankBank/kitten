import React from 'react'
import renderer from 'react-test-renderer'
import { Alert } from './'

describe('<Alert />', () => {
  it('should matches with default snapshot', () => {
    const component = renderer.create(<Alert>Alert !</Alert>).toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with snapshot with danger status prop', () => {
    const component = renderer
      .create(<Alert status="danger">Alert !</Alert>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with snapshot with success status prop', () => {
    const component = renderer
      .create(<Alert status="success">Alert !</Alert>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with snapshot with warning status prop', () => {
    const component = renderer
      .create(<Alert status="warning">Alert !</Alert>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with closeButton snapshot', () => {
    const component = renderer
      .create(
        <Alert closeButton closeButtonLabel="Close">
          Alert !
        </Alert>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with snapshot without icon', () => {
    const component = renderer
      .create(<Alert displayIcon={false}>Alert !</Alert>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with snapshot with icon border', () => {
    const component = renderer
      .create(<Alert iconHasBorder>Alert !</Alert>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with snapshot with custom icon', () => {
    const component = renderer
      .create(<Alert icon={<svg />}>Alert !</Alert>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})

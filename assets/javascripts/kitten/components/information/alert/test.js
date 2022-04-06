import React from 'react'
import renderer from 'react-test-renderer'
import { Alert } from './'

describe('<Alert />', () => {
  it('should matches with default snapshot', () => {
    const component = renderer.create(<Alert>Alert !</Alert>).toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with danger snapshot', () => {
    const component = renderer.create(<Alert status="danger">Alert !</Alert>).toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with success snapshot', () => {
    const component = renderer.create(<Alert status="success">Alert !</Alert>).toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should matches with warning snapshot', () => {
    const component = renderer.create(<Alert status="warning">Alert !</Alert>).toJSON()
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
})

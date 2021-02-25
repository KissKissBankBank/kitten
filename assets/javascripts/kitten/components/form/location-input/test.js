import React from 'react'
import renderer from 'react-test-renderer'
import { LocationInput } from './index'
import { setupGoogleMock } from '../../../config/__mocks__/googleMock'

describe('<LocationInput />', () => {
  it('should match its snapshot with props', () => {
    beforeAll(() => {
      setupGoogleMock()
    })

    const tree = renderer
      .create(
        <LocationInput
          id="location-input-test"
          name="location-input"
          className="custom-wrapper-class-name"
          onChange={e => console.warn(e)}
          onSelect={e => console.warn(e)}
          defaultValue="Paris, France"
          inputProps={{
            className: 'custom-input-class-name',
          }}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

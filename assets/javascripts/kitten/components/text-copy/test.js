import React from 'react'
import renderer from 'react-test-renderer'
import { TextCopy } from './index'

describe('<TextCopy />', () => {
  it('should match snapshot', () => {
    const component = renderer
      .create(<TextCopy>Text To Copy</TextCopy>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})

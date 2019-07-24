import React from 'react'
import renderer from 'react-test-renderer'
import { TextCopy } from './index'

describe('<TextCopy />', () => {
  it('should match snapshot', () => {
    const component = renderer
      .create(<TextCopy alertMessage="Text copied!">Text To Copy</TextCopy>)
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot with description', () => {
    const component = renderer
      .create(
        <TextCopy
          alertMessage="Text copied!"
          description="This is a description"
        >
          Text To Copy
        </TextCopy>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
  it('should match snapshot with one line forced', () => {
    const component = renderer
      .create(
        <TextCopy
          alertMessage="Text copied!"
          description="This is a description"
          forceOneLine
        >
          Text To Copy
        </TextCopy>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})

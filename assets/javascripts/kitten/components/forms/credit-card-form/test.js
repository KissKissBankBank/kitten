import React from 'react'
import renderer from 'react-test-renderer'
import { DefaultExample, CustomExample } from './examples'

describe('<CreditCardForm />', () => {
  it('should match its snapshot with default props', () => {
    const tree = renderer.create(<DefaultExample />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match its snapshot with custom props', () => {
    const tree = renderer.create(<CustomExample />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

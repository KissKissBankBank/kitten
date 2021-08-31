import React from 'react'
import renderer from 'react-test-renderer'
import { TagInput } from './index'

describe('<TagInput />', () => {
  it('should match its snapshot', () => {
    const tree = renderer
      .create(
        <TagInput
          id="test-slider-input"
          helpMessage="Press Enter or Comma to add an item."
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
  it('should match its snapshot with props', () => {
    const tree = renderer
      .create(
        <TagInput
          id="test-slider-input"
          helpMessage="Press Enter or Comma to add an item."
          size="huge"
          variant="orion"
          addEventKeys={['Enter', ',', 'Space']}
          removeEventKeys={['e', '^', 'Backspace']}
          initialItemsList={['Black', 'Blue', 'Green and magenta']}
          placeholder="OK"
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
  it('should match its disabled snapshot with disabled props', () => {
    const tree = renderer
      .create(
        <TagInput
          disabled
          id="test-slider-input"
          helpMessage="This list input is disabled."
          initialItemsList={['Black', 'Blue', 'Green and magenta']}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

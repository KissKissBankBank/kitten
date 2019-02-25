import React from 'react'
import renderer from 'react-test-renderer'
import { MarkdownPage } from './index'

const defaultText = `
  # H1
  ## H2
  ### H3

  # Emphasis
  Emphasis, aka italics, with *asterisks* or _underscores_.
  Strong emphasis, aka bold, with **asterisks** or __underscores__.
  Combined emphasis with **asterisks and _underscores_**.
  Strikethrough uses two tildes. ~~Scratch this.~~

  # List
  * Unordered list can use asterisks
  - Or minuses
  + Or pluses

  # Link
  [I'm an inline-style link](https://www.google.com)
`

describe('<MarkdownPage />', () => {
  let component

  beforeEach(() => {
    component = renderer
      .create(<MarkdownPage children={defaultText} />)
      .toJSON()
  })

  it('matches with snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

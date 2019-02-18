import React from 'react'
import renderer from 'react-test-renderer'
import { MarkdownPage } from './markdown-page'

describe('<MarkdownPage />', () => {
  let component

  beforeEach(() => {
    component = renderer.create(<MarkdownPage content="foobar" />).toJSON()
  })

  it('matches with snapshot', () => {
    expect(component).toMatchSnapshot()
  })
})

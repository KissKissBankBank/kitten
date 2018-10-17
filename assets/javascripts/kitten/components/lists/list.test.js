import React from 'react'
import renderer from 'react-test-renderer'
import { List } from 'kitten/components/lists/list'

describe('<List>', () => {
  describe('by default', () => {
    it('matches with snapshot', () => {
      const component = renderer
        .create(
          <List>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </List>,
        )
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with <ListButtonItem>', () => {
    it('matches with snapshot', () => {
      const component = renderer
        .create(
          <List>
            <List.ButtonItem withTopBorder>Alice</List.ButtonItem>
            <List.ButtonItem>Cheshire Cat</List.ButtonItem>
            <List.ButtonItem>Mad Hatter</List.ButtonItem>
          </List>,
        )
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})

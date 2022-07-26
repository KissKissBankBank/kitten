import React from 'react'
import renderer from 'react-test-renderer'
import { List } from './index'

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

  describe('with gap', () => {
    it('matches with snapshot', () => {
      const component = renderer
        .create(
          <List gap={10}>
            <div>Item 1</div>
            <div>Item 2</div>
            <div>Item 3</div>
          </List>,
        )
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })

  describe('with custom marker', () => {
    it('matches with snapshot', () => {
      const component = renderer
        .create(
          <List markerElement={<>😽</>}>
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
    describe('by default', () => {
      it('matches with snapshot', () => {
        const component = renderer
          .create(
            <List>
              <List.ButtonItem withTopBorder>Alice</List.ButtonItem>
              <List.ButtonItem active>Cheshire Cat</List.ButtonItem>
              <List.ButtonItem hasArrow={false}>Mad Hatter</List.ButtonItem>
            </List>,
          )
          .toJSON()

        expect(component).toMatchSnapshot()
      })
    })

    describe('with a disabled button', () => {
      it('matches with snapshot', () => {
        const component = renderer
          .create(
            <List>
              <List.ButtonItem withTopBorder>Alice</List.ButtonItem>
              <List.ButtonItem disabled>Cheshire Cat</List.ButtonItem>
              <List.ButtonItem>Mad Hatter</List.ButtonItem>
            </List>,
          )
          .toJSON()

        expect(component).toMatchSnapshot()
      })
    })
  })
})

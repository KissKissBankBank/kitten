import React from 'react'
import renderer from 'react-test-renderer'
import { List } from './index'
import { shallow } from 'enzyme'

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
    describe('by default', () => {
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

      it('trigger the onClick prop', () => {
        const handleClick = jest.fn()
        const component = shallow(
          <List>
            <List.ButtonItem withTopBorder>Alice</List.ButtonItem>
            <List.ButtonItem onClick={handleClick}>
              Cheshire Cat
            </List.ButtonItem>
            <List.ButtonItem>Mad Hatter</List.ButtonItem>
          </List>,
        )

        const button = component.find(List.ButtonItem).at(1).dive()

        button.simulate('click')

        expect(handleClick).toHaveBeenCalled()
        handleClick.mockRestore()
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

      it('does not trigger the onClick prop', () => {
        const handleClick = jest.fn()
        const component = shallow(
          <List>
            <List.ButtonItem withTopBorder>Alice</List.ButtonItem>
            <List.ButtonItem disabled onClick={handleClick}>
              Cheshire Cat
            </List.ButtonItem>
            <List.ButtonItem>Mad Hatter</List.ButtonItem>
          </List>,
        )

        const button = component.find(List.ButtonItem).at(1).dive()

        button.simulate('click')

        expect(handleClick).not.toHaveBeenCalled()
      })
    })
  })
})

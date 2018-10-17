import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { ExpandBoard } from 'kitten/components/expandable/expand-board'
import { Button } from 'kitten/components/buttons/button'

describe('<ExpandBoard />', () => {
  describe('with <ExpandBoard.Button> and <ExpandBoard.Content>', () => {
    describe('by default', () => {
      it('matches with snapshot', () => {
        const component = renderer
          .create(
            <ExpandBoard>
              <ExpandBoard.Button>Alice</ExpandBoard.Button>
              <ExpandBoard.Content>
                <div>Curioser and curioser</div>
              </ExpandBoard.Content>
            </ExpandBoard>,
          )
          .toJSON()

        expect(component).toMatchSnapshot()
      })
    })

    describe('disabled', () => {
      it('matches with snapshot', () => {
        const component = renderer
          .create(
            <ExpandBoard disabled>
              <ExpandBoard.Button>Alice</ExpandBoard.Button>
              <ExpandBoard.Content>
                <div>Curioser and curioser</div>
              </ExpandBoard.Content>
            </ExpandBoard>,
          )
          .toJSON()

        expect(component).toMatchSnapshot()
      })
    })

    describe('onClick', () => {
      it('expands the content', () => {
        const component = shallow(
          <ExpandBoard>
            <ExpandBoard.Button>Alice</ExpandBoard.Button>
            <ExpandBoard.Content>
              <div>Curioser and curioser</div>
            </ExpandBoard.Content>
          </ExpandBoard>,
        )

        const button = component.find(ExpandBoard.Button)
        const content = component.find(ExpandBoard.Content)

        expect(content.exists()).toBe(false)

        button.simulate('click')

        const updatedContent = component.update().find(ExpandBoard.Content)

        expect(updatedContent.exists()).toBe(true)
      })
    })
  })

  describe('with random content', () => {
    it('matches with snapshot', () => {
      const component = renderer
        .create(
          <ExpandBoard>
            <div>Alice</div>
          </ExpandBoard>,
        )
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})

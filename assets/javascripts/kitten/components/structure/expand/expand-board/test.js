import React from 'react'
import renderer from 'react-test-renderer'
import { ExpandBoard } from './index'

describe('<ExpandBoard />', () => {
  describe('with <ExpandBoard.Button> and <ExpandBoard.Content>', () => {
    describe('by default', () => {
      it('matches with snapshot', () => {
        const component = renderer
          .create(
            <ExpandBoard aria-id="ExpandBoard">
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
            <ExpandBoard aria-id="ExpandBoard" disabled>
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
  })

  describe('with random content', () => {
    it('matches with snapshot', () => {
      const component = renderer
        .create(
          <ExpandBoard aria-id="ExpandBoard">
            <div>Alice</div>
          </ExpandBoard>,
        )
        .toJSON()

      expect(component).toMatchSnapshot()
    })
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { VerticalStepper } from './index'

describe('<VerticalStepper />', () => {
  let component

  describe('with all sub-components', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <VerticalStepper>
            <VerticalStepper.Step success href="#">
              <VerticalStepper.Title>Title</VerticalStepper.Title>

              <VerticalStepper.Link>Link</VerticalStepper.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step valid href="#">
              <VerticalStepper.Title>Title</VerticalStepper.Title>

              <VerticalStepper.List>
                <VerticalStepper.List.Item>Item</VerticalStepper.List.Item>
                <VerticalStepper.List.Item>Item</VerticalStepper.List.Item>
                <VerticalStepper.List.Item>…</VerticalStepper.List.Item>
              </VerticalStepper.List>

              <VerticalStepper.Link>Link</VerticalStepper.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step error href="#">
              <VerticalStepper.Title>Title</VerticalStepper.Title>

              <VerticalStepper.List>
                <VerticalStepper.List.Item>Item</VerticalStepper.List.Item>
                <VerticalStepper.List.Item>Item</VerticalStepper.List.Item>
              </VerticalStepper.List>

              <VerticalStepper.Link as="a" href="#">
                Link
              </VerticalStepper.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step waiting href="#">
              <VerticalStepper.Title>Title</VerticalStepper.Title>

              <VerticalStepper.Link>Link</VerticalStepper.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step href="#">
              <VerticalStepper.Title>Title</VerticalStepper.Title>

              <VerticalStepper.Link>Link</VerticalStepper.Link>
            </VerticalStepper.Step>
          </VerticalStepper>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

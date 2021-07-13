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

  describe('with orion variant', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <VerticalStepper variant="orion">
            <VerticalStepper.Step variant="orion" success href="#">
              <VerticalStepper.Title variant="orion">
                Title
              </VerticalStepper.Title>
              <VerticalStepper.Link variant="orion">Link</VerticalStepper.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step variant="orion" valid href="#">
              <VerticalStepper.Title variant="orion">
                Title
              </VerticalStepper.Title>
            </VerticalStepper.Step>

            <VerticalStepper.Step variant="orion" error href="#">
              <VerticalStepper.Title variant="orion">
                Title
              </VerticalStepper.Title>
            </VerticalStepper.Step>

            <VerticalStepper.Step variant="orion" waiting href="#">
              <VerticalStepper.Title variant="orion">
                Title
              </VerticalStepper.Title>
            </VerticalStepper.Step>

            <VerticalStepper.Step variant="orion" href="#">
              <VerticalStepper.Title variant="orion">
                Title
              </VerticalStepper.Title>
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

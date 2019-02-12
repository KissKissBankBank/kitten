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
              <VerticalStepper.Step.Label>Label</VerticalStepper.Step.Label>

              <VerticalStepper.Step.Link>Link</VerticalStepper.Step.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step valid href="#">
              <VerticalStepper.Step.Label>Label</VerticalStepper.Step.Label>

              <VerticalStepper.Step.List>
                <VerticalStepper.Step.List.Item>
                  Item
                </VerticalStepper.Step.List.Item>
                <VerticalStepper.Step.List.Item>
                  Item
                </VerticalStepper.Step.List.Item>
                <VerticalStepper.Step.List.Item>
                  …
                </VerticalStepper.Step.List.Item>
              </VerticalStepper.Step.List>

              <VerticalStepper.Step.Link>Link</VerticalStepper.Step.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step error href="#">
              <VerticalStepper.Step.Label>Label</VerticalStepper.Step.Label>

              <VerticalStepper.Step.List>
                <VerticalStepper.Step.List.Item>
                  Item
                </VerticalStepper.Step.List.Item>
                <VerticalStepper.Step.List.Item>
                  Item
                </VerticalStepper.Step.List.Item>
              </VerticalStepper.Step.List>

              <VerticalStepper.Step.Link>Link</VerticalStepper.Step.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step waiting href="#">
              <VerticalStepper.Step.Label>Label</VerticalStepper.Step.Label>

              <VerticalStepper.Step.Link>Link</VerticalStepper.Step.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step href="#">
              <VerticalStepper.Step.Label>Label</VerticalStepper.Step.Label>

              <VerticalStepper.Step.Link>Link</VerticalStepper.Step.Link>
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

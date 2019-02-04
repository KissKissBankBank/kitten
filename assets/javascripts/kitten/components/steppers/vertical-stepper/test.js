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
            <VerticalStepper.Step valid>
              <VerticalStepper.Step.Label>Label</VerticalStepper.Step.Label>

              <VerticalStepper.Step.Link href="#">
                Link
              </VerticalStepper.Step.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step valid>
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

              <VerticalStepper.Step.Link href="#">
                Link
              </VerticalStepper.Step.Link>
            </VerticalStepper.Step>

            <VerticalStepper.Step error>
              <VerticalStepper.Step.Label>Label</VerticalStepper.Step.Label>

              <VerticalStepper.Step.List>
                <VerticalStepper.Step.List.Item>
                  Item
                </VerticalStepper.Step.List.Item>
                <VerticalStepper.Step.List.Item>
                  Item
                </VerticalStepper.Step.List.Item>
              </VerticalStepper.Step.List>

              <VerticalStepper.Step.Link href="#">
                Link
              </VerticalStepper.Step.Link>
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

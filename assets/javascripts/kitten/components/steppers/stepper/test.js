import renderer from 'react-test-renderer'
import React from 'react'
import { Stepper } from './index'

describe('NEXT // <Stepper />', () => {
  it('default item matches with snapshot', () => {
    const component = renderer
      .create(
        <Stepper>
          <Stepper.Item>Default Item</Stepper.Item>
        </Stepper>,
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
  it('pointer item matches with snapshot', () => {
    const component = renderer
      .create(
        <Stepper>
          <Stepper.Item pointer>Default Item</Stepper.Item>
        </Stepper>,
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })

  it('progress item matches with snapshot', () => {
    const component = renderer
      .create(
        <Stepper>
          <Stepper.Item state="progress">Progress Item</Stepper.Item>
        </Stepper>,
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
  it('validated item matches with snapshot', () => {
    const component = renderer
      .create(
        <Stepper>
          <Stepper.Item state="validated">Validated Item</Stepper.Item>
        </Stepper>,
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
  it('default link matches with snapshot', () => {
    const component = renderer
      .create(
        <Stepper>
          <Stepper.Link href="https://www.kisskissbankbank.com">
            Default Link
          </Stepper.Link>
        </Stepper>,
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
  it('progress link matches with snapshot', () => {
    const component = renderer
      .create(
        <Stepper>
          <Stepper.Link
            href="https://www.kisskissbankbank.com"
            state="progress"
          >
            Progress Link
          </Stepper.Link>
        </Stepper>,
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
  it('external link matches with snapshot', () => {
    const component = renderer
      .create(
        <Stepper>
          <Stepper.Link href="https://www.kisskissbankbank.com" external>
            External Item
          </Stepper.Link>
        </Stepper>,
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })

  it('link with linkProps matches with snapshot', () => {
    const component = renderer
      .create(
        <Stepper>
          <Stepper.Link
            href="https://www.kisskissbankbank.com"
            external
            linkProps={{ 'aria-current': 'page' }}
          >
            External Item
          </Stepper.Link>
        </Stepper>,
      )
      .toJSON()

    expect(component).toMatchSnapshot()
  })
})

import { IconContainer } from './'
import { CheckedCircleIcon } from '../../icons/checked-circle-icon'
import renderer from 'react-test-renderer'
import React from 'react'

describe('<IconContainer/>', () => {
  it('should match snapshot with default behavior', () => {
    const component = renderer
      .create(
        <IconContainer icon={<CheckedCircleIcon />}>Foobar</IconContainer>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot when we change color', () => {
    const component = renderer
      .create(
        <IconContainer color="#fff" icon={<CheckedCircleIcon />}>
          Foobar
        </IconContainer>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot when we change position', () => {
    const component = renderer
      .create(
        <IconContainer position="bottom" icon={<CheckedCircleIcon />}>
          Foobar
        </IconContainer>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot when we change width and height', () => {
    const component = renderer
      .create(
        <IconContainer
          iconWidth={30}
          iconHeight={50}
          icon={<CheckedCircleIcon />}
        >
          Foobar
        </IconContainer>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })

  it('should match snapshot when we add an icon description', () => {
    const component = renderer
      .create(
        <IconContainer
          iconDescription="checked icon circle"
          icon={<CheckedCircleIcon />}
        >
          Foobar
        </IconContainer>,
      )
      .toJSON()
    expect(component).toMatchSnapshot()
  })
})

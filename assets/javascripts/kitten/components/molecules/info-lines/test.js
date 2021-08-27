import React from 'react'
import renderer from 'react-test-renderer'
import { InfoLines } from './index'

describe('<InfoLines />', () => {
  it('should match its empty snapshot', () => {
    const tree = renderer
      .create(
        <InfoLines
          infos={[
            { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
            { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
          ]}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match its propped snapshot', () => {
    const tree = renderer
      .create(
        <InfoLines
          withBorderRadius
          withLeftRightBorder
          withoutTopBottomBorder
          withoutResponsive
          borderColor="#f8f"
          descriptionTagList="div"
          titleTagList="span"
          itemTagList="span"
          infos={[
            { key: 'Lorem', value: 'Ipsum', id: 'item-1' },
            { key: 'Dolor', value: 'Sit amet', id: 'item-2' },
          ]}
        />,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

import React from 'react'
import renderer from 'react-test-renderer'
import { ButtonImageWithTextAndBadge } from '../../components/buttons/button-image-with-text-and-badge'

describe('<ButtonImageWithTextAndBadge />', () => {
  it('default snapshot', () => {
    const tree = renderer
      .create(
        <ButtonImageWithTextAndBadge
          isExpanded={false}
          text="Custom text"
          title="Custom title"
          srcImg="http://via.placeholder.com/300x300"
          widthImg={300}
          heightImg={300}
          altImg="Custom alt"
          notifications={5}
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
  it('snapshot with notifications', () => {
    const tree = renderer
      .create(
        <ButtonImageWithTextAndBadge
          isExpanded={false}
          text="Custom text"
          title="Custom title"
          srcImg="http://via.placeholder.com/300x300"
          widthImg={300}
          heightImg={300}
          altImg="Custom alt"
          notifications="!"
          badgeColor="#FF0000"
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

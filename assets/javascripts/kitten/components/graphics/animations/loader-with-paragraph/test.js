import React from 'react'
import { LoaderWithParagraph } from './index'
import renderer from 'react-test-renderer'

describe('<LoaderWithParagraph />', () => {
  describe('With default props', () => {
    it('should match with snapshot', () => {
      const tree = renderer.create(<LoaderWithParagraph />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  describe('With custom props', () => {
    it('should match with snapshot', () => {
      const tree = renderer
        .create(
          <LoaderWithParagraph
            paragrapProps={{
              modifier: 'quaternary',
              className: 'customClassName',
            }}
            loaderProps={{
              color: 'red',
              tag: 'button',
              className: 'customClassName',
            }}
            className="customClassName"
            loaderPosition="bottom"
          >
            A custom loading massage
          </LoaderWithParagraph>,
        )
        .toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})

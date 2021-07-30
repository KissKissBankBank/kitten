import React from 'react'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { FlexWrapper } from './index'

describe('<FlexWrapper />', () => {
  let component

  describe('compare with snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FlexWrapper direction="row">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </FlexWrapper>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('compare string props with snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(<FlexWrapper gap="10px" padding="10px" />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('compare number props with snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(<FlexWrapper gap={10} padding={10} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('compare array props with snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(<FlexWrapper gap={[10, '20em']} padding={[10, '20em']} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('compare object props with snapshot', () => {
    beforeEach(() => {
      component = renderer
        .create(<FlexWrapper padding={{ top: 10, left: '20em' }} />)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

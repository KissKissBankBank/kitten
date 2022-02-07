import React from 'react'
import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
  LinkedinButtonIconWords,
  InstagramButtonIconWords,
} from './index'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('SocialButtonIconWords', () => {
  let component

  describe('<FacebookButtonIconWords />', () => {
    beforeEach(() => {
      component = renderer
        .create(<FacebookButtonIconWords>Facebook</FacebookButtonIconWords>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('<FacebookButtonIconWords /> with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <FacebookButtonIconWords size="big" fit="fluid">
            Facebook
          </FacebookButtonIconWords>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('<TwitterButtonIconWords />', () => {
    beforeEach(() => {
      component = renderer
        .create(<TwitterButtonIconWords>Twitter</TwitterButtonIconWords>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('<TwitterButtonIconWords /> with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <TwitterButtonIconWords size="big" fit="fluid">
            Twitter
          </TwitterButtonIconWords>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('<LinkedinButtonIconWords />', () => {
    beforeEach(() => {
      component = renderer
        .create(<LinkedinButtonIconWords>Linkedin</LinkedinButtonIconWords>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('<LinkedinButtonIconWords /> with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <LinkedinButtonIconWords size="big" fit="fluid">
            Linkedin
          </LinkedinButtonIconWords>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('<InstagramButtonIconWords />', () => {
    beforeEach(() => {
      component = renderer
        .create(<InstagramButtonIconWords>Instagram</InstagramButtonIconWords>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('<InstagramButtonIconWords /> with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <InstagramButtonIconWords size="big" fit="fluid">
            Instagram
          </InstagramButtonIconWords>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

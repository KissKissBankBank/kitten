import React from 'react'
import {
  FacebookButtonIcon,
  TwitterButtonIcon,
  LinkedinButtonIcon,
  InstagramButtonIcon,
  YoutubeButtonIcon,
} from './index'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('SocialButtonIcon', () => {
  let component

  describe('<FacebookButtonIcon />', () => {
    beforeEach(() => {
      component = renderer
        .create(<FacebookButtonIcon>Facebook</FacebookButtonIcon>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('<FacebookButtonIcon /> with props', () => {
    beforeEach(() => {
      component = renderer
        .create(<FacebookButtonIcon size="small">Facebook</FacebookButtonIcon>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('<TwitterButtonIcon />', () => {
    beforeEach(() => {
      component = renderer
        .create(<TwitterButtonIcon>Twitter</TwitterButtonIcon>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('<TwitterButtonIcon /> with props', () => {
    beforeEach(() => {
      component = renderer
        .create(<TwitterButtonIcon size="small">Twitter</TwitterButtonIcon>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('<LinkedinButtonIcon />', () => {
    beforeEach(() => {
      component = renderer
        .create(<LinkedinButtonIcon>Linkedin</LinkedinButtonIcon>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('<LinkedinButtonIcon /> with props', () => {
    beforeEach(() => {
      component = renderer
        .create(<LinkedinButtonIcon size="small">Linkedin</LinkedinButtonIcon>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('<InstagramButtonIcon />', () => {
    beforeEach(() => {
      component = renderer
        .create(<InstagramButtonIcon>Instagram</InstagramButtonIcon>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('<InstagramButtonIcon /> with props', () => {
    beforeEach(() => {
      component = renderer
        .create(
          <InstagramButtonIcon size="small">Instagram</InstagramButtonIcon>,
        )
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })

  describe('<YoutubeButtonIcon />', () => {
    beforeEach(() => {
      component = renderer
        .create(<YoutubeButtonIcon>Youtube</YoutubeButtonIcon>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
  describe('<YoutubeButtonIcon /> with props', () => {
    beforeEach(() => {
      component = renderer
        .create(<YoutubeButtonIcon size="small">Youtube</YoutubeButtonIcon>)
        .toJSON()
    })

    it('matches with snapshot', () => {
      expect(component).toMatchSnapshot()
    })
  })
})

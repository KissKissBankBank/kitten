import React from 'react'
import renderer from 'react-test-renderer'
import { DropdownSelectWithInput } from './index'

import { FacebookIcon } from '../../../components/icons/facebook-icon'
import { TwitterIcon } from '../../../components/icons/twitter-icon'
import { LinkedinIcon } from '../../../components/icons/linkedin-icon'
import { InstagramIcon } from '../../../components/icons/instagram-icon'
import { YoutubeIcon } from '../../../components/icons/youtube-icon'
import { GlobeIcon } from '../../../components/icons/globe-icon'

describe('<DropdownSelectWithInput />', () => {
  it('should match its snapshot with props', () => {
    const tree = renderer
      .create(
        <DropdownSelectWithInput
          id="dropdown-select-with-input-test"
          labelText="DropdownSelectWithInput test"
          options={[
            {
              value: 'facebook',
              label: 'https://www.facebook.com/',
              icon: <FacebookIcon width="8" height="15" />,
            },
            {
              value: 'twitter',
              label: 'https://www.twitter.com/',
              icon: <TwitterIcon width="15" height="14" />,
            },
            {
              value: 'linkedin',
              label: 'https://www.linkedin.com/',
              icon: <LinkedinIcon width="14" height="14" />,
            },
            {
              value: 'instagram',
              label: 'https://www.instagram.com/',
              icon: <InstagramIcon width="17" height="17" />,
            },
            {
              value: 'youtube',
              label: 'https://www.youtube.com/',
              icon: <YoutubeIcon width="17" height="12" />,
            },
            {
              value: 'website',
              label: 'https://www.…',
              icon: <GlobeIcon width="16" height="16" />,
            },
          ]}
          openOnLoad
        />,
      )
      .toJSON()

    expect(tree).toMatchSnapshot()
  })
})

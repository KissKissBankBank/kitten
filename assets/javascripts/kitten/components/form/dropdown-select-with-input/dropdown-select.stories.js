import React, { useState } from 'react'
import { text, boolean, number, select } from '@storybook/addon-knobs'
import { DropdownSelectWithInput } from './index'
import { Grid, GridCol } from '../../../components/grid/grid'

import { FacebookIcon } from '../../../components/icons/facebook-icon'
import { TwitterIcon } from '../../../components/icons/twitter-icon'
import { LinkedinIcon } from '../../../components/icons/linkedin-icon'
import { InstagramIcon } from '../../../components/icons/instagram-icon'
import { YoutubeIcon } from '../../../components/icons/youtube-icon'
import { GlobeIcon } from '../../../components/icons/globe-icon'

export default {
  component: DropdownSelectWithInput,
  title: 'Form/DropdownSelectWithInput',
  parameters: {
    component: DropdownSelectWithInput,
  },
}

const options = [
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
]

export const Default = () => {
  const [labelProps, setLabelProps] = useState(null)

  return (
    <Grid>
      <GridCol offset="1" col="8">
        <DropdownSelectWithInput
          id={text('id', 'dropdown-select')}
          error={boolean('error', false)}
          valid={boolean('valid', false)}
          disabled={boolean('disabled', false)}
          hideLabel={boolean('hide label?', false)}
          labelText={text('LabelText', 'label')}
          options={options}
          labelPropsGetter={passedLabelProps => {
            passedLabelProps && setLabelProps(passedLabelProps())
          }}
          resetOnBackspace={boolean('resetOnBackspace', false)}
          highlightOptionBox={boolean('highlightOptionBox', true)}
          hideIconOnMobile={boolean('hideIconOnMobile', false)}
          size={select(
            'size',
            ['tiny', 'normal', 'big', 'huge', 'giant'],
            'normal',
          )}
        />
        <p>
          Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Etiam porta sem malesuada magna mollis euismod.
        </p>
        <p>labelPropsGetter props:</p>
        <ul>
          {labelProps &&
            Object.keys(labelProps).map(prop => (
              <li>
                {prop}: {labelProps[prop]}
              </li>
            ))}
        </ul>
      </GridCol>
    </Grid>
  )
}

export const DeactivatedDropdown = () => {
  return (
    <Grid>
      <GridCol offset="1" col="8">
        <DropdownSelectWithInput
          id={text('id', 'dropdown-select')}
          error={boolean('error', false)}
          valid={boolean('valid', false)}
          disabled={boolean('disabled', false)}
          hideLabel={true}
          labelText="Facebook"
          options={options}
          resetOnBackspace={boolean('resetOnBackspace', false)}
          highlightOptionBox={boolean('highlightOptionBox', true)}
          defaultSelectedValue="facebook"
          deactivateDropdown
          className="k-u-margin-bottom-triple"
          menuZIndex={number('menuZIndex', 1000)}
          hideIconOnMobile={boolean('hideIconOnMobile', false)}
          size={select(
            'size',
            ['tiny', 'normal', 'big', 'huge', 'giant'],
            'normal',
          )}
        />
        <DropdownSelectWithInput
          id={text('id', 'dropdown-select')}
          error={boolean('error', false)}
          valid={boolean('valid', false)}
          disabled={boolean('disabled', false)}
          hideLabel={true}
          labelText="Twitter"
          options={options}
          resetOnBackspace={boolean('resetOnBackspace', false)}
          highlightOptionBox={boolean('highlightOptionBox', true)}
          defaultSelectedValue="twitter"
          deactivateDropdown
          className="k-u-margin-bottom-triple"
          menuZIndex={number('menuZIndex', 1000)}
          hideIconOnMobile={boolean('hideIconOnMobile', false)}
          size={select(
            'size',
            ['tiny', 'normal', 'big', 'huge', 'giant'],
            'normal',
          )}
        />
        <DropdownSelectWithInput
          id={text('id', 'dropdown-select')}
          error={boolean('error', false)}
          valid={boolean('valid', false)}
          disabled={boolean('disabled', false)}
          hideLabel={true}
          labelText="Instagram"
          options={options}
          resetOnBackspace={boolean('resetOnBackspace', false)}
          highlightOptionBox={boolean('highlightOptionBox', true)}
          defaultSelectedValue="instagram"
          deactivateDropdown
          className="k-u-margin-bottom-triple"
          menuZIndex={number('menuZIndex', 1000)}
          hideIconOnMobile={boolean('hideIconOnMobile', false)}
          size={select(
            'size',
            ['tiny', 'normal', 'big', 'huge', 'giant'],
            'normal',
          )}
        />
      </GridCol>
    </Grid>
  )
}

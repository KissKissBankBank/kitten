import React, { useState } from 'react'
import { DropdownSelectWithInput } from './index'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'

import {
  FlexWrapper,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  GlobeIcon,
} from 'kitten'

export default {
  component: DropdownSelectWithInput,
  title: 'Structure/DropdownSelectWithInput',
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          importString="DropdownSelectWithInput"
        />
      ),
    },
  },
  decorators: [story => <div className="story-Container">{story()}</div>],
  args: {
    id: 'DropdownSelectWithInput',
    label: 'Select',
    hideLabel: false,
    options: [
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
    ],
    placeholder: 'Select',
    inputPlaceholder: 'kisskissbankbank',
    labelPropsGetter: action('labelPropsGetter'),
    a11yStatusError: 'Error',
    a11yStatusValid: 'Valid',
    a11ySelectionMessageDisplayer: action('a11ySelectionMessageDisplayer'),
    onChange: action('onChange'),
    onInputChange: action('onInputChange'),
    toggleButtonProps: {},
    inputProps: {},
    resetOnBackspace: false,
    highlightOptionBox: true,
    openOnLoad: false,
    deactivateDropdown: false,
    menuZIndex: 1000,
    hideIconOnMobile: false,
    size: 'normal',
  },
  argTypes: {
    id: { control: 'string' },
    labelText: { control: 'string' },
    hideLabel: { control: 'boolean' },
    options: { control: 'object' },
    placeholder: { control: 'string' },
    inputPlaceholder: { control: 'string' },
    labelPropsGetter: { control: 'func' },
    a11yStatusError: { control: 'string' },
    a11yStatusValid: { control: 'string' },
    a11ySelectionMessageDisplayer: { control: 'func' },
    onChange: { control: 'func' },
    onInputChange: { control: 'func' },
    toggleButtonProps: { control: 'object' },
    inputProps: { control: 'object' },
    resetOnBackspace: { control: 'boolean' },
    highlightOptionBox: { control: 'boolean' },
    openOnLoad: { control: 'boolean' },
    deactivateDropdown: { control: 'boolean' },
    menuZIndex: { control: 'number' },
    hideIconOnMobile: { control: 'boolean' },
    size: {
      control: 'select',
      options: ['tiny', 'normal', 'big', 'huge', 'giant'],
    },
  },
}

export const Default = args => {
  const [labelProps, setLabelProps] = useState(null)

  return (
    <>
      <DropdownSelectWithInput
        {...args}
        labelPropsGetter={passedLabelProps => {
          action('labelPropsGetter')(passedLabelProps)
          passedLabelProps && setLabelProps(passedLabelProps())
        }}
      />
      <p>
        Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
        Etiam porta sem malesuada magna mollis euismod. Cum sociis natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam
        porta sem malesuada magna mollis euismod.
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
    </>
  )
}

export const DeactivatedDropdown = args => {
  return (
    <FlexWrapper direction="column" gap={30}>
      <DropdownSelectWithInput
        {...args}
        labelText="Facebook"
        defaultSelectedValue="facebook"
        deactivateDropdown
        hideLabel
      />
      <DropdownSelectWithInput
        {...args}
        labelText="Twitter"
        defaultSelectedValue="twitter"
        deactivateDropdown
        hideLabel
      />
      <DropdownSelectWithInput
        {...args}
        labelText="Linkedin"
        defaultSelectedValue="linkedin"
        deactivateDropdown
        hideLabel
      />
    </FlexWrapper>
  )
}

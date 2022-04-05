import React from 'react'
import { AvatarWithTextAndBadge } from './index'
import { Text } from 'kitten'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Information/AvatarWithTextAndBadge',
  component: AvatarWithTextAndBadge,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="AvatarWithTextAndBadge" />
      ),
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid">
        <div>{story()}</div>
      </div>
    ),
  ],
  args: {
    hoverable: true,
    imageAlt: 'Image alt',
    imageSize: 'medium',
    imageIsDisplayed: true,
    imageText: 'JC',
    imageBackgroundColor: '#002e7d',
    imageTextColor: '#fff',
    badgeValue: 0,
    badgeBackgroundColor: '#002e7d',
    badgeA11yText: 'notifications',
    textContent: 'Jean Charles Édouard',
    textHasSecondLine: false,
    textWithEllipsisOverflow: false,
  },
  argTypes: {
    hoverable: {
      name: 'Hoverable',
      control: 'boolean',
    },
    imageAlt: {
      name: 'Image Alt (story prop)',
      description: 'Prop `alt` on subcomponent `AvatarWithTextAndBadge.Image`',
      control: 'text',
    },
    imageSize: {
      name: 'Image Size (story prop)',
      description: 'Prop `size` on subcomponent `AvatarWithTextAndBadge.Image`',
      options: ['medium', 'large'],
      control: 'inline-radio',
    },
    imageIsDisplayed: {
      name: 'Image Is Displayed (story prop)',
      description:
        'Controls the prop `src` on subcomponent `AvatarWithTextAndBadge.Image`',
      control: 'boolean',
    },
    imageText: {
      name: 'Image Text (story prop)',
      description: 'Prop `text` on subcomponent `AvatarWithTextAndBadge.Image`',
      control: 'text',
    },
    imageBackgroundColor: {
      name: 'Image BackgroundColor (story prop)',
      description:
        'Prop `backgroundColor` on subcomponent `AvatarWithTextAndBadge.Image`',
      control: 'color',
    },
    imageTextColor: {
      name: 'Image TextColor (story prop)',
      description:
        'Prop `textColor` on subcomponent `AvatarWithTextAndBadge.Image`',
      control: 'color',
    },
    badgeValue: {
      name: 'Badge number (story prop)',
      description:
        'Children of the subcomponent `AvatarWithTextAndBadge.Badge`',
      control: 'number',
    },
    badgeBackgroundColor: {
      name: 'Badge backgroundColor (story prop)',
      description:
        'Prop `backgroundColor` of subcomponent `AvatarWithTextAndBadge.Badge`',
      control: 'color',
    },
    badgeA11yText: {
      name: 'Badge a11yText (story prop)',
      description:
        'Prop `a11yText` of subcomponent `AvatarWithTextAndBadge.Badge`',
      control: 'text',
    },
    textContent: {
      name: 'Text content (story prop)',
      description: 'Children of the subcomponent `AvatarWithTextAndBadge.Text`',
      control: 'text',
    },
    textHasSecondLine: {
      name: 'Text display second line (story prop)',
      description:
        'Adds complex children to the subcomponent `AvatarWithTextAndBadge.Text`',
      control: 'boolean',
    },
    textWithEllipsisOverflow: {
      name: 'Text has overflow ellipsis (story prop)',
      description:
        'Prop `withEllipsisOverflow` of subcomponent `AvatarWithTextAndBadge.Text`',
      control: 'boolean',
    },
  },
}

export const Default = ({
  hoverable,
  imageAlt,
  imageSize,
  imageIsDisplayed,
  imageText,
  imageBackgroundColor,
  imageTextColor,
  badgeValue,
  badgeBackgroundColor,
  badgeA11yText,
  textContent,
  textHasSecondLine,
  textWithEllipsisOverflow,
}) => (
  <AvatarWithTextAndBadge hoverable={hoverable}>
    <AvatarWithTextAndBadge.Image
      alt={imageAlt}
      size={imageSize}
      src={imageIsDisplayed && `/kitten-${Math.floor(Math.random() * 10)}.jpg`}
      text={imageText}
      backgroundColor={imageBackgroundColor}
      textColor={imageTextColor}
    >
      {badgeValue > 0 && (
        <AvatarWithTextAndBadge.Badge
          backgroundColor={badgeBackgroundColor}
          a11yText={badgeA11yText}
          children={badgeValue}
        />
      )}
    </AvatarWithTextAndBadge.Image>

    <AvatarWithTextAndBadge.Text
      className="k-u-hidden@xxs-down"
      withEllipsisOverflow={textWithEllipsisOverflow}
    >
      {textContent}
      {textHasSecondLine && (
        <>
          <br />
          <Text weight="light" size="small">
            <span className="k-u-hidden@xs-down">Solde&nbsp;:</span>{' '}
            24&nbsp;093,39&nbsp;€
          </Text>
        </>
      )}
    </AvatarWithTextAndBadge.Text>
  </AvatarWithTextAndBadge>
)

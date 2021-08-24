import React from 'react'
import { AvatarWithTextAndBadge } from './index'
import { Text, COLORS } from '../../..'

export default {
  title: 'Atoms/AvatarWithTextAndBadge',
  component: AvatarWithTextAndBadge,
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
    imageSize: 'regular',
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
      defaultValue: false,
      control: { type: 'boolean' },
    },
    imageAlt: {
      name: 'Image Alt (story prop)',
      defaultValue: null,
      description: 'Prop `alt` on subcomponent `AvatarWithTextAndBadge.Image`',
      control: { type: 'text' },
    },
    imageSize: {
      name: 'Image Size (story prop)',
      defaultValue: 'regular',
      description: 'Prop `size` on subcomponent `AvatarWithTextAndBadge.Image`',
      options: ['regular', 'big'],
      control: { type: 'inline-radio' },
    },
    imageIsDisplayed: {
      name: 'Image Is Displayed (story prop)',
      defaultValue: null,
      description:
        'Controls the prop `src` on subcomponent `AvatarWithTextAndBadge.Image`',
      control: { type: 'boolean' },
    },
    imageText: {
      name: 'Image Text (story prop)',
      defaultValue: '',
      description: 'Prop `text` on subcomponent `AvatarWithTextAndBadge.Image`',
      control: { type: 'text' },
    },
    imageBackgroundColor: {
      name: 'Image BackgroundColor (story prop)',
      defaultValue: COLORS.primary3,
      description:
        'Prop `backgroundColor` on subcomponent `AvatarWithTextAndBadge.Image`',
      control: { type: 'color' },
    },
    imageTextColor: {
      name: 'Image TextColor (story prop)',
      defaultValue: COLORS.background1,
      description:
        'Prop `textColor` on subcomponent `AvatarWithTextAndBadge.Image`',
      control: { type: 'color' },
    },
    badgeValue: {
      name: 'Badge number (story prop)',
      defaultValue: null,
      description:
        'Children of the subcomponent `AvatarWithTextAndBadge.Badge`',
      control: { type: 'number' },
    },
    badgeBackgroundColor: {
      name: 'Badge backgroundColor (story prop)',
      defaultValue: COLORS.primary1,
      description:
        'Prop `backgroundColor` of subcomponent `AvatarWithTextAndBadge.Badge`',
      control: { type: 'color' },
    },
    badgeA11yText: {
      name: 'Badge a11yText (story prop)',
      defaultValue: 'Notification(s)',
      description:
        'Prop `a11yText` of subcomponent `AvatarWithTextAndBadge.Badge`',
      control: { type: 'text' },
    },
    textContent: {
      name: 'Text content (story prop)',
      defaultValue: '',
      description: 'Children of the subcomponent `AvatarWithTextAndBadge.Text`',
      control: { type: 'text' },
    },
    textHasSecondLine: {
      name: 'Text display second line (story prop)',
      description:
        'Adds complex children to the subcomponent `AvatarWithTextAndBadge.Text`',
      control: { type: 'boolean' },
    },
    textWithEllipsisOverflow: {
      name: 'Text has overflow ellipsis (story prop)',
      defaultValue: false,
      description:
        'Prop `withEllipsisOverflow` of subcomponent `AvatarWithTextAndBadge.Text`',
      control: { type: 'boolean' },
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
      src={imageIsDisplayed && '/kitten.jpg'}
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
          <Text weight="light" size="tiny">
            <span className="k-u-hidden@xs-down">Solde&nbsp;:</span>{' '}
            24&nbsp;093,39&nbsp;€
          </Text>
        </>
      )}
    </AvatarWithTextAndBadge.Text>
  </AvatarWithTextAndBadge>
)

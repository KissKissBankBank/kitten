import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import Button from './button'
import IconButton from './icon-button'
import IconButtonWithWords from './icon-button-with-words'
import SocialIconButtonWithWords from './social-icon-button-with-words'
import ImageButton from './image-button'
import ImageButtonWithText from './image-button-with-text'
import TagButton from './tag-button'
import ButtonWithBadge from './button-with-badge'
import Filter from './filter'
import GarbageButton from './garbage-button'
import StarButton from './star-button'

export default () => {
  return (
    <Section title="Buttons" id="buttons">
      <Component
        title="Button"
        id="components/buttons/button"
        component={Button}
      />
      <Component
        title="Icon button"
        id="components/buttons/icon-button"
        component={IconButton}
      />
      <Component
        title="Icon button with words"
        id="components/buttons/icon-button-with-words"
        component={IconButtonWithWords}
      />
      <Component
        title="Social icon button with words"
        id="components/buttons/social-icon-button-with-words"
        component={SocialIconButtonWithWords}
      />
      <Component
        title="Image button"
        id="components/buttons/image-button"
        component={ImageButton}
      />
      <Component
        title="Image button with text"
        id="components/buttons/image-button-with-text"
        component={ImageButtonWithText}
      />
      <Component
        title="Tag button"
        id="components/buttons/tag-button"
        component={TagButton}
      />
      <Component
        title="Button with badge"
        id="components/buttons/button-with-badge"
        component={ButtonWithBadge}
      />
      <Component
        title="Garbage Button"
        id="components/buttons/garbage-button"
        component={GarbageButton}
      />
      <Component
        title="Star Button"
        id="components/buttons/star-button"
        component={StarButton}
      />
    </Section>
  )
}

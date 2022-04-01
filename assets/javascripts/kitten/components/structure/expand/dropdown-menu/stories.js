import React from 'react'
import { action } from '@storybook/addon-actions'
import { DropdownMenu } from './index'
import {
  pxToRem,
  COLORS,
  EllipsisIcon,
  AvatarWithTextAndBadge,
  Text,
  ArrowIcon,
  LinkIconNext,
  FacebookIconNext,
  TwitterIconNext,
  InstagramIconNext,
  MessengerIconNext,
  WhatsappIconNext,
  LinkedinIconNext,
  EmbedIconNext,
  Button,
  AirplaneIconNext,
} from 'kitten'
import styled from 'styled-components'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Structure/Expand/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="DropdownMenu" />
      ),
    },
  },
  argTypes: {
    open: {
      name: 'open',
      control: 'boolean',
    },
    menuPosition: {
      name: 'menuPosition',
      options: ['left', 'center', 'right'],
      control: 'inline-radio',
    },
    button: {
      name: 'button',
      control: null,
    },
    menuprops: {
      name: 'menuprops',
      control: 'object',
    },
    onToggle: {
      name: 'onToggle',
      control: null,
    },
    positionedButton: {
      name: 'positionedButton',
      control: 'boolean',
    },
  },
  args: {
    open: false,
    menuPosition: null,
    button: ({ open }) => (
      <>
        <EllipsisIcon color={COLORS.font1} />
        <span className="k-u-a11y-visuallyHidden">
          {open ? 'Click to close menu' : 'Click to open menu'}
        </span>
      </>
    ),
    onToggle: action('on Toggle'),
    positionedButton: false,
  },
}

const StyledWrapper = styled.div`
  div {
    height: 5rem;
    display: flex;
    align-items: stretch;
    justify-content: stretch;
  }

  details {
    width: 5em;
    border: 1px solid red;
  }
`

export const Default = ({ menuPosition, ...args }) => {
  return (
    <StyledWrapper>
      <div>
        <DropdownMenu
          {...args}
          positionedButton
          menuPosition={menuPosition || 'right'}
        >
          <DropdownMenu.Link href="">A link</DropdownMenu.Link>
          <DropdownMenu.Button>Click this button</DropdownMenu.Button>
          <DropdownMenu.Separator />
          <DropdownMenu.Link href="">
            Another last very very very very very very very very very very long
            link
          </DropdownMenu.Link>
        </DropdownMenu>
      </div>
      <div className="k-u-flex-justifyContent-center">
        <DropdownMenu
          {...args}
          positionedButton
          menuPosition={menuPosition || 'center'}
          button={({ open }) => (
            <span className="k-u-link k-u-link-primary1 k-u-small">
              {open ? 'close menu' : 'open menu'}
            </span>
          )}
        >
          <DropdownMenu.Link href="#">A link</DropdownMenu.Link>
          <DropdownMenu.Button>Click this button</DropdownMenu.Button>
          <DropdownMenu.Separator />
          <DropdownMenu.Link href="#">Another last link</DropdownMenu.Link>
        </DropdownMenu>
      </div>
      <div className="k-u-flex-justifyContent-end">
        <DropdownMenu
          {...args}
          open
          positionedButton
          menuPosition={menuPosition || 'left'}
        >
          <DropdownMenu.Link href="#">A link</DropdownMenu.Link>
          <DropdownMenu.Button>Click this button</DropdownMenu.Button>
          <DropdownMenu.Separator />
          <DropdownMenu.Link href="#">Another last link</DropdownMenu.Link>
        </DropdownMenu>
      </div>
    </StyledWrapper>
  )
}

Default.decorators = [story => <div className="story-Container">{story()}</div>]

export const WithAvatar = args => (
  <>
    <div>&nbsp;</div>
    <div>
      <DropdownMenu
        {...args}
        menuPosition="center"
        button={({ open }) => (
          <AvatarWithTextAndBadge>
            <AvatarWithTextAndBadge.Image alt="" src="/kitten-0.jpg" />

            <AvatarWithTextAndBadge.Text>
              <Text
                weight="regular"
                className="k-u-block k-u-link k-u-link-primary1"
              >
                Kitten Kitty
              </Text>
              <Text className="k-u-block">Cat City</Text>
            </AvatarWithTextAndBadge.Text>
            <ArrowIcon
              className="k-u-flex-shrink-none"
              direction={open ? 'top' : 'bottom'}
            />
          </AvatarWithTextAndBadge>
        )}
      >
        <DropdownMenu.Link href="">A link</DropdownMenu.Link>
        <DropdownMenu.Button>Click this button</DropdownMenu.Button>
        <DropdownMenu.Link href="">
          Another last very very very very very very very very very very long
          link
        </DropdownMenu.Link>
      </DropdownMenu>
    </div>
  </>
)

WithAvatar.decorators = [
  story => <div className="story-Container story-Grid">{story()}</div>,
]

export const WithButton = args => (
  <>
    <div>&nbsp;</div>
    <div>
      <DropdownMenu
        {...args}
        menuPosition="center"
        open
        button={({ open }) => (
          <Button active={open} rounded fit="content" as="span">
            <AirplaneIconNext />
            <span>Partager</span>
          </Button>
        )}
        top={pxToRem(10)}
      >
        <DropdownMenu.Link href="#" icon={<LinkIconNext />}>
          Copier le lien
        </DropdownMenu.Link>
        <DropdownMenu.Separator />
        <DropdownMenu.Button icon={<FacebookIconNext />}>
          Facebook
        </DropdownMenu.Button>
        <DropdownMenu.Button icon={<TwitterIconNext />}>
          Twitter
        </DropdownMenu.Button>
        <DropdownMenu.Button icon={<InstagramIconNext />}>
          Instagram
        </DropdownMenu.Button>
        <DropdownMenu.Button icon={<MessengerIconNext />}>
          Messenger
        </DropdownMenu.Button>
        <DropdownMenu.Button icon={<WhatsappIconNext />}>
          WhatsApp
        </DropdownMenu.Button>
        <DropdownMenu.Button icon={<LinkedinIconNext width={13} heigh={13} />}>
          LinkedIn
        </DropdownMenu.Button>
        <DropdownMenu.Separator />
        <DropdownMenu.Button icon={<EmbedIconNext />}>
          Widget
        </DropdownMenu.Button>
      </DropdownMenu>
    </div>
  </>
)

WithButton.decorators = [
  story => <div className="story-Container story-Grid">{story()}</div>,
]

const StyledImageWrapper = styled.div`
  position: relative;
  display: inline-block;

  img {
    display: inline;
    max-width: ${pxToRem(600)};
    max-height: ${pxToRem(400)};
  }

  .image-menu {
    position: absolute;
    left: 0;
    width: 100%;
    top: 0;
    height: 100%;
  }
`

export const WithImage = args => (
  <>
    <div>&nbsp;</div>
    <div>
      <StyledImageWrapper>
        <img
          src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
          alt="image insérée dans le texte avec le texte alternatif 'Ceci est un texte alternatif'"
        />
        <DropdownMenu
          {...args}
          className="image-menu"
          menuPosition="center"
          positionedButton
          top="-8px - 1rem"
          button={() => (
            <span className="k-u-a11y-visuallyHidden">
              Menu d’édition d’image
            </span>
          )}
        >
          <DropdownMenu.Button onClick={action('Modifier l’image')}>
            Modifier l’image
          </DropdownMenu.Button>
        </DropdownMenu>
      </StyledImageWrapper>
    </div>
  </>
)

WithImage.decorators = [
  story => <div className="story-Container">{story()}</div>,
]

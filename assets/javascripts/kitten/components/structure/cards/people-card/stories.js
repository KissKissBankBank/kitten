import React from 'react'
import { DocsPage } from 'storybook/docs-page'
import styled from 'styled-components'
import { PeopleCard } from './index'
import {
  Text,
  DropdownMenu,
  EllipsisIcon,
  FlexWrapper,
  AvatarWithTextAndBadge,
} from 'kitten'

const args = {
  as: 'article',
}

const argTypes = {
  as: {
    name: 'as',
    description: 'HTML element for the Action component',
    control: { type: 'text' },
  },
}

export default {
  title: 'Structure/Cards/PeopleCard',
  component: PeopleCard,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="PeopleCard" />,
    },
  },
  decorators: [
    story => (
      <div className="story-Container story-Grid story-Grid--large">
        {story()}
      </div>
    ),
  ],
  args: args,
  argTypes: argTypes,
}

const StyledFlexWrapper = styled(FlexWrapper)`
  height: 100%;
`

export const Default = args => {
  return (
    <PeopleCard {...args}>
      <PeopleCard.Avatar>
        <AvatarWithTextAndBadge>
          <AvatarWithTextAndBadge.Image alt="" src="/kitten-0.jpg" />
        </AvatarWithTextAndBadge>
      </PeopleCard.Avatar>
      <PeopleCard.Cell>
        <StyledFlexWrapper gap={5} className="k-u-flex-justifyContent-center">
          <Text
            tag="p"
            weight="regular"
            size="small"
            className="k-u-line-height-1 k-u-margin-none k-u-clamp-1 k-u-clamp-2@xs-down"
          >
            Marie Bobo
          </Text>
          <Text
            tag="p"
            weight="light"
            size="small"
            className="k-u-line-height-1 k-u-margin-none"
          >
            marie.bo@gmail.com
          </Text>
        </StyledFlexWrapper>
      </PeopleCard.Cell>
      <PeopleCard.LastCell>
        <DropdownMenu
          menuPosition="left"
          button={({ open }) => (
            <>
              <EllipsisIcon color="var(--color-grey-900)" />
              <span className="k-u-a11y-visuallyHidden">
                {open ? 'Click to close menu' : 'Click to open menu'}
              </span>
            </>
          )}
        >
          <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
          <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
          <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
          <DropdownMenu.Button>Supprimer</DropdownMenu.Button>
        </DropdownMenu>
      </PeopleCard.LastCell>
    </PeopleCard>
  )
}

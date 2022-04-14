import React from 'react'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'
import styled from 'styled-components'
import { ManagerCard } from './index'
import {
  Text,
  DropdownMenu,
  EllipsisIcon,
  FlexWrapper,
  LockOutlineIcon,
} from 'kitten'

const args = {
  as: 'article',
  actionProps: {
    href: '#',
    as: 'a',
    'aria-label': 'A label for the link',
    onClick: e => {
      e.preventDefault()
      action('Clicked')(e)
    },
  },
}

const argTypes = {
  as: {
    name: 'as',
    description: 'HTML element for the Action component',
    control: { type: 'text' },
  },
  actionProps: {
    name: 'actionProps',
    description: 'Properties for the Action component',
    control: { type: 'object' },
  },
}

export default {
  title: 'Structure/Cards/ManagerCard',
  component: ManagerCard,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ManagerCard" />,
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
    <ManagerCard {...args}>
      <ManagerCard.Cell>
        <StyledFlexWrapper gap={8} className="k-u-flex-justifyContent-center">
          <Text
            tag="p"
            weight="light"
            size="micro"
            className="k-u-line-height-1 k-u-margin-none"
          >
            Publiée le <strong className="k-u-weight-bold">2 février 2022</strong>
          </Text>
          <Text
            tag="p"
            weight="bold"
            size="large"
            className="k-u-line-height-1 k-u-margin-none k-u-clamp-1 k-u-clamp-2@xs-down"
          >
            Owner Contribution vel augue laoreet rutrum faucibus dolor auctor.
          </Text>
          <p className="k-u-line-height-1 k-u-flex k-u-flex-gap-noneHalf k-u-flex-alignItems-center k-u-color-grey-700 k-u-margin-none">
            <LockOutlineIcon
              width="12"
              height="12"
              color="currentColor"
              className="k-u-flex-shrink-none"
              aria-hidden
            />
            <Text weight="light" size="micro">
              Actualité réservée à mes contributeurs
            </Text>
          </p>
        </StyledFlexWrapper>
      </ManagerCard.Cell>
      <ManagerCard.LastCell>
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
      </ManagerCard.LastCell>
    </ManagerCard>
  )
}

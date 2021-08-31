import React from 'react'
import { HeaderMenu } from './index'
import { Marger, Container, LendopolisLogo } from '../../../'
import { DocsPage } from 'storybook/docs-page'

export default {
  title: 'Organisms/HeaderMenu',
  component: HeaderMenu,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'styles.js',
            'components/badge.js',
            'components/item.js',
          ]}
          importString="HeaderMenu"
        />
      ),
    },
  },
  decorators: [
    Story => (
      <div className="story-Container story-Grid story-Grid--thin">
        <Story />
      </div>
    ),
  ],
  args: {
    backgroundColors: {},
    borderSide: 'left',
    borderSideOnHover: true,
    largeItem: false,
    noBorder: false,
  },
  argTypes: {
    backgroundColors: { control: 'object' },
    borderSide: { control: 'radio', options: [ 'left',
 'right'] },
    borderSideOnHover: { control: 'boolean' },
    largeItem: { control: 'boolean' },
    noBorder: { control: 'boolean' },
  }
}

export const Default = (args) => {
  return (
    <HeaderMenu
      {...args}
    >
      <HeaderMenu.Item href="#">Item 1</HeaderMenu.Item>
      <HeaderMenu.Item href="#" isSelected>
        Item 2 (actif)
      </HeaderMenu.Item>
      <HeaderMenu.Item href="#">Item 3</HeaderMenu.Item>
      <HeaderMenu.Item href="#" modifier="light">
        Item 4 (light)
      </HeaderMenu.Item>
      <HeaderMenu.Item external href="#">
        <LendopolisLogo primaryColor="#222" />
      </HeaderMenu.Item>
      <HeaderMenu.Item external href="#">
        Item 5
      </HeaderMenu.Item>
      <HeaderMenu.Item as="button" type="button">
        Item as button
      </HeaderMenu.Item>
      <HeaderMenu.Item button href="#">
        Item with button prop
      </HeaderMenu.Item>
    </HeaderMenu>
  )
}

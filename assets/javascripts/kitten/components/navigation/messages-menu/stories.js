import React, { useState } from 'react'
import { MessagesMenu, Text } from 'kitten'
import { DocsPage } from 'storybook/docs-page'
import { action } from '@storybook/addon-actions'

export default {
  component: MessagesMenu,
  title: 'Navigation/MessagesMenu',
  parameters: {
    docs: {
      page: () => (
        <DocsPage filepath={__filename} importString="MessagesMenu" />
      ),
    },
  },
  decorators: [
    story => <div className="story-Container story-Grid">{story()}</div>,
  ],

  argTypes: {},

  args: {},
}

const discussions = [
  {
    name: 'Nikia',
    email: 'nikia@kisskissbankbank.com',
    longName: 'Nikia Smyntek',
    avatar: '/kitten-1.jpg',
    status: 'unread',
  },
  {
    name: 'Karima',
    email: 'karima@kisskissbankbank.com',
    longName: 'Karima Ricci',
    avatar: '/kitten-2.jpg',
    status: 'unread',
  },
  {
    name: 'Wade',
    email: 'wade@kisskissbankbank.com',
    longName: 'Wade Marani',
    avatar: '/kitten-3.jpg',
    status: 'read',
  },
  {
    name: 'Kasie',
    email: 'kasie@kisskissbankbank.com',
    longName: 'Kasie Sornsen',
    avatar: '/kitten-4.jpg',
    status: 'read',
  },
  {
    name: 'Angelique',
    email: 'angelique@kisskissbankbank.com',
    longName: 'Angelique Mannis',
    avatar: '/kitten-5.jpg',
    status: 'read',
  },
  {
    name: 'Kathyrn',
    email: 'kathyrn@kisskissbankbank.com',
    longName: 'Kathyrn Scarlet',
    avatar: '/kitten-6.jpg',
    status: 'read',
  },
  {
    name: 'Twyla',
    email: 'twyla@kisskissbankbank.com',
    longName: 'Twyla Lie',
    avatar: '/kitten-7.jpg',
    status: 'read',
  },
  {
    name: 'Jina',
    email: 'jina@kisskissbankbank.com',
    longName: 'Jina Wharry',
    avatar: '/kitten-8.jpg',
    status: 'read',
  },
  {
    name: 'Alta',
    email: 'alta@kisskissbankbank.com',
    longName: 'Alta Cantey',
    avatar: '/kitten-9.jpg',
    status: 'read',
  },
  {
    name: 'Zella',
    email: 'zella@kisskissbankbank.com',
    longName: 'Zella Firpo',
    avatar: '/kitten-0.jpg',
    status: 'read',
  },
  {
    name: 'Arlyne',
    email: 'arlyne@kisskissbankbank.com',
    longName: 'Arlyne Lasley',
    avatar: '/kitten-1.jpg',
    status: 'read',
  },
  {
    name: 'Martina',
    email: 'martina@kisskissbankbank.com',
    longName: 'Martina Mondello',
    avatar: '/kitten-2.jpg',
    status: 'read',
  },
  {
    name: 'Kiera',
    email: 'kiera@kisskissbankbank.com',
    longName: 'Kiera Lammy',
    avatar: '/kitten-3.jpg',
    status: 'read',
  },
  {
    name: 'Evia',
    email: 'evia@kisskissbankbank.com',
    longName: 'Evia Schlepphorst',
    avatar: '/kitten-4.jpg',
    status: 'read',
  },
  {
    name: 'Marshall',
    email: 'marshall@kisskissbankbank.com',
    longName: 'Marshall Kudley',
    avatar: '/kitten-15.jpg',
    status: 'read',
  },
]

export const Default = args => {
  const [activeDiscussion, setActiveDiscussion] = useState(discussions[1])

  return (
    <MessagesMenu {...args}>
      {discussions.map((item, index) => (
        <MessagesMenu.Message
          key={'message_' + index}
          status={item.status}
          active={activeDiscussion === item}
          onClick={event => {
            action('Clicked')({ ...item, ...event })
            setActiveDiscussion(item)
          }}
          avatarProps={{
            src: item.avatar,
          }}
        >
          <div>
            <Text weight="regular" lineHeight="1" size="micro">
              {item.longName}
            </Text>
            <Text
              weight="regular"
              lineHeight="1"
              size="nano"
              letterSpacing="10%"
              color="grey-700"
              transform="uppercase"
            >
              &nbsp;•&nbsp;Hier{' '}
              <span className="k-u-a11y-visuallyHidden">à </span>19:30
            </Text>
          </div>
          <Text
            weight="light"
            size="small"
            className="k-u-clamp-1"
            lineHeight="1"
          >
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Donec ullamcorper nulla
            non metus auctor fringilla. Nulla vitae elit libero, a pharetra
            augue. Nullam quis risus eget urna mollis ornare vel eu leo. Cum
            sociis natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus.
          </Text>
        </MessagesMenu.Message>
      ))}
    </MessagesMenu>
  )
}

import React, { useState } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import { action } from '@storybook/addon-actions'
import { DocsPage } from 'storybook/docs-page'
import { ChatLayout } from './index'
import {
  // Layout-specific components
  MessagesMenu,
  Discussion,
  // Other components
  ArrowIcon,
  FlexWrapper,
  HeaderNav,
  KissKissBankBankLogo,
  mq,
  pxToRem,
  Separator,
  Text,
} from 'kitten'

const StyledChatBox = styled.div`
  background-color: var(--color-grey-000);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: ${pxToRem(20)};

  display: flex;
  gap: ${pxToRem(20)};
  flex-direction: column;
  justify-content: center;

  .k-Discussion {
    flex: 1 0 100%;
    max-height: 100%;
  }

  @media ${mq.desktop} {
    padding: ${pxToRem(20)} ${pxToRem(25)} ${pxToRem(25)};
    border: var(--border-width) solid var(--color-grey-300);
    border-radius: var(--border-radius-l);

    .k-Discussion {
      flex: 1 0 calc(100% - ${pxToRem(32 + 20 + 1 + 20)});
      max-height: calc(100% - ${pxToRem(32 + 20 + 1 + 20)});
    }
  }
`

const StyledImg = styled.img`
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  border-radius: ${pxToRem(30)};
  object-fit: cover;
  object-position: center;
  border: var(--border-width) solid var(--color-grey-300);
`

const StyledInfoBlock = styled.div`
  display: block;
  box-sizing: border-box;
  width: 100%;
  background-color: var(--color-grey-000);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${pxToRem(20)};

  img {
    box-sizing: border-box;
    width: ${pxToRem(80)};
    height: ${pxToRem(80)};
    object-fit: cover;
    object-position: center;
    border-radius: var(--border-radius-rounded);
    background-color: var(--color-grey-000);
    border: var(--border-width) solid var(--color-grey-300);
  }

  @media ${mq.mobileAndTablet} {
    margin-top: ${pxToRem(20)};
  }

  @media ${mq.desktop} {
    border-radius: var(--border-radius-l);
    border: var(--border-width) solid var(--color-grey-300);
    padding: ${pxToRem(20)};

    img {
      margin-top: ${pxToRem(-40 - 20)};
    }
  }
`

const DiscussionTitleElement = ({ name, avatar, className }) => (
  <div
    className={classNames(
      'k-u-flex',
      'k-u-flex-gap-single',
      'k-u-flex-alignItems-center',
      className,
    )}
  >
    <StyledImg src={avatar} alt="" />
    <span className="k-u-a11y-visuallyHidden">Discussion avec</span>
    <Text weight="500" size="small" tag="h2" className="k-u-margin-none">
      {name}
    </Text>
  </div>
)

const BackElement = ({ title }) => (
  <>
    <ArrowIcon direction="left" aria-hidden />
    <span className="k-u-a11y-visuallyHidden">{title}</span>
  </>
)

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
  const [inputValue, setInputValue] = useState('')

  React.useEffect(() => {
    handleLatestReadMessage()
  }, [])

  const handleMessageClick = (e, setActiveColumn, item) => {
    setActiveColumn('chat')
    setActiveDiscussion(item)
    handleLatestReadMessage()
  }

  const handleLatestReadMessage = () => {
    // Sélectionner le dernier message lu
    const lastReadMessage = document.getElementById('message-2')

    if (!lastReadMessage) return

    lastReadMessage.focus({ preventScroll: true })

    document
      .getElementById('message-list')
      .scrollTo(0, lastReadMessage.offsetTop - 20)
  }

  return (
    <>
      <HeaderNav
        id="header_nav"
        isLogged={false}
        isFixed={true}
        quickAccessProps={{
          href: '#main',
          text: 'Aller au contenu principal',
          zIndex: 300,
        }}
        borderStyle="border"
        zIndexConfig={{
          header: 102,
          headerWithOpenMenu: 105,
        }}
      >
        <HeaderNav.Logo href="#">
          <KissKissBankBankLogo
            height="25"
            className="k-u-margin-left-double"
          />
        </HeaderNav.Logo>
      </HeaderNav>

      <ChatLayout {...args}>
        <ChatLayout.Column isPrimaryColumn title="Messagerie" name="list">
          {({ setActiveColumn }) => (
            <MessagesMenu>
              {discussions.map((item, index) => (
                <MessagesMenu.Message
                  key={'message_' + index}
                  status={item.status}
                  active={activeDiscussion === item}
                  onClick={e => handleMessageClick(e, setActiveColumn, item)}
                  avatarProps={{
                    src: item.avatar,
                  }}
                >
                  <div>
                    <Text weight="500" lineHeight="1" size="micro">
                      {item.longName}
                    </Text>
                    <Text
                      weight="500"
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
                    weight="400"
                    size="small"
                    className="k-u-clamp-1"
                    lineHeight="1.2"
                  >
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla
                    vitae elit libero, a pharetra augue. Nullam quis risus eget
                    urna mollis ornare vel eu leo. Cum sociis natoque penatibus
                    et magnis dis parturient montes, nascetur ridiculus mus.
                  </Text>
                </MessagesMenu.Message>
              ))}
            </MessagesMenu>
          )}
        </ChatLayout.Column>
        <ChatLayout.Column
          name="chat"
          hasMobileHeader
          fullWidthContent
          title={<DiscussionTitleElement {...activeDiscussion} />}
          backAction={({ setActiveColumn }) => {
            setActiveColumn('list')
            document.getElementById('list')?.focus({ preventScroll: true })
          }}
          backActionText={
            <BackElement title="Retour à la liste des messages" />
          }
          nextAction={({ setActiveColumn }) => {
            setActiveColumn('info')
            document.getElementById('info')?.focus({ preventScroll: true })
          }}
          nextActionText={
            <Text
              weight="500"
              className="k-u-link k-u-link-primary1"
              size="small"
            >
              Plus de détails
            </Text>
          }
        >
          <StyledChatBox>
            <DiscussionTitleElement
              {...activeDiscussion}
              className="k-u-hidden@m-down"
            />

            <Separator className="k-u-hidden@m-down" />

            <Discussion>
              <Discussion.List id="message-list">
                <Discussion.Message tabIndex="-1" id="message-1">
                  <Discussion.Message.Avatar src={activeDiscussion.avatar} />
                  <Discussion.Message.Header>
                    <Text weight="500" lineHeight="1">
                      {activeDiscussion.longName}
                    </Text>
                    <Text
                      weight="400"
                      lineHeight="1"
                      size="micro"
                      color="grey-700"
                    >
                      &nbsp;•&nbsp;Avant-Hier{' '}
                      <span className="k-u-a11y-visuallyHidden">à </span>19:30
                    </Text>
                  </Discussion.Message.Header>
                  <Discussion.Message.Content>
                    Donec sed odio dui. Nullam id dolor id nibh ultricies
                    vehicula ut id elit. Maecenas faucibus mollis interdum.
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi
                    leo risus, porta ac consectetur ac, vestibulum at eros. Sed
                    posuere consectetur est at lobortis.
                  </Discussion.Message.Content>
                </Discussion.Message>
                <Discussion.Message tabIndex="-1" id="message-2">
                  <Discussion.Message.Avatar src="/kitten-0.jpg" />
                  <Discussion.Message.Header>
                    <Text weight="500" lineHeight="1">
                      Moi
                    </Text>
                    <Text
                      weight="400"
                      lineHeight="1"
                      size="micro"
                      color="grey-700"
                    >
                      &nbsp;•&nbsp;Hier{' '}
                      <span className="k-u-a11y-visuallyHidden">à </span>10:00
                    </Text>
                  </Discussion.Message.Header>
                  <Discussion.Message.Content>
                    Nullam quis risus eget urna mollis ornare vel eu leo. Nulla
                    vitae elit libero, a pharetra augue.
                  </Discussion.Message.Content>
                </Discussion.Message>
                <Discussion.Message tabIndex="-1" id="message-3">
                  <Discussion.Message.Avatar src={activeDiscussion.avatar} />
                  <Discussion.Message.Header>
                    <Text weight="500" lineHeight="1">
                      {activeDiscussion.longName}
                    </Text>
                    <Text
                      weight="400"
                      lineHeight="1"
                      size="micro"
                      activeColEl
                      color="grey-700"
                    >
                      &nbsp;•&nbsp;Hier{' '}
                      <span className="k-u-a11y-visuallyHidden">à </span>18:30
                    </Text>
                  </Discussion.Message.Header>
                  <Discussion.Message.Content>
                    Nullam id dolor id nibh ultricies vehicula ut id elit. Cras
                    mattis consectetur purus sit amet fermentum. Integer posuere
                    erat a ante venenatis dapibus posuere velit aliquet.
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur et. Integer posuere erat a ante venenatis
                    dapibus posuere velit aliquet. Vestibulum id ligula porta
                    felis euismod semper. Vestibulum id ligula porta felis
                    euismod semper.
                  </Discussion.Message.Content>
                </Discussion.Message>
              </Discussion.List>
              <Discussion.Form
                onSubmit={e => {
                  e.preventDefault()
                  action('Form submit')(e)
                }}
                inputProps={{
                  'aria-label': 'Texte à envoyer',
                  placeholder: 'Envoyer un message',
                  value: inputValue,
                  onChange: e => {
                    setInputValue(e.target.value)
                  },
                }}
                buttonProps={{
                  'aria-label': 'Envoyer',
                  onClick: e => {
                    action('Click envoyer')(e)
                    setInputValue('')
                  },
                  disabled: inputValue.length < 1,
                }}
              />
            </Discussion>
          </StyledChatBox>
        </ChatLayout.Column>
        <ChatLayout.Column
          name="info"
          hasMobileHeader
          title={
            <Text
              weight="500"
              size="small"
              tag="h2"
              className="k-u-margin-none"
            >
              Détails de {activeDiscussion.longName}
            </Text>
          }
          centeredHeader
          backAction={({ setActiveColumn }) => {
            setActiveColumn('chat')
            document.getElementById('chat')?.focus({ preventScroll: true })
          }}
          backActionText={<BackElement title="Retour à la discussion" />}
        >
          <StyledInfoBlock>
            <img src={activeDiscussion.avatar} alt="" />
            <FlexWrapper gap={5} className="k-u-flex-alignItems-center">
              <Text weight="500" lineHeight="1" size="medium">
                {activeDiscussion.longName}
              </Text>
              <Text weight="400" lineHeight="1" size="micro">
                {activeDiscussion.name}
              </Text>
              <Text weight="400" lineHeight="1" size="nano" color="grey-700">
                {activeDiscussion.email}
              </Text>
            </FlexWrapper>
          </StyledInfoBlock>
        </ChatLayout.Column>
      </ChatLayout>
    </>
  )
}

export default {
  component: ChatLayout,
  title: 'Layout/ChatLayout',
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="ChatLayout" />,
    },
  },

  args: {},

  argTypes: {},
}

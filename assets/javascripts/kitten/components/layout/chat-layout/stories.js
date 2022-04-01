import React, { useState } from 'react'
import styled from 'styled-components'
import { DocsPage } from 'storybook/docs-page'
import { ChatLayout } from './index'
import {
  HeaderNav,
  KissKissBankBankLogo,
  pxToRem,
  FlexWrapper,
  Text,
  ArrowIcon,
  mq,
  MessagesMenu,
} from 'kitten'

const StyledChatBox = styled.div`
  background-color: var(--color-grey-000);
  border: var(--border-width) solid var(--color-grey-300);
  width: 100%;
  height: 100%;
  border-radius: var(--border-radius-l);

  display: flex;
  align-items: center;
  justify-content: center;
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

  @media ${mq.desktop} {
    border-radius: var(--border-radius-l);
    border: var(--border-width) solid var(--color-grey-300);
    padding: ${pxToRem(20)};

    img {
      margin-top: ${pxToRem(-40 - 20)};
    }
  }
`

const DiscussionTitleElement = ({ name, avatar }) => (
  <div className="k-u-flex k-u-flex-gap-single k-u-flex-alignItems-center">
    <StyledImg src={avatar} alt="" />
    <Text weight="regular" size="small">
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
    name: 'alex',
    email: 'alex@kisskissbankbank.com',
    longName: 'Alex V.',
    avatar: '/kitten-1.jpg',
    status: 'unread',
  },
  {
    name: 'claude',
    email: 'claude@kisskissbankbank.com',
    longName: 'Claude A.',
    avatar: '/kitten-2.jpg',
    status: 'unread',
  },
  {
    name: 'dominique',
    email: 'dominique@kisskissbankbank.com',
    longName: 'Dominique C.',
    avatar: '/kitten-3.jpg',
    status: 'read',
  },
  {
    name: 'alex',
    email: 'alex@kisskissbankbank.com',
    longName: 'Alex V.',
    avatar: '/kitten-4.jpg',
    status: 'read',
  },
  {
    name: 'claude',
    email: 'claude@kisskissbankbank.com',
    longName: 'Claude A.',
    avatar: '/kitten-5.jpg',
    status: 'read',
  },
  {
    name: 'dominique',
    email: 'dominique@kisskissbankbank.com',
    longName: 'Dominique C.',
    avatar: '/kitten-6.jpg',
    status: 'read',
  },
  {
    name: 'alex',
    email: 'alex@kisskissbankbank.com',
    longName: 'Alex V.',
    avatar: '/kitten-7.jpg',
    status: 'read',
  },
  {
    name: 'claude',
    email: 'claude@kisskissbankbank.com',
    longName: 'Claude A.',
    avatar: '/kitten-8.jpg',
    status: 'read',
  },
  {
    name: 'dominique',
    email: 'dominique@kisskissbankbank.com',
    longName: 'Dominique C.',
    avatar: '/kitten-9.jpg',
    status: 'read',
  },
  {
    name: 'alex',
    email: 'alex@kisskissbankbank.com',
    longName: 'Alex V.',
    avatar: '/kitten-0.jpg',
    status: 'read',
  },
  {
    name: 'claude',
    email: 'claude@kisskissbankbank.com',
    longName: 'Claude A.',
    avatar: '/kitten-1.jpg',
    status: 'read',
  },
  {
    name: 'dominique',
    email: 'dominique@kisskissbankbank.com',
    longName: 'Dominique C.',
    avatar: '/kitten-2.jpg',
    status: 'read',
  },
  {
    name: 'alex',
    email: 'alex@kisskissbankbank.com',
    longName: 'Alex V.',
    avatar: '/kitten-3.jpg',
    status: 'read',
  },
  {
    name: 'claude',
    email: 'claude@kisskissbankbank.com',
    longName: 'Claude A.',
    avatar: '/kitten-4.jpg',
    status: 'read',
  },
  {
    name: 'dominique',
    email: 'dominique@kisskissbankbank.com',
    longName: 'Dominique C.',
    avatar: '/kitten-15.jpg',
    status: 'read',
  },
]

export const Default = args => {
  const [activeDiscussion, setActiveDiscussion] = useState(discussions[1])

  return (
    <>
      <HeaderNav
        id="header_nav"
        isLogged={false}
        isFixed={true}
        quickAccessProps={{
          href: '#mainContent',
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
                  key={"message_" + index}
                  status={item.status}
                  active={activeDiscussion === item}
                  onClick={() => {
                    setActiveColumn('chat')
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
                    Fusce dapibus, tellus ac cursus commodo, tortor mauris
                    condimentum nibh, ut fermentum massa justo sit amet risus.
                    Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                    Donec ullamcorper nulla non metus auctor fringilla. Nulla
                    vitae elit libero, a pharetra augue. Nullam quis risus eget
                    urna mollis ornare vel eu leo. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus.
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
          backAction={({ setActiveColumn }) => setActiveColumn('list')}
          backActionText={
            <BackElement title="Retour à la liste des messages" />
          }
          nextAction={({ setActiveColumn }) => setActiveColumn('info')}
          nextActionText={
            <Text
              weight="regular"
              className="k-u-link k-u-link-primary1"
              size="small"
            >
              Plus de détails
            </Text>
          }
        >
          <StyledChatBox>
            <div className="k-u-hidden@m-down">
              {<DiscussionTitleElement {...activeDiscussion} />}
            </div>
            Discussion avec {activeDiscussion.longName}
          </StyledChatBox>
        </ChatLayout.Column>
        <ChatLayout.Column
          name="info"
          hasMobileHeader
          title={
            <Text weight="regular" size="small">
              Détails de {activeDiscussion.longName}
            </Text>
          }
          centeredHeader
          backAction={({ setActiveColumn }) => setActiveColumn('chat')}
          backActionText={<BackElement title="Retour à la discussion" />}
        >
          <StyledInfoBlock>
            <img src={activeDiscussion.avatar} alt="" />
            <FlexWrapper gap={5} className="k-u-flex-alignItems-center">
              <Text weight="regular" lineHeight="1" size="medium">
                {activeDiscussion.longName}
              </Text>
              <Text weight="light" lineHeight="1" size="micro">
                {activeDiscussion.name}
              </Text>
              <Text weight="light" lineHeight="1" size="nano" color="grey-700">
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

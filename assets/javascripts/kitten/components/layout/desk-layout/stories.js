import React from 'react'
import { DeskLayout } from './index'
import { DocsPage } from 'storybook/docs-page'
import {
  DeskMenu,
  Text,
  HeaderNav,
  KissKissBankBankLogo,
  KissKissLoadingAnimation,
} from 'kitten'
import { WithContributions } from './stories/with-contributions'
import { WithProjects } from './stories/with-projects'
import { WithForm } from './stories/with-form'

export default {
  title: 'Layout/DeskLayout',
  component: DeskLayout,
  parameters: {
    docs: {
      page: () => <DocsPage filepath={__filename} importString="DeskLayout" />,
    },
  },
  args: {
    fullWidth: false,
  },
  argTypes: {
    fullWidth: { control: 'boolean' },
  },
}

const Menu = props => {
  return (
    <DeskMenu {...props}>
      <DeskMenu.Header
        imageProps={{
          alt: '',
          src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
        }}
      >
        <Text className="k-u-block k-u-ellipsis" weight="regular">
          Lorem-Ipsum
        </Text>
        <Text className="k-u-block k-u-ellipsis" size="micro">
          Lorem I. Psum
        </Text>
        <Text
          className="k-u-block k-u-ellipsis"
          cssColor="var(--color-grey-700)"
          size="nano"
        >
          lorem.ipsum@kisskissbankbank.com
        </Text>
      </DeskMenu.Header>
      <DeskMenu.List>
        <DeskMenu.Item isActive href="#">
          Mon profil
        </DeskMenu.Item>
        <DeskMenu.Item href="#">Vérification d’identité</DeskMenu.Item>
        <DeskMenu.Item href="#">Mes contributions</DeskMenu.Item>
        <DeskMenu.Item href="#">Mes projets</DeskMenu.Item>
        <DeskMenu.Item href="https://www.kisskissbankbank.com">
          Mes favoris
        </DeskMenu.Item>
      </DeskMenu.List>
    </DeskMenu>
  )
}

const VisitorMenu = props => {
  return (
    <DeskMenu {...props}>
      <DeskMenu.Header
        imageProps={{
          alt: '',
          src: `/kitten-${Math.floor(Math.random() * 10)}.jpg`,
        }}
      >
        <Text className="k-u-block k-u-ellipsis" weight="regular">
          Lorem-Ipsum
        </Text>
      </DeskMenu.Header>
      <DeskMenu.List>
        <DeskMenu.Item linkStyle href="https://www.kisskissbankbank.com">
          Mes favoris
        </DeskMenu.Item>
      </DeskMenu.List>
    </DeskMenu>
  )
}

export const Default = args => (
  <div>
    <HeaderNav
      id="header_id"
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
      size="small"
      borderStyle="border"
      zIndexConfig={{
        header: 102,
        headerWithOpenMenu: 105,
      }}
    >
      <HeaderNav.Logo href="#">
        <KissKissBankBankLogo height="25" className="k-u-margin-left-double" />
      </HeaderNav.Logo>
    </HeaderNav>
    <DeskLayout
      {...args}
      menu={<Menu />}
      menuProps={{ className: 'k-u-hidden@m-down' }}
    >
      <p className="k-u-margin-top-none">
        Sed posuere consectetur est at lobortis. Cras mattis consectetur purus
        sit amet fermentum. Curabitur blandit tempus porttitor. Nullam quis
        risus eget urna mollis ornare vel eu leo.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo
        risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
        massa justo sit amet risus. Etiam porta sem malesuada magna mollis
        euismod. Curabitur blandit tempus porttitor.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et. Sed posuere
        consectetur est at lobortis. Vestibulum id ligula porta felis euismod
        semper.
      </p>
      <p>
        Sed posuere consectetur est at lobortis. Cras mattis consectetur purus
        sit amet fermentum. Curabitur blandit tempus porttitor. Nullam quis
        risus eget urna mollis ornare vel eu leo.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo
        risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
        massa justo sit amet risus. Etiam porta sem malesuada magna mollis
        euismod. Curabitur blandit tempus porttitor.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et. Sed posuere
        consectetur est at lobortis. Vestibulum id ligula porta felis euismod
        semper.
      </p>
      <p>
        Sed posuere consectetur est at lobortis. Cras mattis consectetur purus
        sit amet fermentum. Curabitur blandit tempus porttitor. Nullam quis
        risus eget urna mollis ornare vel eu leo.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo
        risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
        massa justo sit amet risus. Etiam porta sem malesuada magna mollis
        euismod. Curabitur blandit tempus porttitor.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et. Sed posuere
        consectetur est at lobortis. Vestibulum id ligula porta felis euismod
        semper.
      </p>
      <p>
        Sed posuere consectetur est at lobortis. Cras mattis consectetur purus
        sit amet fermentum. Curabitur blandit tempus porttitor. Nullam quis
        risus eget urna mollis ornare vel eu leo.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo
        risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
        tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
        massa justo sit amet risus. Etiam porta sem malesuada magna mollis
        euismod. Curabitur blandit tempus porttitor.
      </p>
      <p className="k-u-margin-bottom-none">
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
        Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo
        cursus magna, vel scelerisque nisl consectetur et. Sed posuere
        consectetur est at lobortis. Vestibulum id ligula porta felis euismod
        semper.
      </p>
    </DeskLayout>
  </div>
)

export const WithContributionsContent = args => (
  <div>
    <HeaderNav
      id="header_id"
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
      size="small"
      borderStyle="border"
      zIndexConfig={{
        header: 102,
        headerWithOpenMenu: 105,
      }}
    >
      <HeaderNav.Logo href="#">
        <KissKissBankBankLogo height="25" className="k-u-margin-left-double" />
      </HeaderNav.Logo>
    </HeaderNav>
    <DeskLayout
      {...args}
      fullWidth
      menu={<Menu />}
      menuProps={{ className: 'k-u-hidden@m-down' }}
    >
      <WithContributions />
    </DeskLayout>
  </div>
)

export const WithProjectsContent = args => (
  <div>
    <HeaderNav
      id="header_id"
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
      size="small"
      borderStyle="border"
      zIndexConfig={{
        header: 102,
        headerWithOpenMenu: 105,
      }}
    >
      <HeaderNav.Logo href="#">
        <KissKissBankBankLogo height="25" className="k-u-margin-left-double" />
      </HeaderNav.Logo>
    </HeaderNav>
    <DeskLayout
      {...args}
      fullWidth
      menu={<VisitorMenu />}
      menuProps={{ className: 'k-u-hidden@m-down' }}
    >
      <WithProjects />
    </DeskLayout>
  </div>
)

export const WithFormContent = args => (
  <div>
    <HeaderNav
      id="header_id"
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
      size="small"
      borderStyle="border"
      zIndexConfig={{
        header: 102,
        headerWithOpenMenu: 105,
      }}
    >
      <HeaderNav.Logo href="#">
        <KissKissBankBankLogo height="25" className="k-u-margin-left-double" />
      </HeaderNav.Logo>
    </HeaderNav>
    <DeskLayout
      {...args}
      menu={<Menu />}
      menuProps={{ className: 'k-u-hidden@m-down' }}
    >
      <WithForm />
    </DeskLayout>
  </div>
)

export const Loading = args => (
  <div>
    <HeaderNav
      id="header_id"
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
      size="small"
      borderStyle="border"
      zIndexConfig={{
        header: 102,
        headerWithOpenMenu: 105,
      }}
    >
      <HeaderNav.Logo href="#">
        <KissKissBankBankLogo height="25" className="k-u-margin-left-double" />
      </HeaderNav.Logo>
    </HeaderNav>
    <DeskLayout
      {...args}
      menu={<Menu />}
      menuProps={{ className: 'k-u-hidden@m-down' }}
      loading
      loaderComponent={<KissKissLoadingAnimation />}
    />
  </div>
)

import React, { useState } from 'react'
import styled from 'styled-components'

import { DashboardLayout } from './index'

import {
  AvatarWithTextAndBadge,
  Text,
  Title,
  Button,
  GlobeIcon,
  COLORS,
  pxToRem,
  ScreenConfig,
  StatusWithBullet,
  DashboardMenu,
  HomeIcon,
  TagIcon,
  FilterIcon,
  FileIcon,
  LoudspeakerIcon,
  ShieldIcon,
  PeopleIcon,
  StatsIcon,
  SpeechBubbleIcon,
  HeaderNav,
  HeaderMenu,
  KissKissBankBankLogo,
  domElementHelper,
  PasswordIcon,
  DropdownSelectWithInput,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  Alert,
  useWindowWidth,
  useDeepCompareEffect,
  TextCopy,
  FlexWrapper,
  RewardSummaryCard,
  useRewardSummaryCardResizeObserver,
  DropdownMenu,
  EllipsisIcon,
} from '../../..'

import { Default as Table } from '../../organisms/tables/list-table/list-table.stories.js'
import { DocsPage } from 'storybook/docs-page'

const options = [
  {
    value: 'facebook',
    label: 'https://www.facebook.com/',
    icon: <FacebookIcon width="8" height="15" />,
  },
  {
    value: 'twitter',
    label: 'https://www.twitter.com/',
    icon: <TwitterIcon width="15" height="14" />,
  },
  {
    value: 'linkedin',
    label: 'https://www.linkedin.com/',
    icon: <LinkedinIcon width="14" height="14" />,
  },
  {
    value: 'instagram',
    label: 'https://www.instagram.com/',
    icon: <InstagramIcon width="17" height="17" />,
  },
  {
    value: 'youtube',
    label: 'https://www.youtube.com/',
    icon: <YoutubeIcon width="17" height="12" />,
  },
  {
    value: 'website',
    label: 'https://www.…',
    icon: <GlobeIcon width="16" height="16" />,
  },
]

const HEADER_NAV_ID = 'kkbbAndCoHeaderNav'
const getElementById = id => document.getElementById(id)
const getComputedWidthElement = id =>
  domElementHelper.getComputedWidth(getElementById(id))

const CardHolder = styled.div`
  display: grid;
  gap: ${pxToRem(10)};

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    gap: ${pxToRem(15)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${pxToRem(30)};
  }

  > div {
    border: ${pxToRem(2)} solid ${COLORS.line1};
    border-radius: ${pxToRem(6)};
    padding: ${pxToRem(20)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      border-radius: ${pxToRem(8)};
      padding: ${pxToRem(30)};
    }
  }
`

export default {
  title: 'Layout/DashboardLayout',
  component: DashboardLayout,
  parameters: {
    docs: {
      page: () => (
        <DocsPage
          filepath={__filename}
          filenames={[
            'index.js',
            'styles.js',
            'flow/index.js',
            'flow/side-card.js',
            'flow/side-modal.js',
          ]}
          importString="DashboardLayout"
        />
      ),
    },
  },
  args: {
    quickAccessLinkText: 'Accéder au contenu',
    backLinkProps: {
      href: '#',
      children: 'Retour au site',
    },
    buttonProps: {
      openLabel: 'Ouvrir le menu',
      closeLabel: 'Fermer le menu',
    },
    fullHeightContent: undefined,
    selectedView: 'table',
    displayHeader: true,
    displayAlerts: false,
    status: 'success',
    flowProps: {
      flowLoading: false,
      flowShowTwoButtons: false,
      flowShowUnsavedText: false,
    },
    toasterIsOpen: false,
  },
  argTypes: {
    quickAccessLinkText: { control: 'text' },
    backLinkProps: { control: 'object' },
    buttonProps: { control: 'object' },
    fullHeightContent: {
      description:
        'For the purpose of the story, depends on the type of content',
      control: 'boolean',
    },
    selectedView: {
      name: 'Selected View (story prop)',
      control: 'radio',
      options: ['flow', 'dashboard', 'table', 'rewards'],
    },
    displayHeader: { name: 'displayHeader (story prop)', control: 'boolean' },
    displayAlerts: { name: 'displayAlerts (story prop)', control: 'boolean' },
    toasterIsOpen: { name: 'toasterIsOpen (story prop)', control: 'boolean' },
    status: {
      name: 'Project status (story prop)',
      control: 'radio',
      options: ['danger', 'success', 'warning', 'neutral', 'none'],
    },
    flowProps: { name: 'Flow Props (story prop)', control: 'object' },
  },
}

export const Default = ({
  flowProps,
  status,
  selectedView,
  displayAlerts,
  displayHeader,
  toasterIsOpen,
  ...args
}) => {
  return (
    <DashboardLayout fullHeightContent={selectedView === 'flow'} {...args}>
      {displayHeader && (
        <DashboardLayout.SiteHeader className="k-u-hidden@m-down">
          <SiteHeaderComponent />
        </DashboardLayout.SiteHeader>
      )}

      <DashboardLayout.Header>
        <AvatarWithTextAndBadge>
          <AvatarWithTextAndBadge.Image
            className="k-u-hidden@l-up"
            src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
            alt=""
          />
          <AvatarWithTextAndBadge.Image
            className="k-u-hidden@m-down"
            src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
            alt=""
            size="big"
          />

          <AvatarWithTextAndBadge.Text
            withEllipsisOverflow
            className="k-u-color-background1"
          >
            <Text lineHeight="normal" weight="regular">
              T-shirts brodés Free Boobs Club
            </Text>
            <br />
            <StatusWithBullet
              as="span"
              weight="light"
              size="micro"
              statusType={status}
            >
              Prêt a être partagé avec un texte long pour tester l’ellipse
            </StatusWithBullet>
          </AvatarWithTextAndBadge.Text>
        </AvatarWithTextAndBadge>
      </DashboardLayout.Header>
      <DashboardLayout.SideContent>
        {({ closeSideBar }) => {
          return (
            <DashboardMenu>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&args=selectedView:dashboard&viewMode=story"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&args=selectedView:dashboard&viewMode=story'
                }
                icon={() => <HomeIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Accueil
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&args=selectedView:table&viewMode=story"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&args=selectedView:table&viewMode=story'
                }
                icon={() => <PeopleIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Contributeurs
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&args=selectedView:rewards&viewMode=story&custom=a"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&args=selectedView:rewards&viewMode=story&custom=a'
                }
                icon={() => <TagIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Contreparties
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story&custom=b"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story&custom=b'
                }
                icon={() => <FilterIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Paramètres
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story'
                }
                icon={() => <FileIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Page Projet
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&args=selectedView:flow&knob-loading=true&viewMode=story"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&args=selectedView:flow&knob-loading=true&viewMode=story'
                }
                icon={() => <StatsIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Statistiques
              </DashboardMenu.Item>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&args=selectedView:flow&knob-loading=true&viewMode=story&custom=1"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&args=selectedView:flow&knob-loading=true&viewMode=story&custom=1'
                }
                icon={() => <LoudspeakerIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Marketing
              </DashboardMenu.Item>
              <DashboardMenu.Expandable
                title="Admin"
                icon={() => <ShieldIcon color="currentColor" />}
              >
                <DashboardMenu.Item
                  href="?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story&custom=1"
                  isActive={
                    window.location.search ===
                    '?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story&custom=1'
                  }
                  onClick={() => closeSideBar()}
                >
                  Destinataire des fonds
                </DashboardMenu.Item>
                <DashboardMenu.Item
                  href="?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story&custom=2"
                  isActive={
                    window.location.search ===
                    '?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story&custom=2'
                  }
                  onClick={() => closeSideBar()}
                >
                  Confirmation d'identité
                </DashboardMenu.Item>
                <DashboardMenu.Item
                  href="?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story&custom=3"
                  isActive={
                    window.location.search ===
                    '?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story&custom=3'
                  }
                  onClick={() => closeSideBar()}
                >
                  Documents justificatifs
                </DashboardMenu.Item>
              </DashboardMenu.Expandable>
              <DashboardMenu.Item
                href="?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story&custom=4"
                isActive={
                  window.location.search ===
                  '?id=layout-dashboardlayout--default&args=selectedView:flow&viewMode=story&custom=4'
                }
                icon={() => <SpeechBubbleIcon color="currentColor" />}
                onClick={() => closeSideBar()}
              >
                Actualités
              </DashboardMenu.Item>
            </DashboardMenu>
          )
        }}
      </DashboardLayout.SideContent>
      <DashboardLayout.SideFooter>
        <Button modifier="boron" fluid variant="orion">
          <PasswordIcon />
          <span>Voir ma page projet</span>
        </Button>
      </DashboardLayout.SideFooter>

      {displayAlerts && (
        <DashboardLayout.Alerts>
          <Alert closeButton info>
            Voilà une info
          </Alert>
          <Alert closeButton error>
            Voilà une alerte
          </Alert>
        </DashboardLayout.Alerts>
      )}

      {selectedView === 'flow' && <FlowExample {...flowProps} />}
      {selectedView === 'dashboard' && <DashExample />}
      {selectedView === 'table' && <TableExample toasterIsOpen={toasterIsOpen} />}
      {selectedView === 'rewards' && <RewardsExample />}
    </DashboardLayout>
  )
}

const DashExample = () => (
  <>
    <div
      className="k-u-flex k-u-flex-direction-column@m-down k-u-flex-alignItems-start k-u-flex-justifyContent-sb k-u-margin-bottom-triple"
      style={{ '--gap': '30px' }}
    >
      <Title modifier="quinary" className="k-u-margin-none">
        Curabitur blandit tempus porttitor.
      </Title>
      <Button borderRadius={6}>
        <GlobeIcon width="16" height="16" />
        <span>Voir ma page projet</span>
      </Button>
    </div>
    <CardHolder>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </CardHolder>
  </>
)

const TableExample = ({toasterIsOpen}) => {
  const [isOpen, setOpen] = useState(false)


  return (
    <>
      <div>
        <Title
          modifier="quinary"
          className="k-u-margin-none k-u-margin-bottom-triple"
        >
          Curabitur blandit tempus porttitor.
        </Title>
        <Button variant="orion" onClick={() => setOpen(!isOpen)}>
          Toggle Toaster
        </Button>
      </div>
      <div className="k-DashboardLayout__fullWidth">
        <Table />
      </div>
      <DashboardLayout.Toaster isOpen={toasterIsOpen || isOpen}>
        <FlexWrapper gap={10} direction="row" className="k-u-flex-alignItems-center">
          <div style={{flex: '1 0 auto'}} className="k-u-hidden@xs-down">
            <Text color="background1" size="tiny" weight="regular">Text</Text>
          </div>
          <Button modifier="boron" variant="orion" size="tiny" className="k-u-hidden@m-down">
            Hello
          </Button>
          <Button modifier="helium" variant="orion" size="tiny">
            Hello
          </Button>
        </FlexWrapper>
      </DashboardLayout.Toaster>
    </>
  )
}
const RewardsExample = () => {
  const { ref, size } = useRewardSummaryCardResizeObserver()

  return (
    <div ref={ref}>
      <Title
        modifier="quinary"
        className="k-u-margin-none k-u-margin-bottom-triple"
      >
        Curabitur blandit tempus porttitor.
      </Title>

      <FlexWrapper gap={15}>
        <RewardSummaryCard.TitleBar
          values={{
            image: 'Visuel de la contrepartie',
            title: 'Titre de la contrepartie',
            amount: 'Montant',
            contributions: 'Contributions',
            availability: 'Disponibilités',
          }}
          className="k-u-hidden@xs-down k-u-margin-bottom-double"
          id="RewardSummaryList"
          size={size}
        />

        <RewardSummaryCard size={size}>
          <RewardSummaryCard.Image>
            <img alt="" src="/kitten.jpg" />
          </RewardSummaryCard.Image>
          <div style={{ display: 'grid' }}>
            <RewardSummaryCard.Title aria-describedby="RewardSummaryList-title">
              Stickers Free Boobs Club Stickers Free Boobs Club Stickers Free
              Boobs Club.
            </RewardSummaryCard.Title>
            <RewardSummaryCard.TitleTag text="Contrepartie star" />
          </div>
          <RewardSummaryCard.Amount aria-describedby="RewardSummaryList-amount">
            10 000€
          </RewardSummaryCard.Amount>
          <RewardSummaryCard.Contribution aria-describedby="RewardSummaryList-contribution">
            1 468 000
          </RewardSummaryCard.Contribution>
          <RewardSummaryCard.Availability aria-describedby="RewardSummaryList-availability">
            Illimitée
          </RewardSummaryCard.Availability>
          <RewardSummaryCard.Options>
            <DropdownMenu
              button={() => <EllipsisIcon color={COLORS.font1} />}
              menuPosition="left"
            >
              <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
              <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
              <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
              <DropdownMenu.Link>Supprimer</DropdownMenu.Link>
            </DropdownMenu>
          </RewardSummaryCard.Options>
        </RewardSummaryCard>

        <RewardSummaryCard size={size}>
          <div style={{ display: 'grid' }}>
            <RewardSummaryCard.Title aria-describedby="RewardSummaryList-title">
              Stickers Free Boobs Club
            </RewardSummaryCard.Title>
            <RewardSummaryCard.TitleTag text="Contrepartie" />
          </div>
          <RewardSummaryCard.Amount aria-describedby="RewardSummaryList-amount">
            10 000€
          </RewardSummaryCard.Amount>
          <RewardSummaryCard.Contribution aria-describedby="RewardSummaryList-contribution">
            1 468 000
          </RewardSummaryCard.Contribution>
          <RewardSummaryCard.Availability aria-describedby="RewardSummaryList-availability">
            Illimitée
          </RewardSummaryCard.Availability>
          <RewardSummaryCard.Options>
            <DropdownMenu
              button={() => <EllipsisIcon color={COLORS.font1} />}
              menuPosition="left"
            >
              <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
              <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
              <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
              <DropdownMenu.Link>Supprimer</DropdownMenu.Link>
            </DropdownMenu>
          </RewardSummaryCard.Options>
        </RewardSummaryCard>

        <RewardSummaryCard size={size}>
          <RewardSummaryCard.Image>
            <img alt="" src="/kitten.jpg" />
          </RewardSummaryCard.Image>
          <div style={{ display: 'grid' }}>
            <RewardSummaryCard.Title aria-describedby="RewardSummaryList-title">
              Stickers Free Boobs Club
            </RewardSummaryCard.Title>
            <RewardSummaryCard.TitleTag text="Contrepartie star" />
          </div>
          <RewardSummaryCard.Amount aria-describedby="RewardSummaryList-amount">
            10 000€
          </RewardSummaryCard.Amount>
          <RewardSummaryCard.Contribution aria-describedby="RewardSummaryList-contribution">
            1 468 000
          </RewardSummaryCard.Contribution>
          <RewardSummaryCard.Availability aria-describedby="RewardSummaryList-availability">
            Illimitée
          </RewardSummaryCard.Availability>
          <RewardSummaryCard.Options>
            <DropdownMenu
              button={() => <EllipsisIcon color={COLORS.font1} />}
              menuPosition="left"
            >
              <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
              <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
              <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
              <DropdownMenu.Link>Supprimer</DropdownMenu.Link>
            </DropdownMenu>
          </RewardSummaryCard.Options>
        </RewardSummaryCard>
        <RewardSummaryCard size={size}>
          <div style={{ display: 'grid' }}>
            <RewardSummaryCard.Title aria-describedby="RewardSummaryList-title">
              Stickers Free Boobs Club
            </RewardSummaryCard.Title>
          </div>
          <RewardSummaryCard.Amount aria-describedby="RewardSummaryList-amount">
            10 000€
          </RewardSummaryCard.Amount>
          <RewardSummaryCard.Contribution aria-describedby="RewardSummaryList-contribution">
            1 468 000
          </RewardSummaryCard.Contribution>
          <RewardSummaryCard.Availability aria-describedby="RewardSummaryList-availability">
            Illimitée
          </RewardSummaryCard.Availability>
          <RewardSummaryCard.Options>
            <DropdownMenu
              button={() => <EllipsisIcon color={COLORS.font1} />}
              menuPosition="left"
            >
              <DropdownMenu.Link href="#">Editer</DropdownMenu.Link>
              <DropdownMenu.Link href="#">Dupliquer</DropdownMenu.Link>
              <DropdownMenu.Link href="#">Désactiver</DropdownMenu.Link>
              <DropdownMenu.Link>Supprimer</DropdownMenu.Link>
            </DropdownMenu>
          </RewardSummaryCard.Options>
        </RewardSummaryCard>
      </FlexWrapper>
    </div>
  )
}

const FlowExample = ({
  flowLoading,
  flowShowTwoButtons,
  flowShowUnsavedText,
}) => (
  <DashboardLayout.Flow loading={flowLoading}>
    <DashboardLayout.Flow.Content>
      <Title
        modifier="quinary"
        className="k-u-margin-none k-u-margin-bottom-triple"
      >
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </Title>
      <p className="k-u-weight-light">
        Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor.
      </p>
      <DropdownSelectWithInput
        id="DropdownSelectWithInput"
        hideLabel
        labelText="Facebook"
        options={options}
        highlightOptionBox
        defaultSelectedValue="facebook"
        deactivateDropdown
        className="k-u-margin-bottom-triple"
      />
      <p className="k-u-weight-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
        sem nec elit. Sed posuere consectetur est at lobortis. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Etiam porta sem malesuada magna
        mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <TextCopy
        variant="orion"
        buttonText="Copier l’URL"
        textToCopy="https://www.kisskissbankbank.com/fr/projects/test-de-campagne-par-joachim/?secret-reward=hileo6"
      >
        https://www.kisskissbankbank.com/fr/projects/test-de-campagne-par-joachim/?secret-reward=hileo6
      </TextCopy>
      <p className="k-u-weight-light">
        Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta
        gravida at eget metus. Maecenas sed diam eget risus varius blandit sit
        amet non magna. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>
      <p className="k-u-weight-light">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed
        consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum.
      </p>
      <p className="k-u-weight-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo
        quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna
        mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
        sem nec elit.
      </p>
      <p className="k-u-weight-light">
        Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta
        gravida at eget metus. Maecenas sed diam eget risus varius blandit sit
        amet non magna. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>
      <p className="k-u-weight-light">
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed
        consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum.
      </p>
      <p className="k-u-weight-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo
        quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna
        mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
        sem nec elit.
      </p>
    </DashboardLayout.Flow.Content>
    <DashboardLayout.Flow.Aside
      mobileAsideProps={{
        openLabel: 'Open help',
        closeLabel: 'Close help',
      }}
    >
      <DashboardLayout.Flow.AsideCard>
        <DashboardLayout.Flow.AsideCard.Title>
          Side content in Title
        </DashboardLayout.Flow.AsideCard.Title>
        <DashboardLayout.Flow.AsideCard.Paragraph>
          Side content in Paragraph
        </DashboardLayout.Flow.AsideCard.Paragraph>
        <DashboardLayout.Flow.AsideCard.List>
          <li className="k-u-weight-light">Side content in List (item 1)</li>
          <li className="k-u-weight-light">Side content in List (item 2)</li>
        </DashboardLayout.Flow.AsideCard.List>
      </DashboardLayout.Flow.AsideCard>
    </DashboardLayout.Flow.Aside>
    <DashboardLayout.Flow.Nav twoButtons={flowShowTwoButtons}>
      {flowShowTwoButtons ? (
        <Button
          modifier="hydrogen"
          variant="orion"
          type="button"
          disabled={flowLoading}
        >
          Back
        </Button>
      ) : flowShowUnsavedText ? (
        <Text
          weight="light"
          cssColor={COLORS.font3}
          size="tiny"
          className="k-u-hidden@xs-down"
          style={{ alignSelf: 'center' }}
        >
          You have unsaved changes
        </Text>
      ) : null}
      <Button
        modifier="helium"
        variant="orion"
        type="button"
        disabled={flowLoading}
      >
        Save
      </Button>
    </DashboardLayout.Flow.Nav>
  </DashboardLayout.Flow>
)

const FlowStoryContainer = styled.div`
  width: 75%;
  margin: 0 auto;
`

export const Flow = () => (
  <FlowStoryContainer>
    <FlowExample />
  </FlowStoryContainer>
)

const SiteHeaderComponent = () => {
  const [userMenuWidth, setUserMenuWidth] = useState(null)
  const windowWidth = useWindowWidth()

  useDeepCompareEffect(() => {
    setTimeout(() => {
      setUserMenuWidth(
        getComputedWidthElement(`${HEADER_NAV_ID}UserMenu`) || '0',
      )
    }, 100)
  }, [windowWidth])

  return (
    <HeaderNav
      id={HEADER_NAV_ID}
      isLogged={true}
      isFixed="always"
      quickAccessProps={{
        href: '#mainContent',
        text: 'Aller au contenu principal',
        zIndex: 300,
      }}
      size="small"
      borderStyle="border"
    >
      <HeaderNav.Logo href="#">
        <KissKissBankBankLogo height="25" className="k-u-margin-left-double" />
      </HeaderNav.Logo>

      <HeaderNav.Right>
        <HeaderNav.Logged>
          <HeaderNav.UserMenu dropdownContentWidth={userMenuWidth}>
            <HeaderNav.UserMenu.Button
              hasArrow
              backgroundColor={COLORS.background1}
              backgroundColorHover={COLORS.line1}
              backgroundColorActive={COLORS.line1}
            >
              <AvatarWithTextAndBadge>
                <AvatarWithTextAndBadge.Image
                  src={`/kitten-${Math.floor(Math.random() * 10)}.jpg`}
                >
                  <AvatarWithTextAndBadge.Badge>2</AvatarWithTextAndBadge.Badge>
                </AvatarWithTextAndBadge.Image>

                <AvatarWithTextAndBadge.Text
                  className="k-u-hidden@xs-down"
                  withEllipsisOverflow={true}
                >
                  <Text lineHeight="normal" weight="regular">
                    Jean Charles Édouard
                  </Text>
                </AvatarWithTextAndBadge.Text>
              </AvatarWithTextAndBadge>
            </HeaderNav.UserMenu.Button>

            <HeaderNav.UserMenu.Navigation>
              <HeaderMenu
                noBorder
                borderSide={false}
                backgroundColors={{
                  hover: COLORS.background1,
                }}
              >
                <HeaderMenu.Item href="#">Mon espace personnel</HeaderMenu.Item>
                <HeaderMenu.Item href="#">Mes projets</HeaderMenu.Item>
                <HeaderMenu.Item size="tiny" href="#">
                  Gluten Mag
                </HeaderMenu.Item>
                <HeaderMenu.Item size="tiny" href="#">
                  Kallix — Mobilier de bureau pour le télétravail
                </HeaderMenu.Item>
                <HeaderMenu.Item size="tiny" href="#">
                  Mon premier court-métrage
                </HeaderMenu.Item>
                <HeaderMenu.Item href="#">Mes contributions</HeaderMenu.Item>
                <HeaderMenu.Item href="#">Mes messages</HeaderMenu.Item>
                <HeaderMenu.Item href="#">Modifier mon profil</HeaderMenu.Item>
                <HeaderMenu.Item button modifier="helium" href="#">
                  Mon projet en cours
                </HeaderMenu.Item>
                <HeaderMenu.Item
                  href="#"
                  className="k-u-background-color-background3"
                >
                  Déconnexion
                </HeaderMenu.Item>
              </HeaderMenu>
            </HeaderNav.UserMenu.Navigation>
          </HeaderNav.UserMenu>
        </HeaderNav.Logged>

        <HeaderNav.LoggedOut>
          <HeaderNav.Button
            icon={<>🐱</>}
            backgroundColor={COLORS.primary1}
            backgroundColorHover={COLORS.primary2}
            color={COLORS.background1}
            text="Se connecter / S'inscrire"
            href="#"
            hiddenText={{ max: 'xs' }}
          />
        </HeaderNav.LoggedOut>
      </HeaderNav.Right>
    </HeaderNav>
  )
}

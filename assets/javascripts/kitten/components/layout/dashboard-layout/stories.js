import React from 'react'
import styled from 'styled-components'
import { select, boolean } from '@storybook/addon-knobs'

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
} from '../../..'

import { Default as Table } from '../../tables/list-table/list-table.stories.js'

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

const HelpBox = styled.div`
  height: ${pxToRem(80)};
  background-color: rgb(255, 255, 255, 0.05);
  padding: 0 ${pxToRem(20)};
  display: flex;
  align-items: center;
  border-radius: ${pxToRem(8)};

  > div {
    align-self: initial;
  }
`

export default {
  title: 'Layout/DashboardLayout',
  component: DashboardLayout,
}

export const Default = () => {
  const selectedView = select(
    'content type',
    ['flow', 'dashboard', 'table'],
    'flow',
  )

  return (
    <DashboardLayout
      backLinkProps={{
        href: '#',
        children: 'Retour',
      }}
      buttonProps={{
        openLabel: 'Ouvrir le menu',
        closeLabel: 'Fermer le menu',
      }}
      quickAccessLinkText="Accéder au contenu"
    >
      <DashboardLayout.Header>
        <AvatarWithTextAndBadge>
          <AvatarWithTextAndBadge.Image
            src="/kitten.jpg"
            alt=""
            width={pxToRem(60)}
            height={pxToRem(60)}
          />

          <AvatarWithTextAndBadge.Text withEllipsisOverflow={true}>
            <Text lineHeight="normal" weight="regular" color="background1">
              T-shirts brodés Free Boobs Club
            </Text>
            <br />
            <Text
              lineHeight="normal"
              weight="light"
              size="nano"
              color="background1"
            >
              <StatusWithBullet as="span" />
              Prêt a être partagé avec mon coach
            </Text>
          </AvatarWithTextAndBadge.Text>
        </AvatarWithTextAndBadge>
      </DashboardLayout.Header>
      <DashboardLayout.SideContent>
        <ul className="k-u-margin-none">
          <li className="k-u-color-background1">Lien 1</li>
          <li className="k-u-color-background1">Lien 2</li>
          <li className="k-u-color-background1">Lien 3</li>
          <li className="k-u-color-background1">Lien 4</li>
        </ul>
      </DashboardLayout.SideContent>
      <DashboardLayout.SideFooter>
        <HelpBox>
          <AvatarWithTextAndBadge>
            <AvatarWithTextAndBadge.Image src="/kitten.jpg" alt="" />

            <AvatarWithTextAndBadge.Text>
              <Text
                lineHeight="normal"
                weight="bold"
                color="background1"
                size="tiny"
              >
                Besoin d’aide ?
              </Text>
              <br />
              <Text
                lineHeight="normal"
                weight="bold"
                color="primary1"
                size="tiny"
              >
                Contacter votre coach
              </Text>
            </AvatarWithTextAndBadge.Text>
          </AvatarWithTextAndBadge>
        </HelpBox>
      </DashboardLayout.SideFooter>

      {selectedView === 'flow' && <FlowExample />}
      {selectedView === 'dashboard' && <DashExample />}
      {selectedView === 'table' && <TableExample />}
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

const TableExample = () => (
  <>
    <Title
      modifier="quinary"
      className="k-u-margin-none k-u-margin-bottom-triple"
    >
      Curabitur blandit tempus porttitor.
    </Title>
    <div className="k-DashboardLayout__fullWidth">
      <Table />
    </div>
  </>
)

const FlowExample = () => (
  <DashboardLayout.Flow loading={boolean('loading', false)}>
    <DashboardLayout.Flow.Content>
      <Title
        modifier="quinary"
        className="k-u-margin-none k-u-margin-bottom-triple"
      >
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus.
      </Title>
      <p>
        Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
        sem nec elit. Sed posuere consectetur est at lobortis. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Etiam porta sem malesuada magna
        mollis euismod. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p>
        Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta
        gravida at eget metus. Maecenas sed diam eget risus varius blandit sit
        amet non magna. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>
      <p>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed
        consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo
        quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
        Maecenas faucibus mollis interdum. Etiam porta sem malesuada magna
        mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris
        condimentum nibh, ut fermentum massa justo sit amet risus. Duis mollis,
        est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
        sem nec elit.
      </p>
      <p>
        Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
        magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
        augue laoreet rutrum faucibus dolor auctor. Donec id elit non mi porta
        gravida at eget metus. Maecenas sed diam eget risus varius blandit sit
        amet non magna. Cum sociis natoque penatibus et magnis dis parturient
        montes, nascetur ridiculus mus.
      </p>
      <p>
        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget
        risus varius blandit sit amet non magna. Maecenas sed diam eget risus
        varius blandit sit amet non magna. Aenean lacinia bibendum nulla sed
        consectetur. Aenean eu leo quam. Pellentesque ornare sem lacinia quam
        venenatis vestibulum.
      </p>
      <p>
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
        Side content
      </DashboardLayout.Flow.AsideCard>
    </DashboardLayout.Flow.Aside>
    <DashboardLayout.Flow.Nav>
      <Button
        modifier="hydrogen"
        variant="orion"
        big
        type="button"
        disabled={boolean('loading', false)}
      >
        Back
      </Button>

      <Button
        modifier="helium"
        variant="orion"
        big
        type="button"
        disabled={boolean('loading', false)}
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

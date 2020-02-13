import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'
import { Title } from '../../../components/typography/title'
import { Paragraph } from '../../../components/typography/paragraph'
import { Text } from '../../../components/typography/text'
import { Container } from '../../../components/grid/container'
import { Button } from '../../../components/buttons/button/button'
import { InstrumentTagIcon } from '../../../components/icons/instrument-tag-icon'
import { ArrowIcon } from '../../../components/icons/arrow-icon'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import NewsCard from './news-card'

const Head = styled.div`
  background-color: ${COLORS.primary5};
  margin-bottom: ${pxToRem(100)};
`

const HeadContainer = styled(Container)`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AnchorLink = styled(Text)`
  padding: ${pxToRem(15)} ${pxToRem(30)};
  ${props =>
    props.selected &&
    css`
      color: ${COLORS.background1};
      background-color: ${COLORS.primary1};
      border-radius: ${pxToRem(4)};
    `}
`

const BackLink = styled(Text)`
  display: flex;
  align-items: center;
`

const LeftArrowIcon = styled(ArrowIcon)`
  fill: ${COLORS.primary1};
  margin-right: ${pxToRem(5)};
`

const NewsContainer = styled.div`
  padding: 0 ${pxToRem(160)};
`

const BlockTitle = styled(Title)`
  margin-top: ${pxToRem(100)};
`

const Separator = styled(HorizontalStroke)`
  margin-top: ${pxToRem(20)};
  margin-bottom: ${pxToRem(40)};
`

storiesOf('Pages/Actus', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo('common info')(() => (
      <>
        <Head>
          <HeadContainer>
            <BackLink
              weight="bold"
              size="tiny"
              color="primary1"
              tag="a"
              href="#"
            >
              <LeftArrowIcon direction="left" /> Retour au projet
            </BackLink>
            <div>
              <AnchorLink
                weight="bold"
                size="tiny"
                color="font1"
                tag="a"
                href="#"
                selected
              >
                Brouillons
              </AnchorLink>
              <AnchorLink
                weight="bold"
                size="tiny"
                color="font1"
                tag="a"
                href="#"
              >
                Programmées
              </AnchorLink>
              <AnchorLink
                weight="bold"
                size="tiny"
                color="font1"
                tag="a"
                href="#"
              >
                Publiées
              </AnchorLink>
            </div>
            <Button modifier="beryllium">
              <InstrumentTagIcon width="14" />
              <span>Créer une nouvelle actu</span>
            </Button>
          </HeadContainer>
        </Head>
        <Container>
          <NewsContainer>
            <Button big fluid modifier="oxygen">
              <InstrumentTagIcon width="14" />
              <span>Créer une nouvelle actu</span>
            </Button>
            <BlockTitle tag="h2" modifier="secondary" margin={false}>
              Mes Brouillons
            </BlockTitle>
            <Separator size="big" />
            <Paragraph modifier="secondary">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Cum sociis natoque penatibus et magnis
              dis parturient montes.
            </Paragraph>
            <NewsCard title="My Actu #1">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus…
            </NewsCard>
            <NewsCard title="My Actu #2">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus…
            </NewsCard>
            <BlockTitle tag="h2" modifier="secondary" margin={false}>
              Programmées
            </BlockTitle>
            <Separator size="big" />
            <Paragraph modifier="secondary">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Cum sociis natoque penatibus et magnis
              dis parturient montes.
            </Paragraph>
            <NewsCard title="My Actu #3" publishedAt={Date.now()}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus…
            </NewsCard>
            <NewsCard title="My Actu #4" publishedAt={Date.now()}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus…
            </NewsCard>
          </NewsContainer>
        </Container>
      </>
    )),
  )

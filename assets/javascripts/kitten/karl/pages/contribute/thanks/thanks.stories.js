import React from 'react'
import { storiesOf } from '@storybook/react'
import styled, { css } from 'styled-components'

import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'

import { Container } from '../../../../components/grid/container'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'

import { RocketIllustration } from '../../../../components/illustrations/rocket-illustration'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'

import { TextInput } from '../../../../components/form/text-input'
import { Button } from '../../../../components/buttons/button'

import {
  FacebookButtonIconWords,
  TwitterButtonIconWords,
} from '../../../../components/buttons/social-button-icon-words'
import { EmailIcon } from '../../../../components/icons/email-icon'

import ProjectsCarousel from '../../common/projects-carousel'

const FlexTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    margin: 0 0 0 ${pxToRem(40)};
    line-height: ${pxToRem(43)};
    font-size: ${pxToRem(36)};
  }

  @media screen and (max-width: ${ScreenConfig.XXS.max}px) {
    flex-direction: column;

    h1 {
      margin: ${pxToRem(20)} 0 0 0;
      text-align: center;
      line-height: ${pxToRem(29)};
      font-size: ${pxToRem(24)};
    }
  }
`
const FlexButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  > a {
    margin-bottom: ${pxToRem(20)};
  }

  .k-Button--icon svg.k-Button__icon {
    padding-left: 0;
  }

  @media screen and (min-width: ${ScreenConfig.XS.min}px) {
    max-width: ${pxToRem(325)};
  }
`

const PageSubTitles = styled(Text)`
  font-size: ${pxToRem(20)};
  margin: 0;
`

const PageIntroText = styled(Text)`
  font-size: ${pxToRem(14)};
  @media screen and (min-width: ${ScreenConfig.XS.min}px) {
    font-size: ${pxToRem(16)};
  }
`

storiesOf('Pages/Contribute', module).add('Thanks', () => {
  return (
    <Marger top="10" bottom="10">
      <Container>
        <Grid>
          <GridCol
            col-xs="12"
            offset-xs="0"
            col-m="9"
            offset-m="1"
            col-l="6"
            offset-l="3"
          >
            <FlexTitleContainer>
              <RocketIllustration />
              <Text tag="h1" weight="bold">
                Bravo, grâce à vous
                <br />
                la collecte progresse&nbsp;!
              </Text>
            </FlexTitleContainer>
            <Marger top="3" bottom="4">
              <PageIntroText>
                Vos contreparties seront délivrées par le créateur quand la
                collecte sera réussie.
                <br />
                Vous pourrez également lui demander un reçu de don.
              </PageIntroText>
            </Marger>
          </GridCol>
          <GridCol
            col-xs="12"
            offset-xs="0"
            col-m="9"
            offset-m="1"
            col-l="5"
            offset-l="3"
          >
            <Marger bottom="8">
              <PageSubTitles tag="h2" weight="bold">
                Postez un message de soutien sur la page du projet
              </PageSubTitles>
              <Marger top="2">
                <TextInput
                  tag="textarea"
                  rows="4"
                  placeholder="Laissez un message au porteur de projet…"
                  aria-label="Laissez un message au porteur de projet"
                />
              </Marger>
              <Marger top="3" className="k-u-align-center@s-down">
                <Button modifier="helium" size="big">
                  Valider
                </Button>
              </Marger>
            </Marger>

            <Marger bottom="8">
              <Marger bottom="3">
                <PageSubTitles tag="h2" weight="bold">
                  Faites connaître le projet
                </PageSubTitles>
              </Marger>
              <FlexButtonsContainer>
                <FacebookButtonIconWords tag="a" iconWithMinWidth={true}>
                  Partager sur Facebook
                </FacebookButtonIconWords>
                <TwitterButtonIconWords tag="a" iconWithMinWidth={true}>
                  Partager sur Twitter
                </TwitterButtonIconWords>
                <Button
                  modifier="lithium"
                  size="big"
                  icon={true}
                  tag="a"
                  iconWithMinWidth={true}
                >
                  <EmailIcon className="k-Button__icon" />
                  Partager par email
                </Button>
              </FlexButtonsContainer>
            </Marger>
          </GridCol>
        </Grid>
      </Container>

      <ProjectsCarousel title="Test" buttonHref="#" buttonLabel="Voir plus" />
    </Marger>
  )
})

import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { CrowdfundingCardWidget } from '../../../components/cards/crowdfunding-card/widget'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Container } from '../../../components/grid/container'
import { Modal } from '../../../components/modals/modal'
import { Button } from '../../../components/buttons/button/button'
import { TextInputWithUnit } from '../../../components/form/text-input-with-unit'
import { CopyIcon } from '../../../components/icons/copy-icon'
import { Title } from '../../../components/typography/title'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const ButtonTrigger = ({ children }) => (
  <Button modifier="helium">{children}</Button>
)

const GlobalStyle = createGlobalStyle`
  .k-Modal__content {
    padding: 0 ${pxToRem(30)};

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      max-width: ${pxToRem(690)};
      padding: 0 ${pxToRem(110)};
    }
  }
`

const StyledTitle = styled(Title)`
  font-size: ${stepToRem(4)};
  margin-top: 0;
  margin-bottom: ${pxToRem(20)};
  text-align: center;

  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    font-size: ${stepToRem(7)};
  }
`

const StyledContainer = styled.div`
  margin: ${pxToRem(50)} 0;
  text-align: left;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    margin: ${pxToRem(80)} 0;
  }
`

const Content = props => (
  <StyledContainer>
    <StyledTitle>Aperçu du widget</StyledTitle>
    <TextInputWithUnit
      unit={
        <CopyIcon
          aria-label="copy icon"
          aria-hidden="true"
          width="17"
          height="17"
        />
      }
    />
    <CrowdfundingCardWidget
      ownerTitle="Les Arts Dessinés"
      ownerDescription="Paris (75)"
      loading={false}
      title="Les Arts dessinés : devenez abonné-fondateur"
      dayCounter="27 jours"
      stateDay="restant"
      subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma"
      buttonText="Contribuer dès 5 €"
      state="Sur"
      style={{ marginTop: 20 }}
    />
  </StyledContainer>
)

const WidgetCard = props => (
  <Container style={{ marginTop: 50 }}>
    <Grid>
      <GridCol col="4">
        <GlobalStyle />
        <Modal
          closeButtonLabel="Fermer"
          trigger={<ButtonTrigger children="Widget" />}
          content={<Content />}
        />
      </GridCol>
    </Grid>
  </Container>
)

export default WidgetCard

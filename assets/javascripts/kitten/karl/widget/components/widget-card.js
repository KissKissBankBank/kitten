import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { CrowdfundingCardWidget } from '../../../components/cards/crowdfunding-card/widget'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Container } from '../../../components/grid/container'
import { Modal } from '../../../components/modals/modal'
import { Button } from '../../../components/buttons/button'
import { TextInput } from '../../../components/form/text-input'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { Marger } from '../../../components/layout/marger'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { EmbedIcon } from '../../../components/icons/embed-icon'
import { KissKissBankBankIcon } from '../../../components/icons/kisskissbankbank-icon'

const ButtonTrigger = ({ children }) => (
  <Button icon modifier="hydrogen">
    {children}
  </Button>
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

const StyledWidgetContainer = styled(Container)`
  margin-top: ${pxToRem(50)};
`

const StyledWidgetText = styled(Text)`
  display: flex;
  align-items: center;
`

const StyledWidgetLogo = styled(KissKissBankBankIcon)`
  margin-left: ${pxToRem(5)};
`

const WidgetContainerState = () => (
  <StyledWidgetText
    size="micro"
    lineHeight="normal"
    weight="regular"
    color="background1"
  >
    Sur
    <StyledWidgetLogo width="80" height="18" />
  </StyledWidgetText>
)

const Content = () => (
  <StyledContainer>
    <StyledTitle>Aperçu du widget</StyledTitle>
    <TextInput tag="textarea" />
    <Marger top="2">
      <CrowdfundingCardWidget
        ownerTitle="LesArtsDessinés"
        ownerDescription="Paris"
        loading={false}
        title="Les Arts dessinés : devenez abonné-fondateur"
        dayCounter="27 jours restant"
        subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma"
        buttonText="Contribuer"
        state={<WidgetContainerState />}
      />
    </Marger>
  </StyledContainer>
)

const WidgetCard = () => (
  <StyledWidgetContainer>
    <Grid>
      <GridCol col="4">
        <GlobalStyle />
        <Modal
          closeButtonLabel="Fermer"
          trigger={<ButtonTrigger children={<EmbedIcon />} />}
          content={<Content />}
        />
      </GridCol>
    </Grid>
  </StyledWidgetContainer>
)

export default WidgetCard

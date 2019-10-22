import React from 'react'
import styled from 'styled-components'
import { CrowdfundingCardWidget } from '../../../components/cards/crowdfunding-card/widget'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Container } from '../../../components/grid/container'
import { Modal } from '../../../components/modals/modal'
import { Button } from '../../../components/buttons/button/button'
import { TextInput } from '../../../components/form/text-input'
import { Title } from '../../../components/typography/title'
import { pxToRem } from '../../../helpers/utils/typography'

const ButtonTrigger = ({ children }) => (
  <Button modifier="helium">{children}</Button>
)

const StyledContainer = styled.div`
  margin: ${pxToRem(80)} 0;
`

const Content = props => (
  <StyledContainer>
    <Title
      modifier="tertiary"
      margin={false}
      className="k-u-margin-bottom-double"
    >
      Aperçu du widget
    </Title>
    <TextInput tag="textarea" className="k-u-margin-bottom-triple" />
    <CrowdfundingCardWidget
      ownerTitle="Les Arts Dessinés"
      ownerDescription="Paris(75)"
      loading={false}
      title="Les Arts dessinés : devenez abonné-fondateur"
      dayCounter="27 jours"
      stateDay="restant"
      subtitle="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ma"
      buttonText="Contribuer dès 5 €"
      state="Sur"
    />
  </StyledContainer>
)

const WidgetCard = props => (
  <Container style={{ marginTop: 50 }}>
    <Grid>
      <GridCol col="4">
        <Modal
          style={{ height: '100%' }}
          closeButtonLabel="Fermer"
          trigger={<ButtonTrigger children="Widget" />}
          content={<Content />}
        />
      </GridCol>
    </Grid>
  </Container>
)

export default WidgetCard

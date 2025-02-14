import React from 'react'
import {
  Grid,
  GridCol,
  Marger,
  Container,
  Paragraph,
  Button,
  Title,
  COLORS,
} from 'kitten'

const HeaderWithBackground = ({ backgroundImage }) => (
  <div style={{ backgroundImage }} className="PreDeposit__header">
    <Container>
      <Grid>
        <GridCol col-l="8" offset-l="2">
          <div className="PreDeposit__header__container">
            <Title
              tag="h1"
              margin={false}
              style={{ color: COLORS.font1 }}
              className="k-u-align-center k-u-margin-bottom-single k-u-margin-bottom-double@s-up"
              modifier="secondary"
            >
              Ce projet, vous y croyez ? <br /> Nous aussi !
            </Title>

            <Paragraph
              margin={false}
              className="k-u-align-center k-u-margin-top-single k-u-margin-top-double@s-up k-u-margin-bottom-quadruple"
              style={{ color: COLORS.font1 }}
              modifier="primary"
            >
              70 % des projets présentés réussissent sur KissKissBankBank.
              N'attendez plus pour démarrer votre campagne.
            </Paragraph>

            <Marger className="k-u-align-center k-u-margin-top-quadruple">
              <Button
                tag="a"
                size="large"
                modifier="helium"
                href="#"
                target="_blank"
                rel="noopener"
              >
                Lancez-vous
              </Button>
            </Marger>
          </div>
        </GridCol>
      </Grid>
    </Container>
  </div>
)

export default HeaderWithBackground

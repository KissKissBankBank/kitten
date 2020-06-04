import React from 'react'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Container } from '../../../../components/grid/container'
import { Title } from '../../../../components/typography/title'

const PartnersSection = () => (
  <Container className="PreDeposit__partners k-u-margin-top-octuple k-u-margin-top-decuple@l-up">
    <Grid>
      <GridCol
        col-m="6"
        offset-m="3"
        className="k-u-margin-bottom-quadruple k-u-margin-bottom-quintuple@s-up"
      >
        <Title
          margin={false}
          className="PreDeposit__partners__title"
          modifier="quinary"
        >
          Nous prenons soin de vos projet et de vos données personnelles aussi
        </Title>
      </GridCol>
      <GridCol col-l="6" offset-l="3">
        <Grid>
          <GridCol col-m="4" className="k-u-align-center">
            <figure className="PreDeposit__partners__logosMargin">
              <div className="PreDeposit__partners__logos">
                <img
                  src="http://via.placeholder.com/70x50/caf4fe/caf4fe"
                  alt=""
                />
              </div>
              <figcaption className="PreDeposit__partners__text">
                Protection de vos données
              </figcaption>
            </figure>
          </GridCol>
          <GridCol col-m="4" className="k-u-align-center">
            <figure className="PreDeposit__partners__logosMargin">
              <div className="PreDeposit__partners__logos">
                <img
                  src="http://via.placeholder.com/100x80/caf4fe/caf4fe"
                  alt=""
                />
              </div>
              <figcaption className="PreDeposit__partners__text">
                KissKissBankBank est filiale de La Banque Postale
              </figcaption>
            </figure>
          </GridCol>
          <GridCol col-m="4" className="k-u-align-center">
            <figure className="PreDeposit__partners__logosMargin">
              <div className="PreDeposit__partners__logos">
                <img
                  src="http://via.placeholder.com/50x50/caf4fe/caf4fe"
                  alt=""
                />
              </div>
              <figcaption className="PreDeposit__partners__text">
                Sécurisation de vos transactions financières
              </figcaption>
            </figure>
          </GridCol>
        </Grid>
      </GridCol>
    </Grid>
  </Container>
)

export default PartnersSection

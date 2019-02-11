import React, { Component } from 'react'
import { withMediaQueries } from '../../../../../hoc/media-queries'
import { Container } from '../../../../../components/grid/container'
import { Grid, GridCol } from '../../../../../components/grid/grid'
import { Marger } from '../../../../../components/layout/marger'
import { Button } from '../../../../../components/buttons/button'
import { HorizontalStroke } from '../../../../../components/layout/horizontal-stroke'
import { Title } from '../../../../../components/typography/title'
import COLORS from '../../../../../constants/colors-config'
import { Paragraph } from '../../../../../components/typography/paragraph'

export class SmbsSupportBase extends Component {
  render() {
    const { viewportIsXSOrLess } = this.props
    const containerMargin = viewportIsXSOrLess ? 5 : 10
    const verticalBlockMargin = viewportIsXSOrLess ? 8 : 10

    return (
      <Marger
        top={verticalBlockMargin}
        bottom={verticalBlockMargin}
        style={styles.container}
      >
        <Container>
          <Grid>
            <GridCol
              col-l="6"
              offset-l="3"
              col-xs="10"
              offset-xs="1"
              className="k-u-align-center"
            >
              <Marger top={containerMargin} bottom={containerMargin}>
                <Title
                  modifier="quinary"
                  tag="h2"
                  margin={false}
                  style={styles.title}
                >
                  Vous accompagnez des entreprises et vous souhaitez proposer \
                  une nouvelle solution de financement à vos clients ?
                </Title>

                <Marger top="2" bottom="3">
                  <HorizontalStroke size="big" style={styles.stroke} />
                </Marger>

                <Marger top="3" bottom="3">
                  <Paragraph modifier="quaternary" margin={false}>
                    Laissez-nous vos coordonnées et nous évoquerons ensemble les
                    modalités d’un partenariat.
                  </Paragraph>
                </Marger>

                <Marger top="3">
                  <Button tag="a" modifier="helium" href="#">
                    En savoir plus
                  </Button>
                </Marger>
              </Marger>
            </GridCol>
          </Grid>
        </Container>
      </Marger>
    )
  }
}

const styles = {
  container: {
    background: COLORS.font1,
    color: COLORS.background1,
  },
  title: {
    color: COLORS.background1,
  },
  stroke: {
    background: COLORS.background1,
    margin: '0 auto',
  },
}

export const SmbsSupport = withMediaQueries({
  viewportIsXSOrLess: true,
})(SmbsSupportBase)

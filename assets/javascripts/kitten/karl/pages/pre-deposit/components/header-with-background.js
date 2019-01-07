import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'
import { Container as ContainerBase } from '../../../../components/grid/container'
import { Paragraph } from '../../../../components/typography/paragraph'
import { Button } from '../../../../components/buttons/button'
import { Title } from '../../../../components/typography/title'
import { withMediaQueries } from '../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'

const Container = Radium(ContainerBase)

class HeaderWithBackground extends Component {
  titleModifier() {
    const { viewportIsXSOrLess, viewportIsMOrLess } = this.props
    if (!viewportIsMOrLess) return 'primary'
    if (viewportIsXSOrLess) return 'tertiary'

    return 'secondary'
  }

  render() {
    const { viewportIsXSOrLess, backgroundImage } = this.props

    const headerStyle = [styles.header, { backgroundImage }]

    return (
      <StyleRoot style={headerStyle}>
        <Container style={styles.header.container}>
          <Marger top="1">
            <Grid>
              <GridCol
                col-m="10"
                offset-m="1"
                style={styles.header.container.background}
              >
                <Grid>
                  <GridCol
                    col-m="10"
                    offset-m="1"
                    col-s="12"
                    offset-s="0"
                    col-xs="10"
                    offset-xs="1"
                    className="k-u-align-center"
                  >
                    <Marger bottom="1">
                      <Title
                        tag="h1"
                        margin={false}
                        style={{ color: COLORS.font1 }}
                        modifier="secondary"
                      >
                        Ce projet, vous y croyez ? <br /> Nous aussi !
                      </Title>
                    </Marger>

                    <Marger top="1" bottom="4">
                      <Paragraph
                        margin={false}
                        className="k-u-align-center"
                        style={{ color: COLORS.font1 }}
                        modifier={viewportIsXSOrLess ? 'tertiary' : 'primary'}
                      >
                        70 % des projets présentés réussissent sur
                        KissKissBankBank. N'attendez plus pour démarrer votre
                        campagne.
                      </Paragraph>
                    </Marger>

                    <Marger top="4" className="k-u-align-center">
                      <Button
                        tag="a"
                        size="big"
                        modifier="helium"
                        href=""
                        target=""
                        rel=""
                      >
                        Lancez-vous
                      </Button>
                    </Marger>
                  </GridCol>
                </Grid>
              </GridCol>
            </Grid>
          </Marger>
        </Container>
      </StyleRoot>
    )
  }
}

const styles = {
  header: {
    backgroundSize: 'cover',
    marginBottom: 50,
    height: 500,
    display: 'flex',
    backgroundColor: '#CBF4FD',

    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      height: 600,
      marginBottom: 80,
    },
    [`@media (min-width: ${ScreenConfig.L.min}px)`]: {
      marginBottom: 100,
    },

    container: {
      alignSelf: 'center',

      background: {
        backgroundColor: '#FFF',
        paddingTop: 50,
        paddingBottom: 50,
      },
    },
  },
}

export default withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
})(Radium(HeaderWithBackground))

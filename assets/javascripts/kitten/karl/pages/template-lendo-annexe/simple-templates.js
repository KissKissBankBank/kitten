import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Container } from '../../../components/grid/container'
import { Grid, GridCol as GridColBase } from '../../../components/grid/grid'
import { Button as ButtonBase } from '../../../components/buttons/button'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'
import { Title } from '../../../components/typography/title'
import { withMediaQueries } from '../../../hoc/media-queries'
import { HorizontalStroke as HorizontalStrokeBase } from '../../../components/layout/horizontal-stroke'
import { parseHtml } from '../../../helpers/utils/parser'

const GridCol = Radium(GridColBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)
const Button = Radium(ButtonBase)

class SimpleTemplateBase extends Component {
  render() {
    const { header, children, viewportIsXSOrLess } = this.props

    const containerStyle = {
      ...styles.header,
      backgroundImage: `url(${header.background})`,
    }

    const titleModifier = viewportIsXSOrLess ? 'quaternary' : 'secondary'

    return (
      <StyleRoot>
        <div style={containerStyle}>
          <Container>
            <Grid>
              <GridCol
                col-l="6"
                offset-l="3"
                col-s="10"
                offset-s="1"
                style={styles.centerBlock}
              >
                <Title
                  tag="h1"
                  margin={false}
                  style={{ color: COLORS.background1 }}
                  modifier={titleModifier}
                >
                  {parseHtml(header.title)}
                </Title>
                <HorizontalStroke style={styles.stroke} size="huge" />
              </GridCol>
            </Grid>
          </Container>
        </div>

        <Container>
          <Grid>
            <GridCol col-l="6" offset-l="3" col-s="10" offset-s="1">
              {children}
              <div style={styles.buttonsContainer}>
                <Button
                  tag="a"
                  size="big"
                  modifier="hydrogen"
                  href="#"
                  style={styles.button}
                >
                  Comment emprunter
                </Button>

                <Button
                  tag="a"
                  size="big"
                  modifier="helium"
                  href="#"
                  style={styles.button}
                >
                  Je dépose ma demande
                </Button>
              </div>
            </GridCol>
          </Grid>
        </Container>
      </StyleRoot>
    )
  }
}

const buttonMargin = 10

const styles = {
  header: {
    backgroundSize: 'cover',
    marginBottom: 50,
    paddingTop: 200,
    paddingBottom: 200,

    [`@media (min-width: ${ScreenConfig.S.min}px) and
      (max-width: ${ScreenConfig.M.max}px)`]: {
      paddingTop: 230,
      paddingBottom: 230,
    },

    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      marginBottom: 80,
    },

    [`@media (min-width: ${ScreenConfig.L.min}px)`]: {
      marginBottom: 100,
    },
  },

  centerBlock: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },

  stroke: {
    width: 50,
    marginTop: 20,
    background: COLORS.background1,

    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      width: 80,
    },
  },

  buttonsContainer: {
    display: 'flex',
    marginTop: 40 - buttonMargin,
    marginBottom: 50 - buttonMargin,
    marginLeft: -buttonMargin,
    marginRight: -buttonMargin,

    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      marginTop: 50 - buttonMargin,
      marginBottom: 80 - buttonMargin,
    },

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      flexDirection: 'column',
      marginLeft: 0,
      marginRight: 0,
    },
  },

  button: {
    margin: buttonMargin,

    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
}

export const SimpleTemplate = withMediaQueries({
  viewportIsXSOrLess: true,
})(SimpleTemplateBase)

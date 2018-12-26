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
import { parseHtml } from '../../../../helpers/utils/parser'

const Container = Radium(ContainerBase)

export class HeaderWithBackgroundBase extends Component {
  titleModifier() {
    const { viewportIsXSOrLess, viewportIsMOrLess } = this.props
    if (!viewportIsMOrLess) return 'primary'
    if (viewportIsXSOrLess) return 'tertiary'

    return 'secondary'
  }

  render() {
    const {
      viewportIsXSOrLess,
      title,
      subTitle,
      buttonProps,
      backgroundImage,
    } = this.props

    const headerStyle = [styles.header, { backgroundImage }]

    return (
      <StyleRoot style={headerStyle}>
        <Container style={styles.header.container}>
          <Marger bottom="1">
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
                <Title
                  tag="h1"
                  margin={false}
                  style={{ color: COLORS.background1 }}
                  modifier={this.titleModifier()}
                >
                  {parseHtml(title)}
                </Title>
              </GridCol>
            </Grid>
          </Marger>

          <Marger top="1" bottom="4">
            <Grid>
              <GridCol col-l="6" offset-l="3" col-xs="10" offset-xs="1">
                <Paragraph
                  margin={false}
                  className="k-u-align-center"
                  style={{ color: COLORS.background1 }}
                  modifier={viewportIsXSOrLess ? 'tertiary' : 'primary'}
                >
                  {parseHtml(subTitle)}
                </Paragraph>
              </GridCol>
            </Grid>
          </Marger>

          <Marger top="4">
            <Grid>
              <GridCol className="k-u-align-center">
                <Button
                  tag="a"
                  size="big"
                  modifier="helium"
                  href={buttonProps.url}
                  target={buttonProps.target}
                  rel={buttonProps.rel}
                >
                  {buttonProps.text}
                </Button>
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

    [`@media (min-width: ${ScreenConfig.S.min}px)`]: {
      height: 600,
      marginBottom: 80,
    },
    [`@media (min-width: ${ScreenConfig.L.min}px)`]: {
      marginBottom: 100,
    },

    container: {
      alignSelf: 'center',
    },
  },
}

export const HeaderWithBackground = withMediaQueries({
  viewportIsXSOrLess: true,
  viewportIsMOrLess: true,
})(HeaderWithBackgroundBase)

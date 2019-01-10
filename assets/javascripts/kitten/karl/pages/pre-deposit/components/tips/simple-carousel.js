import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { Marger } from '../../../../../components/layout/marger'
import { Title } from '../../../../../components/typography/title'
import { Paragraph } from '../../../../../components/typography/paragraph'
import { HorizontalStroke } from '../../../../../components/layout/horizontal-stroke'
import { Button } from '../../../../../components/buttons/button'
import COLORS from '../../../../../constants/colors-config'
import { withMediaQueries } from '../../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../../constants/screen-config'

export class TipSimpleCarousel extends Component {
  render() {
    const { title, paragraph } = this.props
    return (
      <StyleRoot>
        <div style={styles.tipsMarger}>
          <Marger bottom="2">
            <Title modifier="quinary" margin={false}>
              {title}
            </Title>
          </Marger>

          <Marger top="2" bottom="3">
            <HorizontalStroke style={{ width: 40 }} />
          </Marger>

          <Marger top="3">
            <Paragraph modifier="quaternary" margin={false}>
              {paragraph}
            </Paragraph>
          </Marger>
        </div>
      </StyleRoot>
    )
  }
}

const styles = {
  tipsMarger: {
    marginTop: 100,
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      marginTop: 0,
    },
    [`@media (max-width: ${ScreenConfig.XS.max}px)`]: {
      marginTop: 30,
    },
  },
}

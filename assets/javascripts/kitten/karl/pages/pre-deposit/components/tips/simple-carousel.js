import React, { Component } from 'react'
import Radium from 'radium'
import { Marger } from '../../../../../components/layout/marger'
import { Title } from '../../../../../components/typography/title'
import { Paragraph as ParagraphBase } from '../../../../../components/typography/paragraph'
import { HorizontalStroke as HorizontalStrokeBase } from '../../../../../components/layout/horizontal-stroke'
import { Button } from '../../../../../components/buttons/button'
import COLORS from '../../../../../constants/colors-config'
import { withMediaQueries } from '../../../../../hoc/media-queries'
import { ScreenConfig } from '../../../../../constants/screen-config'

const Paragraph = Radium(ParagraphBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)

export class TipSimpleCarousel extends Component {
  render() {
    const { title, paragraph } = this.props
    return (
      <div style={styles.tipsMarger}>
        <Marger bottom="1.5">
          <Title modifier="quinary" margin={false}>
            {title}
          </Title>
        </Marger>

        <Marger top="1.5" bottom="3">
          <HorizontalStroke style={styles.horizontalStroke} />
        </Marger>

        <Marger top="3">
          <Paragraph modifier="quinary" style={styles.text} margin={false}>
            {paragraph}
          </Paragraph>
        </Marger>
      </div>
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
  horizontalStroke: {
    width: 40,
    [`@media (max-width: ${ScreenConfig.M.max}px)`]: {
      backgroundColor: COLORS.background1,
      textAlign: 'center',
      margin: '0 auto',
    },
  },
}

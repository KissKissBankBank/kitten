import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { ScreenConfig } from '../../../../../constants/screen-config'
import { Marger } from '../../../../../components/layout/marger'
import { Title as TitleBase } from '../../../../../components/typography/title'
import { Text } from '../../../../../components/typography/text'
import { Paragraph as ParagraphBase } from '../../../../../components/typography/paragraph'
import { parseHtml } from '../../../../../helpers/utils/parser'
import { HorizontalStroke as HorizontalStrokeBase } from '../../../../../components/layout/horizontal-stroke'
import COLORS from '../../../../../constants/colors-config'

const Paragraph = Radium(ParagraphBase)
const HorizontalStroke = Radium(HorizontalStrokeBase)
const Title = Radium(TitleBase)

export class CardWithButton extends Component {
  render() {
    const {
      imageProps,
      titleProps,
      title,
      paragraph,
      notice,
      horizontalStroke,
      marginBetweenImgAndContent,
      style,
    } = this.props

    return (
      <StyleRoot style={style}>
        <Marger
          bottom={marginBetweenImgAndContent}
          className="k-Card__imageContainer"
        >
          <img
            {...imageProps}
            className="k-Card__image"
            style={{ ...imageProps.style, ...styles.image }}
          />
        </Marger>
        <Marger
          top={marginBetweenImgAndContent}
          bottom={horizontalStroke ? 2 : 1}
        >
          <Title
            {...titleProps}
            tag="h3"
            margin={false}
            modifier="senary"
            style={{ color: COLORS.font1 }}
          >
            {parseHtml(title)}
          </Title>
        </Marger>

        {horizontalStroke && (
          <Marger top="2" bottom="3">
            <HorizontalStroke style={{ color: COLORS.font1 }} />
          </Marger>
        )}
        <Marger top={horizontalStroke ? 3 : 1} bottom={notice ? 1.5 : 3}>
          <Paragraph
            modifier="quaternary"
            margin={false}
            style={{ color: COLORS.font1 }}
          >
            {parseHtml(paragraph)}
          </Paragraph>
        </Marger>

        {notice && (
          <Marger top="1.5" bottom="4">
            <Paragraph margin={false} style={styles.noLineHeight}>
              <Text
                lineHeight="normal"
                size="micro"
                weight="regular"
                color="font1"
              >
                {parseHtml(notice)}
              </Text>
            </Paragraph>
          </Marger>
        )}
      </StyleRoot>
    )
  }
}

const styles = {
  image: {
    width: '100%',
    display: 'block',
  },
  noLineHeight: {
    lineHeight: 0,
  },
  button: {
    [`@media (max-width: ${ScreenConfig.S.max}px)`]: {
      minWidth: '100%',
    },
  },
}

CardWithButton.defaultProps = {
  imageProps: {},
  marginTop: '3',
  marginBottom: '0',
  marginBetweenImgAndContent: '2',
}

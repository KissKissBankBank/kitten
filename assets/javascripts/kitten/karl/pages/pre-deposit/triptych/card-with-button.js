import React, { Component } from 'react'
import Radium, { StyleRoot } from 'radium'
import { ScreenConfig } from '../../../../constants/screen-config'
import { card } from '../../../../hoc/card'
import { Grid, GridCol } from '../../../../components/grid/grid'
import { Marger } from '../../../../components/layout/marger'
import { Title } from '../../../../components/typography/title'
import { Text } from '../../../../components/typography/text'
import { Paragraph as ParagraphBase } from '../../../../components/typography/paragraph'
import { parseHtml } from '../../../../helpers/utils/parser'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { Button as ButtonBase } from '../../../../components/buttons/button'

const Paragraph = Radium(ParagraphBase)
const Button = Radium(ButtonBase)

export class CardWithButton extends Component {
  render() {
    const {
      imageProps,
      titleProps,
      title,
      paragraph,
      notice,
      horizontalStroke,
      buttonProps,
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
          <Title {...titleProps} tag="h3" margin={false} modifier="senary">
            {parseHtml(title)}
          </Title>
        </Marger>

        {horizontalStroke && (
          <Marger top="2" bottom="3">
            <HorizontalStroke />
          </Marger>
        )}

        <Marger top={horizontalStroke ? 3 : 1} bottom={notice ? 1.5 : 3}>
          <Paragraph modifier="quaternary" margin={false}>
            {parseHtml(paragraph)}
          </Paragraph>
        </Marger>

        {notice && (
          <Marger top="1.5" bottom="4">
            <Paragraph margin={false} style={styles.noLineHeight}>
              <Text lineHeight="normal" size="micro" weight="regular">
                {parseHtml(notice)}
              </Text>
            </Paragraph>
          </Marger>
        )}

        <Marger top="3">
          <Button
            tag="a"
            modifier={buttonProps.modifier}
            href={buttonProps.url}
            target={buttonProps.target}
            rel={buttonProps.rel}
            style={styles.button}
          >
            {buttonProps.text}
          </Button>
        </Marger>
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
  buttonProps: {
    text: 'En savoir plus',
    url: '',
    modifier: 'hydrogen',
  },
}

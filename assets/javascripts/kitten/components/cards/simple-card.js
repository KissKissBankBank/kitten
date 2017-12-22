import React, { Component } from 'react'
import { card } from 'kitten/hoc/card'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { parseHtml } from 'kitten/helpers/utils/parser'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'

class SimpleCardComponent extends Component {
  render() {
    const { imageProps, title, subtitle, paragraph, ...others } = this.props
    const Tag = this.props.href ? 'a' : 'div'

    return (
      <Tag { ...others }>
        <Marger bottom="2" className="k-Card__imageContainer">
          <img
            { ...imageProps }
            className="k-Card__image"
            style={ { ...imageProps.style, ...styles.image } }
          />
        </Marger>

        { title &&
          <Marger top="2" bottom=".5">
            <Title modifier="senary" margin={ false } className="k-Card__title">
              { parseHtml(title) }
            </Title>
          </Marger>
        }

        { subtitle &&
          <Marger top=".5" bottom=".5">
            <Text weight="regular" size="micro">
              { parseHtml(subtitle) }
            </Text>
          </Marger>
        }

        { paragraph &&
          <Marger top="1" bottom=".5">
            <Text
              size="micro"
              weight="light"
              lineHeight="normal"
            >
              { parseHtml(paragraph) }
            </Text>
          </Marger>
        }

        <Marger top="1.5">
          <HorizontalStroke size="tiny" />
        </Marger>
      </Tag>
    )
  }
}

const styles = {
  image: {
    width: '100%',
    display: 'block',
  },
}

SimpleCardComponent.defaultProps = {
  imageProps: {
    src: 'https://placehold.it/200x200/4a84ff/4a84ff',
    alt: '',
  },
  title: null,
  subtitle: null,
  paragraph: null,
}

export const SimpleCard = card(SimpleCardComponent, {
  withoutBoxShadowOnHover: true,
})

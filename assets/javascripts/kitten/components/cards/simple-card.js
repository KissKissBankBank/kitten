import React, { Component } from 'react'
import classNames from 'classnames'
import { card } from '../../hoc/card'
import { Grid, GridCol } from '../../components/grid/grid'
import { Marger } from '../../components/layout/marger'
import { Title } from '../../components/typography/title'
import { Text } from '../../components/typography/text'
import { parseHtml } from '../../helpers/utils/parser'
import { HorizontalStroke } from '../../components/layout/horizontal-stroke'

class SimpleCardComponent extends Component {
  render() {
    const {
      imageProps,
      titleProps,
      title,
      subtitle,
      paragraph,
      horizontalStroke,
      ...others
    } = this.props

    const Tag = this.props.href ? 'a' : 'div'

    const titleClassName = classNames('k-Card__title', titleProps.className)

    return (
      <Tag {...others}>
        <Marger bottom="2" className="k-Card__imageContainer">
          <img
            {...imageProps}
            className="k-Card__image"
            style={{ ...imageProps.style, ...styles.image }}
          />
        </Marger>

        {title && (
          <Marger top="2" bottom={subtitle ? 0.5 : 1}>
            <Title
              tag="p"
              {...titleProps}
              className={titleClassName}
              margin={false}
              modifier="senary"
            >
              {parseHtml(title)}
            </Title>
          </Marger>
        )}

        {subtitle && (
          <Marger top=".5" bottom="1.5">
            <Text size="micro" weight="regular">
              {parseHtml(subtitle)}
            </Text>
          </Marger>
        )}

        {paragraph && (
          <Marger top="1" bottom="1.5">
            <Text lineHeight="normal" size="micro" weight="light">
              {parseHtml(paragraph)}
            </Text>
          </Marger>
        )}

        {horizontalStroke && (
          <Marger top="1.5">
            <HorizontalStroke size="tiny" />
          </Marger>
        )}
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
    src: 'https://placehold.it/200x200/caf4fe/caf4fe',
    alt: '',
  },
  titleProps: {},
  title: null,
  subtitle: null,
  paragraph: null,
  horizontalStroke: true,
}

export const SimpleCard = card(SimpleCardComponent, {
  withoutBoxShadowOnHover: true,
})

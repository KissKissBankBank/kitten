import React, { Component } from 'react'
import classNames from 'classnames'
import { card } from 'kitten/hoc/card'
import { Marger } from 'kitten/components/layout/marger'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { parseHtml } from 'kitten/helpers/utils/parser'
import { HorizontalStroke } from 'kitten/components/layout/horizontal-stroke'
import { ButtonImage } from 'kitten/components/buttons/button-image'
import COLORS from 'kitten/constants/colors-config'

class ArticleCardComponent extends Component {
  render() {
    const {
      imageProps,
      avatarProps,
      ownerTitle,
      ownerDescription,
      articleTitle,
      articleSubTitle,
      ...others,
    } = this.props

    const Tag = this.props.href ? 'a' : 'div'

    return (
      <Tag { ...others }>
        { this.renderImage() }
        { this.renderHeader() }
        { this.renderTitle() }
        { this.renderSubtitle() }
      </Tag>
    )
  }

  renderImage() {
    const {
      alt,
      ...imageProps,
    } = this.props.imageProps

    const imageClassName = classNames(
      'k-Card__image',
      imageProps.className,
    )

    return (
      <Marger className="k-Card__imageContainer">
        <img
          { ...imageProps }
          alt={ alt || '' }
          className={ imageClassName }
          style={ { ...imageProps.style, ...styles.image } }
        />
      </Marger>
    )
  }

  renderHeader() {
    return (
      <div style={ styles.header.grid }>
        <Marger top="1" bottom="1">
          <ButtonImage
            tag="span"
            img={ this.props.avatarProps }
            withBorder
            withoutPointerEvents
            style={ styles.header.avatar }
          />
        </Marger>

        <div style={ styles.header.owner }>
          <Text
            tag="div"
            size="micro"
            weight="regular"
          >
            { parseHtml(this.props.ownerTitle) }
          </Text>

          <Text
            tag="div"
            size="micro"
            weight="light"
          >
            { parseHtml(this.props.ownerDescription) }
          </Text>
        </div>
      </div>
    )
  }

  renderTitle() {
    const className = classNames(
      'k-Card__title',
      this.props.titleProps.className,
    )

    return (
      <Marger
        bottom="1"
        style={ styles.title }
      >
        <Title
          tag="p"
          { ...this.props.titleProps }
          modifier="senary"
          margin={ false }
          className={ className }
        >
          { parseHtml(this.props.articleTitle) }
        </Title>
      </Marger>
    )
  }

  renderSubtitle() {
    return (
      <Marger
        top="1"
        bottom="3"
        style={ styles.subtitle }
      >
        <HorizontalStroke
          size="tiny"
          style={ styles.stroke }
        />
        <Text
          size="micro"
          weight="regular"
        >
          { parseHtml(this.props.articleSubTitle) }
        </Text>
      </Marger>
    )
  }
}

const COMPONENT_GUTTER = 10

const styles = {
  image: {
    width: '100%',
    display: 'block',
  },
  header: {
    grid: {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      top: '0',
      marginTop: '-30px',
      backgroundColor: COLORS.background1,
    },
    avatar: {
      marginLeft: `${COMPONENT_GUTTER}px`,
    },
    owner: {
      marginLeft: `${COMPONENT_GUTTER}px`,
      marginRight: `${COMPONENT_GUTTER * 2}px`,
      lineHeight: '1.2',
    },
  },
  title: {
    padding: `0 ${COMPONENT_GUTTER}px`,
    lineHeight: '1',
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '1',
    padding: `0 ${COMPONENT_GUTTER}px`,
  },
  stroke: {
    marginRight: `${COMPONENT_GUTTER}px`,
  },
}

ArticleCardComponent.defaultProps = {
  href: null,
  imageProps: {
    src: 'https://placehold.it/350x200/4a84ff/4a84ff',
    alt: '',
  },
  avatarProps: {
    src: 'https://placehold.it/100x100/4a84ff/4a84ff',
    alt: '',
  },
  titleProps: {},
  ownerTitle: 'Owner title',
  ownerDescription: 'Owner description',
  articleTitle: 'Title',
  articleSubTitle: 'Subtitle',
}

export const ArticleCard = card(ArticleCardComponent, {
  light: true,
  withoutBoxShadowOnHover: true,
})

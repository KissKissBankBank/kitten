import React, { Component } from 'react'
import classNames from 'classnames'
import { card } from '../../../hoc/card'
import { Marger } from '../../../components/layout/marger'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { parseHtml } from '../../../helpers/utils/parser'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'

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

    const ProjectPlayerButton = arrowColor => (
      <div style={styles.projectPlayerButton}>
        <Text size="default" weight="regular" color={arrowColor}>
          ►
        </Text>
      </div>
    )

    const playerPreviewStyle = [
      styles.projectPlayer.base,
      projectVideo ? { cursor: 'pointer' } : null,
      isVideoPlaying ? styles.projectPlayer.hide : styles.projectPlayer.show,
    ]

    return (
      <Tag {...others} style={{ lineHeight: 1, ...others.style }}>
        <Marger bottom="2" className="k-Card__imageContainer">
          <div style={playerPreviewStyle}>
            {projectVideo && <ProjectPlayerButton />}
            <img
              {...imageProps}
              alt={imageProps.alt || ''}
              className="k-Card__image"
              style={{ ...imageProps.style, ...styles.image }}
            />
          </div>
        </Marger>

        {title && (
          <Marger top="2" bottom=".3">
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
          <Marger top=".3" bottom="1.5">
            <Text size="micro" weight="regular">
              {parseHtml(subtitle)}
            </Text>
          </Marger>
        )}

        {paragraph && (
          <Marger top=".3" bottom="1.5">
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

const playerButtonSize = 70

const styles = {
  image: {
    width: '100%',
    display: 'block',
  },
  projectPlayerButton: {
    width: `${playerButtonSize}px`,
    height: `${playerButtonSize}px`,
    background: COLORS.font1,
    position: 'absolute',
    top: `calc(50% - ${playerButtonSize / 2}px)`,
    left: `calc(50% - ${playerButtonSize / 2}px)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

import React, { Component } from 'react'
import classNames from 'classnames'
import { card } from '../../../hoc/card'
import { Marger } from '../../../components/layout/marger'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { parseHtml } from '../../../helpers/utils/parser'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'
import COLORS from '../../../constants/colors-config'

class SimpleCardComponent extends Component {
  render() {
    const {
      imageProps,
      titleProps,
      title,
      subtitle,
      paragraph,
      horizontalStroke,
      projectVideo,
      arrowColor,
      ariaLabel,
      t,
      ...others
    } = this.props

    const Tag = this.props.href ? 'a' : 'div'

    const titleClassName = classNames('k-Card__title', titleProps.className)

    const ProjectPlayerButton = props => (
      <div style={styles.projectPlayerButton}>
        <Text
          size="default"
          weight="regular"
          color={props.arrowColor}
          aria-label={props.ariaLabel}
        >
          ►
        </Text>
      </div>
    )

    return (
      <Tag {...others} style={{ lineHeight: 1, ...others.style }}>
        <Marger
          bottom="2"
          className="k-Card__imageContainer"
          style={{ position: 'relative' }}
        >
          <div style={styles.projectPlayer}>
            {projectVideo && (
              <ProjectPlayerButton
                arrowColor={arrowColor}
                ariaLabel={ariaLabel}
              />
            )}
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
    cursor: 'pointer',
  },
  projectPlayer: {
    position: 'relative',
    transition: 'opacity ease 600ms, z-index ease 600ms',
    zIndex: 1,
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
  projectVideo: false,
  ariaLabel: '',
  arrowColor: 'background1',
}

export const SimpleCard = card(SimpleCardComponent, {
  withoutBoxShadowOnHover: true,
})

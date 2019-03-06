import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import classNames from 'classnames'
import { card } from '../../../hoc/card'
import { Marger } from '../../../components/layout/marger'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { parseHtml } from '../../../helpers/utils/parser'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'
import COLORS from '../../../constants/colors-config'

const ContainerStyle = styled.a`
  line-height: 1;
  position: relative;

  ${({ as }) =>
    as === 'a' &&
    css`
      cursor: pointer;
      text-decoration: none;
    `}
`

const ImageStyle = styled.img`
  width: 100%;
  display: block;
`

const PlayerButtonSize = 70

const PlayerButtonStyle = styled.div`
  width: ${PlayerButtonSize}px;
  height: ${PlayerButtonSize}px;
  background: ${COLORS.font1};
  position: absolute;
  top: calc(50% - ${PlayerButtonSize / 2}px);
  left: calc(50% - ${PlayerButtonSize / 2}px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const PlayerStyle = styled.div`
  position: relative;
  transition: opacity ease 600ms, z-index ease 600ms;
  z-index: 1;
`

class SimpleCardComponent extends Component {
  render() {
    const { href, ...others } = this.props

    return (
      <ContainerStyle as={others.href ? 'a' : 'div'} {...others}>
        {this.renderImage()}
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderParagraph()}
        {this.renderHorizontalStroke()}
      </ContainerStyle>
    )
  }

  renderImage() {
    const { imageProps, projectVideo, arrowColor, ariaLabel } = this.props

    const ProjectPlayerButton = props => (
      <PlayerButtonStyle>
        <Text
          size="default"
          weight="regular"
          color={props.arrowColor}
          aria-label={props.ariaLabel}
        >
          ►
        </Text>
      </PlayerButtonStyle>
    )

    return (
      <Marger bottom="2" className="k-Card__imageContainer">
        <PlayerStyle>
          {projectVideo && (
            <ProjectPlayerButton
              arrowColor={arrowColor}
              ariaLabel={ariaLabel}
            />
          )}
          <ImageStyle
            {...imageProps}
            alt={imageProps.alt || ''}
            className="k-Card__image"
          />
        </PlayerStyle>
      </Marger>
    )
  }

  renderTitle() {
    const { title, titleProps } = this.props
    const titleClassName = classNames('k-Card__title', titleProps.className)

    return (
      <>
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
      </>
    )
  }

  renderSubtitle() {
    const { subtitle } = this.props

    return (
      <>
        {subtitle && (
          <Marger top=".3" bottom="1.5">
            <Text size="micro" weight="regular">
              {parseHtml(subtitle)}
            </Text>
          </Marger>
        )}
      </>
    )
  }

  renderParagraph() {
    const { paragraph } = this.props

    return (
      <>
        {paragraph && (
          <Marger top=".3" bottom="1.5">
            <Text lineHeight="normal" size="micro" weight="light">
              {parseHtml(paragraph)}
            </Text>
          </Marger>
        )}
      </>
    )
  }

  renderHorizontalStroke() {
    const { horizontalStroke } = this.props

    return (
      <>
        {horizontalStroke && (
          <Marger top="1.5">
            <HorizontalStroke size="tiny" />
          </Marger>
        )}
      </>
    )
  }
}

SimpleCardComponent.propTypes = {
  imageProps: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
  titleProps: PropTypes.shape(),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  paragraph: PropTypes.string,
  horizontalStroke: PropTypes.bool,
  projectVideo: PropTypes.bool,
  ariaLabel: PropTypes.string,
  arrowColor: PropTypes.string,
  href: PropTypes.string,
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
  ariaLabel: null,
  arrowColor: 'background1',
  href: '#',
}

export const SimpleCard = card(SimpleCardComponent, {
  withoutBoxShadowOnHover: true,
})

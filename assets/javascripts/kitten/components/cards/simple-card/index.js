import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { card } from '../../../hoc/card'
import { Marger } from '../../../components/layout/marger'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { parseHtml } from '../../../helpers/utils/parser'
import { HorizontalStroke } from '../../../components/layout/horizontal-stroke'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'

const ContainerStyle = styled.a`
  line-height: 1;
  position: relative;
`

const ImageStyle = styled.img`
  width: 100%;
  display: block;
`

const PlayerButtonSize = pxToRem(70)

const PlayerButtonStyle = styled.div`
  width: ${PlayerButtonSize};
  height: ${PlayerButtonSize};
  background: ${COLORS.font1};
  position: absolute;
  top: calc(50% - ${PlayerButtonSize} / 2);
  left: calc(50% - ${PlayerButtonSize} / 2);
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
      <ContainerStyle {...others} as={others.href ? 'a' : 'div'}>
        {this.renderImage()}
        {this.renderTitle()}
        {this.renderSubtitle()}
        {this.renderParagraph()}
        {this.renderHorizontalStroke()}
      </ContainerStyle>
    )
  }

  renderImage() {
    const {
      imageProps,
      withPlayerButtonOnImage,
      arrowColor,
      ariaLabel,
    } = this.props

    const PlayerButtonOnImage = props => (
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
          {withPlayerButtonOnImage && (
            <PlayerButtonOnImage
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
    const { title, titleProps, tag } = this.props

    if (!title) return

    const titleClassName = classNames('k-Card__title', titleProps.className)

    return (
      <Marger top="2" bottom=".3">
        <Title
          tag={tag}
          {...titleProps}
          className={titleClassName}
          margin={false}
          modifier="senary"
        >
          {parseHtml(title)}
        </Title>
      </Marger>
    )
  }

  renderSubtitle() {
    const { subtitle } = this.props

    if (!subtitle) return

    return (
      <Marger top=".3" bottom="1.5">
        <Text size="micro" weight="regular">
          {parseHtml(subtitle)}
        </Text>
      </Marger>
    )
  }

  renderParagraph() {
    const { paragraph } = this.props

    if (!paragraph) return

    return (
      <Marger top=".3" bottom="1.5">
        <Text lineHeight="normal" size="micro" weight="light">
          {parseHtml(paragraph)}
        </Text>
      </Marger>
    )
  }

  renderHorizontalStroke() {
    const { horizontalStroke } = this.props

    if (!horizontalStroke) return
    return (
      <Marger top="1.5">
        <HorizontalStroke size="tiny" />
      </Marger>
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
  withPlayerButtonOnImage: PropTypes.bool,
  ariaLabel: PropTypes.string,
  arrowColor: PropTypes.string,
  href: PropTypes.string,
  tag: PropTypes.string,
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
  withPlayerButtonOnImage: false,
  ariaLabel: null,
  arrowColor: 'background1',
  href: '#',
  tag: 'p',
}

export const SimpleCard = card(SimpleCardComponent, {
  withoutBoxShadowOnHover: true,
})

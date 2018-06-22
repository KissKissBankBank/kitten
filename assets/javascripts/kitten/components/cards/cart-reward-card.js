import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import { GarbageIcon } from 'kitten/components/icons/garbage-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Title } from 'kitten/components/typography/title'
import { Text } from 'kitten/components/typography/text'
import { Paragraph } from 'kitten/components/typography/paragraph'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
import { domElementHelper } from 'kitten/helpers/dom/element-helper'

const Marger = Radium(MargerBase)

class CartRewardCardComponent extends Component {
  static propTypes = {
    titleAmount: PropTypes.string.isRequired,
    textDescription: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    subtitle: PropTypes.string,
    shippingTitle: PropTypes.string,
    shippingValue: PropTypes.string,
    shippingManageLink: PropTypes.string,
    onClose: PropTypes.func,
  }

  static defaultProps = {
    titleTag: 'h1',
    subtitle: '',
    shippingTitle: '',
    shippingValue: '',
    shippingManageLink: '',
    onClose: () => {},
  }

  constructor(props) {
    super(props)

    this.state = {
      isHidden: false,
      height: 'auto',
    }
  }

  handleCloseClick = () => {
    this.setState({
      isHidden: true,

      // The css animation on the garbage button requires a fixed height.
      height: domElementHelper.getComputedHeight(this.container),
    })
  }

  handleAnimationEnd = () => {
    this.props.onClose()
  }

  render() {
    const cartRewardStyles = [
      styles.card,
      this.state.isHidden && styles.card.hidden,
      { height: this.state.height },
    ]

    return (
      <StyleRoot>
        <div
          ref={div => {
            this.container = div
          }}
          style={cartRewardStyles}
          onAnimationEnd={this.handleAnimationEnd}
        >
          {this.renderGarbage()}
          {this.renderDescription()}
        </div>
      </StyleRoot>
    )
  }

  renderDescription() {
    const {
      titleTag,
      titleAmount,
      subtitle,
      textDescription,
      viewportIsMobile,
    } = this.props

    return (
      <Marger bottom="4" style={styles.description}>
        <Marger bottom={viewportIsMobile ? 1 : 2}>
          <Title italic modifier="quinary" margin={false} tag={titleTag}>
            {titleAmount}
          </Title>
        </Marger>
        {subtitle && (
          <Marger
            top={viewportIsMobile ? 1 : 2}
            bottom={viewportIsMobile ? 0.5 : 1}
          >
            <Text weight="bold" size="default">
              {subtitle}
            </Text>
          </Marger>
        )}
        <Marger top={viewportIsMobile ? 0.5 : 1} bottom="2">
          <Paragraph margin={false} modifier="quaternary">
            {textDescription}
          </Paragraph>
        </Marger>
        {this.renderBottomContent()}
      </Marger>
    )
  }

  renderGarbage() {
    return (
      <div style={styles.cart}>
        <ButtonIcon
          type="button"
          title="Garbage Button"
          aria-label="Garbage Button"
          modifier="beryllium"
          size="tiny"
          onClick={this.handleCloseClick}
        >
          <GarbageIcon className="k-ButtonIcon__svg" />
        </ButtonIcon>
      </div>
    )
  }

  renderBottomContent() {
    const { shippingTitle, shippingValue, shippingManageLink } = this.props

    return (
      <Fragment>
        {shippingTitle &&
          shippingValue && (
            <Marger top="2">
              <Text weight="regular" size="tiny">
                {shippingTitle}
                <Text weight="light" size="tiny">
                  {shippingValue}
                </Text>
              </Text>
            </Marger>
          )}

        {shippingManageLink && (
          <Marger top="2">
            <Text
              tag="a"
              href="#"
              color="primary1"
              decoration="none"
              weight="regular"
              size="tiny"
            >
              {shippingManageLink}
            </Text>
          </Marger>
        )}
      </Fragment>
    )
  }
}

const garbageButtonKeyframes = Radium.keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0, height: 0 },
})

const cartRewardAnimationClass = {
  animation: 'x .4s cubic-bezier(.895, .03, .685, .22) forwards',
  animationName: garbageButtonKeyframes,
  pointerEvents: 'none',
  opacity: 1,
}

const styles = {
  card: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: COLORS.line1,
    overflow: 'hidden',

    hidden: cartRewardAnimationClass,
  },

  description: {
    marginLeft: 20,
    marginRight: 20,
    maxWidth: 500,

    [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
      marginLeft: 40,
      marginRight: 40,
    },
  },

  cart: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}

export const CartRewardCard = mediaQueries(CartRewardCardComponent, {
  viewportIsMobile: true,
})

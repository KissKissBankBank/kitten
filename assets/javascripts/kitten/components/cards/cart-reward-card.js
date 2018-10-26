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
import deprecated from 'prop-types-extra/lib/deprecated'

const Marger = Radium(MargerBase)

class CartRewardCardComponent extends Component {
  static propTypes = {
    titleAmount: PropTypes.string.isRequired,
    textDescription: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    subtitle: PropTypes.string,
    shippingTitle: deprecated(
      PropTypes.string,
      'Prefer use <CartRewardCard.Information />',
    ),
    shippingValue: deprecated(
      PropTypes.string,
      'Prefer use <CartRewardCard.Information />',
    ),
    updateAmountTitle: PropTypes.string,
    updateAmountLink: PropTypes.string,
    onAfterClose: PropTypes.func,
    onCloseClick: PropTypes.func,
  }

  static defaultProps = {
    titleTag: 'h1',
    subtitle: '',
    shippingTitle: '',
    shippingValue: '',
    updateAmountTitle: '',
    updateAmountLink: '',
    onAfterClose: () => {},
    onCloseClick: null,
  }

  constructor(props) {
    super(props)

    this.state = {
      isHidden: false,
      height: 'auto',
    }
  }

  handleCloseClick = () => {
    if (this.props.onCloseClick) {
      this.props.onCloseClick()
    } else {
      this.close()
    }
  }

  handleAnimationEnd = () => {
    this.props.onAfterClose()
  }

  close = () => {
    this.setState({
      isHidden: true,

      // The css animation on the garbage button requires a fixed height.
      height: domElementHelper.getComputedHeight(this.container),
    })
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
        <Marger bottom={viewportIsMobile && !subtitle ? 1 : 2}>
          <Title italic modifier="quinary" margin={false} tag={titleTag}>
            {titleAmount}
          </Title>
        </Marger>
        {subtitle && (
          <Marger top="2" bottom="1">
            <Text weight="bold" size="default">
              {subtitle}
            </Text>
          </Marger>
        )}
        <Marger top={viewportIsMobile && !subtitle ? 1 : 2} bottom="2">
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
          style={styles.garbage}
        >
          <GarbageIcon className="k-ButtonIcon__svg" />
        </ButtonIcon>
      </div>
    )
  }

  renderBottomContent() {
    const {
      shippingTitle,
      shippingValue,
      updateAmountTitle,
      updateAmountLink,
      children,
    } = this.props

    const informationElements = React.Children.toArray(children).filter(
      child => child.type === CartRewardCard.Information,
    )

    return (
      <Fragment>
        {shippingTitle &&
          shippingValue && (
            <Marger top="2">
              <CartRewardCard.Information
                title={shippingTitle}
                value={shippingValue}
              />
            </Marger>
          )}

        {informationElements}

        {updateAmountTitle && (
          <Marger top="2">
            <Text
              tag="a"
              href={updateAmountLink}
              color="primary1"
              decoration="none"
              weight="regular"
              size="tiny"
            >
              {updateAmountTitle}
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

const borderWidth = 2

const styles = {
  card: {
    borderWidth: borderWidth,
    borderStyle: 'solid',
    borderColor: COLORS.line1,

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

  garbage: {
    position: 'relative',
    top: `-${borderWidth}px`,
    right: `-${borderWidth}px`,
  },
}

export const CartRewardCard = mediaQueries(CartRewardCardComponent, {
  viewportIsMobile: true,
  exposedMethods: ['close'],
})

CartRewardCard.Information = ({ title, value }) => (
  <div>
    <Text weight="regular" size="tiny">
      {title} <Text weight="light">{value}</Text>
    </Text>
  </div>
)

CartRewardCard.Information.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

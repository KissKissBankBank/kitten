import React, { Component, Fragment } from 'react'
import Radium, { StyleRoot } from 'radium'
import PropTypes from 'prop-types'
import { Marger as MargerBase } from 'kitten/components/layout/marger'
import {
  Grid as GridBase,
  GridCol as GridColBase,
} from 'kitten/components/grid/grid'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { GarbageIcon } from 'kitten/components/icons/garbage-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { Title as TitleBase } from 'kitten/components/typography/title'
import { Text as TextBase } from 'kitten/components/typography/text'
import { Paragraph as ParagraphBase } from 'kitten/components/typography/paragraph'
import COLORS from 'kitten/constants/colors-config'
import { ScreenConfig } from 'kitten/constants/screen-config'
import { mediaQueries } from 'kitten/hoc/media-queries'
// import { domElementHelper } from 'kitten/helpers/dom/element-helper'

const Grid = Radium(GridBase)
const GridCol = Radium(GridColBase)
const Title = Radium(TitleBase)
const Text = Radium(TextBase)
const Marger = Radium(MargerBase)
const Paragraph = Radium(ParagraphBase)

class BasketCardComponent extends Component {
  static propTypes = {
    titleAmount: PropTypes.string.isRequired,
    textDescription: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    subtitle: PropTypes.string,
    titleBottom: PropTypes.string,
    valueBottom: PropTypes.string,
    manageLinkBottom: PropTypes.string,
    isHidden: PropTypes.bool,
    onClose: () => {},
  }

  static defaultProps = {
    titleTag: 'h1',
    subtitle: '',
    titleBottom: '',
    valueBottom: '',
    manageLinkBottom: '',
    isHidden: false,
  }

  constructor(props) {
    super(props)

    this.state = {
      isHidden: false,
      // height: 'auto',
    }
  }

  handleCloseClick() {
    console.log(handleCloseClick)
    this.setState({
      isHidden: this.state.isHidden,

      // The css animation on the garbage button requires a fixed height.
      // height: domElementHelper.getComputedHeight(this.container),
    })
  }

  handleAnimationEnd() {
    this.props.onClose()
  }

  render() {
    const basketStyles = [
      styles.card,
      this.state.isHidden && styles.card.hidden,
    ]

    if (this.props.isHidden) return

    return (
      <StyleRoot style={basketStyles} onAnimationEnd={this.handleAnimationEnd}>
        {this.renderGarbage()}
        {this.renderDescription()}
      </StyleRoot>
    )
  }

  renderDescription() {
    const { titleTag, titleAmount, subtitle, textDescription } = this.props

    return (
      <Marger bottom="4" style={styles.description}>
        <Marger bottom="1">
          <Title italic modifier="quinary" margin={false} tag={titleTag}>
            {titleAmount}
          </Title>
        </Marger>
        <Marger top="1" bottom=".5">
          <Text weight="bold" size="default">
            {subtitle}
          </Text>
        </Marger>
        <Marger top=".5" bottom="2">
          <Paragraph margin={false} modifier="quaternary">
            {textDescription}
          </Paragraph>
        </Marger>
        <Marger top="2">{this.renderBottomContent()}</Marger>
      </Marger>
    )
  }

  renderGarbage() {
    return (
      <div style={styles.basket}>
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
    const { titleBottom, valueBottom, manageLinkBottom } = this.props

    return (
      <Fragment>
        {titleBottom && (
          <Text weight="regular" size="tiny">
            {titleBottom}
            <Text weight="light" size="tiny">
              {valueBottom}
            </Text>
          </Text>
        )}

        {manageLinkBottom && (
          <Text
            tag="a"
            href="#"
            color="primary1"
            decoration="none"
            weight="regular"
            size="tiny"
          >
            {manageLinkBottom}
          </Text>
        )}
      </Fragment>
    )
  }
}

const garbageButtonKeyframes = Radium.keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0, height: 0 },
})

const basketAnimationClass = {
  animationName: garbageButtonKeyframes,
  animation: '.4s cubicBezier(.895, .03, .685, .22) forwards',
  pointerEvents: 'none',
}

const styles = {
  card: {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: COLORS.line1,
    overflow: 'hidden',

    hidden: basketAnimationClass,
  },

  description: {
    marginLeft: 20,
    marginRight: 20,
    [`@media (min-width: ${ScreenConfig['S'].min}px)`]: {
      marginLeft: 40,
      marginRight: 100,
    },
  },

  basket: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
}

export const BasketCard = Radium(BasketCardComponent)

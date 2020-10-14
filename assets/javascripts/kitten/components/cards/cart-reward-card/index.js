import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { Marger } from '../../../components/layout/marger'
import { GarbageIcon } from '../../../components/icons/garbage-icon'
import { ButtonIcon } from '../../../components/buttons/button-icon'
import { Title } from '../../../components/typography/title'
import { Text } from '../../../components/typography/text'
import { Paragraph } from '../../../components/typography/paragraph'
import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { domElementHelper } from '../../../helpers/dom/element-helper'
import { pxToRem } from '../../../helpers/utils/typography'
import deprecated from 'prop-types-extra/lib/deprecated'
import classNames from 'classnames'

const garbageButtonKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    height: 0;
  }
`

const borderWidth = 2

const StyledCartRewardCard = styled.div`
  border-width: ${pxToRem(borderWidth)};
  border-style: solid;
  border-color: ${COLORS.line1};
  height: ${({ elementHeight }) => pxToRem(elementHeight)};

  &.k-CartRewardCard--hidden {
    animation: ${garbageButtonKeyframes} 0.4s
      cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
    pointer-events: none;
    opacity: 1;
  }

  .k-CartRewardCard__description {
    margin-left: ${pxToRem(20)};
    margin-right: ${pxToRem(20)};
    max-width: ${pxToRem(500)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      margin-left: ${pxToRem(40)};
      margin-right: ${pxToRem(40)};
    }
  }

  .k-CartRewardCard__cart {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .k-CartRewardCard__garbage {
    position: relative;
    top: ${pxToRem(-borderWidth)};
    right: ${pxToRem(-borderWidth)};
  }
`

export class CartRewardCard extends Component {
  static propTypes = {
    titleAmount: PropTypes.string.isRequired,
    titleTag: PropTypes.string,
    subtitle: PropTypes.string,
    descriptionTag: PropTypes.string,
    updateAmountTitle: PropTypes.string,
    updateAmountLink: PropTypes.string,
    onAfterClose: PropTypes.func,
    onCloseClick: PropTypes.func,
    deleteButtonA11yText: PropTypes.string,

    // Deprecated.
    shippingTitle: deprecated(
      PropTypes.string,
      'Prefer use <CartRewardCard.Information />',
    ),
    shippingValue: deprecated(
      PropTypes.string,
      'Prefer use <CartRewardCard.Information />',
    ),
    textDescription: deprecated(
      PropTypes.string,
      'Prefer use <CartRewardCard.Description />',
    ),
  }

  static defaultProps = {
    titleTag: 'h1',
    subtitle: '',
    descriptionTag: 'p',
    updateAmountTitle: '',
    updateAmountLink: '',
    onAfterClose: () => {},
    onCloseClick: null,
    deleteButtonA11yText: 'Delete',
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
    return (
      <StyledCartRewardCard
        ref={div => {
          this.container = div
        }}
        onAnimationEnd={this.handleAnimationEnd}
        className={classNames('k-CartRewardCard', {
          'k-CartRewardCard--hidden': this.state.isHidden,
        })}
        elementHeight={this.state.height}
      >
        {this.renderGarbage()}
        {this.renderDescription()}
      </StyledCartRewardCard>
    )
  }

  renderDescription() {
    const {
      titleTag,
      titleAmount,
      subtitle,
      descriptionTag,
      children,
      textDescription,
    } = this.props

    const description = React.Children.toArray(children).filter(
      child => child.type === CartRewardCard.Description,
    )

    return (
      <div className="k-u-margin-bottom-quadruple k-CartRewardCard__description">
        <div
          className={classNames('k-u-margin-bottom-double', {
            'k-u-margin-bottom-single@xs-down': !subtitle,
          })}
        >
          <Title italic modifier="quinary" margin={false} tag={titleTag}>
            {titleAmount}
          </Title>
        </div>

        {subtitle && (
          <div className="k-u-margin-bottom-single k-u-margin-top-double">
            <Text weight="bold" size="default">
              {subtitle}
            </Text>
          </div>
        )}

        <div
          className={classNames(
            'k-u-margin-bottom-double',
            'k-u-margin-top-double',
            {
              'k-u-margin-top-single@xs-down': !subtitle,
            },
          )}
        >
          <Paragraph tag={descriptionTag} margin={false} modifier="quaternary">
            {textDescription}
            {description}
          </Paragraph>
        </div>
        {this.renderBottomContent()}
      </div>
    )
  }

  renderGarbage() {
    return (
      <div className="k-CartRewardCard__cart">
        <ButtonIcon
          type="button"
          aria-label={this.props.deleteButtonA11yText}
          modifier="hydrogen"
          size="micro"
          onClick={this.handleCloseClick}
          className="k-CartRewardCard__garbage"
        >
          <GarbageIcon aria-hidden className="k-ButtonIcon__svg" />
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
      <>
        {shippingTitle && shippingValue && (
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
      </>
    )
  }
}

CartRewardCard.Information = ({ title, value }) => (
  <Text weight="regular" size="tiny" tag="p" className="k-u-margin-none">
    {title} <Text weight="light">{value}</Text>
  </Text>
)

CartRewardCard.Information.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

CartRewardCard.Description = ({ children }) => children

import React, { PureComponent } from 'react'
import styled, { css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '../../../../components/molecules/buttons/button'
import { ArrowIcon } from '../../../../components/graphics/icons/arrow-icon'
import COLORS from '../../../../constants/colors-config'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledButton = styled(Button)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: ${pxToRem(21)};

  ${({ expanded }) =>
    expanded &&
    css`
      background-color: ${COLORS.font1};
      border-color: ${COLORS.font1};
    `}
`

const StyledArrowIcon = styled(ArrowIcon)`
  width: ${pxToRem(8)};
  height: ${pxToRem(12)}; // half of button base line-height
  margin-left: ${pxToRem(10)};
`

export class ExpandBoardButton extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    ariaId: PropTypes.string,
    expandChildren: PropTypes.node,
    expanded: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string,
    borderRadius: PropTypes.number,
  }

  static defaultProps = {
    expandChildren: null,
    expanded: false,
    disabled: false,
    onClick: () => {},
    ariaId: '',
    borderRadius: 0,
    size: 'big',
  }

  render() {
    const {
      children,
      expandChildren,
      expanded,
      disabled,
      onClick,
      ariaId,
      borderRadius,
      size,
    } = this.props

    const defaultExpandChildren = expandChildren ? expandChildren : children

    return (
      <StyledButton
        size={size}
        modifier="helium"
        disabled={disabled}
        aria-expanded={expanded}
        aria-controls={ariaId}
        onClick={onClick}
        type="button"
        borderRadius={borderRadius}
      >
        <div>
          {expanded ? defaultExpandChildren : children}
          <StyledArrowIcon
            direction={expanded ? 'top' : 'bottom'}
            fill={COLORS.background1}
          />
        </div>
      </StyledButton>
    )
  }
}

export class ExpandBoardContent extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
    ariaId: PropTypes.string,
  }

  static defaultProps = {
    ariaId: '',
  }

  render() {
    const { children, ariaId } = this.props

    return <div id={ariaId}>{children}</div>
  }
}

const growAnimation = () => keyframes`
  0%: {
    opacity: 0;
    max-height: 0;
  }
  100%: {
   opacity: 1;
   max-height: var(--ExpandBoard-animationMaxHeight);
  };
`

const shrinkAnimation = () =>
  keyframes`
  0%: {
    opacity: 1;
    max-height: var(--ExpandBoard-animationMaxHeight);
  }
  100%: {
    opacity: 0;
    max-height: 0;
  };
`

export class ExpandBoard extends PureComponent {
  static Button = ExpandBoardButton
  static Content = ExpandBoardContent

  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
    ariaId: PropTypes.string.isRequired,
    withAnimation: PropTypes.bool,
    animationMaxHeight: PropTypes.string,
    animationShrinkingDuration: PropTypes.number,
  }

  static defaultProps = {
    disabled: false,
    style: {},
    onClick: () => {},
    ariaId: 'k-ExpandBoard',
    withAnimation: false,
    animationMaxHeight: '100vh',
    animationShrinkingDuration: 0.5,
  }

  state = {
    expanded: false,
    isShrinking: false,
    isExpanding: false,
  }

  isButtonComponent = component => component.type === ExpandBoardButton
  isContentComponent = component => component.type === ExpandBoardContent

  handleAfterClick = () => {
    const { expanded, isShrinking, isExpanding } = this.state

    document.activeElement.blur()
    this.props.onClick({ expanded, isShrinking, isExpanding })
  }

  updateExpandState = () => {
    this.setState(
      prevState => ({
        expanded: !prevState.expanded,
        isShrinking: false,
        isExpanding: false,
      }),
      this.handleAfterClick,
    )
  }

  handleClick = () => {
    const { withAnimation, animationShrinkingDuration } = this.props

    if (!withAnimation) return this.updateExpandState()

    return this.setState(
      prevState => {
        if (prevState.expanded) {
          return { isShrinking: true }
        }

        return { isExpanding: true }
      },
      () => {
        if (this.state.isShrinking) {
          return setTimeout(
            this.updateExpandState,
            animationShrinkingDuration * 1000,
          )
        }

        return this.updateExpandState()
      },
    )
  }

  contentStyle = () => {
    const {
      withAnimation,
      animationShrinkingDuration,
      animationMaxHeight,
    } = this.props

    if (!withAnimation) return null

    if (this.state.isShrinking) {
      return {
        '--ExpandBoard-animationMaxHeight': animationMaxHeight,
        maxHeight: animationMaxHeight,
        opacity: 1,
        animationDuration: `${animationShrinkingDuration}s`,
        animationDelay: 0,
        animationIterationCount: 1,
        animationFillMode: 'forwards',
        animationName: shrinkAnimation,
        animationTimingFunction: 'ease-in-out',
      }
    }

    return {
      '--ExpandBoard-animationMaxHeight': animationMaxHeight,
      maxHeight: 0,
      opacity: 0,
      animationDuration: '1s',
      animationDelay: 0,
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      animationName: growAnimation,
      animationTimingFunction: 'ease-in-out',
    }
  }

  render() {
    const { children, style, disabled, ariaId } = this.props

    let button = null
    let content = null

    React.Children.forEach(children, child => {
      if (!React.isValidElement(child)) return null

      if (this.isButtonComponent(child)) {
        button = React.cloneElement(child, {
          disabled,
          expanded: this.state.expanded,
          onClick: this.handleClick,
          style: <StyledButton />,
          ariaId,
        })
      }

      if (this.isContentComponent(child)) {
        content = React.cloneElement(child, {
          ariaId,
          style: this.contentStyle(),
        })
      }
    })

    return (
      <div style={style}>
        {button}
        {this.state.expanded && content}
      </div>
    )
  }
}

import React, { Component } from 'react'
import Radium from 'radium'
import styled, { css, keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '../../components/buttons/button/button'
import { ArrowIcon } from '../../components/icons/arrow-icon'
import COLORS from '../../constants/colors-config'
import { pxToRem } from '../../helpers/utils/typography'

const StyledButton = styled(Button)`
  width: '100%';
  display: 'flex';
  align-items: 'center';
  justify-content: 'center';
  line-height: '1.3rem';
  padding: ${pxToRem(22)} ${pxToRem(30)};

  ${({ expanded }) =>
    expanded &&
    css`
      background-color: COLORS.font1;
      border-color: COLORS.font1;
    `}
`

const StyledArrowIcon = styled(ArrowIcon)`
  width: ${pxToRem(8)};
  height: ${pxToRem(12)}; // half of button base line-height
  margin-left: ${pxToRem(10)};
`

class ExpandBoardButton extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    ariaId: PropTypes.string,
    expandChildren: PropTypes.node,
    expanded: PropTypes.bool,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    expandChildren: null,
    expanded: false,
    disabled: false,
    style: {},
    onClick: () => {},
    ariaId: '',
  }

  render() {
    const {
      children,
      expandChildren,
      expanded,
      disabled,
      style,
      onClick,
      ariaId,
    } = this.props
    const defaultExpandChildren = expandChildren ? expandChildren : children

    return (
      <StyledButton
        icon
        iconOnRight
        size="big"
        modifier="helium"
        disabled={disabled}
        aria-expanded={expanded}
        aria-controls={ariaId}
        onClick={onClick}
        type="button"
      >
        <div>
          {expanded ? defaultExpandChildren : children}
          <StyledArrowIcon
            version="solid"
            direction={expanded ? 'top' : 'bottom'}
            fill={COLORS.background1}
          />
        </div>
      </StyledButton>
    )
  }
}

class ExpandBoardContentBase extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    ariaId: PropTypes.string,
  }

  static defaultProps = {
    ariaId: '',
  }

  render() {
    const { children, ariaId, style } = this.props

    return (
      <div id={ariaId} style={style}>
        {children}
      </div>
    )
  }
}

const ExpandBoardContent = Radium(ExpandBoardContentBase)

const growAnimation = () =>
  keyframes`
    0%: {
      opacity: 0;
      maxHeight: 0;
    }
    100%: {
     opacity: 1;
     maxHeight: this.props.animationMaxHeight;
    }
  grow;
`

const shrinkAnimation = () =>
  keyframes`
    0%: {
      opacity: 1;
      maxHeight: this.props.animationMaxHeight;
    }
    100%: {
      opacity: 0;
      maxHeight: 0;
    }
  schrink;
`

class ExpandBoardBase extends Component {
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
        maxHeight: animationMaxHeight,
        opacity: 1,
        animationDuration: `${animationShrinkingDuration}s`,
        animationDelay: 0,
        animationIterationCount: 1,
        animationFillMode: 'forwards',
        animationName: this.shrinkAnimation,
        animationTimingFunction: 'ease-in-out',
      }
    }

    return {
      maxHeight: 0,
      opacity: 0,
      animationDuration: '1s',
      animationDelay: 0,
      animationIterationCount: 1,
      animationFillMode: 'forwards',
      animationName: this.growAnimation,
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
          style: styles.button,
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

const styles = {
  button: {
    base: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1.3rem',
      padding: `${pxToRem(22)} ${pxToRem(30)}`,
    },
    expanded: {
      backgroundColor: COLORS.font1,
      borderColor: COLORS.font1,
    },
    arrow: {
      width: pxToRem(8),
      height: '0.75rem', // half of button base line-height
      marginLeft: pxToRem(10),
    },
  },
}

export const ExpandBoard = Radium(ExpandBoardBase)

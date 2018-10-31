import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Button as ButtonBase } from 'kitten/components/buttons/button'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import COLORS from 'kitten/constants/colors-config'
import { pxToRem } from 'kitten/helpers/utils/typography'

const Button = Radium(ButtonBase)

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
    const buttonStyles = expanded
      ? { ...style.base, ...style.expanded }
      : style.base

    return (
      <Button
        icon
        iconOnRight
        size="big"
        modifier="helium"
        disabled={disabled}
        aria-expanded={expanded}
        aria-controls={ariaId}
        style={buttonStyles}
        onClick={onClick}
        type="button"
      >
        {expanded ? defaultExpandChildren : children}
        <ArrowIcon
          direction={expanded ? 'top' : 'bottom'}
          className="k-Button__icon"
          fill={COLORS.background1}
          style={style.arrow}
        />
      </Button>
    )
  }
}

class ExpandBoardContent extends Component {
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

class ExpandBoardBase extends Component {
  static Button = ExpandBoardButton
  static Content = ExpandBoardContent

  static propTypes = {
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.object,
    onClick: PropTypes.func,
    ariaId: PropTypes.string.isRequired,
  }

  static defaultProps = {
    disabled: false,
    style: {},
    onClick: () => {},
    ariaId: 'k-ExpandBoard',
  }

  constructor(props) {
    super()
    this.state = {
      expanded: false,
    }
  }

  isButtonComponent = component => component.type.name === 'ExpandBoardButton'
  isContentComponent = component => component.type.name === 'ExpandBoardContent'

  handleClick = () => {
    this.setState(
      prevState => ({
        expanded: !prevState.expanded,
      }),
      () => {
        document.activeElement.blur()
        this.props.onClick({ expanded: this.state.expanded })
      },
    )
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
      lineHeight: '1.3em',
      // As the arrow takes a huge space because of its rotation, we cannot
      // apply the same paddings as on the basic big button. These values ajust
      // the paddings so it fits the same as the basic big button.
      paddingTop: pxToRem(3),
      paddingBottom: pxToRem(3),
    },
    expanded: {
      backgroundColor: COLORS.font1,
      borderColor: COLORS.font1,
    },
    arrow: {
      width: '0.375rem',
      height: '0.375rem',
    },
  },
}

export const ExpandBoard = Radium(ExpandBoardBase)

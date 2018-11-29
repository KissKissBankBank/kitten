import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Button as ButtonBase } from '../../components/buttons/button'
import { ArrowIcon } from '../../components/icons/arrow-icon'
import COLORS from '../../constants/colors-config'
import { pxToRem } from '../../helpers/utils/typography'

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
        <div>
          {expanded ? defaultExpandChildren : children}
          <ArrowIcon
            version="solid"
            direction={expanded ? 'top' : 'bottom'}
            fill={COLORS.background1}
            style={style.arrow}
          />
        </div>
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

  isButtonComponent = component => component.type === ExpandBoardButton
  isContentComponent = component => component.type === ExpandBoardContent

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

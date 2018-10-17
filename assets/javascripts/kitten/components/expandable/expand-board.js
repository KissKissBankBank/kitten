import React, { Component } from 'react'
import Radium from 'radium'
import PropTypes from 'prop-types'
import { Button } from 'kitten/components/buttons/button'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import COLORS from 'kitten/constants/colors-config'

const ExpandBoardButton = ({
  children,
  expandChildren,
  expanded,
  style,
  onClick,
  ariaId,
}) => {
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
      aria-expanded={expanded}
      aria-controls={ariaId}
      style={buttonStyles}
      onClick={onClick}
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

ExpandBoardButton.propTypes = {
  children: PropTypes.node.isRequired,
  expandChildren: PropTypes.node,
  expanded: PropTypes.bool,
  ariaId: PropTypes.string,
}

ExpandBoardButton.defaultProps = {
  expandChildren: null,
  expanded: false,
  ariaId: 'k-ExpandBoard',
}

const ExpandBoardContent = ({ children }) => children

class ExpandBoardBase extends Component {
  static Button = ExpandBoardButton
  static Content = ExpandBoardContent

  constructor(props) {
    super()
    this.state = {
      expanded: false,
    }
  }

  isButtonComponent = component => component.type.name === 'ExpandBoardButton'

  handleClick = () => {
    const newState = { expanded: !this.state.expanded }
    this.setState(newState, () => document.activeElement.blur())
    this.props.onClick(newState)
  }

  render() {
    const { children, style, disabled, ariaId } = this.props

    let button = null

    const content = React.Children.map(children, child => {
      if (!React.isValidElement(child)) return null

      if (this.isButtonComponent(child)) {
        button = React.cloneElement(child, {
          disabled,
          expanded: this.state.expanded,
          onClick: this.handleClick,
          style: styles.button,
          ariaId,
        })
        return null
      }

      return child
    })

    return (
      <div style={style}>
        {button}
        {this.state.expanded && <div id={ariaId}>{content}</div>}
      </div>
    )
  }
}

const styles = {
  button: {
    base: {
      width: '100%',
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

ExpandBoardBase.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  ariaId: PropTypes.string,
}

ExpandBoardBase.defaultProps = {
  disabled: false,
  style: {},
  onClick: () => {},
  ariaId: 'k-ExpandBoard',
}

export const ExpandBoard = Radium(ExpandBoardBase)

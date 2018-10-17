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
      style={buttonStyles}
      onClick={onClick}
    >
      {expanded ? defaultExpandChildren : children}
      <ArrowIcon
        direction={expanded ? 'top' : 'bottom'}
        className="k-ButtonIcon__svg"
      />
    </Button>
  )
}

ExpandBoardButton.propTypes = {
  children: PropTypes.node.isRequired,
  expandChildren: PropTypes.node,
  expanded: PropTypes.bool,
}

ExpandBoardButton.defaultProps = {
  expandChildren: null,
  expanded: false,
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

  isButtonComponent = component => component.type.name == 'ExpandBoardButton'

  handleClick = () => {
    const newState = { expanded: !this.state.expanded }
    this.setState(newState, () => document.activeElement.blur())
    this.props.onClick(newState)
  }

  render() {
    const { children, style, disabled } = this.props

    let button

    const content = React.Children.map(children, child => {
      if (!React.isValidElement(child)) return null

      if (this.isButtonComponent(child)) {
        button = React.cloneElement(child, {
          disabled,
          expanded: this.state.expanded,
          onClick: this.handleClick,
          style: styles.button,
        })
        return null
      }

      return child
    })

    return (
      <div style={style}>
        {button}
        {this.state.expanded && <div>{content}</div>}
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
    },
  },
}

ExpandBoardBase.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
}

ExpandBoardBase.defaultProps = {
  disabled: false,
  style: {},
  onClick: () => {},
}

export const ExpandBoard = Radium(ExpandBoardBase)

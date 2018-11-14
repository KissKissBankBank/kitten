import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium, { StyleRoot } from 'radium'
import { ArrowIcon as ArrowIconBase } from 'kitten/components/icons/arrow-icon'
import COLORS from 'kitten/constants/colors-config'
import { pxToRem } from 'kitten/helpers/utils/typography'

const ArrowIcon = Radium(ArrowIconBase)

class ListButtonItem extends Component {
  state = {
    focus: false,
  }

  handleKeyPress = event => {
    const { onKeyPress } = this.props
    const enterKey = 13
    const spaceKey = 32

    switch (event.which) {
      case enterKey:
      case spaceKey:
        event.preventDefault
        onClick()
        if (onKeyPress) {
          onKeyPress()
        }
        break
    }
  }

  updateFocus = focusState => {
    this.setState({ focus: focusState })
  }

  handleFocus = event => {
    const { onFocus } = this.props

    this.updateFocus(true)
    if (onFocus) {
      onFocus()
    }
  }

  handleBlur = () => {
    const { onBlur } = this.props

    this.updateFocus(false)
    if (onBlur) {
      onBlur()
    }
  }

  handleMouseEnter = () => {
    const { onMouseEnter } = this.props

    this.updateFocus(true)
    if (onMouseEnter) {
      onMouseEnter()
    }
  }

  handleMouseLeave = () => {
    const { onMouseLeave } = this.props

    this.updateFocus(false)
    if (onMouseLeave) {
      onMouseLeave()
    }
  }

  render() {
    const {
      children,
      disabled,
      style,
      onClick,
      withTopBorder,
      ...others
    } = this.props

    const { focus } = this.state

    const buttonStyles = [
      styles.buttonItem.base,
      style,
      withTopBorder && styles.buttonItem.topBorder,
      disabled && styles.buttonItem.disabled,
    ]

    const arrowStyles = [
      styles.buttonItem.icon.base,
      disabled && styles.buttonItem.icon.disabled,
      !disabled && focus && styles.buttonItem.icon.focus,
    ]

    return (
      <StyleRoot>
        <div
          {...others}
          role="button"
          style={buttonStyles}
          tabIndex="0"
          onClick={disabled ? null : onClick}
          onKeyPress={disabled ? null : this.handleKeyPress}
          onMouseEnter={this.handleMouseEnter}
          onFocus={this.handleFocus}
          onMouseLeave={this.handleMouseLeave}
          onBlur={this.handleBlur}
        >
          <div style={styles.buttonItem.content}>{children}</div>
          <div style={styles.buttonItem.arrow}>
            <ArrowIcon className="k-Button__icon" style={arrowStyles} />
          </div>
        </div>
      </StyleRoot>
    )
  }
}

ListButtonItem.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  withTopBorder: PropTypes.bool,
}

ListButtonItem.defaultProps = {
  disabled: false,
  style: {},
  onClick: () => {},
  withTopBorder: false,
}

export class ListBase extends Component {
  static ButtonItem = ListButtonItem

  render() {
    const { children } = this.props

    return (
      <ul style={styles.list}>
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) return null

          return <li>{child}</li>
        })}
      </ul>
    )
  }
}

ListBase.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = {
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  buttonItem: {
    base: {
      display: 'flex',
      borderLeft: `${COLORS.line1} 0.125rem solid`,
      borderRight: `${COLORS.line1} 0.125rem solid`,
      borderBottom: `${COLORS.line1} 0.125rem solid`,
      cursor: 'pointer',
      paddingLeft: '1.25rem',
      paddingRight: '1.25rem',
      ':hover': {
        backgroundColor: COLORS.background2,
      },
    },
    topBorder: {
      borderTop: `${COLORS.line1} 0.125rem solid`,
    },
    disabled: {
      color: COLORS.line2,
      backgroundColor: COLORS.background1,
      cursor: 'not-allowed',
      ':hover': {
        backgroundColor: COLORS.background1,
      },
    },
    content: {
      flexGrow: 1,
    },
    arrow: {
      display: 'flex',
      alignItems: 'center',
    },
    icon: {
      base: {
        position: 'relative',
        left: 0,
        transition: 'left .2s',
      },
      focus: {
        left: pxToRem(5),
      },
      disabled: {
        fill: COLORS.line2,
      },
    },
  },
}

export const List = Radium(ListBase)

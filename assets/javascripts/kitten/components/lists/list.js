import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium, { StyleRoot } from 'radium'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import COLORS from 'kitten/constants/colors-config'

const ListButtonItem = ({
  children,
  disabled,
  style,
  onClick,
  withTopBorder,
  ...others
}) => {
  let buttonStyles = { ...styles.buttonItem.base, ...style }

  if (withTopBorder) {
    buttonStyles = { ...buttonStyles, ...styles.buttonItem.topBorder }
  }

  if (disabled) {
    buttonStyles = { ...buttonStyles, ...styles.buttonItem.disabled }
  }

  const handleKeyPress = event => {
    const KEY_ENTER = 13
    const KEY_SPACE = 32

    switch (event.which) {
      case KEY_ENTER:
      case KEY_SPACE:
        event.preventDefault
        onClick()
        break
    }

    return true
  }

  return (
    <StyleRoot>
      <div
        {...others}
        role="button"
        style={buttonStyles}
        tabIndex="0"
        onClick={disabled ? null : onClick}
        onKeyPress={disabled ? null : handleKeyPress}
      >
        <div style={styles.buttonItem.content}>{children}</div>
        <div style={styles.buttonItem.arrow}>
          <ArrowIcon className="k-Button__icon" />
        </div>
      </div>
    </StyleRoot>
  )
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
  },
}

export const List = Radium(ListBase)

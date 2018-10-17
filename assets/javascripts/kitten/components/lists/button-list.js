import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Radium, { StyleRoot } from 'radium'
import { ArrowIcon } from 'kitten/components/icons/arrow-icon'
import COLORS from 'kitten/constants/colors-config'

const ButtonListItem = ({
  children,
  disabled,
  style,
  onClick,
  onKeyPress,
  ...others
}) => {
  let linkStyles = { ...styles.item.base, ...style }

  if (disabled) {
    linkStyles = { ...linkStyles, ...styles.item.disabled }
  }

  return (
    <StyleRoot>
      <div
        role="button"
        style={linkStyles}
        onClick={disabled ? null : onClick}
        onKeyPress={disabled ? null : onKeyPress}
        {...others}
      >
        <div style={styles.item.content}>{children}</div>
        <div style={styles.item.arrow}>
          <ArrowIcon className="k-Button__icon" />
        </div>
      </div>
    </StyleRoot>
  )
}

ButtonListItem.propTypes = {
  disabled: PropTypes.bool,
}

ButtonListItem.defaultProps = {
  disabled: false,
}

export class ButtonListBase extends Component {
  static Item = ButtonListItem

  isButtonListItem = component => component.type.name === ButtonListItem

  render() {
    const { children } = this.props

    return (
      <ul style={styles.list}>
        {React.Children.map(children, child => {
          if (!React.isValidElement(child)) return null

          return <li>{child}</li>
        })}
      </ul>
    )
  }
}

ButtonListBase.propTypes = {
  children: PropTypes.node.isRequired,
}

const styles = {
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  item: {
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
    disabled: {
      color: COLORS.line2,
      backgroundColor: COLORS.background1,
      cursor: 'not-allowed',
      ':hover': {
        backgroundColor: COLORS.background1,
      },
    },
    content: {
      display: 'flex',
      flexGrow: 1,
    },
    arrow: {
      display: 'flex',
      alignItems: 'center',
    },
  },
}

export const ButtonList = Radium(ButtonListBase)

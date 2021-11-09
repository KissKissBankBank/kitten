import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import COLORS from '../../../../constants/colors-config'
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden'

export const Button = ({
  a11yText,
  icon,
  backgroundColor,
  backgroundColorHover,
  color,
  colorHover,
  text,
  href,
  type,
  hiddenText: { min, max } = {},
  as,
  style,
  className,
  smallPadding,
  ...props
}) => {
  const hiddenMin = min ? `k-u-hidden@${min}-up` : ''
  const hiddenMax = max ? `k-u-hidden@${max}-down` : ''
  const textClassName = `k-HeaderNav__Button__text ${hiddenMin} ${hiddenMax}`.trim()

  let ButtonComponent = 'a'
  let buttonProps = { href }

  if (!!as) {
    if (as === 'button') {
      ButtonComponent = as
      buttonProps = { type: 'button' }
    } else {
      ButtonComponent = as
      buttonProps = {}
    }
  } else if (type === 'button') {
    ButtonComponent = 'button'
    buttonProps = { type }
  }

  return (
    <ButtonComponent
      {...props}
      {...buttonProps}
      className={classNames('k-HeaderNav__Button', className, {
        'k-HeaderNav__Button--hasIcon': !!icon,
        'k-HeaderNav__Button--hasText': !!text,
        'k-HeaderNav__Button--smallPadding': smallPadding,
      })}
      style={{
        '--HeaderMenu-Button-backgroundColor': backgroundColor,
        '--HeaderMenu-Button-backgroundColorHover': backgroundColorHover,
        '--HeaderMenu-Button-color': color,
        '--HeaderMenu-Button-colorHover': colorHover,
        ...style,
      }}
    >
      {text && <span className={textClassName} />}

      {icon &&
        React.cloneElement(icon, {
          'aria-hidden': true,
        })}
      {icon && a11yText && <VisuallyHidden>{a11yText}</VisuallyHidden>}

      {text && <span className={textClassName}>{text}</span>}
    </ButtonComponent>
  )
}

Button.propTypes = {
  icon: PropTypes.node,
  backgroundColor: PropTypes.string,
  backgroundColorHover: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  text: PropTypes.node,
  href: PropTypes.string,
  a11yText: PropTypes.string,
  type: PropTypes.oneOf(['button']),
  hiddenText: PropTypes.shape({
    min: PropTypes.string,
    max: PropTypes.string,
  }),
  smallPadding: PropTypes.bool,
}

Button.defaultProps = {
  icon: null,
  backgroundColor: "transparent",
  backgroundColorHover: "transparent",
  color: COLORS.font1,
  colorHover: COLORS.primary1,
  text: null,
  smallPadding: false,
}

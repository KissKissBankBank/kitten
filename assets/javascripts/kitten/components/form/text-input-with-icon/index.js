import React, { PureComponent } from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { TextInput } from '../../../components/form/text-input'
import PropTypes from 'prop-types'
import COLORS from '../../../constants/colors-config'
import { VisuallyHidden } from '../../accessibility/visually-hidden'
import classNames from 'classnames'

const StyledTextInputWithIcon = styled.div`
  position: relative;

  .k-Form-TextInputWithIcon__input {
    padding-left: ${pxToRem(50)};
  }

  .k-Form-TextInputWithIcon__icon {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 1;
    left: 0;
    top: 0;
    width: ${pxToRem(50)};
    height: 100%;

    &.k-Form-TextInputWithIcon__icon--disabled > svg {
      &[stroke]:not([stroke='none']),
      & [stroke]:not([stroke='none']) {
        stroke: ${COLORS.font2};
      }
      &[fill]:not([fill='none']),
      & [fill]:not([fill='none']) {
        fill: ${COLORS.font2};
      }
    }
  }
`

export class TextInputWithIcon extends PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    accessibilityLabel: PropTypes.string,
    icon: PropTypes.node.isRequired,
  }

  static defaultProps = {
    accessibilityLabel: '',
    disabled: false,
  }

  render() {
    const { disabled, icon, accessibilityLabel, ...others } = this.props

    return (
      <StyledTextInputWithIcon className="k-Form-TextInputWithIcon">
        {accessibilityLabel && (
          <VisuallyHidden>{accessibilityLabel}</VisuallyHidden>
        )}
        <TextInput
          {...others}
          className={classNames(
            'k-Form-TextInputWithIcon__input',
            others.className,
          )}
          disabled={disabled}
        />
        <span
          aria-hidden="true"
          className={classNames('k-Form-TextInputWithIcon__icon', {
            'k-Form-TextInputWithIcon__icon--disabled': disabled,
          })}
        >
          {icon}
        </span>
      </StyledTextInputWithIcon>
    )
  }
}

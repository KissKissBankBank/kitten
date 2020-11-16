import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { Step } from './components/step'
import { Title } from './components/title'
import { Link } from './components/link'
import { List } from './components/list'
import classNames from 'classnames'

export const STEP_CLASSNAME = 'VerticalStepper__step'
export const LINK_CLASSNAME = 'VerticalStepper__link'

export class VerticalStepper extends Component {
  static Step = Step
  static Title = Title
  static List = List
  static Link = Link

  render() {
    const { children, variant } = this.props

    return (
      <StyledNav variant={variant}>
        <StyledList
          role="tablist"
          className={classNames(
            `k-Steppers--VerticalStepper__${variant}`,
          )}
        >
          {children}
        </StyledList>
      </StyledNav>
    )
  }
}

const StyledNav = styled.nav`
  position: relative;
  padding: 1px 0;
`

const StyledList = styled.ul`
  margin: 0;
  padding: 0;

  list-style: none;

  :before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${pxToRem(14)};
    z-index: -1;

    content: '';
    border-left: ${pxToRem(2)} dashed ${COLORS.line1};
  }

  &.k-Steppers--VerticalStepper__orion {
    :before {
      border-left: none;
    }

    li:not(:last-of-type) {
      margin: ${pxToRem(30)} 0;
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: ${pxToRem(14)};
        top: ${pxToRem(35)};
        background-color: ${COLORS.line1};
        width: ${pxToRem(3)};
        height: calc(100% - 10px);
      }
    }
  }
`

VerticalStepper.propTypes = {
  variant: PropTypes.oneOf(['andromeda', 'orion']),
}

VerticalStepper.defaultProps = {
  variant: 'andromeda',
}

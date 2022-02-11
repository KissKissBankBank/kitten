import React from 'react'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import COLORS from '../../../constants/colors-config'
import { Step } from './components/step'
import { Title } from './components/title'
import { Link } from './components/link'
import { List } from './components/list'
import { ScreenConfig } from '../../../constants/screen-config'
import classNames from 'classnames'

export const STEP_CLASSNAME = 'VerticalStepper__step'
export const LINK_CLASSNAME = 'VerticalStepper__link'

export const VerticalStepper = ({ children, variant, className, ...props }) => {
  return (
    <StyledNav>
      <ul
        role="tablist"
        className={classNames('k-Steppers--VerticalStepper', className)}
        {...props}
      >
        {children}
      </ul>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  position: relative;
  padding: 1px 0;

  .k-Steppers--VerticalStepper {
    margin: 0;
    padding: 0;
    margin-left: ${pxToRem(-5)};

    list-style: none;

    :before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: ${pxToRem(14)};
      z-index: -1;
      border-left: none;

      content: '';
      border-left: ${pxToRem(2)} dashed ${COLORS.line1};
    }

    & li:not(:last-of-type) {
      position: relative;

      &::after {
        content: '';
        position: absolute;
        left: ${pxToRem(16)};
        top: ${pxToRem(30)};
        background-color: ${COLORS.line1};
        width: ${pxToRem(2)};
        height: 100%;
        z-index: -1;

        @media (min-width: ${ScreenConfig.S.min}px) {
          width: ${pxToRem(3)};
          left: ${pxToRem(18.5)};
        }
      }
    }

    li.k-Steppers--VerticalStepper__item--hasActiveLine:not(:last-of-type)::after {
      background-color: ${COLORS.primary1};
    }
  }
`

VerticalStepper.Step = Step
VerticalStepper.Title = Title
VerticalStepper.List = List
VerticalStepper.Link = Link

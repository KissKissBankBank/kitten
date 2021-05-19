import React from 'react'
import styled from 'styled-components'
import { Step } from './components/step'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'

// export const STEP_CLASSNAME = 'VerticalProgress--step'
export const STATUS_CLASSNAME = 'VerticalProgress--status'

const StyledContainer = styled.div`
   border: ${pxToRem(2)} solid ${COLORS.line1};
   padding: ${pxToRem(30)};
   border-radius: ${pxToRem(8)};

  .k-VerticalProgress {
    position: relative;
    padding: 0;
  }

  .k-VerticalProgress--list {
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
  }
`

export const VerticalProgress = ({ children, ...props }) => {
  return (
    <StyledContainer>
      <nav className="k-VerticalProgress">
        <ul
          role="tablist"
          className="k-VerticalProgress--list"
          {...props}
        >
          {children}
        </ul>
      </nav>
    </StyledContainer>
  )
}

VerticalProgress.Step = Step

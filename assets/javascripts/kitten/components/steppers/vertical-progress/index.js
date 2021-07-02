import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { Step } from './components/step'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'

const StyledContainer = styled.div`
  border: ${pxToRem(2)} solid ${COLORS.line1};
  padding: ${pxToRem(15)};
  border-radius: ${pxToRem(8)};

  &.k-VerticalProgress__withoutBorder {
    border: none;
    padding: 0;
  }

  @media (min-width: ${ScreenConfig.S.min}px) {
    padding: ${pxToRem(30)};
  }

  .k-VerticalProgress__nav {
    position: relative;
    padding: 0;
  }

  .k-VerticalProgress__list {
    margin: 0;
    padding: 0;

    list-style: none;

    :before {
      position: absolute;
      top: 0;
      bottom: 0;
      left: ${pxToRem(14)};

      content: '';
      border-left: ${pxToRem(2)} dotted ${COLORS.line1};
    }
  }
`

export const VerticalProgress = ({ children, withoutBorder, ...props }) => {
  return (
    <StyledContainer className={ classNames(
      "k-VerticalProgress",
      {'k-VerticalProgress__withoutBorder': withoutBorder}
    )}
    >
      <nav className="k-VerticalProgress__nav">
        <ul role="tablist" className="k-VerticalProgress__list" {...props}>
          {children}
        </ul>
      </nav>
    </StyledContainer>
  )
}

VerticalProgress.propTypes = {
  withoutBorder: PropTypes.bool,
}

VerticalProgress.defaultProps = {
  withoutBorder: false,
}

VerticalProgress.Step = Step

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import { Step } from './components/step'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledContainer = styled.div`
  &:not(.k-VerticalProgress__wrapper--withoutBorder) {
    border: var(--border);
    padding: ${pxToRem(15)};
    border-radius: var(--border-radius-l);

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding: ${pxToRem(30)};
    }
  }

  .k-VerticalProgress {
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
      border-left: ${pxToRem(2)} dotted var(--color-grey-400);
    }
  }
`

export const VerticalProgress = ({
  children,
  withoutBorder,
  className,
  ...props
}) => {
  return (
    <StyledContainer
      className={classNames('k-VerticalProgress__wrapper', className, {
        'k-VerticalProgress__wrapper--withoutBorder': withoutBorder,
      })}
    >
      <nav className="k-VerticalProgress">
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

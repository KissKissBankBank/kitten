import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import COLORS from '../../../../constants/colors-config'
import { Status } from './status'
import classNames from 'classnames'

const StyledItem = styled.li`
  padding: ${pxToRem(15)} 0;

  &:first-of-type {
    margin-top: 0;
    padding-top: 0;
  }
  &:last-of-type {
    margin-bottom: 0;
    padding-bottom: 0;
  }

  li:not(:last-of-type) {
    margin: 0 !important;

    &::after {
      display: none;
    }
  }

  .k-VerticalProgress--itemContainer {
    display: inline-flex;
    padding-right: ${pxToRem(10)};
  }

  .k-VerticalProgress--step__content {
    @media (max-width: ${ScreenConfig.M.max}px) {
      padding-left: ${pxToRem(30)};
    }
  }
`

export const Step = ({
  actions,
  waiting,
  publish,
  valid,
  statusProps,
  children,
  ...other
}) => {
  return (
    <StyledItem className="k-VerticalProgress--item">
      <div className="k-VerticalProgress--itemContainer" {...other}>

        <Status
          actions={actions}
          waiting={waiting}
          publish={publish}
          valid={valid}
          {...statusProps}
        />
        <div 
          className={classNames(
            'k-VerticalProgress--step__content',
          )}
        >
          {children}
        </div>
      </div>
    </StyledItem>
  )
}

Step.protTypes = {
  actions: PropTypes.bool,
  waiting: PropTypes.bool,
  publish: PropTypes.bool,
  valid: PropTypes.bool,
}

Step.defaultProps = {
  actions: false,
  waiting: false,
  publish: false,
  valid: false,
}

import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import { ScreenConfig } from '../../../../constants/screen-config'
import { Status } from './status'
import classNames from 'classnames'

const StyledItem = styled.li`
  margin: ${pxToRem(15)} 0 ${pxToRem(20)} 0;

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
    flex-wrap: wrap;
    padding-right: ${pxToRem(10)};
  }

  .k-VerticalProgress--step__content {
    padding-left:  ${pxToRem(50)};

    @media (min-width: ${ScreenConfig.S.min}px) {
      padding-left: ${pxToRem(82)};
    }
  }
`

export const Step = ({
  actions,
  waiting,
  publish,
  valid,
  disabled,
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
          disabled={disabled}
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
  disabled: PropTypes.bool,
}

Step.defaultProps = {
  actions: false,
  waiting: false,
  publish: false,
  valid: false,
  disabled: false,
}

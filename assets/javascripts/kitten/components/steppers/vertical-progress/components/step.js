import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { Status } from './status'

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

  .k-Steppers--VerticalProgress__itemContainer {
    display: inline-flex;
    align-items: center;
    padding-right: ${pxToRem(10)};
  }
`

export const Step = ({
  actions,
  waiting,
  publish,
  valid,
  statusProps,
  titleProps,
  children,
  ...other
}) => {
  return (
    <StyledItem className="k-Steppers--VerticalProgress__item">
      <div className="k-Steppers--VerticalProgress__itemContainer" {...other}>

        <Status
          actions={actions}
          waiting={waiting}
          publish={publish}
          valid={valid}
          {...statusProps}
        />
        <div className="k-Steppers--VerticalProgress__step--content">
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

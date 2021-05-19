import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'
import { LongArrowIcon } from '../../../../components/icons/long-arrow-icon'
import { CheckedIcon } from '../../../../components/icons/checked-icon'
import { HourglassIcon } from '../../../../components/icons/hourglass-icon'
import classNames from 'classnames'
 
const STATUS_SIZE = 30

const StyledWrapper = styled.div`

  .k-Steppers--VerticalProgress__status {
    flex-shrink: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    width: ${pxToRem(STATUS_SIZE)};
    height: ${pxToRem(STATUS_SIZE)};
    border-radius: ${pxToRem(STATUS_SIZE)};
    box-sizing: border-box;
    margin-right: ${pxToRem(20)};

    background-color: ${COLORS.background1};

    &.k-Steppers--VerticalProgress__status--actions {
      background-color: ${COLORS.orange};
    }
    &.k-Steppers--VerticalProgress__status--waiting {
      background-color: ${COLORS.font3};
    }
    &.k-Steppers--VerticalProgress__status--publish {
      background-color: ${COLORS.line3};
    }
    &.k-Steppers--VerticalProgress__status--valid {
      background-color: ${COLORS.primary1};
    }
  }
`

export class Status extends Component {
  render() {
    const {
      actions,
      waiting,
      publish,
      valid,
      ...other
    } = this.props

    return (
      <StyledWrapper className="k-Steppers--VerticalProgress__wrapper">
        <span
          {...other}
          className={classNames(
            'k-Steppers--VerticalProgress__status',
            {
              'k-Steppers--VerticalProgress__status--actions': actions,
              'k-Steppers--VerticalProgress__status--waiting': waiting,
              'k-Steppers--VerticalProgress__status--publish': publish,
              'k-Steppers--VerticalProgress__status--valid': valid,
            },
          )}
        >
          {this.iconByStatus() || children}
        </span>
      </StyledWrapper>
    )
  }

  iconByStatus = () => {
    const { actions, waiting, publish, valid } = this.props

    if (actions) return <LongArrowIcon color={COLORS.background1} direction="right" />

    if (waiting) return <HourglassIcon color={COLORS.background1} width="10" title={null} />

    if (publish) return <CheckedIcon width="10" title={null} />

    if (valid) return <LongArrowIcon color={COLORS.background1} direction="right" />

    return null
  }
}

Status.propTypes = {
  actions: PropTypes.bool,
  waiting: PropTypes.bool,
  publish: PropTypes.bool,
  valid: PropTypes.bool,

}

Status.defaultProps = {
  actions: false,
  waiting: false,
  publish: false,
  valid: false,
}

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import TYPOGRAPHY from '../../../../constants/typography-config'
import COLORS from '../../../../constants/colors-config'
import { LongArrowIcon } from '../../../../components/icons/long-arrow-icon'
import { CheckedIcon } from '../../../../components/icons/checked-icon'
import { HourglassIcon } from '../../../../components/icons/hourglass-icon'
import classNames from 'classnames'

const STATUS_SIZE = 30

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;


  &.k-VerticalProgress__status--actions {
    .k-VerticalProgress__icon {
      background-color: ${COLORS.orange};
      border-color: ${COLORS.orange};
    }
    .k-VerticalProgress__title{
      color: ${COLORS.orange};
    }
  }

  &.k-VerticalProgress__status--waiting {
    .k-VerticalProgress__icon {
      background-color: ${COLORS.font3};
      border-color: ${COLORS.font3};
    }
    .k-VerticalProgress__title {
      color: ${COLORS.font3};
    }
  }

  &.k-VerticalProgress__status--publish {
    .k-VerticalProgress__icon {
      background-color: ${COLORS.line3};
      border-color: ${COLORS.line3};
    }
    .k-VerticalProgress__title {
      color: ${COLORS.line3};
    }
  }

  &.k-VerticalProgress__status--valid {
    .k-VerticalProgress__icon {
      background-color: ${COLORS.primary1};
      border-color: ${COLORS.primary1};
    }
    .k-VerticalProgress__title {
      color: ${COLORS.primary1};
    }
  }

  &.k-VerticalProgress__status--disabled {
    .k-VerticalProgress__icon {
      border-color: ${COLORS.line1};
      background-color: ${COLORS.background1};
    }
    .k-VerticalProgress__title {
      color: ${COLORS.font2};
    }
  }

  .k-VerticalProgress__icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${pxToRem(STATUS_SIZE)};
    height: ${pxToRem(STATUS_SIZE)};
    border-radius: ${pxToRem(STATUS_SIZE)};
    border: ${pxToRem(2)} solid ${COLORS.background1};
    box-sizing: border-box;
    margin-right: ${pxToRem(20)};
    background-color: ${COLORS.background1};
  }

  .k-VerticalProgress__title {
    margin: 0;
    ${TYPOGRAPHY.fontStyles.bold};
    font-size: ${stepToRem(1)};
    align-self: center;
  }
`

export const Status = ({
  statusType,
  progressTitle,
  titleProps,
  children,
  ...other
}) => {

  const iconByStatus = (() => {
    switch (statusType) {
      case 'actions':
        return <LongArrowIcon color={COLORS.background1} direction="right" />
      case 'waiting':
        return <HourglassIcon color={COLORS.background1} width="10" title={null} />
      case 'publish':
        return <CheckedIcon color={COLORS.background1} width="10" title={null} />
      case 'valid':
        return <LongArrowIcon color={COLORS.background1} direction="right" />
      case 'disabled':
        return null
      default:
        return null
    }
  })()

  return (
    <StyledWrapper 
      className={classNames(
        'k-VerticalProgress__status',
        `k-VerticalProgress__status--${statusType}`,
      )}
    >
      <span
        {...other}
        className="k-VerticalProgress__icon">
        {iconByStatus || children}
      </span>
      <p
        className="k-VerticalProgress__title"
        {...titleProps}
      >
        {progressTitle}
      </p>
    </StyledWrapper>
  )
}

Status.propTypes = {
  statusType: PropTypes.oneOf([
    'actions',
    'waiting',
    'publish',
    'valid',
    'disabled',
  ]),
  progressTitle: PropTypes.string,
}

Status.defaultProps = {
  statusType: 'actions',
  progressTitle: '',
}

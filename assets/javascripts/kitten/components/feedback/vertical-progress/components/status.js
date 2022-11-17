import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { ScreenConfig } from '../../../../constants/screen-config'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography'
import { CheckedIcon } from '../../../graphics/icons/checked-icon'
import { HourglassIcon } from '../../../graphics/icons/hourglass-icon'
import { LongArrowIcon } from '../../../graphics/icons/long-arrow-icon'

const STATUS_SIZE = 30

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  z-index: 0;

  &.k-VerticalProgress__status--actions {
    .k-VerticalProgress__icon {
      background-color: var(--color-warning-700);
      border-color: var(--color-warning-700);
    }
    .k-VerticalProgress__title {
      color: var(--color-warning-700);
    }
  }

  &.k-VerticalProgress__status--waiting {
    .k-VerticalProgress__icon {
      background-color: var(--color-grey-600);
      border-color: var(--color-grey-600);
    }
    .k-VerticalProgress__title {
      color: var(--color-grey-600);
    }
  }

  &.k-VerticalProgress__status--publish {
    .k-VerticalProgress__icon {
      background-color: var(--color-grey-800);
      border-color: var(--color-grey-800);
    }
    .k-VerticalProgress__title {
      color: var(--color-grey-800);
    }
  }

  &.k-VerticalProgress__status--valid {
    .k-VerticalProgress__icon {
      background-color: var(--color-primary-500);
      border-color: var(--color-primary-500);
    }
    .k-VerticalProgress__title {
      color: var(--color-primary-700);
    }
  }

  &.k-VerticalProgress__status--disabled {
    .k-VerticalProgress__icon {
      border-color: var(--color-grey-400);
      background-color: var(--color-grey-000);
    }
    .k-VerticalProgress__title {
      color: var(--color-grey-500);
    }
  }

  .k-VerticalProgress__icon {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    width: ${pxToRem(STATUS_SIZE)};
    height: ${pxToRem(STATUS_SIZE)};
    border-radius: var(--border-radius-rounded);
    border: var(--border-width) solid var(--color-grey-000);
    box-sizing: border-box;
    margin-right: ${pxToRem(20)};
    background-color: var(--color-grey-000);
  }

  .k-VerticalProgress__title {
    margin: 0;
    ${TYPOGRAPHY.fontStyles['700']};
    font-size: ${stepToRem(0)};
    align-self: center;

    @media (min-width: ${ScreenConfig.S.min}px) {
      font-size: ${stepToRem(1)};
    }
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
        return <LongArrowIcon color="var(--color-grey-000" direction="right" />
      case 'waiting':
        return (
          <HourglassIcon color="var(--color-grey-000" width="10" title={null} />
        )
      case 'publish':
        return (
          <CheckedIcon color="var(--color-grey-000" width="10" title={null} />
        )
      case 'valid':
        return <LongArrowIcon color="var(--color-grey-000" direction="right" />
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
      <span {...other} className="k-VerticalProgress__icon">
        {iconByStatus || children}
      </span>
      <p className="k-VerticalProgress__title" {...titleProps}>
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

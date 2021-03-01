import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { useFlexGapCheck } from '../../../helpers/dom/use-flex-gap-check'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledLine = styled.div`
  align-items: center;
  display: flex;
  gap: ${pxToRem(10)};

  &.k-Line--noGap .k-Line__item {
    margin-right: ${pxToRem(10)};

    &:last-child {
      margin-right: 0;
    }
  }
`

export const Line = props => {
  const canUseGap = useFlexGapCheck()

  return (
    <StyledLine
      {...props}
      className={classNames('k-Line', props.className, {
        'k-Line--noGap': !canUseGap,
      })}
    />
  )
}

Line.Item = props => {
  return (
    <div {...props} className={classNames('k-Line__item', props.className)} />
  )
}

Line.defaultProps = {
  className: null,
  children: null,
}

Line.Item.defaultProps = {
  className: null,
  children: null,
}

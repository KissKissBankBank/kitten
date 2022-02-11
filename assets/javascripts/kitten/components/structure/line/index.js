import React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'

const StyledLine = styled.div`
  display: flex;
  align-items: center;
  gap: ${pxToRem(10)};
`

export const Line = props => {
  return (
    <StyledLine {...props} className={classNames('k-Line', props.className)} />
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

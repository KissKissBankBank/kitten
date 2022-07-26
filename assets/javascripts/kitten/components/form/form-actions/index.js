import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'

const StyledFormActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  .k-FormActions__item {
    margin-left: ${pxToRem(5)};
    margin-right: ${pxToRem(5)};
  }

  &.k-FormActions--spreadOut-s-up {
    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      justify-content: space-between;

      .k-FormActions__item {
        &:first-child {
          margin-left: 0;
        }

        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
`

export const FormActions = ({ className, spreadOutAt, ...others }) => {
  const formActionsClassName = classNames('k-FormActions', className, {
    [`k-FormActions--spreadOut-${spreadOutAt}`]: spreadOutAt,
  })

  return <StyledFormActions className={formActionsClassName} {...others} />
}

FormActions.Item = props => (
  <div
    {...props}
    className={classNames('k-FormActions__item', props.className)}
  />
)

FormActions.propTypes = {
  spreadOutAt: PropTypes.oneOf(['s-up']),
}

FormActions.defaultProps = {
  spreadOutAt: 's-up',
  children: null,
}

FormActions.Item.defaultProps = {
  className: null,
  children: null,
}

import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button } from '../../../../actions/button'
import { CheckedCircleIcon } from '../../../../graphics/icons/checked-circle-icon'
import COLORS from '../../../../../constants/colors-config'
import { Context } from '../context'

export const Action = ({ isInputValid, title, className, ...props }) => {
  const { isInputEmpty } = useContext(Context)

  return (
    <>
      {isInputValid ? (
        <CheckedCircleIcon
          bgColor={COLORS.valid}
          color={COLORS.background1}
          title={title}
        />
      ) : (
        <Button
          type="submit"
          className={classNames('k-ContributionCard__action', className)}
          modifier="helium"
          disabled={isInputEmpty}
          fit="content"
          {...props}
        />
      )}
    </>
  )
}

Action.defaultProps = {
  isInputValid: false,
  title: '',
}

Action.propTypes = {
  isInputValid: PropTypes.bool,
  title: PropTypes.string,
}

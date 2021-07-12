import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button } from '../../../../components/buttons/button'
import { CheckedCircleIcon } from '../../../icons/checked-circle-icon'
import COLORS from '../../../../constants/colors-config'
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
          borderRadius={4}
          type="submit"
          className={classNames('k-ContributionCard__action', className)}
          modifier="helium"
          disabled={isInputEmpty}
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

import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { Button } from '../../../../components/buttons/button'
import { CheckedCircleIcon } from '../../../icons/checked-circle-icon'
import COLORS from '../../../../constants/colors-config'

export const Action = ({ isInputValid, ...props }) => {

  return (
    <>
      <Button
        borderRadius={4}
        type="submit"
        {...props}
        className={classNames(
          'k-ContributionCard__action',
          { 'k-ContributionCard__actionHide': isInputValid },
          props.className,
        )}
      />
      {isInputValid && (
        <CheckedCircleIcon
          bgColor={COLORS.valid}
          color={COLORS.background1}
        />
      )}
    </>
  )
}

Action.defaultProps = {
  isInputValid: false,
}

Action.propTypes = {
  isInputValid: PropTypes.bool,
}

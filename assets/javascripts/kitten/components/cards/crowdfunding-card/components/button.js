import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'

const ButtonCard = ({ buttonText }) => {
  return (
    <Button fluid modifier="helium">
      {buttonText}
    </Button>
  )
}

export default ButtonCard

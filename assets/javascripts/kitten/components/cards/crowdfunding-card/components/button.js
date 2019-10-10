import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'

const StyledMargerButton = styled(Button)`
  margin-bottom: ${pxToRem(20)};
`

const ButtonCard = ({ buttonText }) => {
  return (
    <StyledMargerButton fluid modifier="helium">
      {buttonText}
    </StyledMargerButton>
  )
}

export default ButtonCard

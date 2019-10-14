import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const StyledLoading = styled(Button)`
  background-color: ${COLORS.line2};
  border-color: ${COLORS.line2};
`

const CardButton = ({ buttonText, loading }) => (
  <>
    {!loading && (
      <Button fluid modifier="helium">
        {buttonText}
      </Button>
    )}

    {loading && <StyledLoading fluid />}
  </>
)

export default CardButton

CardButton.propTypes = {
  buttonText: PropTypes.string,
  loading: PropTypes.bool,
}

CardButton.defaultProps = {
  buttonText: '',
  loading: false,
}

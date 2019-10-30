import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Button } from '../../../../components/buttons/button/button'
import { pxToRem } from '../../../../helpers/utils/typography'
import COLORS from '../../../../constants/colors-config'

const COMPONENT_GUTTER = pxToRem(10)

const StyledLoading = styled(Button)`
  background-color: ${COLORS.line2};
  border-color: ${COLORS.line2};
`

const StyledButtonContainer = styled.div`
  padding: 0 ${COMPONENT_GUTTER};
`

const CardButton = ({ text, loading }) => (
  <StyledButtonContainer>
    {!loading && (
      <Button fluid modifier="helium">
        {text}
      </Button>
    )}

    {loading && <StyledLoading fluid />}
  </StyledButtonContainer>
)

export default CardButton

CardButton.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
}

CardButton.defaultProps = {
  text: '',
  loading: false,
}

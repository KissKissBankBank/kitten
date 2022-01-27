import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../../../components/molecules/buttons/button'

const CardButton = ({ text, loading }) => (
  <div className="k-CrowdfundingCard__cardButton k-CrowdfundingCard__paddedContainer">
    {!loading && (
      <Button type="button" fit="fluid" modifier="helium">
        {text}
      </Button>
    )}

    {loading && (
      <Button
        type="button"
        fit="fluid"
        className="k-CrowdfundingCard__cardButton__loadingButton"
      />
    )}
  </div>
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

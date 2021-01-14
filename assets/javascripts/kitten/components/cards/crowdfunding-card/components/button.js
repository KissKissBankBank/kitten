import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../../components/buttons/button/button'

const CardButton = ({ text, loading }) => (
  <div className="k-CrowdfundingCard__cardButton k-CrowdfundingCard__paddedContainer">
    {!loading && (
      <Button type="button" fluid modifier="helium">
        {text}
      </Button>
    )}

    {loading && (
      <Button
        type="button"
        fluid
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

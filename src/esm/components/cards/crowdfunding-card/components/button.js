import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../../components/buttons/button/button';

var CardButton = function CardButton(_ref) {
  var text = _ref.text,
      loading = _ref.loading;
  return /*#__PURE__*/React.createElement("div", {
    className: "k-CrowdfundingCard__cardButton k-CrowdfundingCard__paddedContainer"
  }, !loading && /*#__PURE__*/React.createElement(Button, {
    type: "button",
    fluid: true,
    modifier: "helium"
  }, text), loading && /*#__PURE__*/React.createElement(Button, {
    type: "button",
    fluid: true,
    className: "k-CrowdfundingCard__cardButton__loadingButton"
  }));
};

export default CardButton;
CardButton.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool
};
CardButton.defaultProps = {
  text: '',
  loading: false
};
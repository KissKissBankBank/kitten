import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../components/typography/text';
import { Deprecated } from '../../../../helpers/utils/deprecated';
export var Info = function Info(_ref) {
  var label = _ref.label,
      value = _ref.value,
      viewportIsTabletOrLess = _ref.viewportIsTabletOrLess,
      isTinyVersion = _ref.isTinyVersion;
  if (!label) return null;
  var InfoBase = /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/React.createElement(Text, {
    color: "font1",
    weight: "regular",
    className: "k-LegacyRewardCard__list"
  }, "".concat(label, " "), /*#__PURE__*/React.createElement(Text, {
    weight: "light"
  }, value)));
  return /*#__PURE__*/React.createElement(React.Fragment, null, (viewportIsTabletOrLess || isTinyVersion) && /*#__PURE__*/React.createElement("div", null, InfoBase), !viewportIsTabletOrLess && !isTinyVersion && InfoBase);
};
Info.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  viewportIsTabletOrLess: PropTypes.bool.isRequired,
  isTinyVersion: PropTypes.bool.isRequired
};
Info.defaultProps = {
  label: null,
  value: null
};
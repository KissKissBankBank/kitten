import React from 'react';
import PropTypes from 'prop-types';
import { Info } from './info';
import { Marger } from '../../../../components/layout/marger';
import { Deprecated } from '../../../../helpers/utils/deprecated';
export var RewardCardInfos = function RewardCardInfos(_ref) {
  var infos = _ref.infos,
      isDisabled = _ref.isDisabled,
      viewportIsTabletOrLess = _ref.viewportIsTabletOrLess,
      isTinyVersion = _ref.isTinyVersion;
  if (infos.length === 0) return null;
  return /*#__PURE__*/React.createElement(Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/React.createElement("div", {
    className: isDisabled ? 'k-LegacyRewardCard__element--disabled' : null
  }, /*#__PURE__*/React.createElement(Marger, {
    top: "2",
    bottom: "3"
  }, infos && infos.map(function (info) {
    return /*#__PURE__*/React.createElement(Info, {
      key: info.label,
      label: info.label,
      value: info.value,
      viewportIsTabletOrLess: viewportIsTabletOrLess,
      isTinyVersion: isTinyVersion
    });
  }))));
};
RewardCardInfos.propTypes = {
  infos: PropTypes.array,
  isDisabled: PropTypes.bool,
  viewportIsTabletOrLess: PropTypes.bool.isRequired,
  isTinyVersion: PropTypes.bool.isRequired
};
RewardCardInfos.defaultProps = {
  infos: [],
  isDisabled: false
};
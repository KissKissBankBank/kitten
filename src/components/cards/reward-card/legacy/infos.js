"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardInfos = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _info = require("./info");

var _marger = require("../../../../components/layout/marger");

var _deprecated = require("../../../../helpers/utils/deprecated");

var RewardCardInfos = function RewardCardInfos(_ref) {
  var infos = _ref.infos,
      isDisabled = _ref.isDisabled,
      viewportIsTabletOrLess = _ref.viewportIsTabletOrLess,
      isTinyVersion = _ref.isTinyVersion;
  if (infos.length === 0) return null;
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: isDisabled ? 'k-LegacyRewardCard__element--disabled' : null
  }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "3"
  }, infos && infos.map(function (info) {
    return /*#__PURE__*/_react.default.createElement(_info.Info, {
      key: info.label,
      label: info.label,
      value: info.value,
      viewportIsTabletOrLess: viewportIsTabletOrLess,
      isTinyVersion: isTinyVersion
    });
  }))));
};

exports.RewardCardInfos = RewardCardInfos;
RewardCardInfos.propTypes = {
  infos: _propTypes.default.array,
  isDisabled: _propTypes.default.bool,
  viewportIsTabletOrLess: _propTypes.default.bool.isRequired,
  isTinyVersion: _propTypes.default.bool.isRequired
};
RewardCardInfos.defaultProps = {
  infos: [],
  isDisabled: false
};
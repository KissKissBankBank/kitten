"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardInfos = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rewardCard = require("../../../components/cards/reward-card");

var _info = require("../../../components/cards/reward-card/info");

var _marger = require("../../../components/layout/marger");

var _deprecated = require("../../../helpers/utils/deprecated");

var RewardCardInfosBase = function RewardCardInfosBase(_ref) {
  var infos = _ref.infos,
      isDisabled = _ref.isDisabled,
      viewportIsTabletOrLess = _ref.viewportIsTabletOrLess,
      isTinyVersion = _ref.isTinyVersion;
  var styleInfos = [isDisabled && _rewardCard.styles.disabled];
  if (infos.length === 0) return null;
  return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: styleInfos,
    disabled: isDisabled
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

RewardCardInfosBase.propTypes = {
  infos: _propTypes.default.array,
  isDisabled: _propTypes.default.bool,
  viewportIsTabletOrLess: _propTypes.default.bool.isRequired,
  isTinyVersion: _propTypes.default.bool.isRequired
};
RewardCardInfosBase.defaultProps = {
  infos: [],
  isDisabled: false
};
var RewardCardInfos = (0, _radium.default)(RewardCardInfosBase);
exports.RewardCardInfos = RewardCardInfos;
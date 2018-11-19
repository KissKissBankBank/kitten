"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardInfos = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _rewardCard = require("kitten/components/cards/reward-card");

var _info = require("kitten/components/cards/reward-card/info");

var _marger = require("kitten/components/layout/marger");

var _deprecated = require("kitten/helpers/utils/deprecated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var RewardCardInfosBase = function RewardCardInfosBase(_ref) {
  var infos = _ref.infos,
      isDisabled = _ref.isDisabled,
      viewportIsTabletOrLess = _ref.viewportIsTabletOrLess,
      isTinyVersion = _ref.isTinyVersion;
  var styleInfos = [isDisabled && _rewardCard.styles.disabled];
  if (infos.length === 0) return null;
  return _react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/kitten/"
  }, _react.default.createElement("div", {
    style: styleInfos,
    disabled: isDisabled
  }, _react.default.createElement(_marger.Marger, {
    top: "2",
    bottom: "3"
  }, infos && infos.map(function (info) {
    return _react.default.createElement(_info.Info, {
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
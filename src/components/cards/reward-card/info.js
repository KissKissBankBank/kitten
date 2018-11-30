"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Info = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("kitten/components/typography/text");

var _rewardCard = require("kitten/components/cards/reward-card");

var _deprecated = require("kitten/helpers/utils/deprecated");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Text = (0, _radium.default)(_text.Text);

var Info = function Info(_ref) {
  var label = _ref.label,
      value = _ref.value,
      viewportIsTabletOrLess = _ref.viewportIsTabletOrLess,
      isTinyVersion = _ref.isTinyVersion;
  if (!label) return null;
  var infosLists = isTinyVersion ? _rewardCard.styles.infos.lists.tinyVersion : _rewardCard.styles.infos.lists;

  var InfoBase = _react.default.createElement(_deprecated.Deprecated, {
    warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/kitten/"
  }, _react.default.createElement(Text, {
    color: "font1",
    weight: "regular",
    style: infosLists
  }, "".concat(label, " "), _react.default.createElement(Text, {
    weight: "light"
  }, value)));

  return _react.default.createElement(_react.Fragment, null, (viewportIsTabletOrLess || isTinyVersion) && _react.default.createElement("div", null, InfoBase), !viewportIsTabletOrLess && !isTinyVersion && InfoBase);
};

exports.Info = Info;
Info.propTypes = {
  label: _propTypes.default.string,
  value: _propTypes.default.string,
  viewportIsTabletOrLess: _propTypes.default.bool.isRequired,
  isTinyVersion: _propTypes.default.bool.isRequired
};
Info.defaultProps = {
  label: null,
  value: null
};
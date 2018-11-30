"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardTitle = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("kitten/components/typography/text");

var _marger = require("kitten/components/layout/marger");

var TeamCardTitle =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TeamCardTitle, _Component);

  function TeamCardTitle() {
    (0, _classCallCheck2.default)(this, TeamCardTitle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TeamCardTitle).apply(this, arguments));
  }

  (0, _createClass2.default)(TeamCardTitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          subTitle = _this$props.subTitle;
      return _react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "1.5"
      }, _react.default.createElement(_text.Text, {
        size: "default",
        weight: "bold",
        color: "font1"
      }, children), _react.default.createElement("br", null), _react.default.createElement(_text.Text, {
        size: "micro",
        color: "font1",
        weight: "light"
      }, subTitle));
    }
  }]);
  return TeamCardTitle;
}(_react.Component);

exports.TeamCardTitle = TeamCardTitle;
TeamCardTitle.propTypes = {
  children: _propTypes.default.string.isRequired,
  subTilte: _propTypes.default.string.isRequired
};
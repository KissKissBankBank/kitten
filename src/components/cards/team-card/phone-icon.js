"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardPhoneIcon = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _phoneIcon = require("kitten/components/icons/phone-icon");

var _buttonWithTooltip = require("kitten/components/cards/team-card/button-with-tooltip");

var _mediaQueries = require("kitten/hoc/media-queries");

var TeamCardPhoneIconBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TeamCardPhoneIconBase, _Component);

  function TeamCardPhoneIconBase() {
    (0, _classCallCheck2.default)(this, TeamCardPhoneIconBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TeamCardPhoneIconBase).apply(this, arguments));
  }

  (0, _createClass2.default)(TeamCardPhoneIconBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          phoneNumber = _this$props.phoneNumber,
          viewportIsXSOrLess = _this$props.viewportIsXSOrLess,
          tooltipColor = _this$props.tooltipColor;
      return _react.default.createElement(_react.Fragment, null, viewportIsXSOrLess && _react.default.createElement(_buttonIcon.ButtonIcon, {
        tag: "a",
        href: "tel:".concat(phoneNumber),
        modifier: "hydrogen",
        className: "k-ButtonIcon--phone",
        style: {
          marginRight: 15
        }
      }, _react.default.createElement(_phoneIcon.PhoneIcon, {
        className: "k-ButtonIcon__svg"
      })), !viewportIsXSOrLess && _react.default.createElement(_buttonWithTooltip.TeamCardButtonWithTooltip, (0, _extends2.default)({}, this.props, {
        color: tooltipColor
      })));
    }
  }]);
  return TeamCardPhoneIconBase;
}(_react.Component);

TeamCardPhoneIconBase.propTypes = {
  phoneNumber: _propTypes.default.string,
  tooltipColor: _propTypes.default.string
};
TeamCardPhoneIconBase.defaultProps = {
  phoneNumber: '',
  tooltipColor: '#19b4fa'
};
var TeamCardPhoneIcon = (0, _mediaQueries.mediaQueries)(TeamCardPhoneIconBase, {
  viewportIsXSOrLess: true
});
exports.TeamCardPhoneIcon = TeamCardPhoneIcon;
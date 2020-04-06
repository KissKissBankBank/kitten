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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonIcon = require("../../buttons/button-icon");

var _phoneIcon = require("../../icons/phone-icon");

var _buttonWithTooltip = require("./button-with-tooltip");

var _mediaQueries = require("../../../hoc/media-queries");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TeamCardPhoneIconBase = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(TeamCardPhoneIconBase, _Component);

  var _super = _createSuper(TeamCardPhoneIconBase);

  function TeamCardPhoneIconBase() {
    (0, _classCallCheck2.default)(this, TeamCardPhoneIconBase);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TeamCardPhoneIconBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          phoneNumber = _this$props.phoneNumber,
          viewportIsXSOrLess = _this$props.viewportIsXSOrLess,
          tooltipColor = _this$props.tooltipColor;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, viewportIsXSOrLess && /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
        tag: "a",
        href: "tel:".concat(phoneNumber),
        modifier: "hydrogen",
        className: "k-ButtonIcon--phone",
        style: {
          marginRight: 15
        }
      }, /*#__PURE__*/_react.default.createElement(_phoneIcon.PhoneIcon, {
        className: "k-ButtonIcon__svg"
      })), !viewportIsXSOrLess && /*#__PURE__*/_react.default.createElement(_buttonWithTooltip.TeamCardButtonWithTooltip, (0, _extends2.default)({}, this.props, {
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
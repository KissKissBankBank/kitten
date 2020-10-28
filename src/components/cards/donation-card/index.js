"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DonationCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../components/layout/marger");

var _grid = require("../../../components/grid/grid");

var _title = require("../../../components/typography/title");

var _horizontalStroke = require("../../../components/layout/horizontal-stroke");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _textInputWithUnitForm = require("../../../components/form/text-input-with-unit-form");

var _typography = require("../../../helpers/utils/typography");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledCard = _styledComponents.default.div.withConfig({
  displayName: "donation-card__StyledCard",
  componentId: "sc-19h76fz-0"
})(["border-width:", ";border-style:solid;border-color:", ";", ""], (0, _typography.pxToRem)(2), _colorsConfig.default.line1, function (_ref) {
  var isDisabled = _ref.isDisabled;
  return isDisabled && (0, _styledComponents.css)(["filter:grayscale(1) opacity(0.4);cursor:not-allowed;"]);
});

var StyledGrid = (0, _styledComponents.default)(_grid.Grid).withConfig({
  displayName: "donation-card__StyledGrid",
  componentId: "sc-19h76fz-1"
})(["padding:0 ", ";"], (0, _typography.pxToRem)(20));
var StyledTitle = (0, _styledComponents.default)(function (_ref2) {
  var version = _ref2.version,
      others = (0, _objectWithoutProperties2.default)(_ref2, ["version"]);
  return /*#__PURE__*/_react.default.createElement(_title.Title, others);
}).withConfig({
  displayName: "donation-card__StyledTitle",
  componentId: "sc-19h76fz-2"
})(["color:", ";text-align:center;line-height:1.2;font-size:", ";", ""], _colorsConfig.default.font1, (0, _typography.stepToRem)(5), function (_ref3) {
  var version = _ref3.version;
  return version === 'tiny' && (0, _styledComponents.css)(["font-size:", ";"], (0, _typography.stepToRem)(4));
});
var StyledHorizontalStroke = (0, _styledComponents.default)(_horizontalStroke.HorizontalStroke).withConfig({
  displayName: "donation-card__StyledHorizontalStroke",
  componentId: "sc-19h76fz-3"
})(["margin:0 auto;"]);

var DonationCard = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(DonationCard, _PureComponent);

  var _super = _createSuper(DonationCard);

  function DonationCard() {
    (0, _classCallCheck2.default)(this, DonationCard);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DonationCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          titleTag = _this$props.titleTag,
          isDisabled = _this$props.isDisabled,
          version = _this$props.version,
          donationForm = _this$props.donationForm;
      return /*#__PURE__*/_react.default.createElement(StyledCard, {
        isDisabled: isDisabled
      }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        bottom: version === 'tiny' ? 3 : 4,
        top: version === 'tiny' ? 3 : 4
      }, /*#__PURE__*/_react.default.createElement(StyledGrid, null, /*#__PURE__*/_react.default.createElement(_grid.GridCol, {
        "col-m": version === 'tiny' ? 0 : 10,
        "offset-m": version === 'tiny' ? 0 : 1,
        "col-l": version === 'tiny' ? 0 : 8,
        "offset-l": version === 'tiny' ? 0 : 2
      }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        bottom: "2"
      }, /*#__PURE__*/_react.default.createElement(StyledTitle, {
        margin: false,
        tag: titleTag
      }, title)), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "3"
      }, /*#__PURE__*/_react.default.createElement(StyledHorizontalStroke, {
        size: "big"
      })), /*#__PURE__*/_react.default.createElement(_textInputWithUnitForm.TextInputWithUnitForm, (0, _extends2.default)({}, donationForm, {
        align: "center",
        version: version
      }))))));
    }
  }]);
  return DonationCard;
}(_react.PureComponent);

exports.DonationCard = DonationCard;
DonationCard.propTypes = {
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  version: _propTypes.default.oneOf(['default', 'tiny']),
  isDisabled: _propTypes.default.bool,
  donationForm: _propTypes.default.shape({
    inputUnit: _propTypes.default.string,
    inputLabel: _propTypes.default.string,
    inputPlaceholder: _propTypes.default.string,
    inputIsOnError: _propTypes.default.bool,
    errorMessage: _propTypes.default.string,
    buttonLabel: _propTypes.default.string
  })
};
DonationCard.defaultProps = {
  titleTag: 'h2',
  version: 'default',
  isDisabled: false,
  donationForm: {
    inputUnit: '€',
    inputLabel: 'Enter your amount',
    inputPlaceholder: 'Enter your amount',
    inputIsOnError: true,
    errorMessage: 'lorem ipsum dolor sit amet',
    buttonLabel: 'Choose'
  }
};
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallToActionPopover = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _marger = require("../../components/layout/marger");

var _title = require("../../components/typography/title");

var _paragraph = require("../../components/typography/paragraph");

var _popover = require("../../components/popovers/popover");

var _button = require("../../components/buttons/button");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var CallToActionPopover = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(CallToActionPopover, _Component);

  var _super = _createSuper(CallToActionPopover);

  function CallToActionPopover(props) {
    var _this;

    (0, _classCallCheck2.default)(this, CallToActionPopover);
    _this = _super.call(this, props);
    _this.renderButton = _this.renderButton.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(CallToActionPopover, [{
    key: "getButtonClickHandler",
    value: function getButtonClickHandler(clickOptions) {
      if (!clickOptions) return;

      if (clickOptions.closeOnClick) {
        return this.props.onCloseClick;
      }
    }
  }, {
    key: "renderIllustration",
    value: function renderIllustration() {
      if (!this.props.illustration) return;
      var Illustration = this.props.illustration;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Popover__illustration"
      }, /*#__PURE__*/_react.default.createElement(Illustration, null));
    }
  }, {
    key: "renderButton",
    value: function renderButton(options, i) {
      var label = options.label,
          clickOptions = options.clickOptions,
          others = (0, _objectWithoutProperties2.default)(options, ["label", "clickOptions"]);
      var clickHandler = this.getButtonClickHandler(clickOptions);
      return /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
        onClick: clickHandler,
        key: i,
        children: label
      }, others));
    }
  }, {
    key: "renderButtonsList",
    value: function renderButtonsList() {
      return this.props.buttons.map(this.renderButton);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          text = _this$props.text,
          titleAriaLabelId = _this$props.titleAriaLabelId,
          buttons = _this$props.buttons,
          illustration = _this$props.illustration,
          popoverProps = (0, _objectWithoutProperties2.default)(_this$props, ["title", "text", "titleAriaLabelId", "buttons", "illustration"]);
      return /*#__PURE__*/_react.default.createElement(_popover.Popover, (0, _extends2.default)({
        titleAriaLabelId: titleAriaLabelId
      }, popoverProps), this.renderIllustration(), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "4",
        bottom: "4",
        className: "k-Popover__content"
      }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        bottom: "1"
      }, /*#__PURE__*/_react.default.createElement(_title.Title, {
        id: titleAriaLabelId,
        modifier: "senary",
        margin: false
      }, title)), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "3"
      }, /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, {
        modifier: "tertiary",
        margin: false
      }, text)), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "3"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Popover__navigation"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Popover__buttons"
      }, this.renderButtonsList())))));
    }
  }]);
  return CallToActionPopover;
}(_react.Component);

exports.CallToActionPopover = CallToActionPopover;
CallToActionPopover.defaultProps = {
  title: '',
  text: '',
  illustration: null,
  buttons: [{
    label: 'Ok',
    modifier: 'helium',
    size: 'big'
  }],
  onCloseClick: null
};
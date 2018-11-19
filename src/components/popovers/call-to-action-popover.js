"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallToActionPopover = void 0;

var _react = _interopRequireWildcard(require("react"));

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/components/typography/title");

var _paragraph = require("kitten/components/typography/paragraph");

var _popover = require("kitten/components/popovers/popover");

var _button = require("kitten/components/buttons/button");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var CallToActionPopover =
/*#__PURE__*/
function (_Component) {
  _inherits(CallToActionPopover, _Component);

  function CallToActionPopover(props) {
    var _this;

    _classCallCheck(this, CallToActionPopover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CallToActionPopover).call(this, props));
    _this.renderButton = _this.renderButton.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CallToActionPopover, [{
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
      return _react.default.createElement("div", {
        className: "k-Popover__illustration"
      }, _react.default.createElement(Illustration, null));
    }
  }, {
    key: "renderButton",
    value: function renderButton(options, i) {
      var label = options.label,
          clickOptions = options.clickOptions,
          others = _objectWithoutProperties(options, ["label", "clickOptions"]);

      var clickHandler = this.getButtonClickHandler(clickOptions);
      return _react.default.createElement(_button.Button, _extends({
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
          popoverProps = _objectWithoutProperties(_this$props, ["title", "text", "titleAriaLabelId", "buttons", "illustration"]);

      return _react.default.createElement(_popover.Popover, _extends({
        titleAriaLabelId: titleAriaLabelId
      }, popoverProps), this.renderIllustration(), _react.default.createElement(_marger.Marger, {
        top: "4",
        bottom: "4",
        className: "k-Popover__content"
      }, _react.default.createElement(_marger.Marger, {
        bottom: "1"
      }, _react.default.createElement(_title.Title, {
        id: titleAriaLabelId,
        modifier: "senary",
        margin: false
      }, title)), _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "3"
      }, _react.default.createElement(_paragraph.Paragraph, {
        modifier: "tertiary",
        margin: false
      }, text)), _react.default.createElement(_marger.Marger, {
        top: "3"
      }, _react.default.createElement("div", {
        className: "k-Popover__navigation"
      }, _react.default.createElement("div", {
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
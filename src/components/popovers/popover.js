"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Popover = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _marger = require("../../components/layout/marger");

var _closeButton = require("../../components/buttons/close-button");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Popover = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Popover, _Component);

  var _super = _createSuper(Popover);

  function Popover(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Popover);
    _this = _super.call(this, props);
    _this.handleCloseClick = _this.handleCloseClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Popover, [{
    key: "handleCloseClick",
    value: function handleCloseClick() {
      if (this.props.onCloseClick) return this.props.onCloseClick();
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      return /*#__PURE__*/_react.default.createElement(_closeButton.CloseButton, {
        modifier: "hydrogen",
        size: "micro",
        closeButtonLabel: this.props.closeButtonLabel,
        onClick: this.handleCloseClick
      });
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      if (typeof this.props.children != 'string') {
        return this.props.children;
      }

      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "5",
        bottom: "5",
        className: "k-Popover__content"
      }, this.props.children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          popoverClassName = _this$props.popoverClassName,
          containerClassName = _this$props.containerClassName,
          titleAriaLabelId = _this$props.titleAriaLabelId,
          onCloseClick = _this$props.onCloseClick,
          closeButtonLabel = _this$props.closeButtonLabel,
          popoverAttributes = (0, _objectWithoutProperties2.default)(_this$props, ["children", "popoverClassName", "containerClassName", "titleAriaLabelId", "onCloseClick", "closeButtonLabel"]);
      var popoverClassNames = (0, _classnames.default)('k-Popover', popoverClassName);
      var containerClassNames = (0, _classnames.default)('k-Popover__container', containerClassName);
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        ref: "popover",
        className: popoverClassNames,
        role: "dialog",
        "aria-hidden": "true",
        "aria-labelledby": titleAriaLabelId
      }, popoverAttributes), /*#__PURE__*/_react.default.createElement("div", {
        className: containerClassNames
      }, this.renderContent(), /*#__PURE__*/_react.default.createElement("div", null, this.renderCloseButton())));
    }
  }]);
  return Popover;
}(_react.Component);

exports.Popover = Popover;
Popover.defaultProps = {
  onCloseClick: null,
  closeButtonLabel: 'Close',
  popoverClassName: '',
  containerClassName: ''
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _closeButton = require("kitten/components/buttons/close-button");

var _elementHelper = require("kitten/helpers/dom/element-helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var Alert =
/*#__PURE__*/
function (_Component) {
  _inherits(Alert, _Component);

  function Alert(props) {
    var _this;

    _classCallCheck(this, Alert);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Alert).call(this, props));
    _this.state = {
      show: props.show,
      height: 'auto'
    };
    _this.handleCloseClick = _this.handleCloseClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleAnimationEnd = _this.handleAnimationEnd.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Alert, [{
    key: "handleCloseClick",
    value: function handleCloseClick() {
      this.setState({
        show: false,
        // The css animation on the close button requires a fixed height.
        height: _elementHelper.domElementHelper.getComputedHeight(this.container)
      });
    }
  }, {
    key: "handleAnimationEnd",
    value: function handleAnimationEnd() {
      this.props.onAfterClose();
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      if (!this.props.closeButton) return;
      return _react.default.createElement(_closeButton.CloseButton, {
        modifier: "carbon",
        className: "k-Alert__close",
        closeButtonLabel: this.props.closeButtonLabel,
        onClick: this.handleCloseClick
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.props.show) return null;

      var _this$props = this.props,
          className = _this$props.className,
          show = _this$props.show,
          error = _this$props.error,
          success = _this$props.success,
          closeButton = _this$props.closeButton,
          closeButtonLabel = _this$props.closeButtonLabel,
          children = _this$props.children,
          onAfterClose = _this$props.onAfterClose,
          others = _objectWithoutProperties(_this$props, ["className", "show", "error", "success", "closeButton", "closeButtonLabel", "children", "onAfterClose"]);

      var alertClassName = (0, _classnames.default)('k-Alert', {
        'k-Alert--success': success,
        'k-Alert--error': error,
        'k-Alert--hidden': !this.state.show
      }, className);
      return _react.default.createElement("div", _extends({
        ref: function ref(div) {
          return _this2.container = div;
        },
        role: "alert",
        style: {
          height: this.state.height
        },
        className: alertClassName,
        onAnimationEnd: this.handleAnimationEnd
      }, others), _react.default.createElement("div", {
        className: "k-Alert__container"
      }, _react.default.createElement("div", {
        className: "k-Alert__row"
      }, _react.default.createElement("div", {
        className: "k-Alert__content"
      }, children))), this.renderCloseButton());
    }
  }]);

  return Alert;
}(_react.Component);

exports.Alert = Alert;
Alert.defaultProps = {
  className: null,
  show: true,
  error: false,
  success: false,
  closeButton: false,
  closeButtonLabel: 'Close',
  onAfterClose: function onAfterClose() {}
};
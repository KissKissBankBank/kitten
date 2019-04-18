"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Alert = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _closeButton = require("../../components/buttons/close-button");

var _elementHelper = require("../../helpers/dom/element-helper");

var Alert =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Alert, _Component);

  function Alert(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Alert);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Alert).call(this, props));
    _this.state = {
      show: props.show,
      height: 'auto'
    };
    _this.handleCloseClick = _this.handleCloseClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleAnimationEnd = _this.handleAnimationEnd.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Alert, [{
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
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "show", "error", "success", "closeButton", "closeButtonLabel", "children", "onAfterClose"]);
      var alertClassName = (0, _classnames.default)('k-Alert', {
        'k-Alert--success': success,
        'k-Alert--error': error,
        'k-Alert--hidden': !this.state.show
      }, className);
      return _react.default.createElement("div", (0, _extends2.default)({
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
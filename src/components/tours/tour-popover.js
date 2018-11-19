"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TourPopover = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var TourPopover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TourPopover, _React$Component);

  function TourPopover(props) {
    var _this;

    _classCallCheck(this, TourPopover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TourPopover).call(this, props));
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // Component lifecycle.


  _createClass(TourPopover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onPopoverPosition(this.refs.popover);
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldUpdatePosition(prevProps)) {
        this.props.onPopoverPosition(this.refs.popover);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    } // Component listener callbacks.

  }, {
    key: "handleResize",
    value: function handleResize() {
      this.props.onPopoverPosition(this.refs.popover);
    } // Component methods.

  }, {
    key: "shouldUpdatePosition",
    value: function shouldUpdatePosition(prevProps) {
      return prevProps.name != this.props.name;
    } // Component rendering.

  }, {
    key: "renderNextButton",
    value: function renderNextButton() {
      var isDisabled = !this.props.buttons.next.active;
      var buttonClassName = (0, _classnames.default)('k-Tour__popover__button', 'k-Tour__popover__button--right', 'k-Button', 'k-Button--tiny', 'k-Button--icon', 'k-Button--iconRight', {
        'k-Button--helium': !isDisabled,
        'k-Button--hydrogen': isDisabled
      });
      return _react.default.createElement("button", {
        onClick: isDisabled ? null : this.props.onNextClick,
        title: this.props.buttons.next.title,
        className: buttonClassName,
        disabled: isDisabled
      }, this.props.buttons.next.label, _react.default.createElement("svg", {
        className: "k-Button__icon",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 6 6"
      }, _react.default.createElement("path", {
        d: "M6 0H0v6h2V2h4z"
      })));
    }
  }, {
    key: "renderPrevButton",
    value: function renderPrevButton() {
      var isDisabled = !this.props.buttons.prev.active;
      var buttonClassName = (0, _classnames.default)('k-Tour__popover__button', 'k-Button', 'k-Button--tiny', 'k-Button--icon', {
        'k-Button--helium': !isDisabled,
        'k-Button--hydrogen': isDisabled
      });
      return _react.default.createElement("button", {
        onClick: isDisabled ? null : this.props.onPrevClick,
        title: this.props.buttons.prev.title,
        className: buttonClassName,
        disabled: isDisabled
      }, _react.default.createElement("svg", {
        className: "k-Button__icon--tiny",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 6 6",
        fill: "#fff"
      }, _react.default.createElement("path", {
        d: "M6 0H0v6h2V2h4z"
      })), this.props.buttons.prev.label);
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      return _react.default.createElement("button", {
        title: this.props.buttons.close.label,
        "aria-label": this.props.buttons.close.label,
        onClick: this.props.onCloseClick,
        className: "k-ButtonIcon k-ButtonIcon--hydrogen k-ButtonIcon--tiny"
      }, _react.default.createElement("svg", {
        className: "k-ButtonIcon__svg k-ButtonIcon__svgRotate",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "-11 -4 125 105"
      }, _react.default.createElement("path", {
        d: "M91.968 21.407l-70.56 70.56-13.44-13.44 70.56-70.56z"
      }), _react.default.createElement("path", {
        d: "M91.968 78.527l-13.44 13.44-70.56-70.56 13.44-13.44z"
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        ref: "popover",
        className: "k-Popover k-Tour__popover",
        role: "dialog",
        "aria-hidden": "true",
        "aria-labelledby": "dialogtitle",
        style: this.props.style
      }, _react.default.createElement("div", {
        className: "k-Popover__container k-Tour__popover__container"
      }, _react.default.createElement("div", {
        className: "k-Tour__popover__illustration"
      }, this.props.illustration), _react.default.createElement("div", {
        className: "k-Tour__popover__content"
      }, _react.default.createElement("p", {
        id: "dialogtitle",
        className: "k-Tour__popover__title"
      }, this.props.title), _react.default.createElement("p", {
        className: "k-Tour__popover__text"
      }, this.props.content), _react.default.createElement("div", {
        className: "k-Tour__popover__navigation"
      }, _react.default.createElement("p", {
        className: "k-Tour__popover__numbering"
      }, this.props.progress), _react.default.createElement("div", {
        className: "k-Tour__popover__buttons"
      }, this.renderPrevButton(), this.renderNextButton()))), _react.default.createElement("div", {
        className: "k-Popover__close"
      }, this.renderCloseButton())));
    }
  }]);

  return TourPopover;
}(_react.default.Component); // DEPRECATED: do not use default export.


exports.TourPopover = TourPopover;
var _default = TourPopover;
exports.default = _default;
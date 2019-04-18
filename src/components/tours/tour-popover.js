"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TourPopover = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var TourPopover =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(TourPopover, _React$Component);

  function TourPopover(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TourPopover);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TourPopover).call(this, props));
    _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  } // Component lifecycle.


  (0, _createClass2.default)(TourPopover, [{
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
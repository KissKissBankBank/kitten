"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TourStep = void 0;

var _react = _interopRequireDefault(require("react"));

var _assign = _interopRequireDefault(require("core-js/library/fn/object/assign"));

var _elementHelper = require("kitten/helpers/dom/element-helper");

var _tourPopover = require("kitten/components/tours/tour-popover");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var TourStep =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TourStep, _React$Component);

  function TourStep(props) {
    var _this;

    _classCallCheck(this, TourStep);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TourStep).call(this, props));
    _this.state = {
      targetHighlightStyles: null,
      currentPositionTarget: _this.props.targetElement,
      popoverComputedStyles: null
    };
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleTargetHighlightPosition = _this.handleTargetHighlightPosition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handlePopoverPosition = _this.handlePopoverPosition.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  } // Component lifecyle.


  _createClass(TourStep, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.positionTargetHighlight();
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.isTargetHighlightPositionUpdated()) {
        this.positionTargetHighlight();
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
      this.positionTargetHighlight();
    }
  }, {
    key: "handleTargetHighlightPosition",
    value: function handleTargetHighlightPosition() {
      this.props.onTargetHighlightPosition(this.props);
    }
  }, {
    key: "handlePopoverPosition",
    value: function handlePopoverPosition(popover) {
      this.positionPopover(popover);
    } // Component methods.

  }, {
    key: "getTargetHighlightPositionStyles",
    value: function getTargetHighlightPositionStyles() {
      var target = document.querySelector(this.props.targetElement);
      var targetStyles = target.getBoundingClientRect();
      var targetHeight = targetStyles.height;
      var targetWidth = targetStyles.width;
      var targetTop = targetStyles.top;
      var targetLeft = targetStyles.left;
      var highlight = this.refs.targetHighlight;
      var highlightStyles = highlight.getBoundingClientRect();
      var highlightHeight = highlightStyles.height;
      var highlightWidth = highlightStyles.width;
      var highlightTop = targetTop + targetHeight / 2 - highlightHeight / 2;
      var highlightLeft = targetLeft + targetWidth / 2 - highlightWidth / 2;
      return {
        top: highlightTop + 'px',
        left: highlightLeft + 'px'
      };
    }
  }, {
    key: "positionTargetHighlight",
    value: function positionTargetHighlight() {
      if (_elementHelper.domElementHelper.canUseDom()) {
        this.handleTargetHighlightPosition();
        this.setState({
          targetHighlightStyles: this.getTargetHighlightPositionStyles(),
          currentPositionTarget: this.props.targetElement
        });
      }
    }
  }, {
    key: "positionPopover",
    value: function positionPopover(popover) {
      this.setState({
        popoverComputedStyles: this.getPopoverPositionStyles(popover, this.props.popoverPosition)
      });
    }
  }, {
    key: "getPopoverPositionStyles",
    value: function getPopoverPositionStyles(popover, position) {
      if (!position) return;
      var target = document.querySelector(this.props.targetElement);

      if (position == 'right') {
        var left = _elementHelper.domElementHelper.getComputedLeft(target) - _elementHelper.domElementHelper.getComputedWidth(popover) + _elementHelper.domElementHelper.getComputedWidth(target);

        return {
          left: left
        };
      }

      return {
        left: _elementHelper.domElementHelper.getComputedLeft(target)
      };
    }
  }, {
    key: "isTargetHighlightPositionUpdated",
    value: function isTargetHighlightPositionUpdated() {
      return this.state.currentPositionTarget == this.props.targetElement;
    }
  }, {
    key: "renderTargetHighlight",
    value: function renderTargetHighlight() {
      return _react.default.createElement("div", {
        ref: "targetHighlight",
        className: "k-Tour__step__targetHighlight",
        style: this.state.targetHighlightStyles
      }, _react.default.createElement("span", {
        className: "k-Tour__step__targetHighlightContent"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          targetElement = _this$props.targetElement,
          popoverProps = _objectWithoutProperties(_this$props, ["targetElement"]);

      return _react.default.createElement("div", {
        className: "k-Tour__step"
      }, this.renderTargetHighlight(), _react.default.createElement(_tourPopover.TourPopover, _extends({
        ref: "popover",
        onPopoverPosition: this.handlePopoverPosition,
        style: this.state.popoverComputedStyles
      }, popoverProps)));
    }
  }]);

  return TourStep;
}(_react.default.Component);

exports.TourStep = TourStep;
TourStep.defaultProps = {
  position: null // 'left' | 'right'
  // DEPRECATED: do not use default export.

};
var _default = TourStep;
exports.default = _default;
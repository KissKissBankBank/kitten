"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TourStep = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _elementHelper = require("../../../helpers/dom/element-helper");

var _tourPopover = require("../../../components/tours/tour-popover");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TourStep = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TourStep, _React$Component);

  var _super = _createSuper(TourStep);

  function TourStep(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TourStep);
    _this = _super.call(this, props);
    _this.state = {
      targetHighlightStyles: null,
      currentPositionTarget: _this.props.targetElement,
      popoverComputedStyles: null
    };
    _this.handleResize = _this.handleResize.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleTargetHighlightPosition = _this.handleTargetHighlightPosition.bind((0, _assertThisInitialized2.default)(_this));
    _this.handlePopoverPosition = _this.handlePopoverPosition.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  } // Component lifecyle.


  (0, _createClass2.default)(TourStep, [{
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
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: "targetHighlight",
        className: "k-Tour__step__targetHighlight",
        style: this.state.targetHighlightStyles
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "k-Tour__step__targetHighlightContent"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          targetElement = _this$props.targetElement,
          popoverProps = (0, _objectWithoutProperties2.default)(_this$props, ["targetElement"]);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-Tour__step"
      }, this.renderTargetHighlight(), /*#__PURE__*/_react.default.createElement(_tourPopover.TourPopover, (0, _extends2.default)({
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

}; // DEPRECATED: do not use default export.

var _default = TourStep;
exports.default = _default;
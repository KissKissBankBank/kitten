import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import { domElementHelper } from '../../helpers/dom/element-helper';
import { TourPopover } from '../../components/tours/tour-popover';
export var TourStep = /*#__PURE__*/function (_React$Component) {
  _inherits(TourStep, _React$Component);

  var _super = _createSuper(TourStep);

  function TourStep(props) {
    var _this;

    _classCallCheck(this, TourStep);

    _this = _super.call(this, props);
    _this.state = {
      targetHighlightStyles: null,
      currentPositionTarget: _this.props.targetElement,
      popoverComputedStyles: null
    };
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    _this.handleTargetHighlightPosition = _this.handleTargetHighlightPosition.bind(_assertThisInitialized(_this));
    _this.handlePopoverPosition = _this.handlePopoverPosition.bind(_assertThisInitialized(_this));
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
      if (domElementHelper.canUseDom()) {
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
        var left = domElementHelper.getComputedLeft(target) - domElementHelper.getComputedWidth(popover) + domElementHelper.getComputedWidth(target);
        return {
          left: left
        };
      }

      return {
        left: domElementHelper.getComputedLeft(target)
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
      return /*#__PURE__*/React.createElement("div", {
        ref: "targetHighlight",
        className: "k-Tour__step__targetHighlight",
        style: this.state.targetHighlightStyles
      }, /*#__PURE__*/React.createElement("span", {
        className: "k-Tour__step__targetHighlightContent"
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          targetElement = _this$props.targetElement,
          popoverProps = _objectWithoutProperties(_this$props, ["targetElement"]);

      return /*#__PURE__*/React.createElement("div", {
        className: "k-Tour__step"
      }, this.renderTargetHighlight(), /*#__PURE__*/React.createElement(TourPopover, _extends({
        ref: "popover",
        onPopoverPosition: this.handlePopoverPosition,
        style: this.state.popoverComputedStyles
      }, popoverProps)));
    }
  }]);

  return TourStep;
}(React.Component);
TourStep.defaultProps = {
  position: null // 'left' | 'right'

}; // DEPRECATED: do not use default export.

export default TourStep;
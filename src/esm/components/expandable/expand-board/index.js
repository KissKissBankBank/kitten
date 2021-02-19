import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../../components/buttons/button/button';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledButton = styled(Button).withConfig({
  displayName: "expand-board__StyledButton",
  componentId: "sc-5cysn4-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;line-height:", ";", ""], pxToRem(21), function (_ref) {
  var expanded = _ref.expanded;
  return expanded && css(["background-color:", ";border-color:", ";"], COLORS.font1, COLORS.font1);
});
var StyledArrowIcon = styled(ArrowIcon).withConfig({
  displayName: "expand-board__StyledArrowIcon",
  componentId: "sc-5cysn4-1"
})(["width:", ";height:", ";margin-left:", ";"], pxToRem(8), pxToRem(12), pxToRem(10));
export var ExpandBoardButton = /*#__PURE__*/function (_PureComponent) {
  _inherits(ExpandBoardButton, _PureComponent);

  var _super = _createSuper(ExpandBoardButton);

  function ExpandBoardButton() {
    _classCallCheck(this, ExpandBoardButton);

    return _super.apply(this, arguments);
  }

  _createClass(ExpandBoardButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          expandChildren = _this$props.expandChildren,
          expanded = _this$props.expanded,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick,
          ariaId = _this$props.ariaId,
          borderRadius = _this$props.borderRadius,
          big = _this$props.big;
      var defaultExpandChildren = expandChildren ? expandChildren : children;
      return /*#__PURE__*/React.createElement(StyledButton, {
        big: big,
        modifier: "helium",
        disabled: disabled,
        "aria-expanded": expanded,
        "aria-controls": ariaId,
        onClick: onClick,
        type: "button",
        borderRadius: borderRadius
      }, /*#__PURE__*/React.createElement("div", null, expanded ? defaultExpandChildren : children, /*#__PURE__*/React.createElement(StyledArrowIcon, {
        direction: expanded ? 'top' : 'bottom',
        fill: COLORS.background1
      })));
    }
  }]);

  return ExpandBoardButton;
}(PureComponent);
ExpandBoardButton.propTypes = {
  children: PropTypes.node.isRequired,
  ariaId: PropTypes.string,
  expandChildren: PropTypes.node,
  expanded: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  big: PropTypes.bool,
  borderRadius: PropTypes.number
};
ExpandBoardButton.defaultProps = {
  expandChildren: null,
  expanded: false,
  disabled: false,
  onClick: function onClick() {},
  ariaId: '',
  borderRadius: 0,
  big: true
};
export var ExpandBoardContent = /*#__PURE__*/function (_PureComponent2) {
  _inherits(ExpandBoardContent, _PureComponent2);

  var _super2 = _createSuper(ExpandBoardContent);

  function ExpandBoardContent() {
    _classCallCheck(this, ExpandBoardContent);

    return _super2.apply(this, arguments);
  }

  _createClass(ExpandBoardContent, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          ariaId = _this$props2.ariaId;
      return /*#__PURE__*/React.createElement("div", {
        id: ariaId
      }, children);
    }
  }]);

  return ExpandBoardContent;
}(PureComponent);
ExpandBoardContent.propTypes = {
  children: PropTypes.node.isRequired,
  ariaId: PropTypes.string
};
ExpandBoardContent.defaultProps = {
  ariaId: ''
};

var growAnimation = function growAnimation() {
  return keyframes(["0%:{opacity:0;maxHeight:0;}100%:{opacity:1;maxHeight:this.props.animationMaxHeight;}grow;"]);
};

var shrinkAnimation = function shrinkAnimation() {
  return keyframes(["0%:{opacity:1;maxHeight:this.props.animationMaxHeight;}100%:{opacity:0;maxHeight:0;}schrink;"]);
};

export var ExpandBoard = /*#__PURE__*/function (_PureComponent3) {
  _inherits(ExpandBoard, _PureComponent3);

  var _super3 = _createSuper(ExpandBoard);

  function ExpandBoard() {
    var _this;

    _classCallCheck(this, ExpandBoard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super3.call.apply(_super3, [this].concat(args));
    _this.state = {
      expanded: false,
      isShrinking: false,
      isExpanding: false
    };

    _this.isButtonComponent = function (component) {
      return component.type === ExpandBoardButton;
    };

    _this.isContentComponent = function (component) {
      return component.type === ExpandBoardContent;
    };

    _this.handleAfterClick = function () {
      var _this$state = _this.state,
          expanded = _this$state.expanded,
          isShrinking = _this$state.isShrinking,
          isExpanding = _this$state.isExpanding;
      document.activeElement.blur();

      _this.props.onClick({
        expanded: expanded,
        isShrinking: isShrinking,
        isExpanding: isExpanding
      });
    };

    _this.updateExpandState = function () {
      _this.setState(function (prevState) {
        return {
          expanded: !prevState.expanded,
          isShrinking: false,
          isExpanding: false
        };
      }, _this.handleAfterClick);
    };

    _this.handleClick = function () {
      var _this$props3 = _this.props,
          withAnimation = _this$props3.withAnimation,
          animationShrinkingDuration = _this$props3.animationShrinkingDuration;
      if (!withAnimation) return _this.updateExpandState();
      return _this.setState(function (prevState) {
        if (prevState.expanded) {
          return {
            isShrinking: true
          };
        }

        return {
          isExpanding: true
        };
      }, function () {
        if (_this.state.isShrinking) {
          return setTimeout(_this.updateExpandState, animationShrinkingDuration * 1000);
        }

        return _this.updateExpandState();
      });
    };

    _this.contentStyle = function () {
      var _this$props4 = _this.props,
          withAnimation = _this$props4.withAnimation,
          animationShrinkingDuration = _this$props4.animationShrinkingDuration,
          animationMaxHeight = _this$props4.animationMaxHeight;
      if (!withAnimation) return null;

      if (_this.state.isShrinking) {
        return {
          maxHeight: animationMaxHeight,
          opacity: 1,
          animationDuration: "".concat(animationShrinkingDuration, "s"),
          animationDelay: 0,
          animationIterationCount: 1,
          animationFillMode: 'forwards',
          animationName: shrinkAnimation,
          animationTimingFunction: 'ease-in-out'
        };
      }

      return {
        maxHeight: 0,
        opacity: 0,
        animationDuration: '1s',
        animationDelay: 0,
        animationIterationCount: 1,
        animationFillMode: 'forwards',
        animationName: growAnimation,
        animationTimingFunction: 'ease-in-out'
      };
    };

    return _this;
  }

  _createClass(ExpandBoard, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          children = _this$props5.children,
          style = _this$props5.style,
          disabled = _this$props5.disabled,
          ariaId = _this$props5.ariaId;
      var button = null;
      var content = null;
      React.Children.forEach(children, function (child) {
        if (!React.isValidElement(child)) return null;

        if (_this2.isButtonComponent(child)) {
          button = React.cloneElement(child, {
            disabled: disabled,
            expanded: _this2.state.expanded,
            onClick: _this2.handleClick,
            style: /*#__PURE__*/React.createElement(StyledButton, null),
            ariaId: ariaId
          });
        }

        if (_this2.isContentComponent(child)) {
          content = React.cloneElement(child, {
            ariaId: ariaId,
            style: _this2.contentStyle()
          });
        }
      });
      return /*#__PURE__*/React.createElement("div", {
        style: style
      }, button, this.state.expanded && content);
    }
  }]);

  return ExpandBoard;
}(PureComponent);
ExpandBoard.Button = ExpandBoardButton;
ExpandBoard.Content = ExpandBoardContent;
ExpandBoard.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
  onClick: PropTypes.func,
  ariaId: PropTypes.string.isRequired,
  withAnimation: PropTypes.bool,
  animationMaxHeight: PropTypes.string,
  animationShrinkingDuration: PropTypes.number
};
ExpandBoard.defaultProps = {
  disabled: false,
  style: {},
  onClick: function onClick() {},
  ariaId: 'k-ExpandBoard',
  withAnimation: false,
  animationMaxHeight: '100vh',
  animationShrinkingDuration: 0.5
};
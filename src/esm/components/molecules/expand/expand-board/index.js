import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/web.dom-collections.for-each.js";
import React, { PureComponent } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from '../../../../components/molecules/buttons/button';
import { ArrowIcon } from '../../../../components/graphics/icons/arrow-icon';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
var StyledButton = styled(Button).withConfig({
  displayName: "expand-board__StyledButton",
  componentId: "sc-x26zu0-0"
})(["width:100%;display:flex;align-items:center;justify-content:center;line-height:", ";", ""], pxToRem(21), function (_ref) {
  var expanded = _ref.expanded;
  return expanded && css(["background-color:", ";border-color:", ";"], COLORS.font1, COLORS.font1);
});
var StyledArrowIcon = styled(ArrowIcon).withConfig({
  displayName: "expand-board__StyledArrowIcon",
  componentId: "sc-x26zu0-1"
})(["width:", ";height:", ";margin-left:", ";"], pxToRem(8), pxToRem(12), pxToRem(10));
export var ExpandBoardButton = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(ExpandBoardButton, _PureComponent);

  function ExpandBoardButton() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ExpandBoardButton.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        expandChildren = _this$props.expandChildren,
        expanded = _this$props.expanded,
        disabled = _this$props.disabled,
        onClick = _this$props.onClick,
        ariaId = _this$props.ariaId,
        borderRadius = _this$props.borderRadius,
        size = _this$props.size;
    var defaultExpandChildren = expandChildren ? expandChildren : children;
    return /*#__PURE__*/React.createElement(StyledButton, {
      size: size,
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
  };

  return ExpandBoardButton;
}(PureComponent);
ExpandBoardButton.propTypes = {
  children: PropTypes.node.isRequired,
  ariaId: PropTypes.string,
  expandChildren: PropTypes.node,
  expanded: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  size: PropTypes.string,
  borderRadius: PropTypes.number
};
ExpandBoardButton.defaultProps = {
  expandChildren: null,
  expanded: false,
  disabled: false,
  onClick: function onClick() {},
  ariaId: '',
  borderRadius: 0,
  size: 'big'
};
export var ExpandBoardContent = /*#__PURE__*/function (_PureComponent2) {
  _inheritsLoose(ExpandBoardContent, _PureComponent2);

  function ExpandBoardContent() {
    return _PureComponent2.apply(this, arguments) || this;
  }

  var _proto2 = ExpandBoardContent.prototype;

  _proto2.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        ariaId = _this$props2.ariaId;
    return /*#__PURE__*/React.createElement("div", {
      id: ariaId
    }, children);
  };

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
  return keyframes(["0%:{opacity:0;max-height:0;}100%:{opacity:1;max-height:var(--ExpandBoard-animationMaxHeight);};"]);
};

var shrinkAnimation = function shrinkAnimation() {
  return keyframes(["0%:{opacity:1;max-height:var(--ExpandBoard-animationMaxHeight);}100%:{opacity:0;max-height:0;};"]);
};

export var ExpandBoard = /*#__PURE__*/function (_PureComponent3) {
  _inheritsLoose(ExpandBoard, _PureComponent3);

  function ExpandBoard() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent3.call.apply(_PureComponent3, [this].concat(args)) || this;
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
          '--ExpandBoard-animationMaxHeight': animationMaxHeight,
          maxHeight: animationMaxHeight,
          opacity: 1,
          animationDuration: animationShrinkingDuration + "s",
          animationDelay: 0,
          animationIterationCount: 1,
          animationFillMode: 'forwards',
          animationName: shrinkAnimation,
          animationTimingFunction: 'ease-in-out'
        };
      }

      return {
        '--ExpandBoard-animationMaxHeight': animationMaxHeight,
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

  var _proto3 = ExpandBoard.prototype;

  _proto3.render = function render() {
    var _this2 = this;

    var _this$props5 = this.props,
        children = _this$props5.children,
        style = _this$props5.style,
        disabled = _this$props5.disabled,
        ariaId = _this$props5.ariaId;
    var button = null;
    var content = null;
    React.Children.forEach(children, function (child) {
      if (! /*#__PURE__*/React.isValidElement(child)) return null;

      if (_this2.isButtonComponent(child)) {
        button = /*#__PURE__*/React.cloneElement(child, {
          disabled: disabled,
          expanded: _this2.state.expanded,
          onClick: _this2.handleClick,
          style: /*#__PURE__*/React.createElement(StyledButton, null),
          ariaId: ariaId
        });
      }

      if (_this2.isContentComponent(child)) {
        content = /*#__PURE__*/React.cloneElement(child, {
          ariaId: ariaId,
          style: _this2.contentStyle()
        });
      }
    });
    return /*#__PURE__*/React.createElement("div", {
      style: style
    }, button, this.state.expanded && content);
  };

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
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { ExpandBoard } from 'kitten/components/expandable/expand-board';
import { List } from 'kitten/components/lists/list';
import { Text } from 'kitten/components/typography/text';
import { pxToRem } from '../../../helpers/utils/typography';

var fadeInAnimation = function fadeInAnimation() {
  return keyframes(["0%:{opacity:0;}100%:{opacity:1;}fadeIn;"]);
};

var fadeOutAnimation = function fadeOutAnimation() {
  return keyframes(["0%:{opacity:1;height:auto}100%:{opacity:0;height:0;}fadeOut;"]);
};

var StyledButtonListItem = styled(Text).withConfig({
  displayName: "examples__StyledButtonListItem",
  componentId: "ewll9p-0"
})(["margin:0;padding:0;line-height:", ";"], pxToRem(19.2));
var StyledButtonList = styled.div.withConfig({
  displayName: "examples__StyledButtonList",
  componentId: "ewll9p-1"
})(["margin:", " ", ";padding:0;"], pxToRem(16), pxToRem(0));
export var ExpandBoardWithButtonItemList = /*#__PURE__*/function (_PureComponent) {
  _inherits(ExpandBoardWithButtonItemList, _PureComponent);

  var _super = _createSuper(ExpandBoardWithButtonItemList);

  function ExpandBoardWithButtonItemList() {
    var _this;

    _classCallCheck(this, ExpandBoardWithButtonItemList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.list = [{
      size: 'Size XS',
      availability: 'Availability: 10/30',
      disabled: false
    }, {
      size: 'Size M',
      availability: 'Availability: 10/30',
      disabled: true
    }, {
      size: 'Size XXL',
      availability: 'Availability: 10/30',
      disabled: false
    }];
    _this.state = {
      isShrinking: false,
      expanded: false
    };

    _this.handleClick = function (_ref) {
      var isShrinking = _ref.isShrinking,
          expanded = _ref.expanded;

      _this.setState({
        isShrinking: isShrinking,
        expanded: expanded
      });
    };

    _this.buttonListItemStyle = function (key) {
      if (!_this.props.withAnimation) return null;

      if (_this.state.expanded) {
        return {
          animationDuration: '1s',
          animationIterationCount: 1,
          animationFillMode: 'forwards',
          animationName: fadeInAnimation,
          animationTimingFunction: 'ease-in-out',
          animationDelay: "".concat(0.2 * key, "s")
        };
      }

      return {
        animationDuration: '.6s',
        animationIterationCount: 1,
        animationFillMode: 'forwards',
        animationName: fadeOutAnimation,
        animationTimingFunction: 'ease-in-out',
        animationDelay: "".concat(0.1 * key, "s")
      };
    };

    return _this;
  }

  _createClass(ExpandBoardWithButtonItemList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          withAnimation = _this$props.withAnimation,
          expandedButtonText = _this$props.expandedButtonText,
          buttonText = _this$props.buttonText,
          borderRadius = _this$props.borderRadius,
          withBottomBorderRadius = _this$props.withBottomBorderRadius,
          big = _this$props.big;
      return /*#__PURE__*/React.createElement(ExpandBoard, {
        onClick: this.handleClick,
        withAnimation: withAnimation
      }, /*#__PURE__*/React.createElement(ExpandBoard.Button, {
        expandChildren: expandedButtonText,
        borderRadius: borderRadius,
        big: big
      }, buttonText), /*#__PURE__*/React.createElement(ExpandBoard.Content, null, /*#__PURE__*/React.createElement(List, {
        withBottomBorderRadius: withBottomBorderRadius
      }, this.list.map(function (item, key) {
        return /*#__PURE__*/React.createElement(List.ButtonItem, _extends({
          key: item.size,
          disabled: item.disabled
        }, _this2.buttonListItemStyle(key)), /*#__PURE__*/React.createElement(StyledButtonList, null, /*#__PURE__*/React.createElement(StyledButtonListItem, {
          tag: "p",
          weight: "regular",
          color: "font1",
          size: "tiny"
        }, item.size), /*#__PURE__*/React.createElement(Text, {
          tag: "small",
          color: item.disabled ? 'font2' : 'font1',
          size: "micro"
        }, item.availability)));
      }))));
    }
  }]);

  return ExpandBoardWithButtonItemList;
}(PureComponent);
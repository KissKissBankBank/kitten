import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { ArrowIcon } from '../../../../components/icons/arrow-icon';
import { Button } from '../../../../components/buttons/button/button';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Text } from '../../../../components/typography/text';
var StyledText = styled(Text).withConfig({
  displayName: "navbar__StyledText",
  componentId: "sc-1v9dr3-0"
})(["margin-top:0;margin-bottom:", ";"], pxToRem(10));
var StyledButton = styled.div.withConfig({
  displayName: "navbar__StyledButton",
  componentId: "sc-1v9dr3-1"
})(["position:absolute;display:flex;justify-content:space-between;left:0;right:0;"]);
var StyledArrowIcon = styled(Button).withConfig({
  displayName: "navbar__StyledArrowIcon",
  componentId: "sc-1v9dr3-2"
})(["align-items:center;justify-content:center;display:flex;"]);
export var Navbar = /*#__PURE__*/function (_PureComponent) {
  _inherits(Navbar, _PureComponent);

  var _super = _createSuper(Navbar);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _super.apply(this, arguments);
  }

  _createClass(Navbar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onNextClick = _this$props.onNextClick,
          onPreviousClick = _this$props.onPreviousClick,
          className = _this$props.className,
          iconColor = _this$props.iconColor,
          title = _this$props.title,
          labels = _this$props.labels,
          previousMonth = _this$props.previousMonth,
          nextMonth = _this$props.nextMonth,
          months = _this$props.months;
      var previousAriaLabel = months !== undefined && months.length > 0 ? "".concat(labels && labels.previousMonth, ", ").concat(months[previousMonth.getMonth()], " ").concat(previousMonth.getFullYear()) : "".concat(labels && labels.previousMonth);
      var nextAriaLabel = months !== undefined && months.length > 0 ? "".concat(labels && labels.nextMonth, ", ").concat(months[nextMonth.getMonth()], " ").concat(nextMonth.getFullYear()) : "".concat(labels && labels.nextMonth);
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledText, {
        tag: "p",
        size: "tiny",
        weight: "regular"
      }, title), /*#__PURE__*/React.createElement(StyledButton, {
        className: className
      }, /*#__PURE__*/React.createElement(StyledArrowIcon, {
        "aria-label": previousAriaLabel,
        onClick: function onClick() {
          return onPreviousClick();
        },
        icon: true
      }, /*#__PURE__*/React.createElement(ArrowIcon, {
        version: "solid",
        fill: iconColor,
        direction: "left",
        width: "8",
        height: "8"
      })), /*#__PURE__*/React.createElement(StyledArrowIcon, {
        "aria-label": nextAriaLabel,
        onClick: function onClick() {
          return onNextClick();
        },
        icon: true
      }, /*#__PURE__*/React.createElement(ArrowIcon, {
        version: "solid",
        fill: iconColor,
        direction: "right",
        width: "8",
        height: "8"
      }))));
    }
  }]);

  return Navbar;
}(PureComponent);
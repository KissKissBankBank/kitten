import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import COLORS from '../../../constants/colors-config';
import { Step } from './components/step';
import { Title } from './components/title';
import { Link } from './components/link';
import { List } from './components/list';
export var STEP_CLASSNAME = 'VerticalStepper__step';
export var LINK_CLASSNAME = 'VerticalStepper__link';
export var VerticalStepper = /*#__PURE__*/function (_Component) {
  _inherits(VerticalStepper, _Component);

  var _super = _createSuper(VerticalStepper);

  function VerticalStepper() {
    _classCallCheck(this, VerticalStepper);

    return _super.apply(this, arguments);
  }

  _createClass(VerticalStepper, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return /*#__PURE__*/React.createElement(StyledNav, null, /*#__PURE__*/React.createElement(StyledList, {
        role: "tablist"
      }, children));
    }
  }]);

  return VerticalStepper;
}(Component);
VerticalStepper.Step = Step;
VerticalStepper.Title = Title;
VerticalStepper.List = List;
VerticalStepper.Link = Link;
var StyledNav = styled.nav.withConfig({
  displayName: "vertical-stepper__StyledNav",
  componentId: "sc-1uso67w-0"
})(["position:relative;padding:1px 0;"]);
var StyledList = styled.ul.withConfig({
  displayName: "vertical-stepper__StyledList",
  componentId: "sc-1uso67w-1"
})(["margin:0;padding:0;list-style:none;:before{position:absolute;top:0;bottom:0;left:", ";z-index:-1;content:'';border-left:2px dashed ", ";}"], pxToRem(14), COLORS.line1);
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import { Status } from './status';
import { STEP_CLASSNAME, LINK_CLASSNAME } from '../index';
export var Step = /*#__PURE__*/function (_Component) {
  _inherits(Step, _Component);

  var _super = _createSuper(Step);

  function Step() {
    _classCallCheck(this, Step);

    return _super.apply(this, arguments);
  }

  _createClass(Step, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          success = _this$props.success,
          valid = _this$props.valid,
          error = _this$props.error,
          waiting = _this$props.waiting,
          disabled = _this$props.disabled,
          statusProps = _this$props.statusProps,
          children = _this$props.children,
          other = _objectWithoutProperties(_this$props, ["success", "valid", "error", "waiting", "disabled", "statusProps", "children"]);

      return /*#__PURE__*/React.createElement(StyledItem, null, /*#__PURE__*/React.createElement(StyledLink, _extends({
        as: other.href ? 'a' : 'span'
      }, other), /*#__PURE__*/React.createElement(Status, _extends({
        success: success,
        valid: valid,
        error: error,
        waiting: waiting,
        disabled: disabled
      }, statusProps)), /*#__PURE__*/React.createElement(StyledContent, {
        error: error,
        disabled: disabled,
        className: STEP_CLASSNAME
      }, children)));
    }
  }]);

  return Step;
}(Component);
Step.propTypes = {
  href: PropTypes.string,
  valid: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  waiting: PropTypes.bool,
  disabled: PropTypes.bool
};
Step.defaultProps = {
  href: null,
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false
};
var StyledItem = styled.li.withConfig({
  displayName: "step__StyledItem",
  componentId: "sc-1you76f-0"
})(["margin ", " 0;"], pxToRem(30));
var StyledLink = styled.a.withConfig({
  displayName: "step__StyledLink",
  componentId: "sc-1you76f-1"
})(["display:inline-flex;", ""], function (_ref) {
  var as = _ref.as,
      onClick = _ref.onClick;
  return (as === 'a' || onClick) && css(["cursor:pointer;text-decoration:none;.", "{transition:transform 0.4s;}.", "{transition:color 0.4s;}:hover,:focus,:active{.", "{transform:translateX(", ");}.", "{color:", ";}}"], STEP_CLASSNAME, LINK_CLASSNAME, STEP_CLASSNAME, pxToRem(5), LINK_CLASSNAME, COLORS.primary3);
});
var StyledContent = styled.div.withConfig({
  displayName: "step__StyledContent",
  componentId: "sc-1you76f-2"
})(["display:flex;flex-direction:column;justify-content:center;flex:1;color:", ";", ""], COLORS.font1, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && css(["color:", ";"], COLORS.font2);
});
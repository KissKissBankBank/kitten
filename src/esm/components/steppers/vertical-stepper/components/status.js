import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { CheckedIcon } from '../../../../components/icons/checked-icon';
import { WarningIcon } from '../../../../components/icons/warning-icon';
import { WaitingIcon } from '../../../../components/icons/waiting-icon';
import { LockIcon } from '../../../../components/icons/lock-icon';
export var Status = /*#__PURE__*/function (_Component) {
  _inherits(Status, _Component);

  var _super = _createSuper(Status);

  function Status() {
    var _this;

    _classCallCheck(this, Status);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.iconByStatus = function () {
      var _this$props = _this.props,
          valid = _this$props.valid,
          success = _this$props.success,
          error = _this$props.error,
          waiting = _this$props.waiting,
          disabled = _this$props.disabled;
      if (valid) return /*#__PURE__*/React.createElement(CheckedIcon, {
        width: "10",
        title: null
      });
      if (success) return /*#__PURE__*/React.createElement(CheckedIcon, {
        width: "10",
        title: null
      });
      if (error) return /*#__PURE__*/React.createElement(WarningIcon, {
        color: COLORS.error,
        title: null
      });
      if (waiting) return /*#__PURE__*/React.createElement(WaitingIcon, {
        height: "4",
        color: COLORS.primary1,
        title: null
      });
      if (disabled) return /*#__PURE__*/React.createElement(LockIcon, {
        width: "10",
        color: COLORS.background1,
        title: null
      });
      return null;
    };

    return _this;
  }

  _createClass(Status, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          other = _objectWithoutProperties(_this$props2, ["children"]);

      return /*#__PURE__*/React.createElement(StyledStatus, other, this.iconByStatus() || children);
    }
  }]);

  return Status;
}(Component);
Status.propTypes = {
  valid: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  waiting: PropTypes.bool,
  disabled: PropTypes.bool
};
Status.defaultProps = {
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false
};
var STATUS_SIZE = 30;
export var StyledStatus = styled.span.withConfig({
  displayName: "status__StyledStatus",
  componentId: "sc-17oq9bs-0"
})(["flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:", ";box-sizing:border-box;margin-right:", ";background-color:", ";border:2px solid ", ";", ";font-size:", ";", " ", " ", " ", " ", ""], pxToRem(STATUS_SIZE), pxToRem(STATUS_SIZE), pxToRem(STATUS_SIZE), pxToRem(15), COLORS.background1, COLORS.line1, TYPOGRAPHY.fontStyles.regular, pxToRem(14), function (_ref) {
  var success = _ref.success;
  return success && css(["background-color:", ";border-color:", ";"], COLORS.valid, COLORS.valid);
}, function (_ref2) {
  var valid = _ref2.valid;
  return valid && css(["background-color:", ";border-color:", ";"], COLORS.primary1, COLORS.primary1);
}, function (_ref3) {
  var error = _ref3.error;
  return error && css(["color:", ";border-color:", ";"], COLORS.error, COLORS.error3);
}, function (_ref4) {
  var waiting = _ref4.waiting;
  return waiting && css(["color:", ";border-color:", ";"], COLORS.primary1, COLORS.primary4);
}, function (_ref5) {
  var disabled = _ref5.disabled;
  return disabled && css(["color:", ";border-color:", ";background-color:", ";"], COLORS.background1, COLORS.line2, COLORS.line2);
});
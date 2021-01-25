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
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { CheckedIcon } from '../../../../components/icons/checked-icon';
import { WarningIcon } from '../../../../components/icons/warning-icon';
import { WaitingIcon } from '../../../../components/icons/waiting-icon';
import { DotIcon } from '../../../../components/icons/dot-icon';
import { LockIcon } from '../../../../components/icons/lock-icon';
import { ScreenConfig } from '../../../../constants/screen-config';
import classNames from 'classnames';
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
          disabled = _this$props.disabled,
          variant = _this$props.variant;
      if (success) return /*#__PURE__*/React.createElement(CheckedIcon, {
        width: "10",
        title: null
      });
      if (error) return /*#__PURE__*/React.createElement(WarningIcon, {
        color: COLORS.error,
        title: null
      });
      if (waiting && variant === 'andromeda') return /*#__PURE__*/React.createElement(WaitingIcon, {
        height: "4",
        color: COLORS.primary1,
        title: null
      });
      if (disabled && variant === 'andromeda') return /*#__PURE__*/React.createElement(LockIcon, {
        width: "10",
        color: COLORS.background1,
        title: null
      });

      if (valid && variant === 'orion') {
        return /*#__PURE__*/React.createElement(DotIcon, {
          width: "6",
          color: COLORS.primary1,
          title: null
        });
      } else if (variant === 'andromeda') {
        return /*#__PURE__*/React.createElement(CheckedIcon, {
          width: "10",
          color: COLORS.background1,
          title: null
        });
      }

      return null;
    };

    return _this;
  }

  _createClass(Status, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          valid = _this$props2.valid,
          success = _this$props2.success,
          error = _this$props2.error,
          waiting = _this$props2.waiting,
          disabled = _this$props2.disabled,
          bridge = _this$props2.bridge,
          variant = _this$props2.variant,
          other = _objectWithoutProperties(_this$props2, ["children", "valid", "success", "error", "waiting", "disabled", "bridge", "variant"]);

      return /*#__PURE__*/React.createElement(StyledContainerStatus, {
        className: classNames('k-Steppers--VerticalStepper__statusContainer', "k-Steppers--VerticalStepper__statusContainer--".concat(variant))
      }, /*#__PURE__*/React.createElement("span", _extends({}, other, {
        className: classNames('k-Steppers--VerticalStepper__status', "k-Steppers--VerticalStepper__status--".concat(variant), {
          'k-Steppers--VerticalStepper__status--valid': valid,
          'k-Steppers--VerticalStepper__status--success': success,
          'k-Steppers--VerticalStepper__status--error': error,
          'k-Steppers--VerticalStepper__status--waiting': waiting,
          'k-Steppers--VerticalStepper__status--disabled': disabled,
          'k-Steppers--VerticalStepper__status--bridge': bridge
        })
      }), this.iconByStatus() || children));
    }
  }]);

  return Status;
}(Component);
var STATUS_SIZE = 30;
var MOBILE_STATUS_SIZE = 24;
var INACTIVE_STATUS_SIZE = 16;
var MOBILE_INACTIVE_STATUS_SIZE = 12;
var StyledContainerStatus = styled.div.withConfig({
  displayName: "status__StyledContainerStatus",
  componentId: "sc-17oq9bs-0"
})(["&.k-Steppers--VerticalStepper__statusContainer--orion{border-width:", ";border-style:solid;border-color:", ";@media (min-width:", "px){border-width:", ";}}.k-Steppers--VerticalStepper__status{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:", ";box-sizing:border-box;margin-right:", ";background-color:", ";border:", " solid ", ";", ";font-size:", ";&.k-Steppers--VerticalStepper__status--success{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--valid{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--error{color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--waiting{color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--disabled{color:", ";border-color:", ";background-color:", ";}&.k-Steppers--VerticalStepper__status--orion{box-sizing:border-box;width:100%;border:", " solid ", ";z-index:1;padding:", ";width:", ";height:", ";border-radius:", ";@media (min-width:", "px){width:", ";height:", ";border-radius:", ";margin-right:", ";}&.k-Steppers--VerticalStepper__status--success{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--valid{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--waiting{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--error{color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--disabled{background-color:", ";border-color:", ";width:", ";height:", ";border-radius:", ";margin-left:", ";margin-right:", ";@media (min-width:", "px){width:", ";height:", ";border-radius:", ";margin-right:", ";}}&.k-Steppers--VerticalStepper__status--bridge{height:", ";position:relative;border:0;&::before{width:", ";content:'';position:absolute;height:100%;border-left:", " dotted ", ";margin-left:", ";}}}}"], pxToRem(4), COLORS.background1, ScreenConfig.S.min, pxToRem(5), pxToRem(STATUS_SIZE), pxToRem(STATUS_SIZE), pxToRem(STATUS_SIZE), pxToRem(11), COLORS.background1, pxToRem(2), COLORS.line1, TYPOGRAPHY.fontStyles.regular, pxToRem(14), COLORS.valid, COLORS.valid, COLORS.primary1, COLORS.primary1, COLORS.error, COLORS.error3, COLORS.primary1, COLORS.primary4, COLORS.background1, COLORS.line2, COLORS.line2, pxToRem(3), COLORS.background1, pxToRem(3), pxToRem(MOBILE_STATUS_SIZE), pxToRem(MOBILE_STATUS_SIZE), pxToRem(MOBILE_STATUS_SIZE), ScreenConfig.S.min, pxToRem(STATUS_SIZE), pxToRem(STATUS_SIZE), pxToRem(STATUS_SIZE), pxToRem(15), COLORS.primary1, COLORS.primary1, COLORS.background1, COLORS.primary1, COLORS.background1, COLORS.line1, COLORS.error, COLORS.error, COLORS.background1, COLORS.line1, pxToRem(MOBILE_INACTIVE_STATUS_SIZE), pxToRem(MOBILE_INACTIVE_STATUS_SIZE), pxToRem(MOBILE_INACTIVE_STATUS_SIZE), pxToRem(7), pxToRem(15), ScreenConfig.S.min, pxToRem(INACTIVE_STATUS_SIZE), pxToRem(INACTIVE_STATUS_SIZE), pxToRem(INACTIVE_STATUS_SIZE), pxToRem(20), pxToRem(21), pxToRem(2), pxToRem(3), COLORS.line1, pxToRem(3));
Status.propTypes = {
  valid: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  waiting: PropTypes.bool,
  disabled: PropTypes.bool,
  bridge: PropTypes.bool,
  variant: PropTypes.oneOf(['andromeda', 'orion'])
};
Status.defaultProps = {
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false,
  bridge: false,
  variant: 'andromeda'
};
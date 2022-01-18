import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
var _excluded = ["children", "valid", "success", "error", "waiting", "disabled", "bridge"];
import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../../helpers/utils/typography';
import COLORS from '../../../../constants/colors-config';
import TYPOGRAPHY from '../../../../constants/typography-config';
import { CheckedIcon } from '../../../../components/graphics/icons/checked-icon';
import { WarningIcon } from '../../../../components/graphics/icons/warning-icon';
import { DotIcon } from '../../../../components/graphics/icons/dot-icon';
import { ScreenConfig } from '../../../../constants/screen-config';
import classNames from 'classnames';
export var Status = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Status, _Component);

  function Status() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.iconByStatus = function () {
      var _this$props = _this.props,
          valid = _this$props.valid,
          success = _this$props.success,
          error = _this$props.error;
      if (success) return /*#__PURE__*/React.createElement(CheckedIcon, {
        width: "10",
        title: null
      });
      if (error) return /*#__PURE__*/React.createElement(WarningIcon, {
        color: COLORS.error,
        title: null
      });
      if (valid) return /*#__PURE__*/React.createElement(DotIcon, {
        width: "6",
        color: COLORS.primary1,
        title: null
      });
      return null;
    };

    return _this;
  }

  var _proto = Status.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        valid = _this$props2.valid,
        success = _this$props2.success,
        error = _this$props2.error,
        waiting = _this$props2.waiting,
        disabled = _this$props2.disabled,
        bridge = _this$props2.bridge,
        other = _objectWithoutPropertiesLoose(_this$props2, _excluded);

    return /*#__PURE__*/React.createElement(StyledContainerStatus, {
      className: classNames('k-Steppers--VerticalStepper__statusContainer')
    }, /*#__PURE__*/React.createElement("span", _extends({}, other, {
      className: classNames('k-Steppers--VerticalStepper__status', {
        'k-Steppers--VerticalStepper__status--valid': valid,
        'k-Steppers--VerticalStepper__status--success': success,
        'k-Steppers--VerticalStepper__status--error': error,
        'k-Steppers--VerticalStepper__status--waiting': waiting,
        'k-Steppers--VerticalStepper__status--disabled': disabled,
        'k-Steppers--VerticalStepper__status--bridge': bridge
      })
    }), this.iconByStatus() || children));
  };

  return Status;
}(Component);
var STATUS_SIZE = 30;
var MOBILE_STATUS_SIZE = 24;
var INACTIVE_STATUS_SIZE = 16;
var MOBILE_INACTIVE_STATUS_SIZE = 12;
var StyledContainerStatus = styled.div.withConfig({
  displayName: "status__StyledContainerStatus",
  componentId: "sc-trpumn-0"
})(["border-width:", ";border-style:solid;border-color:", ";@media (min-width:", "px){border-width:", ";}.k-Steppers--VerticalStepper__status{flex-shrink:0;display:flex;align-items:center;justify-content:center;box-sizing:border-box;margin-right:", ";z-index:1;padding:", ";width:", ";height:", ";border:", " solid ", ";border-radius:var(--border-radius-rounded);background-color:", ";", ";font-size:", ";@media (min-width:", "px){width:", ";height:", ";border-radius:var(--border-radius-rounded);margin-right:", ";}&.k-Steppers--VerticalStepper__status--success{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--valid{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--error{color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--waiting{background-color:", ";border-color:", ";}&.k-Steppers--VerticalStepper__status--disabled{background-color:", ";border-color:", ";border-width:", ";width:", ";height:", ";border-radius:var(--border-radius-rounded);margin-left:", ";margin-right:", ";@media (min-width:", "px){width:", ";height:", ";border-radius:var(--border-radius-rounded);margin-right:", ";border-width:", ";}}&.k-Steppers--VerticalStepper__status--bridge{height:", ";position:relative;border:0;&::before{width:", ";content:'';position:absolute;height:100%;border-left:", " dotted ", ";margin-left:", ";}}}"], pxToRem(4), COLORS.background1, ScreenConfig.S.min, pxToRem(5), pxToRem(11), pxToRem(3), pxToRem(MOBILE_STATUS_SIZE), pxToRem(MOBILE_STATUS_SIZE), pxToRem(3), COLORS.background1, COLORS.background1, TYPOGRAPHY.fontStyles.regular, pxToRem(14), ScreenConfig.S.min, pxToRem(STATUS_SIZE), pxToRem(STATUS_SIZE), pxToRem(15), COLORS.primary1, COLORS.primary1, COLORS.background1, COLORS.primary1, COLORS.error, COLORS.error, COLORS.background1, COLORS.line1, COLORS.background1, COLORS.line1, pxToRem(2), pxToRem(MOBILE_INACTIVE_STATUS_SIZE), pxToRem(MOBILE_INACTIVE_STATUS_SIZE), pxToRem(7), pxToRem(15), ScreenConfig.S.min, pxToRem(INACTIVE_STATUS_SIZE), pxToRem(INACTIVE_STATUS_SIZE), pxToRem(20), pxToRem(3), pxToRem(21), pxToRem(2), pxToRem(3), COLORS.line1, pxToRem(3));
Status.propTypes = {
  valid: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  waiting: PropTypes.bool,
  disabled: PropTypes.bool,
  bridge: PropTypes.bool
};
Status.defaultProps = {
  valid: false,
  success: false,
  error: false,
  waiting: false,
  disabled: false,
  bridge: false
};
import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { TextInput } from '../../../components/form/text-input';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { VisuallyHidden } from '../../accessibility/visually-hidden';
var StyledTextInputWithIcon = styled.div.withConfig({
  displayName: "text-input-with-icon__StyledTextInputWithIcon",
  componentId: "rvt8kr-0"
})(["display:flex;position:relative;"]);
var StyledIcon = styled(function (_ref) {
  var disabled = _ref.disabled,
      others = _objectWithoutProperties(_ref, ["disabled"]);

  return /*#__PURE__*/React.createElement("span", others);
}).withConfig({
  displayName: "text-input-with-icon__StyledIcon",
  componentId: "rvt8kr-1"
})(["display:flex;position:absolute;align-self:center;padding:0 ", ";z-index:1;left:0;", ""], pxToRem(18), function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && css(["& > svg [stroke]:not([stroke='none']){stroke:", ";}& > svg [fill]:not([fill='none']){fill:", ";}"], COLORS.font2, COLORS.font2);
});
export var TextInputWithIcon = /*#__PURE__*/function (_PureComponent) {
  _inherits(TextInputWithIcon, _PureComponent);

  var _super = _createSuper(TextInputWithIcon);

  function TextInputWithIcon() {
    _classCallCheck(this, TextInputWithIcon);

    return _super.apply(this, arguments);
  }

  _createClass(TextInputWithIcon, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          disabled = _this$props.disabled,
          icon = _this$props.icon,
          accessibilityLabel = _this$props.accessibilityLabel,
          others = _objectWithoutProperties(_this$props, ["disabled", "icon", "accessibilityLabel"]);

      return /*#__PURE__*/React.createElement(StyledTextInputWithIcon, null, accessibilityLabel && /*#__PURE__*/React.createElement(VisuallyHidden, null, accessibilityLabel), /*#__PURE__*/React.createElement(TextInput, _extends({}, others, {
        style: _extends({
          paddingLeft: "".concat(pxToRem(50))
        }, others.style),
        disabled: disabled
      })), /*#__PURE__*/React.createElement(StyledIcon, {
        "aria-hidden": "true",
        disabled: disabled
      }, icon));
    }
  }]);

  return TextInputWithIcon;
}(PureComponent);
TextInputWithIcon.propTypes = {
  disabled: PropTypes.bool,
  accessibilityLabel: PropTypes.string,
  icon: PropTypes.node.isRequired
};
TextInputWithIcon.defaultProps = {
  accessibilityLabel: '',
  disabled: false
};
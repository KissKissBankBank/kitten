import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
import { TextInput } from '../../../components/form/text-input';
import PropTypes from 'prop-types';
import COLORS from '../../../constants/colors-config';
import { VisuallyHidden } from '../../accessibility/visually-hidden';
import classNames from 'classnames';
var StyledTextInputWithIcon = styled.div.withConfig({
  displayName: "text-input-with-icon__StyledTextInputWithIcon",
  componentId: "rvt8kr-0"
})(["position:relative;.k-Form-TextInputWithIcon__input{padding-left:", ";}.k-Form-TextInputWithIcon__icon{display:flex;position:absolute;align-items:center;justify-content:center;z-index:1;left:0;top:0;width:", ";height:100%;&.k-Form-TextInputWithIcon__icon--disabled > svg{&[stroke]:not([stroke='none']),& [stroke]:not([stroke='none']){stroke:", ";}&[fill]:not([fill='none']),& [fill]:not([fill='none']){fill:", ";}}}"], pxToRem(50), pxToRem(50), COLORS.font2, COLORS.font2);
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

      return /*#__PURE__*/React.createElement(StyledTextInputWithIcon, {
        className: "k-Form-TextInputWithIcon"
      }, accessibilityLabel && /*#__PURE__*/React.createElement(VisuallyHidden, null, accessibilityLabel), /*#__PURE__*/React.createElement(TextInput, _extends({}, others, {
        className: classNames('k-Form-TextInputWithIcon__input', others.className),
        disabled: disabled
      })), /*#__PURE__*/React.createElement("span", {
        "aria-hidden": "true",
        className: classNames('k-Form-TextInputWithIcon__icon', {
          'k-Form-TextInputWithIcon__icon--disabled': disabled
        })
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
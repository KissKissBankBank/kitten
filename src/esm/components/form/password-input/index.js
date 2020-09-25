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
import { TextInput } from '../../../components/form/text-input';
import { PasswordIcon } from '../../../components/icons/password-icon';
import COLORS from '../../../constants/colors-config';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledPasswordInput = styled.div.withConfig({
  displayName: "password-input__StyledPasswordInput",
  componentId: "sc-1futz46-0"
})(["position:relative;display:flex;"]);
var StyledTextInput = styled(TextInput).withConfig({
  displayName: "password-input__StyledTextInput",
  componentId: "sc-1futz46-1"
})(["padding-right:", ";"], pxToRem(40));
var StyledIcon = styled.span.withConfig({
  displayName: "password-input__StyledIcon",
  componentId: "sc-1futz46-2"
})(["display:flex;position:absolute;z-index:1;padding:0 ", ";right:0;top:0;bottom:0;cursor:pointer;&[aria-pressed='true']{svg{fill:", ";transition:all 0.2s;}}"], pxToRem(11), COLORS.primary1);
export var PasswordInput = /*#__PURE__*/function (_PureComponent) {
  _inherits(PasswordInput, _PureComponent);

  var _super = _createSuper(PasswordInput);

  function PasswordInput(props) {
    var _this;

    _classCallCheck(this, PasswordInput);

    _this = _super.call(this, props);

    _this.handleClick = function () {
      _this.setState({
        isHidden: !_this.state.isHidden
      });
    };

    _this.handleKeyDown = function (event) {
      var enterKeyCode = 13;

      if (event.keyCode == enterKeyCode) {
        _this.handleClick();
      }
    };

    _this.state = {
      isHidden: true
    };
    return _this;
  }

  _createClass(PasswordInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          iconLabel = _this$props.iconLabel,
          hiddenIconLabel = _this$props.hiddenIconLabel,
          others = _objectWithoutProperties(_this$props, ["name", "iconLabel", "hiddenIconLabel"]);

      var type = this.state.isHidden ? 'password' : 'text';
      var active = !this.state.isHidden;
      var iconTitle = this.state.isHidden ? iconLabel : hiddenIconLabel;
      return /*#__PURE__*/React.createElement(StyledPasswordInput, null, /*#__PURE__*/React.createElement(StyledTextInput, _extends({}, others, {
        name: name,
        type: type
      })), /*#__PURE__*/React.createElement(StyledIcon, {
        title: iconTitle,
        onClick: this.handleClick,
        onKeyDown: this.handleKeyDown,
        "aria-pressed": active,
        tabIndex: "0"
      }, /*#__PURE__*/React.createElement(PasswordIcon, null)));
    }
  }]);

  return PasswordInput;
}(PureComponent);
PasswordInput.propTypes = {
  iconLabel: PropTypes.string.isRequired,
  hiddenIconLabel: PropTypes.string.isRequired,
  name: PropTypes.string
};
PasswordInput.defaultProps = {
  name: 'password'
};
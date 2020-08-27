import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Text } from '../../../../components/typography/text';
import { Button } from '../../../../components/buttons/button/button';
import { GarbageIcon } from '../../../../components/icons/garbage-icon';
var borderWidth = pxToRem(2);
var borderColor = COLORS.line1;
var StyledContainerHeader = styled.div.withConfig({
  displayName: "header__StyledContainerHeader",
  componentId: "sc-154pglo-0"
})(["border-bottom-width:", ";border-bottom-style:solid;border-bottom-color:", ";padding:", ";background-color:", ";display:flex;"], borderWidth, borderColor, pxToRem(15), COLORS.background3);
var StyledRewardAmount = styled(Text).withConfig({
  displayName: "header__StyledRewardAmount",
  componentId: "sc-154pglo-1"
})(["flex:auto;display:flex;justify-content:center;align-items:center;"]);
var StyledGarbageButton = styled(Button).withConfig({
  displayName: "header__StyledGarbageButton",
  componentId: "sc-154pglo-2"
})(["align-item:flex-end;"]);
export var Header = /*#__PURE__*/function (_PureComponent) {
  _inherits(Header, _PureComponent);

  var _super = _createSuper(Header);

  function Header() {
    _classCallCheck(this, Header);

    return _super.apply(this, arguments);
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          onClick = _this$props.onClick,
          garbageButton = _this$props.garbageButton;
      return /*#__PURE__*/React.createElement(StyledContainerHeader, null, /*#__PURE__*/React.createElement(StyledRewardAmount, null, children), garbageButton && /*#__PURE__*/React.createElement(StyledGarbageButton, {
        onClick: onClick,
        type: "button",
        "aria-label": "Garbage Button",
        modifier: "beryllium",
        tiny: true,
        icon: true
      }, /*#__PURE__*/React.createElement(GarbageIcon, null)));
    }
  }]);

  return Header;
}(PureComponent);
Header.propTypes = {
  garbageButton: PropTypes.bool
};
Header.defaultProps = {
  garbageButton: true
};
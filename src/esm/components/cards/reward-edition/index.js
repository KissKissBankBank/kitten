import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { Header } from './components/header';
import { Content } from './components/content';
import { Footer } from './components/footer';
var borderWidth = pxToRem(2);
var borderColor = COLORS.line1;
var StyledContainer = styled.div.withConfig({
  displayName: "reward-edition__StyledContainer",
  componentId: "hyhbiq-0"
})(["width:100%;height:100%;border-width:", ";border-style:solid;border-color:", ";"], borderWidth, borderColor);
export var RewardEdition = /*#__PURE__*/function (_PureComponent) {
  _inherits(RewardEdition, _PureComponent);

  var _super = _createSuper(RewardEdition);

  function RewardEdition() {
    _classCallCheck(this, RewardEdition);

    return _super.apply(this, arguments);
  }

  _createClass(RewardEdition, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(StyledContainer, null, this.props.children);
    }
  }]);

  return RewardEdition;
}(PureComponent);
RewardEdition.Header = Header;
RewardEdition.Content = Content;
RewardEdition.Footer = Footer;
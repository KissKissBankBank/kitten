import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import COLORS from '../../../../constants/colors-config';
import { LINK_CLASSNAME } from '../index';
export var Link = /*#__PURE__*/function (_Component) {
  _inherits(Link, _Component);

  var _super = _createSuper(Link);

  function Link() {
    _classCallCheck(this, Link);

    return _super.apply(this, arguments);
  }

  _createClass(Link, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(StyledParagraph, null, /*#__PURE__*/React.createElement(StyledLink, _extends({}, this.props, {
        className: classNames(LINK_CLASSNAME, this.props.className)
      })));
    }
  }]);

  return Link;
}(Component);
var StyledParagraph = styled.p.withConfig({
  displayName: "link__StyledParagraph",
  componentId: "sc-11s9i6i-0"
})(["margin:0;padding:0;line-height:1;"]);
var StyledLink = styled.span.withConfig({
  displayName: "link__StyledLink",
  componentId: "sc-11s9i6i-1"
})(["", ";font-size:", ";line-height:normal;color:", ";text-decoration:none;", ""], TYPOGRAPHY.fontStyles.regular, pxToRem(12), COLORS.primary1, function (_ref) {
  var as = _ref.as;
  return as === 'a' && css(["transition:color 0.4s;:hover,:focus,:active{color:", ";}"], COLORS.primary3);
});
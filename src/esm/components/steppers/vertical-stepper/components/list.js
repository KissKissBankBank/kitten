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
import TYPOGRAPHY from '../../../../constants/typography-config';
import COLORS from '../../../../constants/colors-config';
var StyledList = styled.ul.withConfig({
  displayName: "list__StyledList",
  componentId: "sc-1m61gol-0"
})(["margin:", " 0 ", ";padding:0;", ";font-size:", ";line-height:normal;", ""], pxToRem(5), pxToRem(10), TYPOGRAPHY.fontStyles.light, pxToRem(12), function (_ref) {
  var error = _ref.error;
  return error && css(["", ";color:", ";"], TYPOGRAPHY.fontStyles.regular, COLORS.error);
});
var StyledItem = styled.li.withConfig({
  displayName: "list__StyledItem",
  componentId: "sc-1m61gol-1"
})(["display:flex;align-items:baseline;margin:0 0 ", ";padding:0;list-style:none;:before{padding-right:", ";content:'\u25CF';font-size:", ";}"], pxToRem(2), pxToRem(10), pxToRem(8));
export var List = /*#__PURE__*/function (_Component) {
  _inherits(List, _Component);

  var _super = _createSuper(List);

  function List() {
    _classCallCheck(this, List);

    return _super.apply(this, arguments);
  }

  _createClass(List, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(StyledList, this.props);
    }
  }]);

  return List;
}(Component);
List.Item = StyledItem;
List.propTypes = {
  error: PropTypes.bool
};
List.defaultProps = {
  error: false
};
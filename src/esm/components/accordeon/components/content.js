import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { Context } from './context';
import { Marger } from '../../layout/marger';
var ContentStyled = styled.div.withConfig({
  displayName: "content__ContentStyled",
  componentId: "sc-5kfom2-0"
})(["box-sizing:border-box;visibility:visible;height:auto;background-color:", ";border:", " solid ", ";border-top:0;border-bottom-left-radius:", ";border-bottom-right-radius:", ";opacity:1;padding:", " ", ";", " &[aria-hidden='true']{visibility:hidden;opacity:0;max-height:0;}@media (prefers-reduced-motion:reduce){transition:none;}"], COLORS.background3, pxToRem(2), COLORS.line1, pxToRem(3), pxToRem(3), pxToRem(0.1), pxToRem(30), function (_ref) {
  var isAnimated = _ref.isAnimated,
      maxHeight = _ref.maxHeight;
  return isAnimated ? css(["overflow:hidden;max-height:", ";transition:visibility 0s ease,max-height 0.4s ease,opacity 0.4s ease;transition-delay:0s,0s,0s;&[aria-hidden='true']{transition-delay:0.4s,0s,0s;}"], pxToRem(maxHeight)) : css(["max-height:unset;overflow:visible;"]);
});
export var Content = /*#__PURE__*/function (_Component) {
  _inherits(Content, _Component);

  var _super = _createSuper(Content);

  function Content(props) {
    var _this;

    _classCallCheck(this, Content);

    _this = _super.call(this, props);
    _this.state = {
      maxHeight: 0
    };
    return _this;
  }

  _createClass(Content, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.div) {
        this.setState({
          maxHeight: this.div.scrollHeight || 0
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.div && this.state.maxHeight !== this.div.scrollHeight) {
        this.setState({
          maxHeight: this.div.scrollHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children;
      var maxHeight = this.state.maxHeight;
      return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref2) {
        var selectedItem = _ref2.selectedItem,
            isAnimated = _ref2.isAnimated,
            componentId = _ref2.componentId;
        return /*#__PURE__*/React.createElement(ContentStyled, {
          "aria-hidden": selectedItem !== id,
          ref: function ref(contentDiv) {
            return _this2.div = contentDiv;
          },
          maxHeight: maxHeight,
          isAnimated: isAnimated,
          id: "".concat(componentId, "-content").concat(id),
          "aria-labelledby": "".concat(componentId, "-header").concat(id)
        }, /*#__PURE__*/React.createElement(Marger, {
          top: "3",
          bottom: "3"
        }, children));
      });
    }
  }]);

  return Content;
}(Component);
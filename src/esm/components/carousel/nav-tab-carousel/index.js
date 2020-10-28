import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled from 'styled-components';
import { Prev } from './components/prev';
import { Next } from './components/next';
import { Pagination } from './components/pagination';
import COLORS from './../../../constants/colors-config';
import { getReactElementsByType } from './../../../helpers/react/react-elements';
import { pxToRem } from './../../../helpers/utils/typography';
import { LeftEmptyContainer, RightEmptyContainer } from './components/styled-components';
var NavTabCarouselStyles = styled.div.withConfig({
  displayName: "nav-tab-carousel__NavTabCarouselStyles",
  componentId: "sc-1fg6mhx-0"
})(["box-sizing:border-box;display:flex;width:100%;justify-content:space-between;align-items:center;background-color:", ";padding:", " ", ";min-width:", ";"], COLORS.font1, pxToRem(32), pxToRem(40), pxToRem(320));
export var NavTabCarousel = /*#__PURE__*/function (_Component) {
  _inherits(NavTabCarousel, _Component);

  var _super = _createSuper(NavTabCarousel);

  function NavTabCarousel() {
    _classCallCheck(this, NavTabCarousel);

    return _super.apply(this, arguments);
  }

  _createClass(NavTabCarousel, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var prev = getReactElementsByType({
        children: children,
        type: NavTabCarousel.Prev
      })[0];
      var next = getReactElementsByType({
        children: children,
        type: NavTabCarousel.Next
      })[0];
      var pagination = getReactElementsByType({
        children: children,
        type: NavTabCarousel.Pagination
      })[0];
      return /*#__PURE__*/React.createElement(NavTabCarouselStyles, null, prev || /*#__PURE__*/React.createElement(LeftEmptyContainer, null), pagination, next || /*#__PURE__*/React.createElement(RightEmptyContainer, null));
    }
  }]);

  return NavTabCarousel;
}(Component);
NavTabCarousel.Prev = Prev;
NavTabCarousel.Next = Next;
NavTabCarousel.Pagination = Pagination;
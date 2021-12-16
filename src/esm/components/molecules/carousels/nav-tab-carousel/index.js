import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { Component } from 'react';
import styled from 'styled-components';
import { Prev } from './components/prev';
import { Next } from './components/next';
import { Pagination } from './components/pagination';
import COLORS from '../../../../constants/colors-config';
import { getReactElementsByType } from '../../../../helpers/react/react-elements';
import { pxToRem } from '../../../../helpers/utils/typography';
import { LeftEmptyContainer, RightEmptyContainer } from './components/styled-components';
var NavTabCarouselStyles = styled.div.withConfig({
  displayName: "nav-tab-carousel__NavTabCarouselStyles",
  componentId: "sc-5lfe8g-0"
})(["box-sizing:border-box;display:flex;width:100%;justify-content:space-between;align-items:center;background-color:", ";padding:", " ", ";min-width:", ";"], COLORS.font1, pxToRem(32), pxToRem(40), pxToRem(320));
export var NavTabCarousel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(NavTabCarousel, _Component);

  function NavTabCarousel() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = NavTabCarousel.prototype;

  _proto.render = function render() {
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
  };

  return NavTabCarousel;
}(Component);
NavTabCarousel.Prev = Prev;
NavTabCarousel.Next = Next;
NavTabCarousel.Pagination = Pagination;
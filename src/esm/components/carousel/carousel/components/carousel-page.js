import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { createRangeFromZeroTo } from '../../../../helpers/utils/range';
import classNames from 'classnames';
var StyledPage = styled.div.withConfig({
  displayName: "carousel-page__StyledPage",
  componentId: "sc-12ynwqa-0"
})(["display:flex;flex-direction:row;"]);
var StyledItem = styled.div.withConfig({
  displayName: "carousel-page__StyledItem",
  componentId: "sc-12ynwqa-1"
})(["flex-grow:1;flex-shrink:1;", " ", ""], function (_ref) {
  var itemMinWidth = _ref.itemMinWidth;
  return css(["min-width:", "px;flex-basis:", "px;"], itemMinWidth, itemMinWidth);
}, function (_ref2) {
  var index = _ref2.index,
      itemMarginBetween = _ref2.itemMarginBetween;
  return index && css(["margin-left:", "px;"], itemMarginBetween);
});
export var CarouselPage = /*#__PURE__*/function (_Component) {
  _inherits(CarouselPage, _Component);

  var _super = _createSuper(CarouselPage);

  function CarouselPage() {
    _classCallCheck(this, CarouselPage);

    return _super.apply(this, arguments);
  }

  _createClass(CarouselPage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          legacyMode = _this$props.legacyMode,
          data = _this$props.data,
          numColumns = _this$props.numColumns,
          itemMinWidth = _this$props.itemMinWidth,
          itemMarginBetween = _this$props.itemMarginBetween,
          renderItem = _this$props.renderItem,
          isActivePage = _this$props.isActivePage,
          hasPageBeenViewed = _this$props.hasPageBeenViewed,
          exportVisibilityProps = _this$props.exportVisibilityProps;
      var rangeCard = createRangeFromZeroTo(numColumns);
      return /*#__PURE__*/React.createElement(StyledPage, {
        className: classNames('k-Carousel__page', {
          'k-Carousel__page--isActivePage': isActivePage,
          'k-Carousel__page--hasBeenViewed': hasPageBeenViewed
        })
      }, rangeCard.map(function (index) {
        return /*#__PURE__*/React.createElement(StyledItem, {
          key: index,
          index: index,
          itemMinWidth: itemMinWidth,
          itemMarginBetween: itemMarginBetween,
          className: "k-Carousel__page__item"
        }, legacyMode ? data[index] && renderItem({
          item: data[index]
        }) : exportVisibilityProps ? renderItem[index] && React.cloneElement(renderItem[index], {
          hasPageBeenViewed: hasPageBeenViewed
        }) : renderItem[index]);
      }));
    }
  }]);

  return CarouselPage;
}(Component);
import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
var _excluded = ["children", "containerStyle", "activePaginationColor", "paginationColor", "paginationAlign", "paginationStyle", "bulletStyle"];
import "core-js/modules/es.array.includes.js";
import "core-js/modules/es.array.map.js";
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { createRangeFromZeroTo } from '../../../../helpers/utils/range';
import { pxToRem } from '../../../../helpers/utils/typography';
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden';
var StyledContainer = styled.div.withConfig({
  displayName: "simple-carousel__StyledContainer",
  componentId: "sc-1bgum05-0"
})(["", " display:-ms-grid;display:grid;grid-gap:0;gap:0;> div{grid-column:1;grid-row:1;visibility:visible;opacity:1;transition:all 0.8s ease-in-out;&[aria-hidden='true']{visibility:hidden;opacity:0;pointer-events:none;}}button,a{&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}}"], function (_ref) {
  var addBottomMargin = _ref.addBottomMargin;
  return addBottomMargin && css(["margin-bottom:", ";"], pxToRem(40));
}, COLORS.primary3, pxToRem(2), pxToRem(2), COLORS.primary3);
var StyledPagination = styled.div.withConfig({
  displayName: "simple-carousel__StyledPagination",
  componentId: "sc-1bgum05-1"
})(["justify-content:", ";margin:", " 0;padding:0;display:flex;li{list-style-type:none;line-height:", ";}"], function (_ref2) {
  var paginationAlign = _ref2.paginationAlign;
  return paginationAlign;
}, pxToRem(40), pxToRem(6));
var StyledPaginationButton = styled.button.withConfig({
  displayName: "simple-carousel__StyledPaginationButton",
  componentId: "sc-1bgum05-2"
})(["margin-right:", ";width:", ";height:", ";border:0;padding:0;border-radius:0;appearance:none;cursor:pointer;transition:background 0.4s ease-in-out;background:", ";vertical-align:top;&:focus{outline:", " solid ", ";outline-offset:", ";}&:focus:not(:focus-visible){outline-color:transparent;}&:focus-visible{outline-color:", ";}&[aria-selected='true']{background:", ";}"], pxToRem(5), pxToRem(6), pxToRem(6), function (_ref3) {
  var paginationColor = _ref3.paginationColor;
  return paginationColor;
}, COLORS.primary4, pxToRem(2), pxToRem(2), COLORS.primary4, function (_ref4) {
  var activePaginationColor = _ref4.activePaginationColor;
  return activePaginationColor;
});
export var SimpleCarousel = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SimpleCarousel, _Component);

  function SimpleCarousel(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.showPagination = function () {
      return _this.state.totalPagesCount > 1;
    };

    _this.updateCurrentPageNumber = function (pageNumber) {
      _this.setState({
        currentPageNumber: pageNumber
      });
    };

    _this.handlePageClick = function (numPage) {
      return function () {
        _this.updateCurrentPageNumber(numPage);
      };
    };

    _this.handleKeyDown = function (event) {
      if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
        var _this$state = _this.state,
            currentPageNumber = _this$state.currentPageNumber,
            totalPagesCount = _this$state.totalPagesCount;

        var tabs = _this.paginationRef.current.querySelectorAll('button');

        tabs[currentPageNumber].setAttribute('tabindex', -1); // default: ArrowLeft

        var pageNumber = currentPageNumber - 1;

        if (pageNumber < 0) {
          pageNumber = totalPagesCount - 1;
        } // change in case of ArrowRight


        if (event.key === 'ArrowRight') {
          pageNumber = currentPageNumber + 1;

          if (pageNumber >= totalPagesCount) {
            pageNumber = 0;
          }
        }

        _this.updateCurrentPageNumber(pageNumber);

        tabs[pageNumber].setAttribute('tabindex', 0);
        tabs[pageNumber].focus();
      }
    };

    _this.paginationRef = /*#__PURE__*/createRef();
    _this.state = {
      currentPageNumber: 0,
      totalPagesCount: React.Children.toArray(props.children).length
    };
    return _this;
  }

  var _proto = SimpleCarousel.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        children = _this$props.children,
        containerStyle = _this$props.containerStyle,
        activePaginationColor = _this$props.activePaginationColor,
        paginationColor = _this$props.paginationColor,
        paginationAlign = _this$props.paginationAlign,
        paginationStyle = _this$props.paginationStyle,
        bulletStyle = _this$props.bulletStyle,
        others = _objectWithoutPropertiesLoose(_this$props, _excluded);

    var _this$state2 = this.state,
        totalPagesCount = _this$state2.totalPagesCount,
        currentPageNumber = _this$state2.currentPageNumber;
    var rangePage = createRangeFromZeroTo(totalPagesCount);
    var id = this.props.id ? this.props.id + '_' : '';
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledContainer, _extends({
      style: containerStyle,
      addBottomMargin: this.showPagination()
    }, others), React.Children.map(children, function (item, index) {
      return /*#__PURE__*/React.createElement("div", {
        key: item.key,
        "aria-hidden": index !== currentPageNumber,
        id: id + "carouselItem_" + index,
        "aria-labelledby": id + "carouselTab_" + index,
        role: "tabpanel"
      }, item);
    })), this.showPagination() && /*#__PURE__*/React.createElement(StyledPagination, {
      style: paginationStyle,
      paginationAlign: paginationAlign,
      role: "tablist",
      onKeyDown: this.handleKeyDown,
      ref: this.paginationRef
    }, rangePage.map(function (numPage) {
      return /*#__PURE__*/React.createElement(StyledPaginationButton, {
        key: numPage,
        id: id + "carouselTab_" + numPage,
        type: "button",
        "aria-controls": id + "carouselItem_" + numPage,
        role: "tab",
        "aria-selected": numPage === currentPageNumber,
        paginationColor: paginationColor,
        activePaginationColor: activePaginationColor,
        style: bulletStyle,
        onClick: _this2.handlePageClick(numPage)
      }, /*#__PURE__*/React.createElement(VisuallyHidden, null, "Page " + (numPage + 1)));
    })));
  };

  return SimpleCarousel;
}(Component);
SimpleCarousel.propTypes = {
  id: PropTypes.string,
  containerStyle: PropTypes.object,
  activePaginationColor: PropTypes.string,
  paginationColor: PropTypes.string,
  paginationAlign: PropTypes.oneOf(['start', 'center', 'space-between', 'space-around']),
  paginationStyle: PropTypes.object,
  bulletStyle: PropTypes.object
};
SimpleCarousel.defaultProps = {
  id: '',
  containerStyle: {},
  activePaginationColor: COLORS.primary1,
  paginationColor: COLORS.background1,
  paginationAlign: 'center',
  paginationStyle: {},
  bulletStyle: {}
};
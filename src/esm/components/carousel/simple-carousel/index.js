import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { createRangeFromZeroTo } from '../../../helpers/utils/range';
import { pxToRem } from '../../../helpers/utils/typography';
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden';
var StyledContainer = styled.div.withConfig({
  displayName: "simple-carousel__StyledContainer",
  componentId: "sc-3yj2mb-0"
})(["", " display:-ms-grid;display:grid;grid-gap:0;gap:0;> div{grid-column:1;grid-row:1;visibility:visible;opacity:1;transition:all 0.8s ease-in-out;&[aria-hidden='true']{visibility:hidden;opacity:0;pointer-events:none;}}"], function (_ref) {
  var addBottomMargin = _ref.addBottomMargin;
  return addBottomMargin && css(["margin-bottom:", ";"], pxToRem(40));
});
var StyledPagination = styled.div.withConfig({
  displayName: "simple-carousel__StyledPagination",
  componentId: "sc-3yj2mb-1"
})(["justify-content:", ";margin:", " 0;padding:0;display:flex;li{list-style-type:none;line-height:", ";}"], function (_ref2) {
  var paginationAlign = _ref2.paginationAlign;
  return paginationAlign;
}, pxToRem(40), pxToRem(6));
var StyledPaginationButton = styled.button.withConfig({
  displayName: "simple-carousel__StyledPaginationButton",
  componentId: "sc-3yj2mb-2"
})(["margin-right:", ";width:", ";height:", ";border:0;padding:0;border-radius:0;appearance:none;cursor:pointer;transition:background 0.4s ease-in-out;background:", ";vertical-align:top;&[aria-selected='true']{background:", ";}"], pxToRem(5), pxToRem(6), pxToRem(6), function (_ref3) {
  var paginationColor = _ref3.paginationColor;
  return paginationColor;
}, function (_ref4) {
  var activePaginationColor = _ref4.activePaginationColor;
  return activePaginationColor;
});
export var SimpleCarousel = /*#__PURE__*/function (_Component) {
  _inherits(SimpleCarousel, _Component);

  var _super = _createSuper(SimpleCarousel);

  function SimpleCarousel(props) {
    var _this;

    _classCallCheck(this, SimpleCarousel);

    _this = _super.call(this, props);

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

    _this.paginationRef = createRef();
    _this.state = {
      currentPageNumber: 0,
      totalPagesCount: React.Children.toArray(props.children).length
    };
    return _this;
  }

  _createClass(SimpleCarousel, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          containerStyle = _this$props.containerStyle,
          activePaginationColor = _this$props.activePaginationColor,
          paginationColor = _this$props.paginationColor,
          paginationAlign = _this$props.paginationAlign,
          paginationStyle = _this$props.paginationStyle,
          bulletStyle = _this$props.bulletStyle,
          others = _objectWithoutProperties(_this$props, ["children", "containerStyle", "activePaginationColor", "paginationColor", "paginationAlign", "paginationStyle", "bulletStyle"]);

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
          id: "".concat(id, "carouselItem_").concat(index),
          "aria-labelledby": "".concat(id, "carouselTab_").concat(index),
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
          id: "".concat(id, "carouselTab_").concat(numPage),
          type: "button",
          "aria-controls": "".concat(id, "carouselItem_").concat(numPage),
          role: "tab",
          "aria-selected": numPage === currentPageNumber,
          paginationColor: paginationColor,
          activePaginationColor: activePaginationColor,
          style: bulletStyle,
          onClick: _this2.handlePageClick(numPage)
        }, /*#__PURE__*/React.createElement(VisuallyHidden, null, "Page ".concat(numPage + 1)));
      })));
    }
  }]);

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
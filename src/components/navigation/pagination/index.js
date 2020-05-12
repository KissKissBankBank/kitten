"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pages = pages;
exports.Pagination = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../components/typography/text");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _screenConfig = require("../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _parser = require("../../../helpers/utils/parser");

var _mediaQueries = require("../../../hoc/media-queries");

var _typography = require("../../../helpers/utils/typography");

var _classnames = _interopRequireDefault(require("classnames"));

var StyledNav = _styledComponents.default.nav.withConfig({
  displayName: "pagination__StyledNav",
  componentId: "sc-19bydjm-0"
})([".Pagination__List{padding:0;display:inline-flex;}li{list-style:none;}.Pagination__ListItem{margin-right:0;@media (min-width:", "px){margin:", " ", ";}}.Pagination__ListItem__Points{text-align:center;align-self:center;width:", ";@media (min-width:", "px){margin:", " ", ";width:", ";}}.Pagination__ListItem__Points{text-align:center;align-self:center;width:", ";@media (min-width:", "px){margin:", " ", ";width:", ";}}.Pagination__ListItem__Arrow--direction-left{margin-right:", ";@media (min-width:", "px){margin-right:", ";}}.Pagination__ListItem__Arrow--direction-right{margin-left:", ";@media (min-width:", "px){margin-left:", ";}}.Pagination__Link{display:flex;justify-content:center;align-items:center;box-sizing:border-box;cursor:pointer;width:", ";height:", ";border-radius:0;border-width:0;border-style:solid;outline:none;color:", ";border-color:", ";background-color:", ";@media (min-width:", "px){width:", ";height:", ";border-width:", ";}&:hover,&:focus{color:", ";border-color:", ";background-color:", ";text-decoration:none;}&:active{color:", ";border-color:", ";background-color:", ";text-decoration:none;}&[aria-current='page']{cursor:auto;color:", ";border-color:", ";background-color:", ";&:hover,&:focus,&:active{color:", ";border-color:", ";background-color:", ";}}&[aria-disabled='true']{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;&:hover,&:focus,&:active{color:", ";border-color:", ";background-color:", ";}}}.Pagination__ArrowIcon{align-self:center;margin:0;padding:0;pointer-events:none;color:inherit;fill:currentColor;}&.Pagination--noMargin .Pagination__List{margin:0;}&.Pagination--isAligned-left .Pagination__List{display:flex;justify-content:flex-start;}&.Pagination--isAligned-center .Pagination__List{display:flex;justify-content:center;}&.Pagination--isAligned-right .Pagination__List{display:flex;justify-content:flex-end;}"], _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(40), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(40), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(30), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(30), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(22), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), _colorsConfig.default.font1, _colorsConfig.default.line1, _colorsConfig.default.background1, _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2), _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2); // Returns an array with the given bounds


var range = function range(start, end) {
  return Array(end - start + 1).fill().map(function (_, index) {
    return start + index;
  });
}; // Returns an array of size `availableSlots` with page number integers
// and breaks "…" (represented as nulls).


function pages(min, max, currentPage, availableSlots) {
  // 1, 2, 3
  if (max - min < availableSlots) {
    return range(min, max);
  } // 1, 2, 3, …, 42


  if (currentPage - min + 1 < availableSlots - 2) {
    return [].concat((0, _toConsumableArray2.default)(range(min, min - 1 + availableSlots - 2)), [null, max]);
  } // 1, …, 40, 41, 42


  if (max - currentPage < availableSlots - 2) {
    return [min, null].concat((0, _toConsumableArray2.default)(range(max + 1 - (availableSlots - 2), max)));
  } // 1, …, 21, …, 42


  var sides = Math.floor((availableSlots - 4) / 2);
  return [min, null].concat((0, _toConsumableArray2.default)(range(currentPage - sides, currentPage + sides)), [null, max]);
}

var PaginationBase = (0, _react.forwardRef)(function (_ref2, _ref) {
  var prevButtonLabel = _ref2.prevButtonLabel,
      nextButtonLabel = _ref2.nextButtonLabel,
      goToPageLabel = _ref2.goToPageLabel,
      goToPageHref = _ref2.goToPageHref,
      onPageClick = _ref2.onPageClick,
      currentPageLabel = _ref2.currentPageLabel,
      currentPage = _ref2.currentPage,
      totalPages = _ref2.totalPages,
      ariaLabelProp = _ref2['aria-label'],
      viewportIsMOrLess = _ref2.viewportIsMOrLess,
      margin = _ref2.margin,
      align = _ref2.align,
      className = _ref2.className;
  var size = viewportIsMOrLess ? 5 : 7;
  var pageNumbers = pages(1, totalPages, currentPage, size);

  var preventClickDefault = function preventClickDefault(e) {
    return e.preventDefault();
  };

  var pageClickHandler = function pageClickHandler(number) {
    return function (event) {
      return onPageClick(number, event);
    };
  };

  var renderPage = function renderPage(number, index) {
    if (!number) return renderSpacer(index);
    var isActive = number === currentPage;
    var tag = isActive ? 'span' : 'a';
    var href = isActive ? null : goToPageHref(number);
    var ariaLabel = isActive ? currentPageLabel(number) : goToPageLabel(number);
    return /*#__PURE__*/_react.default.createElement("li", {
      className: "Pagination__ListItem",
      key: "page-".concat(number)
    }, /*#__PURE__*/_react.default.createElement(_text.Text, {
      className: "Pagination__Link",
      tag: tag,
      href: href,
      key: "link-".concat(number),
      weight: "regular",
      decoration: "none",
      size: "tiny",
      isActive: isActive,
      "aria-current": isActive && 'page',
      "aria-label": ariaLabel,
      onClick: isActive ? null : pageClickHandler(number)
    }, number));
  };

  var renderSpacer = function renderSpacer(index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: "spacer-".concat(index),
      className: "Pagination__ListItem__Points",
      "aria-hidden": "true"
    }, '…');
  };

  var renderArrowButton = function renderArrowButton(direction) {
    var buttonLabel = direction == 'left' ? (0, _parser.parseHtml)(prevButtonLabel) : (0, _parser.parseHtml)(nextButtonLabel);
    var isDisabled = direction == 'left' ? currentPage == 1 : currentPage == totalPages;
    var number = direction == 'left' ? currentPage == 1 ? 1 : currentPage - 1 : currentPage == totalPages ? totalPages : currentPage + 1;
    return /*#__PURE__*/_react.default.createElement("li", {
      className: (0, _classnames.default)('Pagination__ListItem__Arrow', "Pagination__ListItem__Arrow--direction-".concat(direction))
    }, /*#__PURE__*/_react.default.createElement(_text.Text, {
      className: "Pagination__Link",
      tag: "a",
      href: goToPageHref(number),
      key: "link-".concat(direction),
      "aria-label": buttonLabel,
      "aria-disabled": isDisabled,
      title: buttonLabel,
      tabIndex: isDisabled ? -1 : null,
      onClick: isDisabled ? preventClickDefault : pageClickHandler(number)
    }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
      className: "Pagination__ArrowIcon",
      direction: direction,
      disabled: isDisabled,
      "aria-hidden": "true",
      version: "solid"
    })));
  };

  return /*#__PURE__*/_react.default.createElement(StyledNav, {
    role: "navigation",
    "aria-label": ariaLabelProp,
    className: (0, _classnames.default)('Pagination', className, "Pagination--isAligned-".concat(align), {
      'Pagination--noMargin': !margin
    })
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "Pagination__List"
  }, renderArrowButton('left'), pageNumbers.map(renderPage), renderArrowButton('right')));
});
PaginationBase.propTypes = {
  prevButtonLabel: _propTypes.default.string,
  nextButtonLabel: _propTypes.default.string,
  goToPageLabel: _propTypes.default.func,
  goToPageHref: _propTypes.default.func,
  onPageClick: _propTypes.default.func,
  totalPages: _propTypes.default.number,
  currentPage: _propTypes.default.number,
  currentPageLabel: _propTypes.default.func,
  'aria-label': _propTypes.default.string,
  margin: _propTypes.default.bool,
  align: _propTypes.default.oneOf([null, 'left', 'center', 'right'])
};
PaginationBase.defaultProps = {
  prevButtonLabel: 'Previous page',
  nextButtonLabel: 'Next page',
  goToPageLabel: function goToPageLabel(n) {
    return "Go to page ".concat(n);
  },
  goToPageHref: function goToPageHref(n) {
    return "#".concat(n);
  },
  onPageClick: function onPageClick() {},
  currentPageLabel: function currentPageLabel(n) {
    return "Page ".concat(n, ", this is the current page");
  },
  currentPage: 1,
  totalPages: 1,
  'aria-label': 'Pagination navigation',
  margin: true
};
var Pagination = (0, _mediaQueries.mediaQueries)(PaginationBase, {
  viewportIsMOrLess: true
});
exports.Pagination = Pagination;
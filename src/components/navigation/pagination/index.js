"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.Pagination = void 0;
exports.pages = pages;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _text = require("../../typography/text");

var _button = require("../../action/button");

var _arrowIcon = require("../../graphics/icons/arrow-icon");

var _screenConfig = require("../../../constants/screen-config");

var _parser = require("../../../helpers/utils/parser");

var _typography = require("../../../helpers/utils/typography");

var _useMediaQuery = require("../../../helpers/hooks/use-media-query");

var _mediaQueries = require("../../../helpers/utils/media-queries");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const StyledNav = _styledComponents.default.nav.withConfig({
  displayName: "pagination__StyledNav",
  componentId: "sc-19bydjm-0"
})([".k-Pagination__List{padding:0;display:flex;gap:", ";}.k-Pagination__ListItem{list-style:none;flex-shrink:0;}.k-Pagination__ListItem__Ellipsis{text-align:center;align-self:center;width:", ";}.k-Pagination__ListItem__Arrow:first-child{margin-right:", ";}.k-Pagination__ListItem__Arrow:last-child{margin-left:", ";}&.k-Pagination--noMargin .k-Pagination__List{margin:0;}&.k-Pagination--left .k-Pagination__List{justify-content:flex-start;}&.k-Pagination--center .k-Pagination__List{justify-content:center;}&.k-Pagination--right .k-Pagination__List{justify-content:flex-end;}"], (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(5)); // Returns an array with the given bounds


const range = (start, end) => Array(end - start + 1).fill().map((_, index) => start + index); // Returns an array of size `availableSlots` with page number integers
// and breaks "…" (represented as nulls).


function pages(min, max, currentPage, availableSlots) {
  // 1, 2, 3
  if (max - min < availableSlots) {
    return range(min, max);
  } // 1, 2, 3, …, 42


  if (currentPage - min + 1 < availableSlots - 2) {
    return [...range(min, min - 1 + availableSlots - 2), null, max];
  } // 1, …, 40, 41, 42


  if (max - currentPage < availableSlots - 2) {
    return [min, null, ...range(max + 1 - (availableSlots - 2), max)];
  } // 1, …, 21, …, 42


  const sides = Math.floor((availableSlots - 4) / 2);
  return [min, null, ...range(currentPage - sides, currentPage + sides), null, max];
}

const Pagination = /*#__PURE__*/(0, _react.forwardRef)((_ref2, _ref) => {
  let {
    prevButtonLabel,
    nextButtonLabel,
    goToPageLabel,
    goToPageHref,
    onPageClick,
    currentPageLabel,
    currentPage,
    totalPages,
    'aria-label': ariaLabelProp,
    margin,
    align,
    className
  } = _ref2;
  const size = (0, _useMediaQuery.useMedia)({
    queries: [(0, _mediaQueries.getMinQuery)(_screenConfig.ScreenConfig.L.min)],
    values: [7],
    defaultValue: 5
  });
  const pageNumbers = pages(1, totalPages, currentPage, size);

  const pageClickHandler = number => event => onPageClick(number, event);

  const renderPage = (number, index) => {
    if (!number) {
      return /*#__PURE__*/_react.default.createElement("li", {
        key: "ellipsis-" + index,
        className: "k-Pagination__ListItem k-Pagination__ListItem__Ellipsis",
        "aria-hidden": "true"
      }, /*#__PURE__*/_react.default.createElement(_text.Text, {
        size: "small",
        weight: "500"
      }, "\u2026"));
    }

    let buttonProps = {
      modifier: 'hydrogen',
      tag: 'a',
      href: goToPageHref(number),
      'aria-label': goToPageLabel(number),
      onClick: pageClickHandler(number)
    };

    if (number === currentPage) {
      buttonProps = {
        modifier: 'lithium',
        tag: 'span',
        title: currentPageLabel(number),
        'aria-current': 'page'
      };
    }

    return /*#__PURE__*/_react.default.createElement("li", {
      className: "k-Pagination__ListItem k-Pagination__ListItem__Link",
      key: "page-" + number
    }, /*#__PURE__*/_react.default.createElement(_button.Button, (0, _extends2.default)({
      key: "link-" + number,
      className: "k-Pagination__Link",
      tabIndex: "0",
      size: "small",
      fit: "icon"
    }, buttonProps), number));
  };

  const ArrowButton = _ref3 => {
    let {
      direction
    } = _ref3;
    const buttonLabel = direction == 'left' ? (0, _parser.parseHtml)(prevButtonLabel) : (0, _parser.parseHtml)(nextButtonLabel);
    const isDisabled = direction == 'left' ? currentPage == 1 : currentPage == totalPages;
    const number = direction == 'left' ? currentPage == 1 ? 1 : currentPage - 1 : currentPage == totalPages ? totalPages : currentPage + 1;
    return /*#__PURE__*/_react.default.createElement("li", {
      className: (0, _classnames.default)('k-Pagination__ListItem', 'k-Pagination__ListItem__Arrow')
    }, /*#__PURE__*/_react.default.createElement(_button.Button, {
      key: "link-" + direction,
      className: "k-Pagination__Link",
      tag: isDisabled ? 'span' : 'a',
      href: goToPageHref(number),
      title: buttonLabel,
      "aria-disabled": isDisabled || null,
      tabIndex: 0,
      onClick: isDisabled ? null : pageClickHandler(number),
      disabled: isDisabled,
      size: "small",
      fit: "icon"
    }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
      className: "k-Pagination__ArrowIcon",
      direction: direction,
      disabled: isDisabled,
      "aria-hidden": "true"
    })));
  };

  return /*#__PURE__*/_react.default.createElement(StyledNav, {
    role: "navigation",
    "aria-label": ariaLabelProp,
    className: (0, _classnames.default)('k-Pagination', className, "k-Pagination--" + align, {
      'k-Pagination--noMargin': !margin
    })
  }, /*#__PURE__*/_react.default.createElement("ul", {
    className: "k-Pagination__List"
  }, /*#__PURE__*/_react.default.createElement(ArrowButton, {
    direction: "left"
  }), pageNumbers.map(renderPage), /*#__PURE__*/_react.default.createElement(ArrowButton, {
    direction: "right"
  })));
});
exports.Pagination = Pagination;
Pagination.propTypes = {
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
Pagination.defaultProps = {
  prevButtonLabel: 'Page précédente',
  nextButtonLabel: 'Page suivante',
  goToPageLabel: n => "Aller \xE0 la page " + n,
  goToPageHref: n => "#" + n,
  onPageClick: () => {},
  currentPageLabel: n => "Page " + n + ", il s\u2019agit de la page actuelle",
  currentPage: 1,
  totalPages: 1,
  'aria-label': 'Navigation dans la pagination',
  margin: true,
  align: 'center'
};
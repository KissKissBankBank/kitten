"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pages = pages;
exports.Pagination = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _text = require("../../../components/typography/text");

var _arrowIcon = require("../../../components/icons/arrow-icon");

var _screenConfig = require("../../../constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _parser = require("../../../helpers/utils/parser");

var _mediaQueries = require("../../../hoc/media-queries");

var _typography = require("../../../helpers/utils/typography");

var StyledGroup = _styledComponents.default.ul.withConfig({
  displayName: "pagination__StyledGroup",
  componentId: "sc-19bydjm-0"
})(["display:inline-flex;padding:0;"]);

var StyledList = _styledComponents.default.li.withConfig({
  displayName: "pagination__StyledList",
  componentId: "sc-19bydjm-1"
})(["list-style:none;margin-right:0;@media (min-width:", "px){margin:", " ", ";}"], _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(8));

var StyledArrowIconDirection = (0, _styledComponents.default)(function (_ref) {
  var direction = _ref.direction,
      others = (0, _objectWithoutProperties2.default)(_ref, ["direction"]);
  return _react.default.createElement("li", others);
}).withConfig({
  displayName: "pagination__StyledArrowIconDirection",
  componentId: "sc-19bydjm-2"
})(["list-style:none;", " ", ""], function (_ref2) {
  var direction = _ref2.direction;
  return direction === 'left' && (0, _styledComponents.css)(["margin-right:", ";@media (min-width:", "px){margin-right:", ";}"], (0, _typography.pxToRem)(30), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(22));
}, function (_ref3) {
  var direction = _ref3.direction;
  return direction === 'right' && (0, _styledComponents.css)(["margin-left:", ";@media (min-width:", "px){margin-left:", ";}"], (0, _typography.pxToRem)(30), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(22));
});
var StyledButtonIcon = (0, _styledComponents.default)(function (_ref4) {
  var isDisabled = _ref4.isDisabled,
      isActive = _ref4.isActive,
      others = (0, _objectWithoutProperties2.default)(_ref4, ["isDisabled", "isActive"]);
  return _react.default.createElement(_text.Text, others);
}).withConfig({
  displayName: "pagination__StyledButtonIcon",
  componentId: "sc-19bydjm-3"
})(["display:flex;justify-content:center;align-items:center;box-sizing:border-box;cursor:pointer;width:", ";height:", ";border-radius:0;border-width:0;border-style:solid;outline:none;color:", ";border-color:", ";background-color:", ";@media (min-width:", "px){width:", ";height:", ";border-width:", ";}&:hover,&:focus{color:", ";border-color:", ";background-color:", ";}&:active{color:", ";border-color:", ";background-color:", ";}", " &[aria-disabled=\"true\"]{color:", ";border-color:", ";background-color:", ";cursor:not-allowed;&:hover,&:focus,&:active{color:", ";border-color:", ";background-color:", ";}}"], (0, _typography.pxToRem)(40), (0, _typography.pxToRem)(40), _colorsConfig.default.font1, _colorsConfig.default.line1, _colorsConfig.default.background1, _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(2), _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, function (_ref5) {
  var isActive = _ref5.isActive;
  return isActive && (0, _styledComponents.css)(["cursor:auto;color:", ";border-color:", ";background-color:", ";&:hover,&:focus,&:active{color:", ";border-color:", ";background-color:", ";}"], _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1, _colorsConfig.default.background1, _colorsConfig.default.primary1, _colorsConfig.default.primary1);
}, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2, _colorsConfig.default.background1, _colorsConfig.default.line2, _colorsConfig.default.line2);
var StyledSvg = (0, _styledComponents.default)(_arrowIcon.ArrowIcon).withConfig({
  displayName: "pagination__StyledSvg",
  componentId: "sc-19bydjm-4"
})(["align-self:center;margin:0;padding:0;width:", ";height:", ";pointer-events:none;color:inherit;fill:currentColor;"], (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6));

var StyledPoints = _styledComponents.default.li.withConfig({
  displayName: "pagination__StyledPoints",
  componentId: "sc-19bydjm-5"
})(["list-style:none;text-decoration:none;text-align:center;align-self:center;width:", ";@media (min-width:", "px){margin:", " ", ";width:", ";}"], (0, _typography.pxToRem)(40), _screenConfig.ScreenConfig.S.min, (0, _typography.pxToRem)(0), (0, _typography.pxToRem)(8), (0, _typography.pxToRem)(50)); // Returns an array with the given bounds


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

var PaginationBase =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(PaginationBase, _PureComponent);

  function PaginationBase() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, PaginationBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PaginationBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.preventClickDefault = function (e) {
      return e.preventDefault();
    };

    _this.pageClickHandler = function (number) {
      return function (event) {
        return _this.props.onPageClick(number, event);
      };
    };

    _this.renderPage = function (number, index) {
      if (!number) return _this.renderSpacer(index);
      var isActive = number === _this.props.currentPage;
      var tag = isActive ? 'span' : 'a';
      var href = isActive ? null : _this.props.goToPageHref(number);
      var ariaLabel = isActive ? _this.props.currentPageLabel(number) : _this.props.goToPageLabel(number);
      return _react.default.createElement(StyledList, {
        key: "page-".concat(number)
      }, _react.default.createElement(StyledButtonIcon, {
        tag: tag,
        href: href,
        key: "link-".concat(number),
        weight: "regular",
        decoration: "none",
        size: "tiny",
        isActive: isActive,
        "aria-current": isActive && 'page',
        "aria-label": ariaLabel,
        onClick: isActive ? null : _this.pageClickHandler(number)
      }, number));
    };

    return _this;
  }

  (0, _createClass2.default)(PaginationBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          totalPages = _this$props.totalPages,
          currentPage = _this$props.currentPage;
      var size = this.props.viewportIsTabletOrLess ? 5 : 7;
      var pageNumbers = pages(1, totalPages, currentPage, size);
      return _react.default.createElement("nav", {
        role: "navigation",
        "aria-label": this.props['aria-label']
      }, _react.default.createElement(StyledGroup, null, this.renderArrowButton('left'), pageNumbers.map(this.renderPage), this.renderArrowButton('right')));
    }
  }, {
    key: "renderSpacer",
    value: function renderSpacer(index) {
      return _react.default.createElement(StyledPoints, {
        key: "spacer-".concat(index),
        "aria-hidden": "true"
      }, '…');
    }
  }, {
    key: "renderArrowButton",
    value: function renderArrowButton(direction) {
      var _this$props2 = this.props,
          prevButtonLabel = _this$props2.prevButtonLabel,
          nextButtonLabel = _this$props2.nextButtonLabel,
          currentPage = _this$props2.currentPage,
          totalPages = _this$props2.totalPages;
      var buttonLabel = direction == 'left' ? (0, _parser.parseHtml)(prevButtonLabel) : (0, _parser.parseHtml)(nextButtonLabel);
      var isDisabled = direction == 'left' ? currentPage == 1 : currentPage == totalPages;
      var number = direction == 'left' ? currentPage == 1 ? 1 : currentPage - 1 : currentPage == totalPages ? totalPages : currentPage + 1;
      return _react.default.createElement(StyledArrowIconDirection, {
        direction: direction
      }, _react.default.createElement(StyledButtonIcon, {
        tag: "a",
        href: this.props.goToPageHref(number),
        key: "link-".concat(direction),
        "aria-label": buttonLabel,
        "aria-disabled": isDisabled,
        title: buttonLabel,
        isDisabled: isDisabled,
        tabIndex: isDisabled ? -1 : null,
        onClick: isDisabled ? this.preventClickDefault : this.pageClickHandler(number)
      }, _react.default.createElement(StyledSvg, {
        direction: direction,
        disabled: isDisabled,
        "aria-hidden": "true"
      })));
    }
  }]);
  return PaginationBase;
}(_react.PureComponent);

PaginationBase.propTypes = {
  prevButtonLabel: _propTypes.default.string,
  nextButtonLabel: _propTypes.default.string,
  goToPageLabel: _propTypes.default.func,
  goToPageHref: _propTypes.default.func,
  onPageClick: _propTypes.default.func,
  totalPages: _propTypes.default.number,
  currentPage: _propTypes.default.number,
  currentPageLabel: _propTypes.default.func,
  'aria-label': _propTypes.default.string
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
  'aria-label': 'Pagination navigation'
};
var Pagination = (0, _mediaQueries.mediaQueries)(PaginationBase, {
  viewportIsTabletOrLess: true
});
exports.Pagination = Pagination;
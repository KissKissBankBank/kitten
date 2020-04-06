"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pagination = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colorsConfig = _interopRequireDefault(require("./../../../../constants/colors-config"));

var _typography = require("./../../../../helpers/utils/typography");

var _range = require("./../../../../helpers/utils/range");

var BulletPointStyles = _styledComponents.default.div.withConfig({
  displayName: "pagination__BulletPointStyles",
  componentId: "sc-1thdyq2-0"
})(["min-width:", ";min-height:", ";margin-left:", ";margin-right:", ";background-color:", ";", ""], (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), _colorsConfig.default.background1, function (_ref) {
  var isSelected = _ref.isSelected,
      activeColor = _ref.activeColor;
  return isSelected && (0, _styledComponents.css)(["background-color:", ";"], activeColor);
});

var PaginationStyles = _styledComponents.default.div.withConfig({
  displayName: "pagination__PaginationStyles",
  componentId: "sc-1thdyq2-1"
})(["display:flex;justify-content:center;margin:0 ", ";width:20%;min-width:", ";"], (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(60));

var Pagination = function Pagination(_ref2) {
  var activeIndex = _ref2.activeIndex,
      links = _ref2.links,
      totalIndex = _ref2.totalIndex,
      activeColor = _ref2.activeColor;
  var hasNoLinks = !links && totalIndex;
  return /*#__PURE__*/_react.default.createElement(PaginationStyles, null, links && links.map(function (link, index) {
    return /*#__PURE__*/_react.default.createElement(BulletPointStyles, {
      as: "a",
      href: link,
      key: index,
      isSelected: activeIndex === index + 1,
      activeColor: activeColor
    });
  }), hasNoLinks && (0, _range.createRangeFromZeroTo)(totalIndex).map(function (_, index) {
    return /*#__PURE__*/_react.default.createElement(BulletPointStyles, {
      key: index,
      isSelected: activeIndex === index + 1,
      activeColor: activeColor
    });
  }));
};

exports.Pagination = Pagination;
Pagination.propTypes = {
  activeIndex: _propTypes.default.number.isRequired,
  totalIndex: _propTypes.default.number,
  activeColor: _propTypes.default.string,
  links: _propTypes.default.arrayOf(_propTypes.default.string)
};
Pagination.defaultProps = {
  activeColor: _colorsConfig.default.primary1
};
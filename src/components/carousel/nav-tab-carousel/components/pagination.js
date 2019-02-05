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

var _marger = require("./../../../layout/marger");

var _typography = require("./../../../../helpers/utils/typography");

var BulletPointStyles = _styledComponents.default.div.withConfig({
  displayName: "pagination__BulletPointStyles",
  componentId: "sc-1thdyq2-0"
})(["width:", ";height:", ";margin-left:", ";margin-right:", ";background-color:", ";", ""], (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(6), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), _colorsConfig.default.background1, function (_ref) {
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
      totalIndex = _ref2.totalIndex,
      activeColor = _ref2.activeColor;
  return _react.default.createElement(PaginationStyles, null, Array.apply(null, {
    length: totalIndex
  }).map(function (_, index) {
    return _react.default.createElement(BulletPointStyles, {
      key: index,
      isSelected: activeIndex === index + 1,
      activeColor: activeColor
    });
  }));
};

exports.Pagination = Pagination;
Pagination.propTypes = {
  activeIndex: _propTypes.default.number.isRequired,
  totalIndex: _propTypes.default.number.isRequired,
  activeColor: _propTypes.default.string
};
Pagination.defaultProps = {
  activeColor: _colorsConfig.default.primary1
};
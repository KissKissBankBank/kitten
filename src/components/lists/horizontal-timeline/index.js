"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HorizontalTimeline = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _classnames = _interopRequireDefault(require("classnames"));

var _colorsConfig = _interopRequireDefault(require("./../../../constants/colors-config"));

var _typography = require("./../../../helpers/utils/typography");

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var StyledHorizontalTimeline = _styledComponents.default.dl.withConfig({
  displayName: "horizontal-timeline__StyledHorizontalTimeline",
  componentId: "sc-1lx0w2n-0"
})(["display:grid;padding:0;margin:0;white-space:initial;grid-template-columns:[col-start] repeat(var(--HorizontalTimeline-columnsCount),1fr) [col-end] ", ";grid-template-rows:1fr [row-center] ", " [row-center-end] 1fr;grid-gap:", " 0;.k-HorizontalTimeline__year,.k-HorizontalTimeline__block{padding:0;margin:0;}.k-HorizontalTimeline__year:nth-of-type(even),.k-HorizontalTimeline__block:nth-of-type(odd){grid-row:1 / span 1;align-self:end;}.k-HorizontalTimeline__block:nth-of-type(even),.k-HorizontalTimeline__year:nth-of-type(odd){grid-row:3 / span 1;align-self:start;}.k-HorizontalTimeline__year{position:relative;display:flex;gap:", ";align-items:center;justify-self:start;width:", ";margin-left:calc((", " - ", ") / -2);z-index:3;", " font-size:", ";}.k-HorizontalTimeline__year:nth-of-type(even){flex-direction:column;margin-bottom:", ";}.k-HorizontalTimeline__year:nth-of-type(odd){margin-top:", ";flex-direction:column-reverse;}.k-HorizontalTimeline__year::after{content:'';width:", ";height:", ";border-radius:", ";border:", " solid ", ";display:block;grid-row:2;box-sizing:border-box;background-color:white;box-shadow:0 0 0 ", " white;}.k-HorizontalTimeline__year:nth-of-type(1)::after{grid-column:1;}.k-HorizontalTimeline__block{min-width:", ";}.k-HorizontalTimeline__block:not(:last-of-type){margin-right:calc(", " - (", " - ", ") / 2);}.k-HorizontalTimeline__block:nth-of-type(even)::before,.k-HorizontalTimeline__block:nth-of-type(odd)::after{content:\"\";display:block;height:", ";width:", ";border-radius:", ";background-color:", ";margin-left:calc((", " - ", ") / 2);}.k-HorizontalTimeline__block:nth-of-type(even)::before{margin-bottom:", ";}.k-HorizontalTimeline__block:nth-of-type(odd)::after{margin-top:", ";}.k-HorizontalTimeline__line{grid-column:col-start / col-end;grid-row:row-center;align-self:center;background-color:", ";display:block;height:", ";}.k-HorizontalTimeline__ellipsis{display:block;position:relative;grid-row:row-center;grid-column:var(--HorizontalTimeline-ellipsis-column,col-end);justify-self:center;z-index:5;}.k-HorizontalTimeline__ellipsis,.k-HorizontalTimeline__ellipsis::before,.k-HorizontalTimeline__ellipsis::after{content:\"\";background-color:", ";height:", ";width:", ";border-radius:", ";align-self:center;box-shadow:0 0 0 ", " white;}.k-HorizontalTimeline__ellipsis::before{position:absolute;left:calc(100% + ", ");}.k-HorizontalTimeline__ellipsis::after{position:absolute;right:calc(100% + ", ");}.k-HorizontalTimeline__ellipsis[style]{margin-left:", ";}"], (0, _typography.pxToRem)(18), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(5), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(15), _typographyConfig.default.fontStyles.regular, (0, _typography.stepToRem)(-1), (0, _typography.pxToRem)(-24), (0, _typography.pxToRem)(-24), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(14), (0, _typography.pxToRem)(4), _colorsConfig.default.primary1, (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(210), (0, _typography.pxToRem)(-15), (0, _typography.pxToRem)(50), (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(20), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(1), _colorsConfig.default.primary4, (0, _typography.pxToRem)(16), (0, _typography.pxToRem)(2), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(10), _colorsConfig.default.primary4, (0, _typography.pxToRem)(4), _colorsConfig.default.primary4, (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(4), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(3), (0, _typography.pxToRem)(14));

var Block = function Block(_ref) {
  var year = _ref.year,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("dt", {
    className: "k-HorizontalTimeline__year"
  }, year), /*#__PURE__*/_react.default.createElement("dd", {
    className: "k-HorizontalTimeline__block"
  }, children));
};

Block.propTypes = {
  year: _propTypes.default.node.isRequired
};

var HorizontalTimeline = function HorizontalTimeline(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      ellipsisColumns = _ref2.ellipsisColumns,
      style = _ref2.style,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children", "className", "ellipsisColumns", "style"]);

  var columnsCount = _react.default.Children.count(children);

  return /*#__PURE__*/_react.default.createElement(StyledHorizontalTimeline, (0, _extends2.default)({
    className: (0, _classnames.default)('k-HorizontalTimeline', className),
    style: (0, _extends2.default)({}, style, {
      '--HorizontalTimeline-columnsCount': columnsCount
    })
  }, props), children, /*#__PURE__*/_react.default.createElement("i", {
    className: "k-HorizontalTimeline__line"
  }), ellipsisColumns === null || ellipsisColumns === void 0 ? void 0 : ellipsisColumns.map(function (value) {
    return /*#__PURE__*/_react.default.createElement("b", {
      key: "ellipsis-marker-".concat(value),
      class: "k-HorizontalTimeline__ellipsis",
      style: {
        '--HorizontalTimeline-ellipsis-column': value
      }
    });
  }), /*#__PURE__*/_react.default.createElement("b", {
    class: "k-HorizontalTimeline__ellipsis"
  }));
};

exports.HorizontalTimeline = HorizontalTimeline;
HorizontalTimeline.defaultProps = {
  ellipsisColumns: []
};
HorizontalTimeline.propTypes = {
  ellipsisColumns: _propTypes.default.arrayOf(_propTypes.default.number)
};
HorizontalTimeline.Block = Block;
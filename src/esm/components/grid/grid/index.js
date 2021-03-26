import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig, ORDERED_SCREEN_SIZES } from '../../../constants/screen-config';
import { GUTTER, NUM_COLUMNS } from '../../../constants/grid-config';
var StyledGrid = styled.div.withConfig({
  displayName: "grid__StyledGrid",
  componentId: "l82tx2-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;margin-right:", ";margin-left:", ";.k-Grid__col{box-sizing:border-box;flex:0 0 auto;padding-right:", ";padding-left:", ";}", " ", ""], pxToRem(-GUTTER / 2), pxToRem(-GUTTER / 2), pxToRem(GUTTER / 2), pxToRem(GUTTER / 2), _toConsumableArray(Array(NUM_COLUMNS + 1).keys()).map(function (column) {
  return css([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column, NUM_COLUMNS, column, NUM_COLUMNS, column, column, NUM_COLUMNS, column);
}), function () {
  return ORDERED_SCREEN_SIZES.map(function (media) {
    return media !== ORDERED_SCREEN_SIZES[0] && css(["@media (min-width:", "){", "}"], pxToRem(ScreenConfig[media].min), _toConsumableArray(Array(NUM_COLUMNS + 1).keys()).map(function (column) {
      return css([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column + '-' + media.toLowerCase(), NUM_COLUMNS, column, NUM_COLUMNS, column, column + '-' + media.toLowerCase(), NUM_COLUMNS, column);
    }));
  });
});
export var Grid = function Grid(_ref) {
  var className = _ref.className,
      others = _objectWithoutProperties(_ref, ["className"]);

  return /*#__PURE__*/React.createElement(StyledGrid, _extends({
    className: classNames('k-Grid', className)
  }, others));
};
export var GridCol = function GridCol(_ref2) {
  var _classNames2;

  var className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ["className"]);

  var col = props.col,
      offset = props.offset,
      others = _objectWithoutProperties(props, ["col", "offset"]);

  var classByMediaQuery = function classByMediaQuery() {
    var classNamesByMediaQuery = Object.keys(ScreenConfig).map(function (size) {
      var _classNames;

      var mediaQuery = size.toLowerCase();
      var col = props["col-".concat(mediaQuery)];
      var offset = props["offset-".concat(mediaQuery)];
      return classNames(classNamesByMediaQuery, (_classNames = {}, _defineProperty(_classNames, "k-Grid__col--".concat(col, "-").concat(mediaQuery), col), _defineProperty(_classNames, "k-Grid__col--offset-".concat(offset, "-").concat(mediaQuery), !!offset || offset === 0), _classNames));
    });
    return classNamesByMediaQuery;
  }; // Remove unknown props in others.


  Object.keys(ScreenConfig).map(function (size) {
    var mediaQuery = size.toLowerCase();
    delete others["col-".concat(mediaQuery)];
    delete others["offset-".concat(mediaQuery)];
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, others, {
    className: classNames('k-Grid__col', (_classNames2 = {}, _defineProperty(_classNames2, "k-Grid__col--".concat(col), col), _defineProperty(_classNames2, "k-Grid__col--offset-".concat(offset), offset), _classNames2), classByMediaQuery(), className)
  }));
};
Grid.defaultProps = {
  className: null
};
GridCol.defaultProps = {
  col: '12',
  offset: null,
  className: null
};
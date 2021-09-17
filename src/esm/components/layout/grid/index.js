import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className"],
    _excluded2 = ["className"],
    _excluded3 = ["col", "offset"];
import "core-js/modules/es.array.map.js";
import "core-js/modules/es.array.concat.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/es.object.to-string.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/es.object.keys.js";
import React from 'react';
import styled, { css } from 'styled-components';
import classNames from 'classnames';
import { pxToRem } from '../../../helpers/utils/typography';
import { ScreenConfig, ORDERED_SCREEN_SIZES } from '../../../constants/screen-config';
import { GUTTER, NUM_COLUMNS } from '../../../constants/grid-config';
var StyledGrid = styled.div.withConfig({
  displayName: "grid__StyledGrid",
  componentId: "sc-lrwuxf-0"
})(["box-sizing:border-box;display:flex;flex-wrap:wrap;margin-right:", ";margin-left:", ";.k-Grid__col{box-sizing:border-box;flex:0 0 auto;padding-right:", ";padding-left:", ";}", " ", ""], pxToRem(-GUTTER / 2), pxToRem(-GUTTER / 2), pxToRem(GUTTER / 2), pxToRem(GUTTER / 2), [].concat(Array(NUM_COLUMNS + 1).keys()).map(function (column) {
  return css([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column, NUM_COLUMNS, column, NUM_COLUMNS, column, column, NUM_COLUMNS, column);
}), function () {
  return ORDERED_SCREEN_SIZES.map(function (media) {
    return media !== ORDERED_SCREEN_SIZES[0] && css(["@media (min-width:", "){", "}"], pxToRem(ScreenConfig[media].min), [].concat(Array(NUM_COLUMNS + 1).keys()).map(function (column) {
      return css([".k-Grid__col--", "{flex-basis:calc((100% / ", ") * ", ");max-width:calc((100% / ", ") * ", ");}.k-Grid__col--offset-", "{margin-left:calc((100% / ", ") * ", ");}"], column + '-' + media.toLowerCase(), NUM_COLUMNS, column, NUM_COLUMNS, column, column + '-' + media.toLowerCase(), NUM_COLUMNS, column);
    }));
  });
});
export var Grid = function Grid(_ref) {
  var className = _ref.className,
      others = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledGrid, _extends({
    className: classNames('k-Grid', className)
  }, others));
};
export var GridCol = function GridCol(_ref2) {
  var _classNames2;

  var className = _ref2.className,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var col = props.col,
      offset = props.offset,
      others = _objectWithoutPropertiesLoose(props, _excluded3);

  var classByMediaQuery = function classByMediaQuery() {
    var classNamesByMediaQuery = Object.keys(ScreenConfig).map(function (size) {
      var _classNames;

      var mediaQuery = size.toLowerCase();
      var col = props["col-" + mediaQuery];
      var offset = props["offset-" + mediaQuery];
      return classNames(classNamesByMediaQuery, (_classNames = {}, _classNames["k-Grid__col--" + col + "-" + mediaQuery] = col, _classNames["k-Grid__col--offset-" + offset + "-" + mediaQuery] = !!offset || offset === 0, _classNames));
    });
    return classNamesByMediaQuery;
  }; // Remove unknown props in others.


  Object.keys(ScreenConfig).map(function (size) {
    var mediaQuery = size.toLowerCase();
    delete others["col-" + mediaQuery];
    delete others["offset-" + mediaQuery];
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, others, {
    className: classNames('k-Grid__col', (_classNames2 = {}, _classNames2["k-Grid__col--" + col] = col, _classNames2["k-Grid__col--offset-" + offset] = offset, _classNames2), classByMediaQuery(), className)
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
import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from './../../../constants/colors-config';
import { pxToRem, stepToRem } from './../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
var StyledHorizontalTimeline = styled.dl.withConfig({
  displayName: "horizontal-timeline__StyledHorizontalTimeline",
  componentId: "sc-1lx0w2n-0"
})(["display:grid;padding:0;margin:0;white-space:initial;grid-template-columns:[col-start] repeat(var(--HorizontalTimeline-columnsCount),1fr) [col-end] ", ";grid-template-rows:1fr [row-center] ", " [row-center-end] 1fr;grid-gap:", " 0;.k-HorizontalTimeline__year,.k-HorizontalTimeline__block{padding:0;margin:0;}.k-HorizontalTimeline__year:nth-of-type(even),.k-HorizontalTimeline__block:nth-of-type(odd){grid-row:1 / span 1;align-self:end;}.k-HorizontalTimeline__block:nth-of-type(even),.k-HorizontalTimeline__year:nth-of-type(odd){grid-row:3 / span 1;align-self:start;}.k-HorizontalTimeline__year{position:relative;display:flex;gap:", ";align-items:center;justify-self:start;width:", ";margin-left:calc((", " - ", ") / -2);z-index:3;", " font-size:", ";}.k-HorizontalTimeline__year:nth-of-type(even){flex-direction:column;margin-bottom:", ";}.k-HorizontalTimeline__year:nth-of-type(odd){margin-top:", ";flex-direction:column-reverse;}.k-HorizontalTimeline__year::after{content:'';width:", ";height:", ";border-radius:", ";border:", " solid ", ";display:block;grid-row:2;box-sizing:border-box;background-color:white;box-shadow:0 0 0 ", " white;}.k-HorizontalTimeline__year:nth-of-type(1)::after{grid-column:1;}.k-HorizontalTimeline__block{min-width:", ";}.k-HorizontalTimeline__block:not(:last-of-type){margin-right:calc(", " - (", " - ", ") / 2);}.k-HorizontalTimeline__block:nth-of-type(even)::before,.k-HorizontalTimeline__block:nth-of-type(odd)::after{content:\"\";display:block;height:", ";width:", ";border-radius:", ";background-color:", ";margin-left:calc((", " - ", ") / 2);}.k-HorizontalTimeline__block:nth-of-type(even)::before{margin-bottom:", ";}.k-HorizontalTimeline__block:nth-of-type(odd)::after{margin-top:", ";}.k-HorizontalTimeline__line{grid-column:col-start / col-end;grid-row:row-center;align-self:center;background-color:", ";display:block;height:", ";}.k-HorizontalTimeline__ellipsis{display:block;position:relative;grid-row:row-center;grid-column:var(--HorizontalTimeline-ellipsis-column,col-end);justify-self:center;z-index:5;}.k-HorizontalTimeline__ellipsis,.k-HorizontalTimeline__ellipsis::before,.k-HorizontalTimeline__ellipsis::after{content:\"\";background-color:", ";height:", ";width:", ";border-radius:", ";align-self:center;box-shadow:0 0 0 ", " white;}.k-HorizontalTimeline__ellipsis::before{position:absolute;left:calc(100% + ", ");}.k-HorizontalTimeline__ellipsis::after{position:absolute;right:calc(100% + ", ");}.k-HorizontalTimeline__ellipsis[style]{margin-left:", ";}"], pxToRem(18), pxToRem(14), pxToRem(10), pxToRem(5), pxToRem(50), pxToRem(50), pxToRem(15), TYPOGRAPHY.fontStyles.regular, stepToRem(-1), pxToRem(-24), pxToRem(-24), pxToRem(14), pxToRem(14), pxToRem(14), pxToRem(4), COLORS.primary1, pxToRem(3), pxToRem(210), pxToRem(-15), pxToRem(50), pxToRem(15), pxToRem(20), pxToRem(2), pxToRem(1), COLORS.primary4, pxToRem(16), pxToRem(2), pxToRem(10), pxToRem(10), COLORS.primary4, pxToRem(4), COLORS.primary4, pxToRem(4), pxToRem(4), pxToRem(4), pxToRem(3), pxToRem(3), pxToRem(3), pxToRem(14));

var Block = function Block(_ref) {
  var year = _ref.year,
      children = _ref.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("dt", {
    className: "k-HorizontalTimeline__year"
  }, year), /*#__PURE__*/React.createElement("dd", {
    className: "k-HorizontalTimeline__block"
  }, children));
};

Block.propTypes = {
  year: PropTypes.node.isRequired
};
export var HorizontalTimeline = function HorizontalTimeline(_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      ellipsisColumns = _ref2.ellipsisColumns,
      style = _ref2.style,
      props = _objectWithoutProperties(_ref2, ["children", "className", "ellipsisColumns", "style"]);

  var columnsCount = React.Children.count(children);
  return /*#__PURE__*/React.createElement(StyledHorizontalTimeline, _extends({
    className: classNames('k-HorizontalTimeline', className),
    style: _extends({}, style, {
      '--HorizontalTimeline-columnsCount': columnsCount
    })
  }, props), children, /*#__PURE__*/React.createElement("i", {
    className: "k-HorizontalTimeline__line"
  }), ellipsisColumns === null || ellipsisColumns === void 0 ? void 0 : ellipsisColumns.map(function (value) {
    return /*#__PURE__*/React.createElement("b", {
      key: "ellipsis-marker-".concat(value),
      class: "k-HorizontalTimeline__ellipsis",
      style: {
        '--HorizontalTimeline-ellipsis-column': value
      }
    });
  }), /*#__PURE__*/React.createElement("b", {
    class: "k-HorizontalTimeline__ellipsis"
  }));
};
HorizontalTimeline.defaultProps = {
  ellipsisColumns: []
};
HorizontalTimeline.propTypes = {
  ellipsisColumns: PropTypes.arrayOf(PropTypes.number)
};
HorizontalTimeline.Block = Block;
import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { useFlexGapCheck } from '../../../helpers/dom/use-flex-gap-check';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledLine = styled.div.withConfig({
  displayName: "line__StyledLine",
  componentId: "sc-2c9zv8-0"
})(["align-items:center;display:flex;gap:", ";&.k-Line--noGap .k-Line__item{margin-right:", ";&:last-child{margin-right:0;}}"], pxToRem(10), pxToRem(10));
export var Line = function Line(props) {
  var canUseGap = useFlexGapCheck();
  return /*#__PURE__*/React.createElement(StyledLine, _extends({}, props, {
    className: classNames('k-Line', props.className, {
      'k-Line--noGap': !canUseGap
    })
  }));
};

Line.Item = function (props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-Line__item', props.className)
  }));
};

Line.defaultProps = {
  className: null,
  children: null
};
Line.Item.defaultProps = {
  className: null,
  children: null
};
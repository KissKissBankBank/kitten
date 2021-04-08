import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
var StyledLine = styled.div.withConfig({
  displayName: "line__StyledLine",
  componentId: "sc-2c9zv8-0"
})(["display:flex;align-items:center;.k-Line__item:not(:last-child){margin-right:", ";}"], pxToRem(10));
export var Line = function Line(props) {
  return /*#__PURE__*/React.createElement(StyledLine, _extends({}, props, {
    className: classNames('k-Line', props.className)
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
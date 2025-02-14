import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { pxToRem } from '../../../helpers/utils/typography';
const StyledLine = styled.div.withConfig({
  displayName: "line__StyledLine",
  componentId: "sc-1fspt0o-0"
})(["display:flex;align-items:center;gap:", ";"], pxToRem(10));
export const Line = props => {
  return /*#__PURE__*/React.createElement(StyledLine, _extends({}, props, {
    className: classNames('k-Line', props.className)
  }));
};

Line.Item = props => {
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
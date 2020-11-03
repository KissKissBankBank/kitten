import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import classNames from 'classnames';
export var Line = function Line(props) {
  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
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
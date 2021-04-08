import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from './../../../constants/colors-config';
import classNames from 'classnames';
import { pxToRem, stepToRem } from './../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
var List = styled.ul.withConfig({
  displayName: "check-list__List",
  componentId: "sc-1berzg4-0"
})(["display:inline-flex;flex-direction:column;padding:0;margin:0;.k-CheckList__item{", ";list-style-type:none;display:flex;align-items:stretch;margin-bottom:", ";color:", ";font-size:", ";line-height:1.2;.strike{text-decoration:line-through;}&:before{content:'\u25CF';color:", ";padding-right:", ";}&:last-child{margin-bottom:0;}}.k-CheckList__item--done{&:before{color:", ";}}"], TYPOGRAPHY.fontStyles.light, pxToRem(10), COLORS.font1, stepToRem(-1), COLORS.line2, pxToRem(10), COLORS.valid);

var a11yProps = function a11yProps(a11yText, done) {
  return {
    'aria-label': done ? a11yText.done : a11yText.default
  };
};

export var CheckList = function CheckList(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/React.createElement(List, props, children);
};

CheckList.Item = function (_ref2) {
  var done = _ref2.done,
      children = _ref2.children,
      a11yText = _ref2.a11yText,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ["done", "children", "a11yText", "className"]);

  return /*#__PURE__*/React.createElement("li", _extends({
    className: classNames('k-CheckList__item', className, {
      'k-CheckList__item--done': done
    })
  }, props, a11yProps(a11yText, done)), done ? /*#__PURE__*/React.createElement("span", {
    className: "strike"
  }, children) : children);
};

CheckList.Item.propTypes = {
  done: PropTypes.bool,
  a11yText: PropTypes.shape({
    default: PropTypes.string,
    done: PropTypes.string
  })
};
CheckList.Item.defaultProps = {
  done: false,
  a11yText: {
    default: 'Élément non validé',
    done: 'Élément validé'
  }
};
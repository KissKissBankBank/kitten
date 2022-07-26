import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from './../../../constants/colors-config';
import classNames from 'classnames';
import { pxToRem, stepToRem } from './../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../constants/typography-config';
const List = styled.ul.withConfig({
  displayName: "check-list__List",
  componentId: "sc-1i76wsf-0"
})(["display:inline-flex;flex-direction:column;padding:0;margin:0;.k-CheckList__item{", ";list-style-type:none;display:flex;align-items:stretch;margin-bottom:", ";color:", ";font-size:", ";line-height:1.2;.strike{text-decoration:line-through;}&:before{content:'\u25CF';color:", ";padding-right:", ";}&:last-child{margin-bottom:0;}}.k-CheckList__item--done{&:before{color:", ";}}"], TYPOGRAPHY.fontStyles['400'], pxToRem(10), COLORS.font1, stepToRem(-1), COLORS.line2, pxToRem(10), COLORS.valid);

const a11yProps = (a11yText, done) => {
  return {
    'aria-label': done ? a11yText.done : a11yText.default
  };
};

export const CheckList = _ref => {
  let {
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(List, props, children);
};

CheckList.Item = _ref2 => {
  let {
    done,
    children,
    a11yText,
    className,
    ...props
  } = _ref2;
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
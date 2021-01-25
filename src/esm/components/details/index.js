import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import domElementHelper from '../../helpers/dom/element-helper';

if (domElementHelper.canUseDom() && typeof document !== 'undefined') {
  require('details-element-polyfill');
}

var Summary = styled.summary.withConfig({
  displayName: "details__Summary",
  componentId: "sc-11gfmdu-0"
})(["display:inline-flex;list-style:none;touch-callout:none;user-select:none;cursor:pointer;::-webkit-details-marker,::before{display:none;}"]);
export var Details = function Details(_ref) {
  var children = _ref.children,
      summaryRender = _ref.summaryRender,
      summaryProps = _ref.summaryProps,
      openDefault = _ref.open,
      onToggle = _ref.onToggle,
      props = _objectWithoutProperties(_ref, ["children", "summaryRender", "summaryProps", "open", "onToggle"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleToggle = function handleToggle(event) {
    setOpen(!open);
    onToggle(event);
  };

  return /*#__PURE__*/React.createElement("details", _extends({
    onToggle: handleToggle,
    open: openDefault
  }, props), /*#__PURE__*/React.createElement(Summary, summaryProps, summaryRender({
    open: open
  })), children);
};
Details.propTypes = {
  summaryRender: PropTypes.func.isRequired,
  summaryProps: PropTypes.object,
  onToggle: PropTypes.func,
  open: PropTypes.bool
};
Details.defaultProps = {
  summaryProps: {},
  onToggle: function onToggle() {},
  open: false
};
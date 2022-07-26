import _extends from "@babel/runtime/helpers/extends";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { domElementHelper } from '../../../../helpers/dom/element-helper';

if (domElementHelper.canUseDom() && typeof document !== 'undefined') {
  require('details-element-polyfill');
}

const Summary = styled.summary.withConfig({
  displayName: "details__Summary",
  componentId: "sc-1xvt6sl-0"
})(["display:inline-flex;list-style:none;touch-callout:none;user-select:none;cursor:pointer;::-webkit-details-marker,::before{display:none;}:focus-visible{outline:auto;}"]);
export const Details = _ref => {
  let {
    children,
    summaryRender,
    summaryProps,
    open: openDefault,
    onToggle,
    ...props
  } = _ref;
  const [open, setOpen] = useState(false);

  const handleToggle = event => {
    setOpen(!open);
    onToggle(event);
  };

  return /*#__PURE__*/React.createElement("details", _extends({
    onToggle: handleToggle,
    open: openDefault
  }, props), /*#__PURE__*/React.createElement(Summary, summaryProps, summaryRender({
    open
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
  onToggle: () => {},
  open: false
};
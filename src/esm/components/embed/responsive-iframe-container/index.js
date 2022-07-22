import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
const StyledWrapper = styled.div.withConfig({
  displayName: "responsive-iframe-container__StyledWrapper",
  componentId: "sc-12misvs-0"
})(["position:relative;overflow:hidden;padding-bottom:67.5%;padding-bottom:var(--ResponsiveImageContainer-ratio);height:0;> *{position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;}"]);
export const ResponsiveIframeContainer = _ref => {
  let {
    ratio,
    style,
    className,
    ...props
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledWrapper, _extends({
    className: classNames('k-ResponsiveIframeContainer', className),
    style: { ...style,
      '--ResponsiveImageContainer-ratio': ratio + "%"
    }
  }, props));
};
ResponsiveIframeContainer.defaultProps = {
  ratio: '67.5',
  children: /*#__PURE__*/React.createElement("iframe", null)
};
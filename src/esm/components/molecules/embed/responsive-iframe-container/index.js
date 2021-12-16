import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["ratio", "style", "className"];
import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
var StyledWrapper = styled.div.withConfig({
  displayName: "responsive-iframe-container__StyledWrapper",
  componentId: "sc-58i1ok-0"
})(["position:relative;overflow:hidden;padding-bottom:67.5%;padding-bottom:var(--ResponsiveImageContainer-ratio);height:0;> *{position:absolute;top:0;left:0;width:100%;height:100%;box-sizing:border-box;}"]);
export var ResponsiveIframeContainer = function ResponsiveIframeContainer(_ref) {
  var ratio = _ref.ratio,
      style = _ref.style,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  return /*#__PURE__*/React.createElement(StyledWrapper, _extends({
    className: classNames('k-ResponsiveIframeContainer', className),
    style: _extends({}, style, {
      '--ResponsiveImageContainer-ratio': ratio + "%"
    })
  }, props));
};
ResponsiveIframeContainer.defaultProps = {
  ratio: '67.5',
  children: /*#__PURE__*/React.createElement("iframe", null)
};
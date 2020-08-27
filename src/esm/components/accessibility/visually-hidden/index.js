import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import styled from 'styled-components';
var StyledElement = styled.span.withConfig({
  displayName: "visually-hidden__StyledElement",
  componentId: "sc-3bas83-0"
})(["&:not(:focus):not(:active){clip:rect(0 0 0 0);clip-path:inset(100%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px;}"]);
export var VisuallyHidden = function VisuallyHidden(_ref) {
  var props = _extends({}, _ref);

  return /*#__PURE__*/React.createElement(StyledElement, props);
};
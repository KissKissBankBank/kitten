import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import { TooltipNew } from '../components/tooltips/tooltip-new';
export var withTooltip = function withTooltip(WrappedComponent) {
  var WithTooltip = function WithTooltip(props) {
    var children = props.children,
        id = props.id,
        others = _objectWithoutProperties(props, ["children", "id"]);

    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/React.createElement(TooltipNew, _extends({
      id: id
    }, others), children), /*#__PURE__*/React.createElement(WrappedComponent, {
      "data-for": id,
      "aria-describedby": id
    }));
  };

  return WithTooltip;
};
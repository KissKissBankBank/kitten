"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _tooltipNew = require("../components/tooltips/tooltip-new");

var withTooltip = function withTooltip(WrappedComponent) {
  var WithTooltip = function WithTooltip(props) {
    var children = props.children,
        id = props.id,
        others = (0, _objectWithoutProperties2.default)(props, ["children", "id"]);
    return /*#__PURE__*/_react.default.createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/_react.default.createElement(_tooltipNew.TooltipNew, (0, _extends2.default)({
      id: id
    }, others), children), /*#__PURE__*/_react.default.createElement(WrappedComponent, {
      "data-for": id,
      "aria-describedby": id
    }));
  };

  return WithTooltip;
};

exports.withTooltip = withTooltip;
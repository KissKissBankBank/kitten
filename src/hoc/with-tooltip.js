"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTooltip = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _tooltipNew = require("kitten/components/tooltips/tooltip-new");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var withTooltip = function withTooltip(WrappedComponent, wrappedProps) {
  var WithTooltip = function WithTooltip(props) {
    var children = props.children,
        id = props.id,
        others = _objectWithoutProperties(props, ["children", "id"]);

    return _react.default.createElement("div", {
      style: {
        position: 'relative'
      }
    }, _react.default.createElement(_tooltipNew.TooltipNew, _extends({
      id: id
    }, others), children), _react.default.createElement(WrappedComponent, {
      "data-for": id,
      "aria-describedby": id
    }));
  };

  return WithTooltip;
};

exports.withTooltip = withTooltip;
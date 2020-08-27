"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tooltip = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _buttonQuestionMarkIcon = require("../../../components/buttons/button-question-mark-icon");

var _elementHelper = _interopRequireDefault(require("../../../helpers/dom/element-helper"));

var Tooltip = function Tooltip(_ref) {
  var place = _ref.place,
      children = _ref.children,
      id = _ref.id,
      buttonQuestionMarkIconProps = (0, _objectWithoutProperties2.default)(_ref, ["place", "children", "id"]);
  var tooltipElement = (0, _react.useRef)(null);

  var handleButtonClick = function handleButtonClick(event) {
    event.preventDefault();

    if (_elementHelper.default.canUseDom()) {
      window.dispatchEvent(new CustomEvent('TooltipEvents__close_all'));
      event.target.dispatchEvent(new CustomEvent("TooltipEvents__open_".concat(id)));
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Tooltip"
  }, /*#__PURE__*/_react.default.createElement(_buttonQuestionMarkIcon.ButtonQuestionMarkIcon, (0, _extends2.default)({
    "data-tip": true,
    "data-for": id,
    "data-event": "TooltipEvents__open_".concat(id),
    onClick: handleButtonClick,
    "data-dismiss": id,
    "aria-describedby": id,
    "data-place": place
  }, buttonQuestionMarkIconProps)), /*#__PURE__*/_react.default.createElement(_reactTooltip.default, {
    ref: tooltipElement,
    id: id,
    className: "k-Tooltip__content",
    role: "tooltip",
    effect: "solid",
    event: "none",
    globalEventOff: "TooltipEvents__close_all"
  }, children));
};

exports.Tooltip = Tooltip;
Tooltip.defaultProps = {
  id: '',
  place: 'right',
  children: null
};
Tooltip.propTypes = {
  id: _propTypes.default.string,
  place: _propTypes.default.oneOf(['top', 'right', 'bottom', 'left']),
  children: _propTypes.default.node
};
var _default = Tooltip;
exports.default = _default;
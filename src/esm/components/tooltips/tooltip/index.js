import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
import { ButtonQuestionMarkIcon } from '../../../components/buttons/button-question-mark-icon';
import domElementHelper from '../../../helpers/dom/element-helper';
export var Tooltip = function Tooltip(_ref) {
  var place = _ref.place,
      children = _ref.children,
      id = _ref.id,
      buttonQuestionMarkIconProps = _objectWithoutProperties(_ref, ["place", "children", "id"]);

  var tooltipElement = useRef(null);

  var handleButtonClick = function handleButtonClick(event) {
    event.preventDefault();

    if (domElementHelper.canUseDom()) {
      window.dispatchEvent(new CustomEvent('TooltipEvents__close_all'));
      event.target.dispatchEvent(new CustomEvent("TooltipEvents__open_".concat(id)));
    }
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "k-Tooltip"
  }, /*#__PURE__*/React.createElement(ButtonQuestionMarkIcon, _extends({
    "data-tip": true,
    "data-for": id,
    "data-event": "TooltipEvents__open_".concat(id),
    onClick: handleButtonClick,
    "data-dismiss": id,
    "aria-describedby": id,
    "data-place": place
  }, buttonQuestionMarkIconProps)), /*#__PURE__*/React.createElement(ReactTooltip, {
    ref: tooltipElement,
    id: id,
    className: "k-Tooltip__content",
    role: "tooltip",
    effect: "solid",
    event: "none",
    globalEventOff: "TooltipEvents__close_all"
  }, children));
};
Tooltip.defaultProps = {
  id: '',
  place: 'right',
  children: null
};
Tooltip.propTypes = {
  id: PropTypes.string,
  place: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  children: PropTypes.node
};
export default Tooltip;
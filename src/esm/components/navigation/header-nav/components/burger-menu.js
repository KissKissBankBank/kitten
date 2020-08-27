import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useRef } from 'react';
import { BurgerIcon } from '../../../../components/icons/burger-icon';
import { Dropdown } from '../../../../components/dropdowns/v2/dropdown';
import { VisuallyHidden } from '../../../../components/accessibility/visually-hidden';
import COLORS from '../../../../constants/colors-config';
import { Context } from './context';
import classNames from 'classnames';
var namespace = 'kkbbAndCo';
var DROPDOWN_CLASS = "".concat(namespace, "-PlatformMenu");
var CLOSE_EVENT = "".concat(namespace, ":platformMenu:close");

var ButtonIcon = function ButtonIcon(props) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(BurgerIcon, _extends({}, props, {
    hoverColor: COLORS.font1,
    className: "k-ButtonIcon__svg",
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement(VisuallyHidden, null, "Menu"));
};

var buttonClassNames = classNames('k-Dropdown__button', 'k-ButtonIcon', 'k-ButtonIcon--tiny');
export var BurgerMenu = function BurgerMenu(_ref) {
  var children = _ref.children,
      dropdownContentWidth = _ref.dropdownContentWidth,
      props = _objectWithoutProperties(_ref, ["children", "dropdownContentWidth"]);

  var dropdownComponent = useRef(null);

  var getElementById = function getElementById(id) {
    return function () {
      return document.getElementById(id);
    };
  };

  return /*#__PURE__*/React.createElement(Context.Consumer, null, function (_ref2) {
    var id = _ref2.id,
        callOnToggle = _ref2.callOnToggle;
    return /*#__PURE__*/React.createElement(Dropdown, _extends({}, props, {
      buttonClassName: buttonClassNames,
      buttonContentOnCollapsed: /*#__PURE__*/React.createElement(ButtonIcon, {
        isAnimatedOnHover: true
      }),
      buttonContentOnExpanded: /*#__PURE__*/React.createElement(ButtonIcon, {
        isActive: true
      }),
      buttonId: "".concat(id, "PlateformMenu"),
      className: DROPDOWN_CLASS,
      closeEvents: [CLOSE_EVENT],
      closeOnOuterClick: true,
      dropdownContent: children,
      dropdownContentWidth: dropdownContentWidth,
      onToggle: callOnToggle,
      positionedVerticallyWith: getElementById(id),
      positionedWithBorder: true,
      ref: dropdownComponent,
      refreshEvents: ['resize']
    }));
  });
};
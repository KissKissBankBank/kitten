import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["text", "icon", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tag } from '../../../../information/tag';
import { DiamondIcon } from '../../../../graphics/icons/diamond-icon';
import { StarIconNext } from '../../../../graphics/icons-next/star-icon-next';
export var HeadingTag = function HeadingTag(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var iconDisplay = function () {
    switch (icon) {
      case 'diamond':
        return /*#__PURE__*/React.createElement(DiamondIcon, {
          width: "18",
          height: "20"
        });

      case 'star':
        return /*#__PURE__*/React.createElement(StarIconNext, {
          width: "14",
          height: "13"
        });

      default:
        return null;
    }
  }();

  return /*#__PURE__*/React.createElement(Tag, _extends({
    variant: "dark",
    className: classNames('k-RewardCard__headingTag', className)
  }, props), iconDisplay, text);
};
HeadingTag.propTypes = {
  icon: PropTypes.oneOf([null, 'star', 'diamond']),
  text: PropTypes.node
};
HeadingTag.defaultProps = {
  icon: null,
  text: null
};
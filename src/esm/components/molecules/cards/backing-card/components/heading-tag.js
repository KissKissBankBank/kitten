import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["text", "icon", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tag } from '../../../../../components/atoms/tag';
import { DiamondIcon } from '../../../../../components/graphics/icons/diamond-icon';
import { StarIcon } from '../../../../../components/graphics/icons/star-icon';
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
      default:
        return /*#__PURE__*/React.createElement(StarIcon, {
          width: "14",
          height: "13"
        });
    }
  }();

  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: classNames('k-BackingCard__headingTag', 'k-BackingCard__drawer', className)
  }, props), iconDisplay, text);
};
HeadingTag.propTypes = {
  icon: PropTypes.oneOf(['star', 'diamond']),
  text: PropTypes.node
};
HeadingTag.defaultProps = {
  icon: 'star',
  text: null
};
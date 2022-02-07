import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["text", "icon", "className"];
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tag } from '../../../../information/tag';
import { LockIcon } from '../../../../graphics/icons/lock-icon';
import { StarIcon } from '../../../../graphics/icons/star-icon';
export var TitleTag = function TitleTag(_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var iconDisplay = function () {
    switch (icon) {
      case 'lock':
        return /*#__PURE__*/React.createElement(LockIcon, {
          width: "14",
          height: "14"
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
    className: classNames('k-SummaryCard__titleTag', className, 'k-u-margin-top-single')
  }, props), iconDisplay, /*#__PURE__*/React.createElement("span", null, text));
};
TitleTag.propTypes = {
  icon: PropTypes.oneOf(['star', 'lock']),
  text: PropTypes.node
};
TitleTag.defaultProps = {
  icon: 'star',
  text: null
};
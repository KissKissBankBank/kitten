import _extends from "@babel/runtime/helpers/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Tag } from '../../../../information/tag';
import { DiamondIcon } from '../../../../graphics/icons/diamond-icon';
import { StarIconNext } from '../../../../graphics/icons-next/star-icon-next';
export const HeadingTag = _ref => {
  let {
    text,
    icon,
    className,
    ...props
  } = _ref;

  const iconDisplay = (() => {
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
  })();

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
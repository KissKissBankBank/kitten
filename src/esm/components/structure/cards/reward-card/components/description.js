import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Text } from '../../../../typography/text';
export const Description = _ref => {
  let {
    children,
    className,
    moreButtonText,
    truncateText,
    ...props
  } = _ref;
  const descriptionElementRef = useRef(null);
  const [displayMoreButton, setMoreButtonDisplay] = useState(false);
  useEffect(() => {
    var _descriptionElementRe;

    setMoreButtonDisplay(false);
    if (!truncateText) return;
    if (!descriptionElementRef) return;
    const parent = descriptionElementRef.current;
    const child = (_descriptionElementRe = descriptionElementRef.current) == null ? void 0 : _descriptionElementRe.children[0];
    if (!child) return;

    if (parent.clientHeight < child.clientHeight) {
      setMoreButtonDisplay(true);
    }
  }, [descriptionElementRef, truncateText]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-RewardCard__descriptionWrapper', 'k-RewardCard__drawer', 'k-RewardCard__drawer--extensible', className)
  }, props), /*#__PURE__*/React.createElement("div", {
    ref: descriptionElementRef,
    className: classNames('k-RewardCard__description', {
      'k-RewardCard__description--hasMore': displayMoreButton,
      'k-RewardCard__description--truncateText': truncateText
    })
  }, /*#__PURE__*/React.createElement("div", null, children)), displayMoreButton && /*#__PURE__*/React.createElement(Text, {
    className: "k-RewardCard__description__moreButton",
    color: "primary1",
    weight: "500",
    size: "micro"
  }, moreButtonText));
};
Description.defaultProps = {
  moreButtonText: 'More…',
  truncateText: false
};
Description.propTypes = {
  moreButtonText: PropTypes.node,
  truncateText: PropTypes.bool
};
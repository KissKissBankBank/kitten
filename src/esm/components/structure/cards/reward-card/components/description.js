import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["children", "className", "moreButtonText", "truncateText"];
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Text } from '../../../../typography/text';
export var Description = function Description(_ref) {
  var children = _ref.children,
      className = _ref.className,
      moreButtonText = _ref.moreButtonText,
      truncateText = _ref.truncateText,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var descriptionElementRef = useRef(null);

  var _useState = useState(false),
      displayMoreButton = _useState[0],
      setMoreButtonDisplay = _useState[1];

  useEffect(function () {
    var _descriptionElementRe;

    setMoreButtonDisplay(false);
    if (!truncateText) return;
    if (!descriptionElementRef) return;
    var parent = descriptionElementRef.current;
    var child = (_descriptionElementRe = descriptionElementRef.current) == null ? void 0 : _descriptionElementRe.children[0];
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
    weight: "regular",
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
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Text } from '../../../../components/typography/text';
export var Description = function Description(_ref) {
  var children = _ref.children,
      className = _ref.className,
      moreButtonText = _ref.moreButtonText,
      truncateText = _ref.truncateText,
      props = _objectWithoutProperties(_ref, ["children", "className", "moreButtonText", "truncateText"]);

  var descriptionElementRef = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      displayMoreButton = _useState2[0],
      setMoreButtonDisplay = _useState2[1];

  useEffect(function () {
    var _descriptionElementRe;

    if (!truncateText) return;
    if (!descriptionElementRef) return;
    var parent = descriptionElementRef.current;
    var child = (_descriptionElementRe = descriptionElementRef.current) === null || _descriptionElementRe === void 0 ? void 0 : _descriptionElementRe.children[0];
    if (!child) return;

    if (parent.clientHeight < child.clientHeight) {
      setMoreButtonDisplay(true);
    }
  }, [descriptionElementRef, truncateText]);
  return /*#__PURE__*/React.createElement("div", _extends({
    ref: descriptionElementRef,
    className: classNames('k-BackingCard__descriptionWrapper', 'k-BackingCard__drawer', 'k-BackingCard__drawer--extensible', className, {
      'k-BackingCard__descriptionWrapper--hasMore': displayMoreButton,
      'k-BackingCard__descriptionWrapper--truncateText': truncateText
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-BackingCard__description"
  }, children), displayMoreButton && /*#__PURE__*/React.createElement(Text, {
    className: "k-BackingCard__description__moreButton",
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
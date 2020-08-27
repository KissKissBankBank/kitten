import _extends from "@babel/runtime/helpers/esm/extends";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Masonry from 'react-masonry-component';
import { ORDERED_SCREEN_SIZES } from '../../../constants/screen-config';
import { NUM_COLUMNS } from '../../../constants/grid-config';
export var LegoGrid = function LegoGrid(_ref) {
  var className = _ref.className,
      masonryProps = _ref.masonryProps,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ["className", "masonryProps", "children"]);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      setVisibility = _useState2[1];

  useEffect(function () {
    setVisibility(true);
    return function () {
      setVisibility(false);
    };
  }, []);

  var classByMediaQuery = function classByMediaQuery() {
    var classNamesByMediaQuery = ORDERED_SCREEN_SIZES.map(function (size) {
      var mediaQuery = size.toLowerCase();
      var items = others["items-".concat(mediaQuery, "-up")];
      return classNames(classNamesByMediaQuery, _defineProperty({}, "k-LegoGrid--".concat(NUM_COLUMNS / items, "col@").concat(mediaQuery), items));
    });
    return classNamesByMediaQuery;
  };

  var gridClassName = classNames('k-LegoGrid', classByMediaQuery(), className, {
    'k-LegoGrid--isVisible': isVisible
  });
  return /*#__PURE__*/React.createElement("div", _extends({}, others, {
    className: gridClassName
  }), /*#__PURE__*/React.createElement(Masonry, masonryProps, children));
};
LegoGrid.defaultProps = {
  className: null,
  masonryProps: {}
};

LegoGrid.Item = function (_ref2) {
  var children = _ref2.children,
      className = _ref2.className,
      props = _objectWithoutProperties(_ref2, ["children", "className"]);

  return /*#__PURE__*/React.createElement("div", _extends({}, props, {
    className: classNames('k-LegoGrid__item', className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-LegoGrid__item__content"
  }, children));
};

LegoGrid.Item.defaultProps = {
  className: null
};
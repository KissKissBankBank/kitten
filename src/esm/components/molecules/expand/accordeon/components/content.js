import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Context } from './context';
import { pxToRem } from '../../../../../helpers/utils/typography';
import classNames from 'classnames';
export var Content = function Content(_ref) {
  var id = _ref.id,
      children = _ref.children,
      index = _ref.index,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["id", "children", "index", "className"]);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      maxHeight = _useState2[0],
      setMaxHeight = _useState2[1];

  var contentEl = useRef(null);

  var _useContext = useContext(Context),
      selectedItem = _useContext.selectedItem,
      componentId = _useContext.componentId,
      accordeonWidth = _useContext.accordeonWidth;

  useEffect(function () {
    var _contentEl$current;

    setMaxHeight((contentEl === null || contentEl === void 0 ? void 0 : (_contentEl$current = contentEl.current) === null || _contentEl$current === void 0 ? void 0 : _contentEl$current.scrollHeight) || 0);
  }, [selectedItem, accordeonWidth]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Accordeon__content', className),
    "aria-hidden": selectedItem !== index,
    ref: contentEl,
    style: {
      '--accordeon-content-max-height': pxToRem(maxHeight)
    },
    id: "".concat(componentId, "-").concat(id, "_content"),
    "aria-labelledby": "".concat(componentId, "-").concat(id, "_header")
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-Accordeon__content_marger"
  }, children), /*#__PURE__*/React.createElement("div", null));
};
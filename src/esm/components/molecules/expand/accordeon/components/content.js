import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["id", "children", "index", "className"];
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Context } from './context';
import { pxToRem } from '../../../../../helpers/utils/typography';
import classNames from 'classnames';
export var Content = function Content(_ref) {
  var id = _ref.id,
      children = _ref.children,
      index = _ref.index,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(0),
      maxHeight = _useState[0],
      setMaxHeight = _useState[1];

  var contentEl = useRef(null);

  var _useContext = useContext(Context),
      selectedItem = _useContext.selectedItem,
      componentId = _useContext.componentId,
      accordeonWidth = _useContext.accordeonWidth;

  useEffect(function () {
    var _contentEl$current;

    setMaxHeight((contentEl == null ? void 0 : (_contentEl$current = contentEl.current) == null ? void 0 : _contentEl$current.scrollHeight) || 0);
  }, [selectedItem, accordeonWidth]);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: classNames('k-Accordeon__content', className),
    "aria-hidden": !selectedItem.includes(index),
    ref: contentEl,
    style: {
      '--accordeon-content-max-height': pxToRem(maxHeight)
    },
    id: componentId + "-" + id + "_content",
    "aria-labelledby": componentId + "-" + id + "_header"
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-Accordeon__content_marger"
  }, children), /*#__PURE__*/React.createElement("div", null));
};
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Context } from './context';
import { pxToRem } from '../../../../../helpers/utils/typography';
export var Content = function Content(_ref) {
  var id = _ref.id,
      children = _ref.children,
      index = _ref.index;

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
  return /*#__PURE__*/React.createElement("div", {
    className: "k-Accordeon__content",
    "aria-hidden": selectedItem !== index,
    ref: contentEl,
    style: {
      '--accordeon-content-max-height': pxToRem(maxHeight)
    },
    id: componentId + "-" + id + "_content",
    "aria-labelledby": componentId + "-" + id + "_header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-Accordeon__content_marger"
  }, children), /*#__PURE__*/React.createElement("div", null));
};
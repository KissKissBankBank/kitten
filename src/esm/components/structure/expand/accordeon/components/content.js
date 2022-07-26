import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Context } from './context';
import { pxToRem } from '../../../../../helpers/utils/typography';
import classNames from 'classnames';
export const Content = _ref => {
  let {
    id,
    children,
    index,
    className,
    ...props
  } = _ref;
  const [maxHeight, setMaxHeight] = useState(0);
  const contentEl = useRef(null);
  const {
    selectedItem,
    componentId,
    accordeonWidth
  } = useContext(Context);
  useEffect(() => {
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
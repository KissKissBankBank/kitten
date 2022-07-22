import _extends from "@babel/runtime/helpers/extends";
import React, { createContext, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { StyledChatLayout } from './styles';
import { Text } from '../../../components/typography/text';
import { useWindowWidth } from '../../../helpers/hooks/use-window-width';
import { ScreenConfig } from '../../../constants/screen-config';
const ChatLayoutContext = /*#__PURE__*/createContext({});
export const ChatLayout = _ref => {
  let {
    className,
    children,
    style,
    ...props
  } = _ref;
  const [activeCol, setActiveColumn] = useState(null);
  const [activeColOffset, setActiveColOffset] = useState(0);
  const windowWidth = useWindowWidth();
  useEffect(() => {
    if (!activeCol) return;
    handlePagePosition();
  }, [activeCol]);
  useEffect(() => {
    if (!activeCol) return;
    if (windowWidth >= ScreenConfig.L.min) return;
    handlePagePosition();
  }, [windowWidth]);

  const handlePagePosition = () => {
    const activeColEl = document.getElementById(activeCol);
    setActiveColOffset(activeColEl.offsetLeft);
  };

  return /*#__PURE__*/React.createElement(ChatLayoutContext.Provider, {
    value: {
      setActiveColumn
    }
  }, /*#__PURE__*/React.createElement(StyledChatLayout, _extends({
    className: classNames('k-ChatLayout', className),
    style: { ...style,
      '--chatLayoutOffset': activeColOffset
    }
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-ChatLayout__grid"
  }, children)));
};

ChatLayout.Column = _ref2 => {
  let {
    name,
    title,
    className = null,
    isPrimaryColumn = false,
    hasMobileHeader = false,
    children,
    backAction,
    backActionText,
    nextAction,
    nextActionText,
    centeredHeader,
    fullWidthContent = false,
    ...props
  } = _ref2;
  const {
    setActiveColumn
  } = useContext(ChatLayoutContext);
  return /*#__PURE__*/React.createElement("section", _extends({
    id: name,
    className: classNames('k-ChatLayout__column', "k-ChatLayout__col-" + name, className, {
      'k-ChatLayout__column--isPrimaryColumn': isPrimaryColumn,
      'k-ChatLayout__column--hasMobileHeader': hasMobileHeader
    }),
    tabIndex: "-1"
  }, props), isPrimaryColumn && /*#__PURE__*/React.createElement(Text, {
    tag: "h1",
    size: "giant",
    weight: "700",
    className: "k-ChatLayout__column__title"
  }, title), hasMobileHeader && /*#__PURE__*/React.createElement("div", {
    className: classNames('k-ChatLayout__columnHeader', {
      'k-ChatLayout__columnHeader--centeredHeader': centeredHeader
    })
  }, /*#__PURE__*/React.createElement("button", {
    className: "k-ChatLayout__columnHeader__back k-u-reset-button",
    type: "button",
    onClick: () => backAction({
      setActiveColumn
    })
  }, backActionText), /*#__PURE__*/React.createElement("div", {
    className: "k-ChatLayout__columnHeader__title"
  }, title), nextAction && nextActionText && /*#__PURE__*/React.createElement("button", {
    className: "k-ChatLayout__columnHeader__next k-u-reset-button",
    type: "button",
    onClick: () => nextAction({
      setActiveColumn
    })
  }, nextActionText)), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-ChatLayout__column__content', {
      'k-ChatLayout__column__content--fullWidth': fullWidthContent
    })
  }, typeof children === 'function' ? children({
    setActiveColumn
  }) : children));
};
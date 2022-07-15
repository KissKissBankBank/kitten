import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["className", "children", "style"],
    _excluded2 = ["name", "title", "className", "isPrimaryColumn", "hasMobileHeader", "children", "backAction", "backActionText", "nextAction", "nextActionText", "centeredHeader", "fullWidthContent"];
import React, { createContext, useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { StyledChatLayout } from './styles';
import { Text } from '../../../components/typography/text';
import { useWindowWidth } from '../../../helpers/hooks/use-window-width';
import { ScreenConfig } from '../../../constants/screen-config';
var ChatLayoutContext = /*#__PURE__*/createContext({});
export var ChatLayout = function ChatLayout(_ref) {
  var className = _ref.className,
      children = _ref.children,
      style = _ref.style,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(null),
      activeCol = _useState[0],
      setActiveColumn = _useState[1];

  var _useState2 = useState(0),
      activeColOffset = _useState2[0],
      setActiveColOffset = _useState2[1];

  var windowWidth = useWindowWidth();
  useEffect(function () {
    if (!activeCol) return;
    handlePagePosition();
  }, [activeCol]);
  useEffect(function () {
    if (!activeCol) return;
    if (windowWidth >= ScreenConfig.L.min) return;
    handlePagePosition();
  }, [windowWidth]);

  var handlePagePosition = function handlePagePosition() {
    var activeColEl = document.getElementById(activeCol);
    setActiveColOffset(activeColEl.offsetLeft);
  };

  return /*#__PURE__*/React.createElement(ChatLayoutContext.Provider, {
    value: {
      setActiveColumn: setActiveColumn
    }
  }, /*#__PURE__*/React.createElement(StyledChatLayout, _extends({
    className: classNames('k-ChatLayout', className),
    style: _extends({}, style, {
      '--chatLayoutOffset': activeColOffset
    })
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-ChatLayout__grid"
  }, children)));
};

ChatLayout.Column = function (_ref2) {
  var name = _ref2.name,
      title = _ref2.title,
      _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? null : _ref2$className,
      _ref2$isPrimaryColumn = _ref2.isPrimaryColumn,
      isPrimaryColumn = _ref2$isPrimaryColumn === void 0 ? false : _ref2$isPrimaryColumn,
      _ref2$hasMobileHeader = _ref2.hasMobileHeader,
      hasMobileHeader = _ref2$hasMobileHeader === void 0 ? false : _ref2$hasMobileHeader,
      children = _ref2.children,
      backAction = _ref2.backAction,
      backActionText = _ref2.backActionText,
      nextAction = _ref2.nextAction,
      nextActionText = _ref2.nextActionText,
      centeredHeader = _ref2.centeredHeader,
      _ref2$fullWidthConten = _ref2.fullWidthContent,
      fullWidthContent = _ref2$fullWidthConten === void 0 ? false : _ref2$fullWidthConten,
      props = _objectWithoutPropertiesLoose(_ref2, _excluded2);

  var _useContext = useContext(ChatLayoutContext),
      setActiveColumn = _useContext.setActiveColumn;

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
    onClick: function onClick() {
      return backAction({
        setActiveColumn: setActiveColumn
      });
    }
  }, backActionText), /*#__PURE__*/React.createElement("div", {
    className: "k-ChatLayout__columnHeader__title"
  }, title), nextAction && nextActionText && /*#__PURE__*/React.createElement("button", {
    className: "k-ChatLayout__columnHeader__next k-u-reset-button",
    type: "button",
    onClick: function onClick() {
      return nextAction({
        setActiveColumn: setActiveColumn
      });
    }
  }, nextActionText)), /*#__PURE__*/React.createElement("div", {
    className: classNames('k-ChatLayout__column__content', {
      'k-ChatLayout__column__content--fullWidth': fullWidthContent
    })
  }, typeof children === 'function' ? children({
    setActiveColumn: setActiveColumn
  }) : children));
};
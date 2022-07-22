"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LendopolisLogoVerticalOnDark = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ratio = require("../../../../../helpers/utils/ratio");

const LendopolisLogoVerticalOnDark = _ref => {
  let {
    width,
    height,
    ...props
  } = _ref;
  const DEFAULT_WIDTH = 250;
  const DEFAULT_HEIGHT = 112;
  const computed = (0, _ratio.computeFromRatio)({
    defaultWidth: DEFAULT_WIDTH,
    defaultHeight: DEFAULT_HEIGHT,
    width,
    height
  });
  const viewBox = {
    x: DEFAULT_WIDTH,
    y: DEFAULT_HEIGHT
  };
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    role: "img",
    "aria-label": "Lendopolis",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + viewBox.x + " " + viewBox.y,
    width: computed.width,
    height: computed.height,
    fillRule: "nonzero",
    fill: "#fff"
  }, props), /*#__PURE__*/_react.default.createElement("title", null, "Lendopolis"), /*#__PURE__*/_react.default.createElement("g", {
    className: "logo"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M118.37 70.85a12.35 12.35 0 0 0-12.24 12.3c0 6.74 5.55 12.3 12.29 12.3 3.2 0 6.29-1.26 8.58-3.5a12.09 12.09 0 0 0 3.75-8.78 12.4 12.4 0 0 0-12.34-12.32h-.04Zm4.47 19.46a8.21 8.21 0 0 1-4.45 1.32A8.5 8.5 0 0 1 111.71 78a8.3 8.3 0 0 1 6.68-3.33 8.49 8.49 0 0 1 4.45 15.65Zm29.04-17.75c-1.76-1.22-3.83-1.31-5.97-1.31h-4.42v23.8h3.99V85.3h1.05c1.76 0 3.99-.2 5.76-1.66l.37-.32.05-.06a7.08 7.08 0 0 0 2-5 6.8 6.8 0 0 0-2.83-5.71Zm-3.23 8.64c-.73.2-1.48.3-2.24.28h-.91v-6.44h.17c3.36 0 5.09.48 5.09 3.16-.02 1.6-.67 2.55-2.1 3Zm27.87-10.35a12.35 12.35 0 0 0-12.24 12.3c0 6.74 5.55 12.3 12.29 12.3 3.14 0 6.16-1.2 8.44-3.36a12.1 12.1 0 0 0 3.9-8.92 12.42 12.42 0 0 0-12.4-12.32Zm4.45 19.46a8.2 8.2 0 0 1-4.45 1.32A8.5 8.5 0 0 1 169.85 78a8.3 8.3 0 0 1 6.67-3.33 8.49 8.49 0 0 1 4.45 15.65Zm22.67.93v-20h-3.99v23.8h10.13v-3.8h-6.14Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M219.68 71.23h4v23.81h-4z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m244.17 80.83-1.47-.66c-1.73-.79-3.04-1.48-3.04-2.81 0-.28.06-.56.15-.83a2.9 2.9 0 0 1 2.8-1.88c1.45 0 2.35.57 3.2 2.05l.39.68 3.22-2.07-.68-1.19a7.14 7.14 0 0 0-6.08-3.27 7.47 7.47 0 0 0-5.05 1.91 6.06 6.06 0 0 0-1.93 4.5c0 3.68 2.6 5.18 5.3 6.39l1.37.58.1.06c2.21 1.01 3.56 1.72 3.56 3.7a3.61 3.61 0 0 1-2.35 3.32c-.48.19-.98.29-1.5.3-1.73 0-3.14-1.2-3.63-3 0-.08-.22-1.35-.22-1.35l-3.88 1.08.12.81a7.64 7.64 0 0 0 7.66 6.26 7.85 7.85 0 0 0 5.3-2.03 7.47 7.47 0 0 0 2.45-5.6c0-4.08-3-5.71-5.8-6.95ZM3.98 91.24v-20H0v23.8h10.13v-3.8H3.98Zm15.98-20.01v23.81h13.08v-3.8h-9.1v-7.26h8.82v-3.81h-8.81v-5.13h9.1v-3.8h-13.1Zm42.22.02v15.34L44.8 70.85V95.1h3.98V79.53l17.38 15.89V71.25h-3.98Zm30.16 2.86c-2.8-2.37-5.7-2.88-9.2-2.88H78.2v23.81h4.88c3.66 0 6.5-.5 9.32-3 .24-.2.45-.43.66-.64a11.6 11.6 0 0 0 3.24-8.23c0-3.7-1.36-6.83-3.95-9.06Zm-2.57 15.03c-.46.38-.94.73-1.43 1.05h-.02c-1.31.73-2.77 1.04-5.07 1.04H82.2V75.04h1.05c2.52 0 4.57.33 6.43 1.97a8.1 8.1 0 0 1 2.64 6.13 8.22 8.22 0 0 1-2.55 6ZM125 0a28.94 28.94 0 0 0-28.76 28.77 28.5 28.5 0 0 0 3.16 13.07 28.73 28.73 0 0 0 50.96.5 28.75 28.75 0 0 0 3.4-13.6A28.89 28.89 0 0 0 125.03 0H125Zm23.46 38.8h-6.52c-.65 0-1.18.53-1.18 1.18v8.83c-.34.28-.7.54-1.07.8V31.25a1.2 1.2 0 0 0-1.19-1.19h-2.7a1.2 1.2 0 0 0-1.18 1.19l.03 21.11s-.66.28-1.09.42V24c0-.65-.53-1.18-1.18-1.18h-2.7a1.2 1.2 0 0 0-1.19 1.18v30.04c-.34.05-.7.1-1.05.13V17.72a1.2 1.2 0 0 0-1.19-1.19h-2.63a1.2 1.2 0 0 0-1.19 1.19v36.44a20.5 20.5 0 0 1-1.09-.13V23.99c0-.65-.53-1.18-1.18-1.18h-2.66c-.65 0-1.18.53-1.18 1.18v28.77l-1.19-.45V31.26a1.2 1.2 0 0 0-1.18-1.19h-2.7a1.2 1.2 0 0 0-1.19 1.19v18.23c-.4-.27-.79-.56-1.15-.87v-8.64c0-.65-.53-1.18-1.18-1.18h-6.23a23.42 23.42 0 0 1-2.06-10.05 25.64 25.64 0 0 1 25.51-25.2 25.64 25.64 0 0 1 25.52 25.2c.04 3.46-.65 6.88-2.03 10.05h.02Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m136.9 29.04 9.08-14.8a25.63 25.63 0 0 0-12.88-9.65l-2.17 17.31h2.31c.8 0 1.45.66 1.45 1.45v5.69h2.21Zm-23.9 0-9.08-14.8a25.63 25.63 0 0 1 12.88-9.65l2.17 17.31h-2.32c-.8 0-1.45.66-1.45 1.45v5.69H113Z"
  })), /*#__PURE__*/_react.default.createElement("g", {
    className: "text"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M0 100.16h1.02v8.22H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M4.3 103.96a1.8 1.8 0 0 1 1.55-.84c1.44 0 1.8.97 1.8 2.22v3.04h-.98v-2.93c0-.87-.11-1.46-1.12-1.46-1.26 0-1.26 1.1-1.26 2.04v2.34H3.3v-5.1h.98l.02.7Zm7.35 2.5 1.48-3.19h1.1l-2.58 5.28-2.56-5.28h1.1l1.46 3.2Zm4.57-.46v.08c0 .85.68 1.57 1.53 1.6.76 0 1.16-.4 1.53-.99l.83.47a2.66 2.66 0 0 1-2.37 1.4c-1.56 0-2.51-1.19-2.51-2.69 0-1.58.84-2.76 2.49-2.76 1.64 0 2.37 1.18 2.37 2.71v.16l-3.87.01Zm2.9-.75a1.38 1.38 0 0 0-1.4-1.28c-.73 0-1.36.55-1.45 1.28h2.86Zm4.75-.81a.75.75 0 0 0-.66-.44.53.53 0 0 0-.53.5c0 .44.59.64 1.19.91.6.28 1.18.65 1.18 1.45 0 .94-.78 1.7-1.7 1.7h-.05a1.89 1.89 0 0 1-1.77-1.13l.84-.4a1.01 1.01 0 0 0 .98.66c.4 0 .73-.33.74-.72a.62.62 0 0 0-.37-.56l-.96-.51c-.56-.3-.97-.6-.97-1.3 0-.8.67-1.47 1.48-1.47h.02c.6 0 1.15.34 1.4.9l-.82.41Zm4.13 3.94h-.98v-4.19h-.53v-.92h.53v-1.95H28v1.95h.96v.92H28v4.2Zm3.75-7.44c0 .37-.3.68-.67.68a.68.68 0 0 1-.68-.68.68.68 0 0 1 1.35 0Zm-.18 7.44h-.98v-5.1h.98v5.1Zm4.49-3.94a.75.75 0 0 0-.65-.44.53.53 0 0 0-.54.5c0 .44.6.64 1.19.91.6.28 1.18.65 1.18 1.45 0 .94-.78 1.7-1.71 1.7h-.04a1.89 1.89 0 0 1-1.77-1.15l.84-.4a1.01 1.01 0 0 0 .99.66c.4 0 .72-.32.73-.72a.62.62 0 0 0-.36-.56l-.96-.5c-.57-.31-.98-.6-.98-1.3 0-.81.67-1.48 1.48-1.48h.02c.6 0 1.15.35 1.4.9l-.82.43Zm5.06 0a.75.75 0 0 0-.65-.44.53.53 0 0 0-.54.5c0 .44.6.64 1.19.91.6.28 1.18.65 1.18 1.45-.01.94-.78 1.7-1.71 1.7h-.04a1.89 1.89 0 0 1-1.77-1.15l.84-.4a1.01 1.01 0 0 0 .98.66c.4 0 .73-.32.73-.72a.63.63 0 0 0-.36-.56l-.96-.5c-.56-.31-.98-.6-.98-1.3 0-.81.67-1.48 1.49-1.48h.02c.6 0 1.15.35 1.4.9l-.82.43Zm3.6 1.56v.08c0 .85.68 1.57 1.54 1.6.75 0 1.15-.4 1.52-.99l.83.47a2.67 2.67 0 0 1-2.37 1.4c-1.58 0-2.5-1.19-2.5-2.69 0-1.58.83-2.76 2.48-2.76s2.39 1.18 2.39 2.71v.16l-3.89.01Zm2.91-.75a1.38 1.38 0 0 0-1.4-1.28c-.74 0-1.36.55-1.46 1.28h2.86Zm3.64-1.33h.03c.29-.47.8-.77 1.35-.8.62 0 1.2.35 1.47.91.33-.56.93-.9 1.58-.9 1.34 0 1.69 1.04 1.69 2.2v3.05h-.98v-2.89c0-.66-.1-1.5-.95-1.5-1.05 0-1.12 1.1-1.12 1.88v2.51h-.99v-2.7c0-.67-.03-1.68-.93-1.68-1.05 0-1.14 1.08-1.14 1.87v2.51h-.98v-5.1h.98v.64Zm8.88 2.08v.08c0 .85.68 1.57 1.54 1.6.75 0 1.15-.4 1.52-.99l.83.47a2.67 2.67 0 0 1-2.37 1.4c-1.55 0-2.5-1.19-2.5-2.69 0-1.58.84-2.76 2.48-2.76 1.65 0 2.37 1.18 2.37 2.71v.16l-3.87.01Zm2.91-.75a1.38 1.38 0 0 0-1.4-1.28c-.74 0-1.36.55-1.45 1.28h2.85Zm3.68-1.29c.32-.53.9-.85 1.53-.84 1.45 0 1.82.97 1.82 2.22v3.04h-.99v-2.93c0-.87-.11-1.46-1.12-1.46-1.26 0-1.26 1.1-1.26 2.04v2.34h-.96v-5.1h.99l-.01.7Zm6.71 4.42h-.97v-4.19h-.54v-.92h.54v-1.95h.98v1.95h.96v.92h-.96v4.2Zm10.2-.8h-.02a2.1 2.1 0 0 1-1.74.97c-1.58 0-2.44-1.3-2.44-2.76 0-1.4.93-2.67 2.4-2.67.73 0 1.4.38 1.78 1h.02v-5.21h.98v9.48h-.98v-.8Zm.05-1.75c0-1-.6-1.83-1.65-1.83-1.06 0-1.62.88-1.62 1.83 0 .95.58 1.85 1.62 1.85 1.03 0 1.65-.85 1.65-1.83v-.02Zm7.87 2.55h-.99v-.79h-.02a2.1 2.1 0 0 1-1.73.97c-1.56 0-2.44-1.3-2.44-2.76 0-1.4.92-2.67 2.4-2.67.73 0 1.4.38 1.77 1h.02v-.85h.99v5.1Zm-.93-2.53c0-1-.6-1.84-1.65-1.84-1.06 0-1.62.88-1.62 1.84 0 .95.58 1.85 1.62 1.85 1.03 0 1.65-.87 1.65-1.85Zm4.06-1.89h.02c.32-.53.91-.85 1.54-.84 1.43 0 1.8.97 1.8 2.22v3.04h-.97v-2.93c0-.87-.13-1.46-1.13-1.46-1.26 0-1.26 1.1-1.26 2.04v2.34h-.99v-5.1h.99v.7Zm7.64.48a.75.75 0 0 0-.65-.44.53.53 0 0 0-.54.5c0 .44.6.64 1.18.91.6.28 1.19.65 1.19 1.45-.01.94-.78 1.7-1.72 1.7h-.04a1.88 1.88 0 0 1-1.76-1.15l.83-.4a1.02 1.02 0 0 0 1 .66c.39 0 .72-.32.72-.72a.62.62 0 0 0-.36-.56l-.96-.5c-.57-.31-.98-.6-.98-1.3 0-.81.67-1.48 1.49-1.48h.02c.6 0 1.15.35 1.4.9l-.82.43Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M109.4 98.9h1v9.48h-1z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M113.25 106v.08c0 .85.69 1.57 1.54 1.6.76 0 1.16-.4 1.53-.99l.83.47a2.66 2.66 0 0 1-2.37 1.4c-1.56 0-2.51-1.19-2.51-2.69 0-1.58.84-2.76 2.49-2.76 1.64 0 2.38 1.18 2.38 2.71v.16l-3.89.01Zm2.92-.75a1.38 1.38 0 0 0-1.41-1.28c-.73 0-1.36.55-1.45 1.28h2.86Zm4.73-.81a.75.75 0 0 0-.64-.44.53.53 0 0 0-.54.5c0 .44.6.64 1.18.91.6.28 1.19.65 1.19 1.45-.01.94-.78 1.7-1.71 1.7h-.05a1.88 1.88 0 0 1-1.76-1.15l.83-.4a1.02 1.02 0 0 0 1 .66c.39 0 .72-.32.72-.72a.62.62 0 0 0-.36-.56l-.96-.5c-.57-.31-.98-.6-.98-1.3 0-.81.67-1.48 1.49-1.48h.02c.6 0 1.15.35 1.4.9l-.82.43Zm7.63 1.56v.08c0 .85.68 1.57 1.54 1.6.75 0 1.15-.4 1.53-.99l.83.47a2.66 2.66 0 0 1-2.37 1.4c-1.56 0-2.51-1.19-2.51-2.69 0-1.58.83-2.76 2.48-2.76s2.4 1.18 2.4 2.71v.16l-3.9.01Zm2.92-.75a1.39 1.39 0 0 0-1.41-1.28c-.74 0-1.36.55-1.45 1.28h2.86Zm.05-4.4-1.79 1.63-.48-.3 1.36-1.8.91.47Zm3.62 3.11h.02c.32-.53.91-.85 1.54-.84 1.44 0 1.8.97 1.8 2.22v3.04h-.97v-2.93c0-.87-.12-1.46-1.13-1.46-1.26 0-1.26 1.1-1.26 2.04v2.34h-.98v-5.1h.98v.7Zm6.18 2.04v.08c0 .85.68 1.57 1.54 1.6.75 0 1.16-.4 1.53-.99l.82.47a2.66 2.66 0 0 1-2.37 1.4c-1.56 0-2.5-1.19-2.5-2.69 0-1.58.84-2.76 2.48-2.76 1.65 0 2.37 1.18 2.37 2.71v.16l-3.87.01Zm2.91-.75a1.38 1.38 0 0 0-1.4-1.28c-.74 0-1.36.55-1.46 1.28h2.86Zm3.74-1.15h.04c.2-.59.77-.98 1.4-.98.27.01.55.1.78.25l-.43.9a.85.85 0 0 0-.6-.21c-1.06 0-1.18.98-1.18 1.8v2.52h-.99v-5.1h.99v.82Zm8.43 4.18c0 1.76-.5 3.02-2.48 3.02-1.42 0-2.45-.87-2.47-2.3h.98c0 .9.64 1.43 1.53 1.43 1.21 0 1.46-.83 1.46-1.88v-.97h-.02a2.1 2.1 0 0 1-1.73.97c-1.58 0-2.45-1.3-2.45-2.76 0-1.4.93-2.67 2.4-2.67.73 0 1.41.4 1.78 1.02h.03v-.87h.98v5.01Zm-.92-2.43c0-1-.6-1.84-1.66-1.84s-1.62.88-1.62 1.84c0 .95.58 1.85 1.62 1.85s1.66-.87 1.66-1.85Zm4.46-4.91a.68.68 0 0 1-.68.63.68.68 0 0 1-.68-.68c0-.37.3-.68.68-.68a.68.68 0 0 1 .68.73Zm-.19 7.44h-.98v-5.1h.98v5.1Zm3.03-2.38v.08c0 .85.68 1.57 1.54 1.6.75 0 1.15-.4 1.53-.99l.82.47a2.66 2.66 0 0 1-2.36 1.4c-1.58 0-2.51-1.19-2.51-2.69 0-1.58.83-2.76 2.48-2.76s2.4 1.18 2.4 2.71v.16l-3.9.01Zm2.92-.75a1.39 1.39 0 0 0-1.41-1.28c-.74 0-1.36.55-1.45 1.28h2.86Zm4.74-.81a.75.75 0 0 0-.65-.44.53.53 0 0 0-.54.5c0 .44.6.64 1.19.91.6.28 1.18.65 1.18 1.45 0 .94-.78 1.7-1.71 1.7h-.04a1.88 1.88 0 0 1-1.77-1.15l.84-.4a1 1 0 0 0 .99.66c.4 0 .72-.32.73-.72a.62.62 0 0 0-.36-.56l-.96-.5c-.57-.31-.98-.6-.98-1.3 0-.81.67-1.48 1.48-1.48h.02c.6 0 1.15.35 1.4.9l-.82.43Zm8.08-.34h.03a1.46 1.46 0 0 1 2.2-.73l-.43.9a.85.85 0 0 0-.6-.21c-1.06 0-1.18.98-1.18 1.8v2.52h-.99v-5.1h.98l-.01.82Zm4.24 1.9v.08c0 .85.68 1.57 1.54 1.6.75 0 1.15-.4 1.53-.99l.82.47a2.66 2.66 0 0 1-2.37 1.4c-1.56 0-2.5-1.19-2.5-2.69 0-1.58.83-2.76 2.48-2.76s2.37 1.18 2.37 2.71v.16l-3.87.01Zm2.91-.75a1.38 1.38 0 0 0-1.4-1.28c-.74 0-1.36.55-1.46 1.28h2.86Zm3.67-1.29h.03c.32-.53.91-.85 1.53-.84 1.45 0 1.82.97 1.82 2.22v3.04h-.99v-2.93c0-.87-.11-1.46-1.12-1.46-1.27 0-1.27 1.1-1.27 2.04v2.34h-.97v-5.1h.97v.7Zm10.59 1.85v.05c0 1.5-1.23 2.72-2.72 2.72a2.74 2.74 0 0 1-2.73-2.72c0-1.5 1.23-2.73 2.73-2.73h.04a2.7 2.7 0 0 1 2.68 2.68Zm-4.47.04a1.75 1.75 0 0 0 3.49-.04c0-.95-.78-1.74-1.74-1.74-.97.01-1.75.81-1.75 1.78Zm7.18-2.58v2.83c0 .82.2 1.54 1.18 1.54s1.19-.72 1.19-1.54v-2.83h.98v2.94c0 1.4-.66 2.34-2.16 2.34s-2.16-.94-2.16-2.34v-2.94h.97Zm7.26 3.19 1.47-3.19h1.1l-2.57 5.28-2.56-5.28h1.1l1.46 3.2Zm4.57-.46v.08c0 .85.68 1.57 1.54 1.6.75 0 1.15-.4 1.53-.99l.83.47a2.67 2.67 0 0 1-2.37 1.4c-1.58 0-2.51-1.19-2.51-2.69 0-1.58.84-2.76 2.49-2.76 1.64 0 2.39 1.18 2.39 2.71v.16l-3.9.01Zm2.91-.75a1.38 1.38 0 0 0-1.4-1.28c-.74 0-1.36.55-1.46 1.28h2.86Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M220.1 98.9h.98v9.48h-.98z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M228.14 108.38h-.99v-.79a2.1 2.1 0 0 1-1.73.97c-1.58 0-2.45-1.3-2.45-2.76 0-1.4.93-2.67 2.41-2.67.73 0 1.4.38 1.77 1v-.85h.99v5.1Zm-.93-2.53c0-1-.6-1.84-1.66-1.84s-1.61.88-1.61 1.84c0 .95.57 1.85 1.6 1.85 1.04 0 1.67-.87 1.67-1.85Zm2.99-6.94h.99v5.22a2.1 2.1 0 0 1 1.78-1c1.47 0 2.4 1.27 2.4 2.66 0 1.47-.88 2.77-2.44 2.77a2.1 2.1 0 0 1-1.74-.97v.79h-.98V98.9Zm4.2 6.94c0-1-.6-1.84-1.65-1.84-1.06 0-1.62.88-1.62 1.84 0 .95.58 1.85 1.62 1.85 1.03 0 1.65-.87 1.65-1.85Z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M237.26 98.9h.98v9.48h-.98z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M241.12 106v.08c0 .85.68 1.57 1.53 1.6.76 0 1.16-.4 1.53-.99l.83.47a2.67 2.67 0 0 1-2.37 1.4c-1.58 0-2.5-1.19-2.5-2.69 0-1.58.84-2.76 2.48-2.76 1.65 0 2.4 1.18 2.4 2.71v.16l-3.9.01Zm2.9-.75a1.38 1.38 0 0 0-1.4-1.28c-.73 0-1.36.55-1.45 1.28h2.86Zm4.74-.81a.75.75 0 0 0-.66-.44.53.53 0 0 0-.53.5c0 .44.59.64 1.18.91.6.28 1.19.65 1.19 1.45-.01.94-.78 1.7-1.71 1.7h-.05a1.89 1.89 0 0 1-1.77-1.15l.85-.4a1.01 1.01 0 0 0 .98.66c.4 0 .73-.32.73-.72a.62.62 0 0 0-.36-.56l-.96-.5c-.56-.31-.98-.6-.98-1.3 0-.81.67-1.48 1.49-1.48h.02c.6 0 1.15.35 1.4.9l-.82.43Z"
  })));
};

exports.LendopolisLogoVerticalOnDark = LendopolisLogoVerticalOnDark;
LendopolisLogoVerticalOnDark.propTypes = {
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
LendopolisLogoVerticalOnDark.defaultProps = {
  width: null,
  height: null
};
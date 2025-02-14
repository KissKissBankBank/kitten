"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MaisonDeCrowdfundingLogo = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ratio = require("../../../../helpers/utils/ratio");

const MaisonDeCrowdfundingLogo = _ref => {
  let {
    width,
    height,
    ...props
  } = _ref;
  const DEFAULT_WIDTH = 203.3;
  const DEFAULT_HEIGHT = 46.4;
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
    "aria-label": "MaisonDeCrowdfunding",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 " + viewBox.x + " " + viewBox.y,
    width: computed.width,
    height: computed.height
  }, props), /*#__PURE__*/_react.default.createElement("path", {
    d: "M37.1 34.4c-1 2.4-2.4 4.5-4.2 6.4-2.1 2.1-4.6 3.6-7.3 4.5h21V27.6h-8.2c0 2.4-.4 4.6-1.3 6.8z",
    fill: "#19b4ff"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M36.2 34.1c.8-2.1 1.2-4.2 1.3-6.4H19.6V9.5h-.1c-2.2 0-4.4.4-6.5 1.2-2.3.9-4.4 2.3-6.2 4.1-3.4 3.3-5.3 7.8-5.3 12.6s1.9 9.3 5.3 12.7c3 3 7 4.9 11.2 5.2h3c4.2-.3 8.2-2.2 11.2-5.2 1.8-1.7 3.1-3.8 4-6z",
    fill: "#fdece5"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.6 9.7c2.2-.9 4.6-1.3 7-1.3V.9H.9v22.7c.7-3.6 2.5-7 5.2-9.7 1.9-1.8 4.1-3.2 6.5-4.2z",
    fill: "#caf4fe"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "red",
    d: "M6.1 40.8c-2.7-2.7-4.5-6-5.2-9.7v14.2h12.5c-2.7-.9-5.2-2.4-7.3-4.5z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#12100b",
    d: "M0 46.3h17.9c.5 0 1.1.1 1.7.1.6 0 1.1 0 1.7-.1h26.4V0H0v46.3zm21-1h-3c-4.3-.3-8.2-2.2-11.2-5.2-3.4-3.4-5.3-7.9-5.3-12.7s1.9-9.3 5.3-12.7c1.8-1.8 3.9-3.2 6.2-4.1 2.1-.8 4.3-1.2 6.5-1.2h.1v18.2h17.9c0 2.2-.5 4.4-1.3 6.4-.9 2.3-2.3 4.3-4 6.1-3 3.1-7 4.9-11.2 5.2zm25.6 0h-21c2.7-.9 5.2-2.5 7.3-4.5 1.8-1.8 3.3-4 4.2-6.4.9-2.2 1.3-4.5 1.3-6.8h8.2v17.7zM20.5.9h26.1v25.8H20.5V.9zM.9.9h18.7v7.5c-2.4 0-4.7.4-7 1.3-2.5 1-4.7 2.4-6.5 4.3-2.7 2.7-4.5 6-5.2 9.7V.9zm0 30.2c.7 3.6 2.5 7 5.2 9.7 2.1 2.1 4.6 3.6 7.3 4.5H.9V31.1z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "red",
    d: "M35.5 11.8c1.4-2 1.2-4.8-.6-6.6-2-2-5.2-2-7.2 0-1 1-1.5 2.2-1.5 3.5v12.4h12c1.4.1 2.8-.4 3.8-1.5 2-2 2-5.2 0-7.2-1.7-1.8-4.5-2-6.5-.6"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#12100b",
    d: "M59.1 28c-.7 0-1.2-.5-1.2-1.2V2c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2v24.8c0 .7-.5 1.2-1.2 1.2zM79.8 1c.5.4.7 1.2.3 1.7l-7.7 11.1c-.4.6-1.2.7-1.8.3l-.3-.3-7.7-11.1c-.4-.5-.3-1.3.3-1.7.5-.4 1.4-.3 1.8.3l6.7 9.7 6.8-9.7c.3-.6 1-.7 1.6-.3zm-1.2 27c-.7 0-1.2-.5-1.2-1.2V15.3l-5 7.2c-.4.5-1.2.7-1.8.3l-.3-.3-5-7.2v11.5c0 .7-.5 1.2-1.3 1.2-.7 0-1.2-.5-1.2-1.2V11.3c0-.4.2-.8.5-1 .5-.4 1.4-.3 1.8.3l6.2 9 6.3-9c.2-.3.6-.5 1-.5.7 0 1.2.5 1.2 1.2v15.5c0 .7-.5 1.2-1.2 1.2zm4.9 0c-.7 0-1.2-.5-1.2-1.2V2c0-.7.5-1.2 1.2-1.2s1.3.5 1.3 1.2v24.8c0 .7-.5 1.2-1.3 1.2zm5.6-.3c-.6-.3-.9-1-.7-1.6l10-24.9c.3-.7 1-1 1.6-.7.4.1.6.4.7.7l9.9 24.9c.3.6 0 1.3-.7 1.6-.6.2-1.4-.1-1.6-.7L99.5 4.8 90.7 27c-.3.7-.9.9-1.6.7zm5.3 0c-.6-.3-.9-1-.7-1.6l.9-2.2c.2-.4.7-.8 1.1-.8h7.6c.5 0 1 .4 1.2.9l.9 2.1c.2.6 0 1.3-.7 1.6-.6.2-1.4 0-1.6-.7l-.6-1.4h-5.9L96 27c-.3.7-.9.9-1.6.7zm2.1-8.2c0-.7.5-1.2 1.2-1.2h1.8l-1.1-2.7c-.2-.6.1-1.4.7-1.6.7-.3 1.4 0 1.6.6l1.8 4.4c.1.1.1.3.1.5 0 .7-.6 1.2-1.3 1.2h-3.5c-.7 0-1.3-.5-1.3-1.2zm19.1 8.5c-.7 0-1.2-.5-1.2-1.2V2.4c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2v24.5c0 .6-.5 1.1-1.2 1.1zm4.9 0c-.7 0-1.2-.5-1.2-1.2V2.4c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2v24.5c0 .6-.5 1.1-1.2 1.1zm7.7-3.9c5.6 3 13.3 2.2 13.3-4.5 0-5-6.6-5.9-8.4-7.4-2.9-2.3-1.4-8.8 7.7-5.1 1.4.6.5 2.9-1 2.2-5.5-2.2-6.5 0-5.3 1 1.4 1 9.4 2.5 9.4 9.3 0 6.7-5.9 9.8-12.8 8.2-1.2-.3-2.7-.7-4.1-1.5-1.3-.8-.2-2.9 1.2-2.2zm12.3-19.7c-3.3-1.2-7.2-1.8-9.7.9-2 2.1-2.5 5.9.1 8.2 3.2 2.9 7.7 2.2 8 6.1.1 2-1.7 3.5-3.7 3.7-2.4.1-5.3-.4-7.7-2.2-1.3-.9.1-2.9 1.4-2 2.8 2 7.7 2.4 7.5.6-.1-1.7-3.8-1.4-7.2-4.4-5.3-4.6-2.1-13.9 5.4-14.3 2.2-.1 4 .2 6.5 1.1 1.7.5.9 2.9-.6 2.3z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#12100b",
    d: "M174 11.9c-.7.2-1.4-.1-1.6-.8-.8-2.3-2.2-4.3-4.2-5.8-1.9-1.4-4.3-2.2-6.9-2.2-15.2 0-15.2 22.9 0 22.9 2.6 0 5-.8 6.9-2.2 2-1.4 3.5-3.4 4.2-5.8.2-.7.9-1 1.6-.8.7.2 1 .9.8 1.6-.9 2.9-2.7 5.3-5.1 7.1-2.4 1.7-5.2 2.7-8.4 2.7-18.5 0-18.5-27.9 0-27.9 3.1 0 6 1 8.4 2.7 2.4 1.8 4.2 4.2 5.1 7.1.2.5-.1 1.2-.8 1.4zm-19.8 5.4c.6-.3 1.4-.1 1.7.5.6 1 1.4 1.8 2.3 2.3.9.5 1.9.9 3.1.9 1.8 0 3.3-.7 4.4-1.9 1.2-1.1 1.9-2.7 1.9-4.5s-.7-3.4-1.9-4.5c-1.1-1.1-2.7-1.9-4.4-1.9-1.1 0-2.2.3-3.1.8-1 .5-1.8 1.4-2.3 2.3-.3.6-1.1.8-1.7.5-.6-.3-.8-1.1-.4-1.7.8-1.4 1.9-2.5 3.2-3.3 1.3-.8 2.8-1.2 4.3-1.2 2.4 0 4.6 1 6.3 2.6 1.5 1.6 2.5 3.8 2.5 6.3 0 2.4-1 4.6-2.5 6.3-1.6 1.6-3.8 2.6-6.3 2.6-1.5 0-3-.4-4.3-1.2s-2.4-1.9-3.2-3.3c-.4-.6-.2-1.3.4-1.6zM181 28.1c-.7 0-1.2-.6-1.2-1.2V2.4c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2v24.5c0 .6-.5 1.2-1.2 1.2zm3.7-26.7c.5-.4 1.3-.3 1.7.3l8.4 12V2.4c0-.7.6-1.2 1.2-1.2.7 0 1.2.5 1.2 1.2v15.2c0 .4-.2.8-.5 1-.5.4-1.3.3-1.7-.3L184.4 3.1c-.4-.6-.2-1.3.3-1.7zm12.5 26.4c-.6.4-1.3.2-1.7-.3l-8.4-12v11.3c0 .7-.5 1.2-1.2 1.2s-1.2-.5-1.2-1.2V11.6c0-.4.1-.8.5-1 .5-.4 1.3-.3 1.7.3l10.6 15.2c.4.6.2 1.3-.3 1.7zm3.7.3c-.7 0-1.2-.6-1.2-1.2V2.4c0-.7.5-1.2 1.2-1.2s1.2.5 1.2 1.2v24.5c0 .6-.5 1.2-1.2 1.2zM58.4 45.3c-.3 0-.5-.2-.5-.5V34.3c0-.3.2-.5.5-.5h3.1c3.4 0 5.7 2.4 5.7 5.7s-2.4 5.7-5.7 5.7h-1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c2.8 0 4.7-2 4.7-4.7s-1.9-4.7-4.7-4.7h-2.6v9.9c0 .3-.2.6-.5.6zm2-2.1c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h1c1.5 0 2.5-1.1 2.5-2.6s-1-2.6-2.5-2.6h-.5v3.7c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-4.2c0-.3.2-.5.5-.5h1c2.1 0 3.6 1.6 3.6 3.7s-1.4 3.7-3.6 3.7h-1v-.2zm15.4 1.5c0 .3-.2.5-.5.5h-5.4c-.3 0-.5-.2-.5-.5V34.3c0-.3.2-.5.5-.5h5.4c.3 0 .5.2.5.5s-.2.5-.5.5h-4.9v9.4h4.9c.2 0 .5.2.5.5zm0-8.3c0 .3-.2.5-.5.5h-2.9v1h1.8c.3 0 .5.2.5.5s-.2.5-.5.5h-2.3c-.3 0-.5-.2-.5-.5v-2.1c0-.3.2-.5.5-.5h3.3c.3.1.6.3.6.6zm-1 4.2c0 .3-.2.5-.5.5h-1.9v1h2.8c.3 0 .5.2.5.5s-.2.5-.5.5h-3.3c-.3 0-.5-.2-.5-.5v-2.1c0-.3.2-.5.5-.5h2.3c.4 0 .6.3.6.6zm12.6-4.5c-4.4 0-4.4 6.8 0 6.8 1 0 1.7-.3 2.2-.5l.3 2.3c-.7.3-1.7.5-2.4.5-7.6 0-7.6-11.3 0-11.3.8 0 1.5.1 2.2.4l-.3 2.2c-.4-.2-1-.4-2-.4zm9.8 9L95 40.8h-1.1v4.3h-2.2V33.9h4.4c4 0 4.4 5.6 1.1 6.6l2.6 4.6h-2.6zm-3.3-6.4h2c1.5 0 1.5-2.5 0-2.5h-2v2.5z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#12100b",
    d: "M106.6 33.8c7.7 0 7.7 11.5 0 11.5s-7.7-11.5 0-11.5zm0 2.3c-4.5 0-4.5 6.9 0 6.9s4.5-6.9 0-6.9zm11.3 9.2l-4.6-11.4h2.5l2.2 5.7 2.2-5.6h.1l2.2 5.6 2.2-5.7h2.5l-4.6 11.3h-.4l-2-4.9-2 5h-.3zm14.1-.2h-3.3V33.9h3.3c7.4 0 7.4 11.2 0 11.2zm-1.1-8.9v6.7h1.1c4.3 0 4.3-6.7 0-6.7h-1.1zm11 0v2.2h2.8v2.2h-2.8v4.5h-2.2V33.9h5.6v2.2l-3.4.1zm5.1 5v-7.3h2.2v7.3c0 2.3 3.6 2.3 3.6 0v-7.3h2.2v7.3c0 5.3-8 5.3-8 0zm12.7 3.9h-2.2V33.7h.6l5.6 6.6V34h2.2v11.4h-.5l-5.6-6.3-.1 6zm12.1 0h-3.3V33.9h3.3c7.4 0 7.4 11.2 0 11.2zm-1.1-8.9v6.7h1.1c4.3 0 4.3-6.7 0-6.7h-1.1zm8.8 8.9V33.9h2.2v11.2h-2.2zm7 0h-2.2V33.7h.6l5.6 6.6V34h2.2v11.4h-.6l-5.6-6.3v6zm13.9.1c-7.4 0-7.7-11 0-11.3 1.3 0 2.4.3 2.6.4l-.3 2.3c-.4-.2-1.2-.4-2.3-.4-4.5.2-4.3 6.8 0 6.8.2 0 .4 0 .6-.1v-3.4h2.3v4.9c-.9.5-1.9.8-2.9.8z"
  }));
};

exports.MaisonDeCrowdfundingLogo = MaisonDeCrowdfundingLogo;
MaisonDeCrowdfundingLogo.propTypes = {
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
MaisonDeCrowdfundingLogo.defaultProps = {
  width: null,
  height: null
};
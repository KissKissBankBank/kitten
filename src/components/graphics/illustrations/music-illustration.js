"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.MusicIllustration = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const MusicIllustration = _ref => {
  let {
    title,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    xmlns: "http://www.w3.org/2000/svg",
    width: "197",
    height: "323",
    fill: "none",
    viewBox: "0 0 197 323"
  }, props), title && /*#__PURE__*/_react.default.createElement("title", null, title), /*#__PURE__*/_react.default.createElement("path", {
    d: "m195.29 225.091-2.276.247-9.077.977c-.693-6.418-4.662-12.843-11.488-18.583a50.743 50.743 0 0 1-2.561-2.315v-.004a56.353 56.353 0 0 1-9.013-11.465l-.607 106.507c.285 7.796-6.036 14.81-15.479 18.43a40.114 40.114 0 0 1-12.606 2.548c-15.981.678-29.315-7.651-29.779-18.603-.452-10.616 11.347-19.805 26.628-20.977h.004c.483-.038.966-.064 1.457-.086 6.564-.366 13.11 1 18.98 3.961l-.026-129.906h11.413c.015.281 1.636 28.612 18.943 43.17 11.522 9.695 14.78 19.543 15.487 26.099Z",
    fill: "#FFB8CB"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m195.29 225.091-2.276.247-9.077.977c-.693-6.418-4.662-12.843-11.488-18.583a50.743 50.743 0 0 1-2.561-2.315v-.004a56.353 56.353 0 0 1-9.013-11.465l-.607 106.507c.285 7.796-6.036 14.81-15.479 18.43a40.114 40.114 0 0 1-12.606 2.548c-15.981.678-29.315-7.651-29.779-18.603-.452-10.616 11.347-19.805 26.628-20.977h.004c.483-.038.966-.064 1.457-.086 7.171-.304 18.98 3.961 18.98 3.961l-.026-129.906h11.413c.015.281 1.636 28.612 18.943 43.17 11.522 9.695 14.78 19.54 15.487 26.099Z",
    fill: "#FFB8CB",
    stroke: "#000",
    strokeWidth: "3",
    strokeMiterlimit: "10"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m152.83 114.413-3.695.401-14.727 1.586c-1.124-10.416-7.565-20.843-18.643-30.158a82.285 82.285 0 0 1-4.157-3.756v-.006a91.498 91.498 0 0 1-14.626-18.606l-.984 172.845c.461 12.652-9.796 24.034-25.122 29.91a65.07 65.07 0 0 1-20.46 4.132c-25.935 1.1-47.575-12.414-48.328-30.189-.732-17.228 18.415-32.141 43.214-34.042h.006a75.744 75.744 0 0 1 2.364-.14c11.637-.492 22.393 1.975 30.803 6.429L78.433 2h18.521c.025.456 2.656 46.432 30.745 70.058 18.698 15.733 23.984 31.715 25.133 42.355",
    fill: "#FFB8CB"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "m152.83 114.413-3.695.401-14.727 1.586c-1.124-10.416-7.565-20.843-18.643-30.158a82.285 82.285 0 0 1-4.157-3.756v-.006a91.498 91.498 0 0 1-14.626-18.606l-.984 172.845c.461 12.652-9.796 24.034-25.122 29.91a65.07 65.07 0 0 1-20.46 4.132c-25.935 1.1-47.575-12.414-48.328-30.189-.732-17.228 18.415-32.141 43.214-34.042h.006a75.744 75.744 0 0 1 2.364-.14c11.637-.492 22.393 1.975 30.803 6.429L78.433 2h18.521c.025.456 2.656 46.432 30.745 70.058 18.696 15.733 23.983 31.714 25.131 42.355Z",
    fill: "#FFB8CB",
    stroke: "#000",
    strokeWidth: "3",
    strokeMiterlimit: "10"
  }));
};

exports.MusicIllustration = MusicIllustration;
MusicIllustration.propTypes = {
  title: _propTypes.default.string
};
MusicIllustration.defaultProps = {
  title: null
};
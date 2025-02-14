"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.LightbulbIllustration = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

const LightbulbIllustration = _ref => {
  let {
    size,
    ...props
  } = _ref;

  if (size === 'small') {
    return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
      width: 24,
      height: 33,
      viewBox: "0 0 24 33"
    }, props), /*#__PURE__*/_react.default.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/_react.default.createElement("path", {
      d: "M12.171.5c6.446 0 11.671 5.225 11.671 11.671 0 4.76-2.85 8.855-6.937 10.671l-1.02 1.53H8.458l-1.021-1.53C3.35 21.026.5 16.932.5 12.172.5 5.724 5.725.5 12.171.5z",
      fill: "#FFEBDF"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M12.171 4.479a.796.796 0 110 1.591 6.1 6.1 0 00-6.1 6.101.796.796 0 11-1.592 0A7.692 7.692 0 0112.17 4.48z",
      fill: "#FFF",
      fillRule: "nonzero"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M9.29 15.979l.073.061 2.278 2.277v3.934a.53.53 0 01-1.053.095l-.008-.095v-3.494L8.612 16.79a.53.53 0 01-.061-.677l.06-.073a.53.53 0 01.678-.061zm6.44.061a.53.53 0 01.06.677l-.06.073-1.968 1.967v3.494a.53.53 0 01-.435.522l-.095.008a.53.53 0 01-.522-.435l-.008-.095v-3.934l2.277-2.277a.53.53 0 01.75 0z",
      fill: "#222",
      fillRule: "nonzero"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M9.519 30.739a1.061 1.061 0 01-1.061-1.061V24.37h7.427v5.308c0 .586-.475 1.06-1.061 1.06h-1.061v.531a1.592 1.592 0 01-3.183 0v-.53H9.519z",
      fill: "#00B3FD"
    }), /*#__PURE__*/_react.default.createElement("path", {
      d: "M15.885 28.086v1.061H8.458v-1.06h7.427zm0-2.122v1.061H8.458v-1.06h7.427z",
      fill: "#FFF"
    })));
  }

  return /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({
    width: 62,
    height: 70,
    viewBox: "0 0 62 70"
  }, props), /*#__PURE__*/_react.default.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react.default.createElement("path", {
    d: "M31 9c12.15 0 22 9.85 22 22 0 8.973-5.372 16.691-13.075 20.114L38 54H24l-1.924-2.885C14.372 47.692 9 39.973 9 31 9 18.85 18.85 9 31 9zM7.983 43.134l1 1.732-4.33 2.5-1-1.732 4.33-2.5zm46.034 0l4.33 2.5-1 1.732-4.33-2.5 1-1.732zM62 30v2h-5v-2h5zM5 30v2H0v-2h5zm52.347-15.366l1 1.732-4.33 2.5-1-1.732 4.33-2.5zm-52.694 0l4.33 2.5-1 1.732-4.33-2.5 1-1.732zm40.981-10.98l1.732 1-2.5 4.33-1.732-1 2.5-4.33zm-29.268 0l2.5 4.33-1.732 1-2.5-4.33 1.732-1zM32 0v5h-2V0h2z",
    fill: "#FFEBDE"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M31 16.5a1.5 1.5 0 010 3c-6.351 0-11.5 5.149-11.5 11.5a1.5 1.5 0 01-3 0c0-8.008 6.492-14.5 14.5-14.5z",
    fill: "#FFF",
    fillRule: "nonzero"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M25.613 38.21l.094.083L30 42.586V50a1 1 0 01-1.993.117L28 50v-6.585l-3.707-3.708a1 1 0 01-.083-1.32l.083-.094a1 1 0 011.32-.083zm12.094.083a1 1 0 01.083 1.32l-.083.094L34 43.414V50a1 1 0 01-.883.993L33 51a1 1 0 01-.993-.883L32 50v-7.414l4.293-4.293a1 1 0 011.414 0z",
    fill: "#222",
    fillRule: "nonzero"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M26 66a2 2 0 01-2-2v-1h14v1a2 2 0 01-2 2h-2v1a3 3 0 01-6 0v-1h-2zm12-7v2H24v-2h14zm0-5v3H24v-3h14z",
    fill: "#00B3FD"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "#FFF",
    d: "M24 57h14v2H24zM24 61h14v2H24z"
  })));
};

exports.LightbulbIllustration = LightbulbIllustration;
LightbulbIllustration.propTypes = {
  size: _propTypes.default.oneOf(['small', 'medium', null, undefined])
};
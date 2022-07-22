"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ColorSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _range = _interopRequireDefault(require("lodash/fp/range"));

var _debounce = _interopRequireDefault(require("lodash/fp/debounce"));

var _reactColorful = require("react-colorful");

var _colord = require("colord");

var _a11y = _interopRequireDefault(require("colord/plugins/a11y"));

var _textInput = require("../input/text-input");

var _typography = require("../../../helpers/utils/typography");

var _excluded = ["onChange", "value", "contrastRatio", "valid", "error", "disabled", "className", "inputProps", "children"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _colord.extend)([_a11y.default]);
var SVG_COLS_COUNT = 10;
var CONTRAST_COLOR = '#ffffff';

var StyledColorSelect = _styledComponents.default.div.withConfig({
  displayName: "color-select__StyledColorSelect",
  componentId: "sc-nceujv-0"
})([".k-Form-ColorSelect__picker{position:relative;svg{position:absolute;top:0;left:0;width:100%;height:", ";pointer-events:none;path{opacity:0.5;}}}.k-Form-ColorSelect__grid{margin-top:", ";display:grid;grid-template-columns:repeat(auto-fit,minmax(", ",1fr));gap:", ";}.k-Form-ColorSelect__swatch{border-radius:var(--border-radius-s);}.k-Form-ColorSelect__witness{grid-column:span 2;}.react-colorful{width:100%;}.react-colorful__interactive:focus-visible .react-colorful__pointer{outline-style:auto;}.react-colorful__saturation{border-radius:var(--border-radius-s) var(--border-radius-s) 0 0;}.react-colorful__last-control{border-radius:0 0 var(--border-radius-s) var(--border-radius-s);}"], (0, _typography.pxToRem)(164), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(95), (0, _typography.pxToRem)(10));

var ColorSelect = function ColorSelect(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      contrastRatio = _ref.contrastRatio,
      valid = _ref.valid,
      error = _ref.error,
      disabled = _ref.disabled,
      className = _ref.className,
      inputProps = _ref.inputProps,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var _useState = (0, _react.useState)(value),
      color = _useState[0],
      setColor = _useState[1];

  (0, _react.useEffect)(function () {
    onChange(color);
  }, [color]);
  (0, _react.useEffect)(function () {
    handleChange(value);
  }, [value]);

  var handleChange = function handleChange(changedColor) {
    if (contrastRatio === 0) {
      setColor(changedColor);
    }

    var isContrastValid = (0, _colord.colord)(changedColor).contrast(CONTRAST_COLOR) > contrastRatio;

    if (!isContrastValid) {
      var newColor = getClosestContrast({
        color: changedColor,
        CONTRAST_COLOR: CONTRAST_COLOR,
        contrastRatio: contrastRatio
      });
      setColor(newColor);
    } else {
      setColor(changedColor);
    }
  };

  var handleInputKey = function handleInputKey(event) {
    if (event.key === 'Enter') {
      handleChange(event.target.value);
    }

    if (event.target.value.length === 7) {
      handleChange(event.target.value);
    }
  };

  var getClosestContrast = function getClosestContrast(_ref2) {
    var color = _ref2.color;

    var _colord$toHsv = (0, _colord.colord)(color).toHsv(),
        h = _colord$toHsv.h,
        s = _colord$toHsv.s,
        v = _colord$toHsv.v;

    var vRange = (0, _range.default)(0)(Math.round(v));
    var newV = findClosestValidColor({
      h: h,
      s: s,
      vRange: vRange
    });
    return (0, _colord.colord)({
      h: h,
      s: s,
      v: newV
    }).toHex();
  };

  var getCoordinatesList = function getCoordinatesList(color) {
    var _colord$toHsv2 = (0, _colord.colord)(color).toHsv(),
        h = _colord$toHsv2.h;

    var coords = [];

    for (var i = 0; i <= SVG_COLS_COUNT; i++) {
      var vRange = (0, _range.default)(0)(100);
      var s = i * (100 / SVG_COLS_COUNT);
      var v = findClosestValidColor({
        h: h,
        s: s,
        vRange: vRange
      });
      coords.push("L" + i + " " + (100 - v));
    }

    return coords.join(' ');
  };

  var findClosestValidColor = function findClosestValidColor(_ref3) {
    var h = _ref3.h,
        s = _ref3.s,
        vRange = _ref3.vRange;
    var whileCount = 0; // Binary search

    while (vRange.length > 1 && whileCount < 100) {
      whileCount += 1;
      var midPoint = Math.floor(vRange.length / 2);
      var midPointColor = (0, _colord.colord)({
        h: h,
        s: s,
        v: vRange[midPoint]
      }).toHex();
      var isMidPointColorValid = (0, _colord.colord)(midPointColor).contrast(CONTRAST_COLOR) > contrastRatio;

      if (!isMidPointColorValid) {
        vRange.splice(midPoint, vRange.length);
      }

      if (isMidPointColorValid) {
        vRange.splice(0, midPoint);
      }
    }

    return vRange[0] + 1;
  };

  return /*#__PURE__*/_react.default.createElement(StyledColorSelect, (0, _extends2.default)({
    className: (0, _classnames.default)('k-Form-ColorSelect', className)
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Form-ColorSelect__picker"
  }, /*#__PURE__*/_react.default.createElement(_reactColorful.HexColorPicker, {
    color: color,
    onChange: (0, _debounce.default)(100)(handleChange)
  }), contrastRatio !== 0 && /*#__PURE__*/_react.default.createElement("svg", {
    viewBox: "0 0 " + SVG_COLS_COUNT + " 100",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/_react.default.createElement("path", {
    fill: CONTRAST_COLOR,
    d: "M0 0 " + getCoordinatesList(color) + " L" + SVG_COLS_COUNT + " 0z"
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Form-ColorSelect__grid"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Form-ColorSelect__swatch",
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/_react.default.createElement(_textInput.TextInput, (0, _extends2.default)({}, inputProps, {
    size: "small",
    center: true,
    tag: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref // eslint-disable-line no-unused-vars
    ) {
      return /*#__PURE__*/_react.default.createElement(_reactColorful.HexColorInput, props);
    }),
    color: color,
    onKeyUp: handleInputKey,
    prefixed: true
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-Form-ColorSelect__witness"
  }, children)));
};

exports.ColorSelect = ColorSelect;
ColorSelect.propTypes = {
  onChange: _propTypes.default.func,
  value: _propTypes.default.string,
  contrastRatio: _propTypes.default.number,
  inputProps: _propTypes.default.object
};
ColorSelect.defaultProps = {
  onChange: function onChange() {},
  value: '#006cff',
  contrastRatio: 4.5,
  inputProps: {}
};
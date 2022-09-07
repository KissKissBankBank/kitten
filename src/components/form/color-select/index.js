"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.ColorSelect = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

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

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _colord.extend)([_a11y.default]);
const SVG_COLS_COUNT = 10;
const CONTRAST_COLOR = '#ffffff';

const StyledColorSelect = _styledComponents.default.div.withConfig({
  displayName: "color-select__StyledColorSelect",
  componentId: "sc-nceujv-0"
})([".k-Form-ColorSelect__picker{position:relative;svg{position:absolute;top:0;left:0;width:100%;height:", ";pointer-events:none;path{opacity:0.5;}}}.k-Form-ColorSelect__grid{margin-top:", ";display:grid;grid-template-columns:repeat(auto-fit,minmax(", ",1fr));gap:", ";}.k-Form-ColorSelect__swatch{border-radius:var(--border-radius-s);}.k-Form-ColorSelect__witness{grid-column:span 2;}.react-colorful{width:100%;}.react-colorful__interactive:focus-visible .react-colorful__pointer{outline-style:auto;}.react-colorful__saturation{border-radius:var(--border-radius-s) var(--border-radius-s) 0 0;}.react-colorful__last-control{border-radius:0 0 var(--border-radius-s) var(--border-radius-s);}&.k-Form-ColorSelect--disabled{filter:grayscale(1);pointer-events:none;.react-colorful__interactive,.react-colorful__pointer{display:none;}}"], (0, _typography.pxToRem)(164), (0, _typography.pxToRem)(10), (0, _typography.pxToRem)(95), (0, _typography.pxToRem)(10));

const ColorSelect = _ref => {
  let {
    onChange,
    value,
    contrastRatio,
    valid,
    error,
    disabled,
    className,
    inputProps,
    children,
    ...props
  } = _ref;
  const [color, setColor] = (0, _react.useState)(value);
  (0, _react.useEffect)(() => {
    onChange(color);
  }, [color]);
  (0, _react.useEffect)(() => {
    handleChange(value);
  }, [value]);

  const handleChange = changedColor => {
    if (disabled) return;

    if (contrastRatio === 0) {
      setColor(changedColor);
    }

    const isContrastValid = (0, _colord.colord)(changedColor).contrast(CONTRAST_COLOR) > contrastRatio;

    if (!isContrastValid) {
      const newColor = getClosestContrast({
        color: changedColor,
        CONTRAST_COLOR,
        contrastRatio
      });
      setColor(newColor);
    } else {
      setColor(changedColor);
    }
  };

  const handleInputKey = event => {
    if (event.key === 'Enter') {
      handleChange(event.target.value);
    }

    if (event.target.value.length === 7) {
      handleChange(event.target.value);
    }
  };

  const getClosestContrast = _ref2 => {
    let {
      color
    } = _ref2;
    const {
      h,
      s,
      v
    } = (0, _colord.colord)(color).toHsv();
    let vRange = (0, _range.default)(0)(Math.round(v));
    const newV = findClosestValidColor({
      h,
      s,
      vRange
    });
    return (0, _colord.colord)({
      h,
      s,
      v: newV
    }).toHex();
  };

  const getCoordinatesList = color => {
    const {
      h
    } = (0, _colord.colord)(color).toHsv();
    const coords = [];

    for (let i = 0; i <= SVG_COLS_COUNT; i++) {
      let vRange = (0, _range.default)(0)(100);
      const s = i * (100 / SVG_COLS_COUNT);
      const v = findClosestValidColor({
        h,
        s,
        vRange
      });
      coords.push("L" + i + " " + (100 - v));
    }

    return coords.join(' ');
  };

  const findClosestValidColor = _ref3 => {
    let {
      h,
      s,
      vRange
    } = _ref3;
    let whileCount = 0; // Binary search

    while (vRange.length > 1 && whileCount < 100) {
      whileCount += 1;
      const midPoint = Math.floor(vRange.length / 2);
      const midPointColor = (0, _colord.colord)({
        h,
        s,
        v: vRange[midPoint]
      }).toHex();
      const isMidPointColorValid = (0, _colord.colord)(midPointColor).contrast(CONTRAST_COLOR) > contrastRatio;

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
    className: (0, _classnames.default)('k-Form-ColorSelect', className, {
      'k-Form-ColorSelect--disabled': disabled
    })
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
    disabled: disabled,
    size: "small",
    center: true,
    tag: /*#__PURE__*/(0, _react.forwardRef)((props, ref // eslint-disable-line no-unused-vars
    ) => /*#__PURE__*/_react.default.createElement(_reactColorful.HexColorInput, props)),
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
  inputProps: _propTypes.default.object,
  disabled: _propTypes.default.bool
};
ColorSelect.defaultProps = {
  onChange: () => {},
  value: '#006cff',
  contrastRatio: 4.5,
  inputProps: {},
  disabled: false
};
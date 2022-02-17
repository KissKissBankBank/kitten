import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["onChange", "value", "contrastRatio", "valid", "error", "disabled", "className", "inputProps", "children"];
import React, { forwardRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import range from 'lodash/fp/range';
import debounce from 'lodash/fp/debounce';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import { colord, extend } from 'colord';
import a11yPlugin from 'colord/plugins/a11y';
import { TextInput } from '../input/text-input';
import { pxToRem } from '../../../helpers/utils/typography';
extend([a11yPlugin]);
var SVG_COLS_COUNT = 10;
var CONTRAST_COLOR = '#ffffff';
var StyledColorSelect = styled.div.withConfig({
  displayName: "color-select__StyledColorSelect",
  componentId: "sc-nceujv-0"
})([".k-Form-ColorSelect__picker{position:relative;svg{position:absolute;top:0;left:0;width:100%;height:", ";pointer-events:none;path{opacity:0.5;}}}.k-Form-ColorSelect__grid{margin-top:", ";display:grid;grid-template-columns:repeat(auto-fit,minmax(", ",1fr));gap:", ";}.k-Form-ColorSelect__swatch{border-radius:var(--border-radius-s);}.k-Form-ColorSelect__witness{grid-column:span 2;}.react-colorful{width:100%;}.react-colorful__interactive:focus-visible .react-colorful__pointer{outline-style:auto;}.react-colorful__saturation{border-radius:var(--border-radius-s) var(--border-radius-s) 0 0;}.react-colorful__last-control{border-radius:0 0 var(--border-radius-s) var(--border-radius-s);}"], pxToRem(164), pxToRem(10), pxToRem(95), pxToRem(10));
export var ColorSelect = function ColorSelect(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      contrastRatio = _ref.contrastRatio,
      valid = _ref.valid,
      error = _ref.error,
      disabled = _ref.disabled,
      className = _ref.className,
      inputProps = _ref.inputProps,
      children = _ref.children,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var _useState = useState(value),
      color = _useState[0],
      setColor = _useState[1];

  useEffect(function () {
    onChange(color);
  }, [color]);
  useEffect(function () {
    handleChange(value);
  }, [value]);

  var handleChange = function handleChange(changedColor) {
    if (contrastRatio === 0) {
      setColor(changedColor);
    }

    var isContrastValid = colord(changedColor).contrast(CONTRAST_COLOR) > contrastRatio;

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

    var _colord$toHsv = colord(color).toHsv(),
        h = _colord$toHsv.h,
        s = _colord$toHsv.s,
        v = _colord$toHsv.v;

    var vRange = range(0)(Math.round(v));
    var newV = findClosestValidColor({
      h: h,
      s: s,
      vRange: vRange
    });
    return colord({
      h: h,
      s: s,
      v: newV
    }).toHex();
  };

  var getCoordinatesList = function getCoordinatesList(color) {
    var _colord$toHsv2 = colord(color).toHsv(),
        h = _colord$toHsv2.h;

    var coords = [];

    for (var i = 0; i <= SVG_COLS_COUNT; i++) {
      var vRange = range(0)(100);
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
      var midPointColor = colord({
        h: h,
        s: s,
        v: vRange[midPoint]
      }).toHex();
      var isMidPointColorValid = colord(midPointColor).contrast(CONTRAST_COLOR) > contrastRatio;

      if (!isMidPointColorValid) {
        vRange.splice(midPoint, vRange.length);
      }

      if (isMidPointColorValid) {
        vRange.splice(0, midPoint);
      }
    }

    return vRange[0] + 1;
  };

  return /*#__PURE__*/React.createElement(StyledColorSelect, _extends({
    className: classNames('k-Form-ColorSelect', className)
  }, props), /*#__PURE__*/React.createElement("div", {
    className: "k-Form-ColorSelect__picker"
  }, /*#__PURE__*/React.createElement(HexColorPicker, {
    color: color,
    onChange: debounce(100)(handleChange)
  }), contrastRatio !== 0 && /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 " + SVG_COLS_COUNT + " 100",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("path", {
    fill: CONTRAST_COLOR,
    d: "M0 0 " + getCoordinatesList(color) + " L" + SVG_COLS_COUNT + " 0z"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "k-Form-ColorSelect__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-Form-ColorSelect__swatch",
    style: {
      backgroundColor: color
    }
  }), /*#__PURE__*/React.createElement(TextInput, _extends({}, inputProps, {
    size: "tiny",
    center: true,
    as: /*#__PURE__*/forwardRef(function (props, ref // eslint-disable-line no-unused-vars
    ) {
      return /*#__PURE__*/React.createElement(HexColorInput, props);
    }),
    color: color,
    onKeyUp: handleInputKey,
    prefixed: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-Form-ColorSelect__witness"
  }, children)));
};
ColorSelect.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  contrastRatio: PropTypes.number,
  inputProps: PropTypes.object
};
ColorSelect.defaultProps = {
  onChange: function onChange() {},
  value: '#006cff',
  contrastRatio: 4.5,
  inputProps: {}
};
import _extends from "@babel/runtime/helpers/extends";
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
const SVG_COLS_COUNT = 10;
const CONTRAST_COLOR = '#ffffff';
const StyledColorSelect = styled.div.withConfig({
  displayName: "color-select__StyledColorSelect",
  componentId: "sc-nceujv-0"
})([".k-Form-ColorSelect__picker{position:relative;svg{position:absolute;top:0;left:0;width:100%;height:", ";pointer-events:none;path{opacity:0.5;}}}.k-Form-ColorSelect__grid{margin-top:", ";display:grid;grid-template-columns:repeat(auto-fit,minmax(", ",1fr));gap:", ";}.k-Form-ColorSelect__swatch{border-radius:var(--border-radius-s);}.k-Form-ColorSelect__witness{grid-column:span 2;}.react-colorful{width:100%;}.react-colorful__interactive:focus-visible .react-colorful__pointer{outline-style:auto;}.react-colorful__saturation{border-radius:var(--border-radius-s) var(--border-radius-s) 0 0;}.react-colorful__last-control{border-radius:0 0 var(--border-radius-s) var(--border-radius-s);}&.k-Form-ColorSelect--disabled{filter:grayscale(1);pointer-events:none;.react-colorful__interactive,.react-colorful__pointer{display:none;}}"], pxToRem(164), pxToRem(10), pxToRem(95), pxToRem(10));
export const ColorSelect = _ref => {
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
  const [color, setColor] = useState(value);
  useEffect(() => {
    onChange(color);
  }, [color]);
  useEffect(() => {
    handleChange(value);
  }, [value]);

  const handleChange = changedColor => {
    if (disabled) return;

    if (contrastRatio === 0) {
      setColor(changedColor);
    }

    const isContrastValid = colord(changedColor).contrast(CONTRAST_COLOR) > contrastRatio;

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
    } = colord(color).toHsv();
    let vRange = range(0)(Math.round(v));
    const newV = findClosestValidColor({
      h,
      s,
      vRange
    });
    return colord({
      h,
      s,
      v: newV
    }).toHex();
  };

  const getCoordinatesList = color => {
    const {
      h
    } = colord(color).toHsv();
    const coords = [];

    for (let i = 0; i <= SVG_COLS_COUNT; i++) {
      let vRange = range(0)(100);
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
      const midPointColor = colord({
        h,
        s,
        v: vRange[midPoint]
      }).toHex();
      const isMidPointColorValid = colord(midPointColor).contrast(CONTRAST_COLOR) > contrastRatio;

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
    className: classNames('k-Form-ColorSelect', className, {
      'k-Form-ColorSelect--disabled': disabled
    })
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
    disabled: disabled,
    size: "small",
    center: true,
    tag: /*#__PURE__*/forwardRef((props, ref // eslint-disable-line no-unused-vars
    ) => /*#__PURE__*/React.createElement(HexColorInput, props)),
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
  inputProps: PropTypes.object,
  disabled: PropTypes.bool
};
ColorSelect.defaultProps = {
  onChange: () => {},
  value: '#006cff',
  contrastRatio: 4.5,
  inputProps: {},
  disabled: false
};
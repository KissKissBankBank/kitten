import { css } from 'styled-components';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ScreenConfig } from '../../../../constants/screen-config';
var strokeModifiers = [{
  name: 'primary',
  mobile: {
    width: 40,
    height: 6,
    top: 20,
    bottom: 40
  },
  tablet: {
    width: 50,
    height: 6,
    top: 20,
    bottom: 40
  },
  desktop: {
    width: 50,
    height: 6,
    top: 20,
    bottom: 40
  }
}, {
  name: 'secondary',
  mobile: {
    width: 30,
    height: 4,
    top: 15,
    bottom: 30
  },
  tablet: {
    width: 40,
    height: 6,
    top: 20,
    bottom: 40
  },
  desktop: {
    width: 50,
    height: 6,
    top: 20,
    bottom: 40
  }
}, {
  name: 'tertiary',
  mobile: {
    width: 30,
    height: 4,
    top: 15,
    bottom: 30
  },
  tablet: {
    width: 30,
    height: 4,
    top: 15,
    bottom: 30
  },
  desktop: {
    width: 40,
    height: 6,
    top: 20,
    bottom: 40
  }
}, {
  name: 'quaternary',
  mobile: {
    width: 30,
    height: 4,
    top: 15,
    bottom: 30
  },
  tablet: {
    width: 30,
    height: 4,
    top: 15,
    bottom: 30
  },
  desktop: {
    width: 30,
    height: 4,
    top: 15,
    bottom: 30
  }
}, {
  name: 'quinary',
  mobile: {
    width: 30,
    height: 4,
    top: 15,
    bottom: 30
  },
  tablet: {
    width: 30,
    height: 4,
    top: 15,
    bottom: 30
  },
  desktop: {
    width: 0,
    height: 0,
    top: 0,
    bottom: 10
  }
}, {
  name: 'senary',
  mobile: {
    width: 0,
    height: 0,
    top: 0,
    bottom: 10
  },
  tablet: {
    width: 0,
    height: 0,
    top: 0,
    bottom: 10
  },
  desktop: {
    width: 30,
    height: 4,
    top: 15,
    bottom: 30
  }
}, {
  name: 'septenary',
  mobile: {
    width: 0,
    height: 0,
    top: 0,
    bottom: 5
  },
  tablet: {
    width: 0,
    height: 0,
    top: 0,
    bottom: 10
  },
  desktop: {
    width: 0,
    height: 0,
    top: 0,
    bottom: 10
  }
}];
export var strokeModifierStyles = function strokeModifierStyles(prefix) {
  return css(["", " @media (min-width:", "){", "}@media (min-width:", "){", "}"], strokeModifiers.map(function (key) {
    return css(["", "{width:", ";height:", ";margin-top:", ";margin-bottom:", ";}"], "".concat(prefix, "--").concat(key.name), pxToRem(key.mobile.width), pxToRem(key.mobile.height), pxToRem(key.mobile.top), pxToRem(key.mobile.bottom));
  }), pxToRem(ScreenConfig.S.min), strokeModifiers.map(function (key) {
    return css(["", "{width:", ";height:", ";margin-top:", ";margin-bottom:", ";}"], "".concat(prefix, "--").concat(key.name), pxToRem(key.tablet.width), pxToRem(key.tablet.height), pxToRem(key.tablet.top), pxToRem(key.tablet.bottom));
  }), pxToRem(ScreenConfig.L.min), strokeModifiers.map(function (key) {
    return css(["", "{width:", ";height:", ";margin-top:", ";margin-bottom:", ";}"], "".concat(prefix, "--").concat(key.name), pxToRem(key.desktop.width), pxToRem(key.desktop.height), pxToRem(key.desktop.top), pxToRem(key.desktop.bottom));
  }));
};
export var strokeModifierStylesWithoutMargin = function strokeModifierStylesWithoutMargin(prefix) {
  return css(["", " @media (min-width:", "){", "}@media (min-width:", "){", "}"], strokeModifiers.map(function (key) {
    return css(["", "{width:", ";height:", ";}"], "".concat(prefix, "--").concat(key.name), pxToRem(key.mobile.width), pxToRem(key.mobile.height));
  }), pxToRem(ScreenConfig.S.min), strokeModifiers.map(function (key) {
    return css(["", "{width:", ";height:", ";}"], "".concat(prefix, "--").concat(key.name), pxToRem(key.tablet.width), pxToRem(key.tablet.height));
  }), pxToRem(ScreenConfig.L.min), strokeModifiers.map(function (key) {
    return css(["", "{width:", ";height:", ";}"], "".concat(prefix, "--").concat(key.name), pxToRem(key.desktop.width), pxToRem(key.desktop.height));
  }));
};
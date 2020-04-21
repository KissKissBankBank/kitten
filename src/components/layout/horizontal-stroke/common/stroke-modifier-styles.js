"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.strokeModifierStyles = void 0;

var _styledComponents = require("styled-components");

var _typography = require("../../../../helpers/utils/typography");

var _screenConfig = require("../../../../constants/screen-config");

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

var strokeModifierStyles = function strokeModifierStyles(prefix) {
  return strokeModifiers.map(function (key) {
    return (0, _styledComponents.css)(["", "{width:", ";height:", ";margin-top:", ";margin-bottom:", ";@media (min-width:", "){width:", ";height:", ";margin-top:", ";margin-bottom:", ";}@media (min-width:", "){width:", ";height:", ";margin-top:", ";margin-bottom:", ";}}"], ".".concat(prefix, "--").concat(key.name), (0, _typography.pxToRem)(key.mobile.width), (0, _typography.pxToRem)(key.mobile.height), (0, _typography.pxToRem)(key.mobile.top), (0, _typography.pxToRem)(key.mobile.bottom), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.S.min), (0, _typography.pxToRem)(key.tablet.width), (0, _typography.pxToRem)(key.tablet.height), (0, _typography.pxToRem)(key.tablet.top), (0, _typography.pxToRem)(key.tablet.bottom), (0, _typography.pxToRem)(_screenConfig.ScreenConfig.L.min), (0, _typography.pxToRem)(key.desktop.width), (0, _typography.pxToRem)(key.desktop.height), (0, _typography.pxToRem)(key.desktop.top), (0, _typography.pxToRem)(key.desktop.bottom));
  });
};

exports.strokeModifierStyles = strokeModifierStyles;
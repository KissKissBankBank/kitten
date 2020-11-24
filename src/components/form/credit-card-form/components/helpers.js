"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCodeFormat = exports.withCode = exports.getCreditCardFormat = exports.getIconSvgStringByType = exports.getCreditCardType = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _isEmpty = _interopRequireDefault(require("lodash/fp/isEmpty"));

var _max = _interopRequireDefault(require("lodash/fp/max"));

var _creditCardType = _interopRequireWildcard(require("credit-card-type"));

var _server = require("react-dom/server");

var _cbIcon = require("../../../icons/cb-icon");

var _visaIcon = require("../../../icons/visa-icon");

var _mastercardIcon = require("../../../icons/mastercard-icon");

var _maestroIcon = require("../../../icons/maestro-icon");

var _bancontactIcon = require("../../../icons/bancontact-icon");

_creditCardType.default.addCard({
  niceType: 'Bancontact',
  type: 'bcmc',
  patterns: [6703],
  gaps: [4, 8, 12],
  lengths: [16],
  code: null
});

var creditCardTypes = (0, _extends2.default)({}, _creditCardType.types, {
  BANCONTACT: 'bcmc'
});

var getCreditCardType = function getCreditCardType(number) {
  var types = (0, _creditCardType.default)(number);
  return (0, _isEmpty.default)(types) ? {} : types[0];
};

exports.getCreditCardType = getCreditCardType;

var getIconSvgStringByType = function getIconSvgStringByType(type) {
  var svg;

  switch (type) {
    case creditCardTypes.VISA:
      svg = /*#__PURE__*/_react.default.createElement(_visaIcon.VisaIcon, {
        height: "15"
      });
      break;

    case creditCardTypes.MASTERCARD:
      svg = /*#__PURE__*/_react.default.createElement(_mastercardIcon.MasterCardIcon, {
        height: "15"
      });
      break;

    case creditCardTypes.MAESTRO:
      svg = /*#__PURE__*/_react.default.createElement(_maestroIcon.MaestroIcon, {
        height: "15"
      });
      break;

    case creditCardTypes.BANCONTACT:
      svg = /*#__PURE__*/_react.default.createElement(_bancontactIcon.BancontactIcon, {
        height: "15"
      });
      break;

    default:
      svg = /*#__PURE__*/_react.default.createElement(_cbIcon.CbIcon, {
        height: "15"
      });
      break;
  }

  return encodeURIComponent((0, _server.renderToStaticMarkup)(svg));
};

exports.getIconSvgStringByType = getIconSvgStringByType;

var getCreditCardFormat = function getCreditCardFormat(type) {
  var maxLength = (0, _max.default)(type.lengths) || 0;
  if (!maxLength) return '#### #### #### ####';
  return Array(maxLength).fill('#').map(function (v, i) {
    return type.gaps.includes(i + 1) ? "".concat(v, " ") : v;
  }).join('');
};

exports.getCreditCardFormat = getCreditCardFormat;

var withCode = function withCode(number) {
  var type = getCreditCardType(number);
  return number ? !(0, _isEmpty.default)(type.code) : true;
};

exports.withCode = withCode;

var getCodeFormat = function getCodeFormat(number) {
  var type = getCreditCardType(number);
  return number ? Array(type.code.size).fill('#').join('') : '###';
};

exports.getCodeFormat = getCodeFormat;
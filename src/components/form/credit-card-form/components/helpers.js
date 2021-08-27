"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

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

var _cbIcon = require("../../../graphics/icons/cb-icon");

var _visaIcon = require("../../../graphics/icons/visa-icon");

var _mastercardIcon = require("../../../graphics/icons/mastercard-icon");

var _maestroIcon = require("../../../graphics/icons/maestro-icon");

var _bancontactIcon = require("../../../graphics/icons/bancontact-icon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
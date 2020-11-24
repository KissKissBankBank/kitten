import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import isEmpty from 'lodash/fp/isEmpty';
import max from 'lodash/fp/max';
import creditCardType, { types } from 'credit-card-type';
import { renderToStaticMarkup } from 'react-dom/server';
import { CbIcon } from '../../../icons/cb-icon';
import { VisaIcon } from '../../../icons/visa-icon';
import { MasterCardIcon } from '../../../icons/mastercard-icon';
import { MaestroIcon } from '../../../icons/maestro-icon';
import { BancontactIcon } from '../../../icons/bancontact-icon';
creditCardType.addCard({
  niceType: 'Bancontact',
  type: 'bcmc',
  patterns: [6703],
  gaps: [4, 8, 12],
  lengths: [16],
  code: null
});

var creditCardTypes = _extends({}, types, {
  BANCONTACT: 'bcmc'
});

export var getCreditCardType = function getCreditCardType(number) {
  var types = creditCardType(number);
  return isEmpty(types) ? {} : types[0];
};
export var getIconSvgStringByType = function getIconSvgStringByType(type) {
  var svg;

  switch (type) {
    case creditCardTypes.VISA:
      svg = /*#__PURE__*/React.createElement(VisaIcon, {
        height: "15"
      });
      break;

    case creditCardTypes.MASTERCARD:
      svg = /*#__PURE__*/React.createElement(MasterCardIcon, {
        height: "15"
      });
      break;

    case creditCardTypes.MAESTRO:
      svg = /*#__PURE__*/React.createElement(MaestroIcon, {
        height: "15"
      });
      break;

    case creditCardTypes.BANCONTACT:
      svg = /*#__PURE__*/React.createElement(BancontactIcon, {
        height: "15"
      });
      break;

    default:
      svg = /*#__PURE__*/React.createElement(CbIcon, {
        height: "15"
      });
      break;
  }

  return encodeURIComponent(renderToStaticMarkup(svg));
};
export var getCreditCardFormat = function getCreditCardFormat(type) {
  var maxLength = max(type.lengths) || 0;
  if (!maxLength) return '#### #### #### ####';
  return Array(maxLength).fill('#').map(function (v, i) {
    return type.gaps.includes(i + 1) ? "".concat(v, " ") : v;
  }).join('');
};
export var withCode = function withCode(number) {
  var type = getCreditCardType(number);
  return number ? !isEmpty(type.code) : true;
};
export var getCodeFormat = function getCodeFormat(number) {
  var type = getCreditCardType(number);
  return number ? Array(type.code.size).fill('#').join('') : '###';
};
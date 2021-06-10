import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { TextInputWithUnit } from '../../../form/text-input-with-unit';
export var Input = function Input(props) {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isInputEmpty = _useState2[0],
      setEmptyInput = _useState2[1];

  return /*#__PURE__*/React.createElement(TextInputWithUnit, _extends({
    wrapperProps: {
      className: classNames({
        'k-ContributionCard__inputWrapper--isEmpty': isInputEmpty
      })
    },
    variant: "orion"
  }, props, {
    className: classNames('k-ContributionCard__input', props.className),
    onChange: function onChange(event) {
      var _event$target, _event$target$value;

      setEmptyInput(((_event$target = event.target) === null || _event$target === void 0 ? void 0 : (_event$target$value = _event$target.value) === null || _event$target$value === void 0 ? void 0 : _event$target$value.length) === 0);
    }
  }));
};
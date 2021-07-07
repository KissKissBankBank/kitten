import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../../../../components/buttons/button';
import { CheckedCircleIcon } from '../../../icons/checked-circle-icon';
import COLORS from '../../../../constants/colors-config';
export var Action = function Action(_ref) {
  var isInputValid = _ref.isInputValid,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, ["isInputValid", "title"]);

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, _extends({
    borderRadius: 4,
    type: "submit"
  }, props, {
    className: classNames('k-ContributionCard__action', {
      'k-ContributionCard__actionHide': isInputValid
    }, props.className)
  })), isInputValid && /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    bgColor: COLORS.valid,
    color: COLORS.background1,
    title: title
  }));
};
Action.defaultProps = {
  isInputValid: false,
  title: ""
};
Action.propTypes = {
  isInputValid: PropTypes.bool,
  title: PropTypes.string
};
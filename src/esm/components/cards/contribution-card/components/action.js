import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../../../../components/buttons/button';
import { CheckedCircleIcon } from '../../../icons/checked-circle-icon';
import COLORS from '../../../../constants/colors-config';
import { Context } from '../context';
export var Action = function Action(_ref) {
  var isInputValid = _ref.isInputValid,
      title = _ref.title,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["isInputValid", "title", "className"]);

  var _useContext = useContext(Context),
      isInputEmpty = _useContext.isInputEmpty;

  return /*#__PURE__*/React.createElement(React.Fragment, null, isInputValid ? /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    bgColor: COLORS.valid,
    color: COLORS.background1,
    title: title
  }) : /*#__PURE__*/React.createElement(Button, _extends({
    borderRadius: 4,
    type: "submit",
    className: classNames('k-ContributionCard__action', className),
    modifier: "helium",
    disabled: isInputEmpty
  }, props)));
};
Action.defaultProps = {
  isInputValid: false,
  title: ''
};
Action.propTypes = {
  isInputValid: PropTypes.bool,
  title: PropTypes.string
};
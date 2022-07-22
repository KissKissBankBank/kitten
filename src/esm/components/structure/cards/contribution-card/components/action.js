import _extends from "@babel/runtime/helpers/extends";
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from '../../../../action/button';
import { CheckedCircleIcon } from '../../../../graphics/icons/checked-circle-icon';
import COLORS from '../../../../../constants/colors-config';
import { Context } from '../context';
export const Action = _ref => {
  let {
    isInputValid,
    title,
    className,
    ...props
  } = _ref;
  const {
    isInputEmpty
  } = useContext(Context);
  return /*#__PURE__*/React.createElement(React.Fragment, null, isInputValid ? /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    bgColor: COLORS.valid,
    color: COLORS.background1,
    title: title
  }) : /*#__PURE__*/React.createElement(Button, _extends({
    type: "submit",
    className: classNames('k-ContributionCard__action', className),
    modifier: "helium",
    disabled: isInputEmpty,
    fit: "content"
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
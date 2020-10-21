import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Uploader } from '../../../components/uploaders/uploader';
import { Button } from '../../../components/buttons/button';
import { ButtonIcon } from '../../../components/buttons/button-icon';
import { CrossIcon } from '../../../components/icons/cross-icon';

var Theme = function Theme(props) {
  var handleClick = props.disabled ? null : props.onCancel;
  var deleteButton = props.deletable && props.fileName ? /*#__PURE__*/React.createElement(ButtonIcon, {
    className: "k-SimpleUploader__buttonIcon",
    size: "nano",
    disabled: props.disabled,
    onClick: handleClick
  }, /*#__PURE__*/React.createElement(CrossIcon, {
    className: "k-ButtonIcon__svg"
  })) : null;
  return /*#__PURE__*/React.createElement("div", {
    className: "k-SimpleUploader"
  }, /*#__PURE__*/React.createElement(Button, {
    size: "tiny",
    type: "button",
    className: "k-SimpleUploader__button",
    disabled: props.disabled,
    onClick: props.onClick
  }, props.buttonLabel), /*#__PURE__*/React.createElement("div", {
    className: "k-SimpleUploader__link"
  }, /*#__PURE__*/React.createElement("span", {
    className: "k-SimpleUploader__text"
  }, props.fileName), deleteButton));
};

Theme.defaultProps = {
  buttonLabel: 'Choose a file',
  fileName: null,
  onClick: function onClick() {},
  onCancel: function onCancel() {},
  disabled: false,
  deletable: true
};
export var SimpleUploader = function SimpleUploader(props) {
  return /*#__PURE__*/React.createElement(Uploader, _extends({}, props, {
    theme: Theme
  }));
};
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../constants/colors-config';
import { pxToRem } from '../../../helpers/utils/typography';
import { Button } from '../../../components/buttons/button/button';
import { modifierStyles } from '../../../components/buttons/button/helpers/modifier-styles';
import { Text } from '../../../components/typography/text';
import classNames from 'classnames';
import { UploadIcon } from '../../../components/icons/upload-icon';
import { CheckedCircleIcon } from '../../../components/icons/checked-circle-icon';
import { CrossCircleIcon } from '../../../components/icons/cross-circle-icon';
import { ClockCircleIcon } from '../../../components/icons/clock-circle-icon';
import { CrossIcon } from '../../../components/icons/cross-icon';
import { VisuallyHidden } from '../../../components/accessibility/visually-hidden';
import { Loader } from '../../../components/loaders/loader';
var StyledBasicUploader = styled.div.withConfig({
  displayName: "basic-uploader__StyledBasicUploader",
  componentId: "sc-1t7apx8-0"
})(["input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{background-color:", ";border-color:", ";color:", ";svg,path{fill:", ";}}&:not(.k-BasicUploader--loading){input[type='file']:disabled + label{border-color:", ";background-color:", ";color:", ";pointer-events:none;svg,path{fill:", ";}}}.k-BasicUploader__statusBlock{margin-top:", ";display:flex;& > * + *{margin-left:", ";}}.k-BasicUploader__cancelButton{width:", ";height:", ";cursor:pointer;padding:0;display:flex;justify-content:center;align-items:center;", "}"], COLORS.primary2, COLORS.primary2, COLORS.background1, COLORS.background1, COLORS.line2, COLORS.line2, COLORS.background1, COLORS.background1, pxToRem(15), pxToRem(10), pxToRem(20), pxToRem(20), modifierStyles('beryllium'));
var statusesWithIcons = ['error', 'valid', 'wait'];
export var BasicUploader = function BasicUploader(_ref) {
  var id = _ref.id,
      _ref$buttonProps = _ref.buttonProps,
      buttonProps = _ref$buttonProps === void 0 ? {} : _ref$buttonProps,
      _ref$buttonText = _ref.buttonText,
      buttonText = _ref$buttonText === void 0 ? 'Document' : _ref$buttonText,
      _ref$canCancel = _ref.canCancel,
      canCancel = _ref$canCancel === void 0 ? false : _ref$canCancel,
      _ref$cancelButtonText = _ref.cancelButtonText,
      cancelButtonText = _ref$cancelButtonText === void 0 ? 'Cancel and reupload' : _ref$cancelButtonText,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$errorText = _ref.errorText,
      errorText = _ref$errorText === void 0 ? '' : _ref$errorText,
      _ref$fileInputProps = _ref.fileInputProps,
      fileInputProps = _ref$fileInputProps === void 0 ? {} : _ref$fileInputProps,
      _ref$fileName = _ref.fileName,
      fileName = _ref$fileName === void 0 ? '' : _ref$fileName,
      _ref$loaderAnimation = _ref.loaderAnimation,
      loaderAnimation = _ref$loaderAnimation === void 0 ? /*#__PURE__*/React.createElement(Loader, null) : _ref$loaderAnimation,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$onUpload = _ref.onUpload,
      onUpload = _ref$onUpload === void 0 ? function () {} : _ref$onUpload,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'ready' : _ref$status,
      _ref$statusText = _ref.statusText,
      statusText = _ref$statusText === void 0 ? '' : _ref$statusText,
      props = _objectWithoutProperties(_ref, ["id", "buttonProps", "buttonText", "canCancel", "cancelButtonText", "disabled", "errorText", "fileInputProps", "fileName", "loaderAnimation", "onCancel", "onUpload", "status", "statusText"]);

  var _useState = useState(status),
      _useState2 = _slicedToArray(_useState, 2),
      internalStatus = _useState2[0],
      setInternalStatus = _useState2[1];

  useEffect(function () {
    setInternalStatus(status);
  }, [status]);

  var _useState3 = useState(disabled),
      _useState4 = _slicedToArray(_useState3, 2),
      internalDisabled = _useState4[0],
      setInternalDisabled = _useState4[1];

  useEffect(function () {
    setInternalDisabled(disabled);
  }, [disabled]);

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      internalFileName = _useState6[0],
      setInternalFileName = _useState6[1];

  var _useState7 = useState(canCancel),
      _useState8 = _slicedToArray(_useState7, 2),
      internalCanCancel = _useState8[0],
      setInternalCanCancel = _useState8[1];

  useEffect(function () {
    setInternalCanCancel(canCancel);
  }, [canCancel]);
  useEffect(function () {
    if (errorText !== '') {
      setInternalStatus('error');
    }
  }, [errorText]);

  var onFileInputChange = function onFileInputChange(event) {
    var files = event.currentTarget.files;
    if (files.length < 1) return;
    var tempFileName = files[0].name;
    var tempText = files.length > 1 ? "".concat(tempFileName, " + ").concat(files.length - 1) : tempFileName;
    setInternalStatus('file-selected');
    setInternalCanCancel(true);
    setInternalFileName(tempText);
    setInternalDisabled(true);
    onUpload(event);
  };

  var onCancelButtonClick = function onCancelButtonClick(event) {
    setInternalStatus('ready');
    setInternalCanCancel(false);
    setInternalDisabled(false);
    setInternalFileName('');
    onCancel(event);
  };

  return /*#__PURE__*/React.createElement(StyledBasicUploader, _extends({}, props, {
    className: classNames('k-BasicUploader', props.className, "k-BasicUploader--".concat(internalStatus))
  }), /*#__PURE__*/React.createElement("input", _extends({}, fileInputProps, {
    type: "file",
    id: id,
    onChange: onFileInputChange,
    disabled: internalDisabled || internalStatus === 'loading'
  })), /*#__PURE__*/React.createElement(Button, _extends({
    fluid: true
  }, buttonProps, {
    as: "label",
    htmlFor: id,
    className: classNames('k-BasicUploader__button', buttonProps.className)
  }), internalStatus === 'loading' ? loaderAnimation : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(UploadIcon, {
    "aria-hidden": true,
    className: "k-BasicUploader__button__uploadIcon k-u-margin-right-singleHalf"
  }), /*#__PURE__*/React.createElement("span", null, buttonText))), internalStatus !== 'ready' && /*#__PURE__*/React.createElement("div", {
    className: "k-BasicUploader__statusBlock"
  }, internalCanCancel && /*#__PURE__*/React.createElement("button", {
    className: "k-BasicUploader__cancelButton",
    onClick: onCancelButtonClick
  }, /*#__PURE__*/React.createElement(CrossIcon, null), /*#__PURE__*/React.createElement(VisuallyHidden, null, cancelButtonText)), !internalCanCancel && statusesWithIcons.includes(internalStatus) && /*#__PURE__*/React.createElement("div", {
    className: "k-BasicUploader__statusIcon"
  }, internalStatus === 'valid' && /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    circleColor: COLORS.valid,
    checkedColor: COLORS.background1,
    width: 20,
    height: 20,
    "aria-hidden": true
  }), internalStatus === 'error' && /*#__PURE__*/React.createElement(CrossCircleIcon, {
    circleColor: COLORS.error,
    crossColor: COLORS.background1,
    width: 20,
    height: 20,
    "aria-hidden": true
  }), internalStatus === 'wait' && /*#__PURE__*/React.createElement(ClockCircleIcon, {
    circleColor: COLORS.primary1,
    clockColor: COLORS.background1,
    width: 20,
    height: 20,
    "aria-hidden": true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Text, {
    tag: "p",
    weight: "regular",
    color: internalStatus === 'error' ? 'error' : 'font1',
    size: "tiny",
    lineHeight: "normal",
    className: "k-BasicUploader__statusTitle  k-u-margin-none k-u-line-height-1-3"
  }, internalStatus === 'file-selected' ? internalFileName : errorText === '' ? fileName : errorText), /*#__PURE__*/React.createElement(Text, {
    tag: "p",
    weight: "light",
    color: internalStatus === 'error' ? 'error' : 'font1',
    size: "micro",
    lineHeight: "normal",
    className: "k-BasicUploader__statusSubtitle  k-u-margin-none k-u-margin-top-noneHalf k-u-line-height-1-3"
  }, statusesWithIcons.includes(internalStatus) && statusText))));
};
BasicUploader.propTypes = {
  id: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
  buttonText: PropTypes.string,
  canCancel: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  disabled: PropTypes.bool,
  errorText: PropTypes.string,
  fileInputProps: PropTypes.object,
  fileName: PropTypes.string,
  onCancel: PropTypes.func,
  onUpload: PropTypes.func,
  status: PropTypes.oneOf(['ready', 'error', 'valid', 'wait', 'loading']),
  statusText: PropTypes.string
};
import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Button } from '../../../action/button';
import { modifierStyles } from '../../../action/button/helpers/modifier-styles';
import { Text } from '../../../typography/text';
import classNames from 'classnames';
import { UploadIcon } from '../../../graphics/icons/upload-icon';
import { CheckedCircleIcon } from '../../../graphics/icons/checked-circle-icon';
import { CrossCircleIcon } from '../../../graphics/icons/cross-circle-icon';
import { ClockCircleIcon } from '../../../graphics/icons/clock-circle-icon';
import { CrossIcon } from '../../../graphics/icons/cross-icon';
import { VisuallyHidden } from '../../../accessibility/visually-hidden';
import { Loader } from '../../../graphics/animations/loader';
const StyledBasicUploader = styled.div.withConfig({
  displayName: "basic-uploader__StyledBasicUploader",
  componentId: "sc-5ptyqe-0"
})(["input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{background-color:", ";border-color:", ";color:", ";svg,path{fill:", ";}}input[type='file']:focus-visible + label{outline:auto;}&:not(.k-BasicUploader--loading){input[type='file']:disabled + label{border-color:", ";background-color:", ";color:", ";pointer-events:none;svg,path{fill:", ";}}}.k-BasicUploader__statusBlock{margin-top:", ";display:flex;& > * + *{margin-left:", ";}}.k-BasicUploader__cancelButton{width:", ";height:", ";cursor:pointer;padding:0;display:flex;justify-content:center;align-items:center;", "}"], COLORS.primary2, COLORS.primary2, COLORS.background1, COLORS.background1, COLORS.line2, COLORS.line2, COLORS.background1, COLORS.background1, pxToRem(15), pxToRem(10), pxToRem(20), pxToRem(20), modifierStyles('beryllium'));
const statusesWithIcons = ['error', 'valid', 'wait'];
export const BasicUploader = _ref => {
  let {
    id,
    //required
    buttonProps = {},
    buttonText = 'Document',
    canCancel = false,
    cancelButtonText = 'Cancel and reupload',
    disabled = false,
    errorText = '',
    fileInputProps = {},
    fileName = '',
    loaderAnimation = /*#__PURE__*/React.createElement(Loader, null),
    onCancel = () => {},
    onUpload = () => {},
    status = 'ready',
    statusText = '',
    ...props
  } = _ref;
  const [internalStatus, setInternalStatus] = useState(status);
  useEffect(() => {
    setInternalStatus(status);
  }, [status]);
  const [internalDisabled, setInternalDisabled] = useState(disabled);
  useEffect(() => {
    setInternalDisabled(disabled);
  }, [disabled]);
  const [internalFileName, setInternalFileName] = useState('');
  const [internalCanCancel, setInternalCanCancel] = useState(canCancel);
  useEffect(() => {
    setInternalCanCancel(canCancel);
  }, [canCancel]);
  useEffect(() => {
    if (errorText !== '') {
      setInternalStatus('error');
    }
  }, [errorText]);

  const onFileInputChange = event => {
    const files = event.currentTarget.files;
    if (files.length < 1) return;
    const tempFileName = files[0].name;
    const tempText = files.length > 1 ? tempFileName + " + " + (files.length - 1) : tempFileName;
    setInternalStatus('file-selected');
    setInternalCanCancel(true);
    setInternalFileName(tempText);
    setInternalDisabled(true);
    onUpload(event);
  };

  const onCancelButtonClick = event => {
    setInternalStatus('ready');
    setInternalCanCancel(false);
    setInternalDisabled(false);
    setInternalFileName('');
    onCancel(event);
  };

  return /*#__PURE__*/React.createElement(StyledBasicUploader, _extends({}, props, {
    className: classNames('k-BasicUploader', props.className, "k-BasicUploader--" + internalStatus)
  }), /*#__PURE__*/React.createElement("input", _extends({}, fileInputProps, {
    type: "file",
    id: id,
    onChange: onFileInputChange,
    disabled: internalDisabled || internalStatus === 'loading'
  })), /*#__PURE__*/React.createElement(Button, _extends({
    fit: "fluid"
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
    weight: "500",
    color: internalStatus === 'error' ? 'error' : 'font1',
    size: "small",
    lineHeight: "normal",
    className: "k-BasicUploader__statusTitle  k-u-margin-none k-u-line-height-1-3"
  }, internalStatus === 'file-selected' ? internalFileName : errorText === '' ? fileName : errorText), /*#__PURE__*/React.createElement(Text, {
    tag: "p",
    weight: "400",
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
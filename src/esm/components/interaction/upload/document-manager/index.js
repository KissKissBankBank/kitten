import _extends from "@babel/runtime/helpers/extends";
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Button } from '../../../action/button';
import { Text } from '../../../typography/text';
import classNames from 'classnames';
import { UploadIcon } from '../../../graphics/icons/upload-icon';
import { CheckedCircleIcon } from '../../../graphics/icons/checked-circle-icon';
import { CrossCircleIcon } from '../../../graphics/icons/cross-circle-icon';
import { ClockCircleIcon } from '../../../graphics/icons/clock-circle-icon';
import { Loader } from '../../../graphics/animations/loader';
import { DocumentIconEmpty } from '../../../graphics/icons/document-icon-empty';
import { VisuallyHidden } from '../../../accessibility/visually-hidden';
import { ScreenConfig } from '../../../../constants/screen-config';
const StyledDocumentUploader = styled.div.withConfig({
  displayName: "document-manager__StyledDocumentUploader",
  componentId: "sc-mfphy2-0"
})(["input[type='file']{border:0;clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute !important;white-space:nowrap;width:1px;}input[type='file']:focus + label{border:", " solid ", ";}input[type='file']:focus-visible + label{outline:auto;}input[type='file']:focus,input[type='file']:hover{& + label{background-color:", ";border-color:var(--color-grey-400);color:", ";svg,path{fill:", ";}}}input[type='file']:active{& + label{background-color:", ";border-color:", ";color:", ";svg,path{fill:", ";}}}input[type='file']:disabled + label{border-color:", ";background-color:", ";color:", ";pointer-events:none;svg,path{fill:", ";}}.k-DocumentManager__uploader__button{padding:", ";}.k-DocumentManager__uploader__container{display:flex;justify-content:stretch;align-items:center;width:100%;}.k-DocumentManager__uploader__documentIcon{flex:0 0 auto;margin-right:", ";align-self:flex-start;@media (max-width:", "){display:none;}}.k-DocumentManager__uploader__content{flex:1 1 auto;}.k-DocumentManager__uploader__uploadIcon{margin-left:", ";flex:0 0 auto;}"], pxToRem(1), COLORS.primary4, COLORS.background2, COLORS.font1, COLORS.font1, COLORS.primary2, COLORS.primary2, COLORS.background1, COLORS.background1, COLORS.line2, COLORS.line2, COLORS.background1, COLORS.background1, pxToRem(20), pxToRem(20), pxToRem(ScreenConfig.XS.max), pxToRem(20));
const StyledDocumentLoading = styled.div.withConfig({
  displayName: "document-manager__StyledDocumentLoading",
  componentId: "sc-mfphy2-1"
})([".k-DocumentManager__loading__button{min-height:", ";}"], pxToRem(100));
const StyledDocumentDisplay = styled.div.withConfig({
  displayName: "document-manager__StyledDocumentDisplay",
  componentId: "sc-mfphy2-2"
})([".k-DocumentManager__display__container{display:flex;justify-content:stretch;align-items:center;width:100%;}.k-DocumentManager__display__documentIcon{flex:0 0 auto;margin-right:", ";align-self:flex-start;}.k-DocumentManager__display__content{flex:1 1 auto;}.k-DocumentManager__actionButton{margin-top:", ";cursor:pointer;transition:color 0.2s;color:", ";&:hover,&:focus{color:", ";}&:focus-visible{outline:auto;}&:active{color:", ";transition:none;}}&.k-DocumentManager__display--error .k-DocumentManager__actionButton{color:", ";}"], pxToRem(20), pxToRem(10), COLORS.primary1, COLORS.primary3, COLORS.primary1, COLORS.error);
const StyledIconContainer = styled.div.withConfig({
  displayName: "document-manager__StyledIconContainer",
  componentId: "sc-mfphy2-3"
})(["position:relative;box-sizing:border-box;width:", ";height:", ";border-radius:var(--border-radius-rounded);background-color:#caf4fe;padding-top:", ";padding-left:", ";&.k-DocumentManager__iconContainer--error{background-color:", ";}&.k-DocumentManager__iconContainer--valid{background-color:", ";}.k-DocumentManager__iconContainer__statusIcon{position:absolute;right:", ";top:", ";border:var(--border-width) solid ", ";width:", ";height:", ";border-radius:var(--border-radius-rounded);}"], pxToRem(60), pxToRem(60), pxToRem(15), pxToRem(19), COLORS.error3, COLORS.tertiary2, pxToRem(-12), pxToRem(-4), COLORS.background1, pxToRem(20), pxToRem(20));
const statusesWithIcons = ['error', 'valid', 'wait'];

const IconContainer = _ref => {
  let {
    status,
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledIconContainer, {
    className: classNames('k-DocumentManager__iconContainer', "k-DocumentManager__iconContainer--" + status)
  }, children, statusesWithIcons.includes(status) && /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentManager__iconContainer__statusIcon"
  }, status === 'valid' && /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    bgColor: COLORS.valid,
    color: COLORS.background1,
    width: 20,
    height: 20
  }), status === 'error' && /*#__PURE__*/React.createElement(CrossCircleIcon, {
    bgColor: COLORS.error,
    color: COLORS.background1,
    width: 20,
    height: 20
  }), status === 'wait' && /*#__PURE__*/React.createElement(ClockCircleIcon, {
    bgColor: COLORS.primary1,
    color: COLORS.background1,
    width: 20,
    height: 20
  })));
};

export const DocumentManager = _ref2 => {
  let {
    id,
    //required
    buttonProps = {},
    buttonSubtitle = '',
    buttonTitle = '',
    canCancel = false,
    cancelButtonText = 'Upload another document',
    canReplace = false,
    disabled = false,
    displayContent = null,
    displaySubtitle = '',
    displayTitle = '',
    documentIcon = /*#__PURE__*/React.createElement(DocumentIconEmpty, null),
    fileInputProps = {},
    loaderAnimation = /*#__PURE__*/React.createElement(Loader, null),
    loaderText = '',
    onCancel = () => {},
    onUpload = () => {},
    replaceButtonText = 'Replace current',
    status = 'ready',
    ...props
  } = _ref2;
  const [internalFileName, setInternalFileName] = useState('');
  const [internalStatus, setInternalStatus] = useState(status);
  useEffect(() => {
    setInternalStatus(status);
  }, [status]);
  const [internalDisabled, setInternalDisabled] = useState(disabled);
  useEffect(() => {
    setInternalDisabled(disabled);
  }, [disabled]);

  const onFileInputChange = event => {
    const files = event.currentTarget.files;
    if (files.length < 1) return;
    const tempFileName = files[0].name;
    const tempText = files.length > 1 ? tempFileName + " + " + (files.length - 1) : tempFileName;
    setInternalStatus('file-selected');
    setInternalFileName(tempText);
    onUpload(event);
  };

  const handleReplaceClick = () => {
    setInternalStatus('ready');
  };

  const handleCancelClick = () => {
    onCancel();
  };

  if (internalStatus === 'ready' || internalStatus === 'file-selected') {
    return /*#__PURE__*/React.createElement(StyledDocumentUploader, _extends({}, props, {
      className: classNames('k-DocumentManager__uploader', props.className)
    }), /*#__PURE__*/React.createElement("input", _extends({}, fileInputProps, {
      type: "file",
      id: id,
      onChange: onFileInputChange,
      disabled: internalDisabled
    })), /*#__PURE__*/React.createElement(Button, _extends({
      fit: "fluid"
    }, buttonProps, {
      as: "label",
      htmlFor: id,
      className: classNames('k-DocumentManager__uploader__button', buttonProps.className)
    }), /*#__PURE__*/React.createElement("div", {
      className: "k-DocumentManager__uploader__container"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-DocumentManager__uploader__documentIcon"
    }, /*#__PURE__*/React.createElement(IconContainer, {
      status: internalStatus
    }, documentIcon)), /*#__PURE__*/React.createElement("div", {
      className: "k-DocumentManager__uploader__content"
    }, /*#__PURE__*/React.createElement(Text, {
      tag: "div",
      weight: "500",
      size: "small",
      lineHeight: "normal",
      className: "k-DocumentManager__statusTitle k-u-margin-none k-u-line-height-1-3"
    }, internalStatus === 'file-selected' ? internalFileName : buttonTitle), internalStatus === 'ready' && /*#__PURE__*/React.createElement(Text, {
      tag: "div",
      weight: "400",
      size: "micro",
      lineHeight: "normal",
      className: "k-DocumentManager__statusSubtitle k-u-margin-none k-u-margin-top-noneHalf k-u-line-height-1-3"
    }, buttonSubtitle)), /*#__PURE__*/React.createElement("div", {
      className: "k-DocumentManager__uploader__uploadIcon"
    }, /*#__PURE__*/React.createElement(UploadIcon, {
      "aria-hidden": true,
      className: "k-DocumentManager__uploader__button__uploadIcon"
    })))));
  }

  if (internalStatus === 'loading') {
    return /*#__PURE__*/React.createElement(StyledDocumentLoading, _extends({}, props, {
      id: id,
      className: classNames('k-DocumentManager__loading', props.className)
    }), /*#__PURE__*/React.createElement(Button, _extends({
      fit: "fluid"
    }, buttonProps, {
      as: "div",
      className: classNames('k-DocumentManager__loading__button', buttonProps.className)
    }), loaderAnimation, /*#__PURE__*/React.createElement(VisuallyHidden, null, loaderText)));
  }

  return /*#__PURE__*/React.createElement(StyledDocumentDisplay, _extends({}, props, {
    id: id,
    className: classNames('k-DocumentManager__display', "k-DocumentManager__display--" + status, props.className)
  }), /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentManager__display__container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentManager__display__documentIcon"
  }, /*#__PURE__*/React.createElement(IconContainer, {
    status: status
  }, documentIcon)), /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentManager__display__content"
  }, /*#__PURE__*/React.createElement(Text, {
    tag: "div",
    weight: "500",
    size: "small",
    className: "k-DocumentManager__statusTitle k-u-margin-none k-u-line-height-1-3"
  }, displayTitle), displayContent && /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentManager__display__content__content k-u-margin-top-noneHalf"
  }, displayContent), /*#__PURE__*/React.createElement(Text, {
    tag: "div",
    weight: "400",
    size: "micro",
    className: "k-DocumentManager__statusSubtitle k-u-margin-none k-u-margin-top-noneHalf k-u-line-height-1-3"
  }, displaySubtitle), canCancel && /*#__PURE__*/React.createElement("button", {
    className: "k-DocumentManager__actionButton k-u-reset-button",
    onClick: handleCancelClick
  }, /*#__PURE__*/React.createElement(Text, {
    weight: "500",
    size: "small",
    className: "k-DocumentManager__actionButton__text"
  }, cancelButtonText)), canReplace && /*#__PURE__*/React.createElement("button", {
    className: "k-DocumentManager__actionButton k-u-reset-button",
    onClick: handleReplaceClick
  }, /*#__PURE__*/React.createElement(Text, {
    weight: "500",
    size: "small",
    className: "k-DocumentManager__actionButton__text"
  }, replaceButtonText)))));
};
DocumentManager.propTypes = {
  id: PropTypes.string.isRequired,
  buttonProps: PropTypes.object,
  buttonSubtitle: PropTypes.node,
  buttonTitle: PropTypes.node,
  canCancel: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  canReplace: PropTypes.bool,
  disabled: PropTypes.bool,
  displayContent: PropTypes.node,
  displaySubtitle: PropTypes.node,
  displayTitle: PropTypes.node,
  documentIcon: PropTypes.node,
  fileInputProps: PropTypes.object,
  loaderAnimation: PropTypes.node,
  loaderText: PropTypes.node,
  onCancel: PropTypes.func,
  onUpload: PropTypes.func,
  replaceButtonText: PropTypes.node,
  status: PropTypes.oneOf(['ready', 'error', 'valid', 'wait', 'loading'])
};
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { CheckedCircleIcon } from '../../../graphics/icons/checked-circle-icon';
import { ClockCircleIcon } from '../../../graphics/icons/clock-circle-icon';
import { CrossCircleIcon } from '../../../graphics/icons/cross-circle-icon';
import { Text } from '../../../typography/text';
const StyledDocumentsStatusBox = styled.div.withConfig({
  displayName: "documents-status-box__StyledDocumentsStatusBox",
  componentId: "sc-q7c9jp-0"
})(["border-radius:var(--border-radius-m);padding:", " ", ";width:100%;position:relative;box-sizing:border-box;display:flex;flex-direction:row;align-items:center;gap:", ";.k-DocumentsStatusBox__fileList{margin:0;padding:0;list-style:none;display:block;line-height:1.4;}&.k-DocumentsStatusBox--wait{background-color:", ";}&.k-DocumentsStatusBox--accepted{background-color:var(--color-success-100);}&.k-DocumentsStatusBox--denied{background-color:", ";}"], pxToRem(20), pxToRem(30), pxToRem(30), COLORS.line1, COLORS.error2);
export const DocumentsStatusBox = _ref => {
  let {
    className,
    fileList = [],
    title = '',
    status = 'wait',
    message,
    retryActionMessage = '',
    retryAction = () => {}
  } = _ref;
  return /*#__PURE__*/React.createElement(StyledDocumentsStatusBox, {
    className: classNames('k-DocumentsStatusBox', className, "k-DocumentsStatusBox--" + status)
  }, /*#__PURE__*/React.createElement("div", {
    className: "k-DrocumentDropUploader__icon"
  }, status === 'wait' && /*#__PURE__*/React.createElement(ClockCircleIcon, {
    color: COLORS.background1,
    bgColor: COLORS.font1,
    width: 22,
    height: 22
  }), status === 'accepted' && /*#__PURE__*/React.createElement(CheckedCircleIcon, {
    color: COLORS.background1,
    bgColor: COLORS.valid,
    width: 22,
    height: 22
  }), status === 'denied' && /*#__PURE__*/React.createElement(CrossCircleIcon, {
    color: COLORS.background1,
    bgColor: COLORS.error,
    width: 22,
    height: 22
  })), /*#__PURE__*/React.createElement("div", {
    className: "k-DocumentsStatusBox__content"
  }, /*#__PURE__*/React.createElement(Text, {
    as: "p",
    className: "k-DocumentsStatusBox__title k-u-margin-top-none k-u-margin-bottom-noneHalf",
    weight: "500",
    size: "small",
    lineHeight: "1"
  }, title), fileList.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "k-DocumentsStatusBox__fileList"
  }, fileList.map((file, index) => /*#__PURE__*/React.createElement(Text, {
    key: file + index,
    as: "li",
    className: "k-DocumentsStatusBox__fileName",
    size: "micro",
    weight: "400"
  }, file))), !!message && /*#__PURE__*/React.createElement(Text, {
    as: "p",
    weight: "500",
    size: "micro",
    className: "k-DocumentsStatusBox__message k-u-margin-bottom-none k-u-margin-top-noneHalf",
    lineHeight: "1"
  }, message), status === 'denied' && /*#__PURE__*/React.createElement(Text, {
    as: "button",
    className: "k-DocumentsStatusBox__button k-u-reset-button k-u-align-left k-u-margin-top-single",
    weight: "500",
    color: "error",
    type: "button",
    size: "micro",
    onClick: retryAction
  }, retryActionMessage)));
};
DocumentsStatusBox.propTypes = {
  title: PropTypes.node,
  message: PropTypes.node,
  status: PropTypes.oneOf(['wait', 'accepted', 'denied']),
  retryAction: PropTypes.func,
  fileList: PropTypes.array
};
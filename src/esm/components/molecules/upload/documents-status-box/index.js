import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import COLORS from '../../../../constants/colors-config';
import { pxToRem } from '../../../../helpers/utils/typography';
import { Text } from '../../../../components/atoms/typography/text';
import { ClockCircleIcon } from '../../../../components/graphics/icons/clock-circle-icon';
import { CheckedCircleIcon } from '../../../../components/graphics/icons/checked-circle-icon';
import { CrossCircleIcon } from '../../../../components/graphics/icons/cross-circle-icon';
var StyledDocumentsStatusBox = styled.div.withConfig({
  displayName: "documents-status-box__StyledDocumentsStatusBox",
  componentId: "sc-16s5m4g-0"
})(["border-radius:", ";padding:", " ", ";width:100%;position:relative;box-sizing:border-box;position:relative;display:flex;flex-direction:row;align-items:center;gap:", ";.k-DocumentsStatusBox__fileList{margin:0;padding:0;list-style:none;display:block;line-height:1.4;}&.k-DocumentsStatusBox--wait{background-color:", ";}&.k-DocumentsStatusBox--accepted{background-color:", ";}&.k-DocumentsStatusBox--denied{background-color:", ";}"], pxToRem(8), pxToRem(20), pxToRem(30), pxToRem(30), COLORS.line1, COLORS.valid1, COLORS.error2);
export var DocumentsStatusBox = function DocumentsStatusBox(_ref) {
  var className = _ref.className,
      _ref$fileList = _ref.fileList,
      fileList = _ref$fileList === void 0 ? [] : _ref$fileList,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? 'wait' : _ref$status,
      message = _ref.message,
      _ref$retryActionMessa = _ref.retryActionMessage,
      retryActionMessage = _ref$retryActionMessa === void 0 ? '' : _ref$retryActionMessa,
      _ref$retryAction = _ref.retryAction,
      retryAction = _ref$retryAction === void 0 ? function () {} : _ref$retryAction;
  return /*#__PURE__*/React.createElement(StyledDocumentsStatusBox, {
    className: classNames('k-DocumentsStatusBox', className, "k-DocumentsStatusBox--".concat(status))
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
    weight: "regular",
    size: "tiny",
    lineHeight: "1"
  }, title), fileList.length > 0 && /*#__PURE__*/React.createElement("ul", {
    className: "k-DocumentsStatusBox__fileList"
  }, fileList.map(function (file, index) {
    return /*#__PURE__*/React.createElement(Text, {
      key: file + index,
      as: "li",
      className: "k-DocumentsStatusBox__fileName",
      size: "micro",
      weight: "light"
    }, file);
  })), !!message && /*#__PURE__*/React.createElement(Text, {
    as: "p",
    weight: "regular",
    size: "micro",
    className: "k-DocumentsStatusBox__message k-u-margin-bottom-none k-u-margin-top-noneHalf",
    lineHeight: "1"
  }, message), status === 'denied' && /*#__PURE__*/React.createElement(Text, {
    as: "button",
    className: "k-DocumentsStatusBox__button k-u-reset-button k-u-align-left k-u-margin-top-single",
    weight: "regular",
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
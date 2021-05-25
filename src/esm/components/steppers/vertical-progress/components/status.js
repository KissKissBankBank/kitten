import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem, stepToRem } from '../../../../helpers/utils/typography';
import TYPOGRAPHY from '../../../../constants/typography-config';
import COLORS from '../../../../constants/colors-config';
import { LongArrowIcon } from '../../../../components/icons/long-arrow-icon';
import { CheckedIcon } from '../../../../components/icons/checked-icon';
import { HourglassIcon } from '../../../../components/icons/hourglass-icon';
import classNames from 'classnames';
var STATUS_SIZE = 30;
var StyledWrapper = styled.div.withConfig({
  displayName: "status__StyledWrapper",
  componentId: "v58fn1-0"
})(["display:flex;flex:1;z-index:0;&.k-VerticalProgress__status--actions{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--waiting{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--publish{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--valid{.k-VerticalProgress__icon{background-color:", ";border-color:", ";}.k-VerticalProgress__title{color:", ";}}&.k-VerticalProgress__status--disabled{.k-VerticalProgress__icon{border-color:", ";background-color:", ";}.k-VerticalProgress__title{color:", ";}}.k-VerticalProgress__icon{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:", ";height:", ";border-radius:", ";border:", " solid ", ";box-sizing:border-box;margin-right:", ";background-color:", ";}.k-VerticalProgress__title{margin:0;", ";font-size:", ";align-self:center;}"], COLORS.orange, COLORS.orange, COLORS.orange, COLORS.font3, COLORS.font3, COLORS.font3, COLORS.line3, COLORS.line3, COLORS.line3, COLORS.primary1, COLORS.primary1, COLORS.primary1, COLORS.line1, COLORS.background1, COLORS.font2, pxToRem(STATUS_SIZE), pxToRem(STATUS_SIZE), pxToRem(STATUS_SIZE), pxToRem(2), COLORS.background1, pxToRem(20), COLORS.background1, TYPOGRAPHY.fontStyles.bold, stepToRem(1));
export var Status = function Status(_ref) {
  var statusType = _ref.statusType,
      progressTitle = _ref.progressTitle,
      titleProps = _ref.titleProps,
      children = _ref.children,
      other = _objectWithoutProperties(_ref, ["statusType", "progressTitle", "titleProps", "children"]);

  var iconByStatus = function () {
    switch (statusType) {
      case 'actions':
        return /*#__PURE__*/React.createElement(LongArrowIcon, {
          color: COLORS.background1,
          direction: "right"
        });

      case 'waiting':
        return /*#__PURE__*/React.createElement(HourglassIcon, {
          color: COLORS.background1,
          width: "10",
          title: null
        });

      case 'publish':
        return /*#__PURE__*/React.createElement(CheckedIcon, {
          color: COLORS.background1,
          width: "10",
          title: null
        });

      case 'valid':
        return /*#__PURE__*/React.createElement(LongArrowIcon, {
          color: COLORS.background1,
          direction: "right"
        });

      case 'disabled':
        return null;

      default:
        return null;
    }
  }();

  return /*#__PURE__*/React.createElement(StyledWrapper, {
    className: classNames('k-VerticalProgress__status', "k-VerticalProgress__status--".concat(statusType))
  }, /*#__PURE__*/React.createElement("span", _extends({}, other, {
    className: "k-VerticalProgress__icon"
  }), iconByStatus || children), /*#__PURE__*/React.createElement("p", _extends({
    className: "k-VerticalProgress__title"
  }, titleProps), progressTitle));
};
Status.propTypes = {
  statusType: PropTypes.oneOf(['actions', 'waiting', 'publish', 'valid', 'disabled']),
  progressTitle: PropTypes.string
};
Status.defaultProps = {
  statusType: 'actions',
  progressTitle: ''
};
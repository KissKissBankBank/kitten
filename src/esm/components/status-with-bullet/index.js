import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import COLORS from '../../constants/colors-config';
import TYPOGRAPHY from '../../constants/typography-config';
import { stepToRem, pxToRem } from '../../helpers/utils/typography';
var StyledBullet = styled.span.withConfig({
  displayName: "status-with-bullet__StyledBullet",
  componentId: "sc-1kiyplj-0"
})(["background-color:currentColor;display:inline-block;width:0.7em;height:0.7em;line-height:0.7em;margin-right:", ";border-radius:50%;"], pxToRem(10));
var StyledStatus = styled.div.withConfig({
  displayName: "status-with-bullet__StyledStatus",
  componentId: "sc-1kiyplj-1"
})(["color:", ";font-family:", ";font-weight:", ";font-size:", ";"], function (_ref) {
  var statusColor = _ref.statusColor;
  return statusColor;
}, TYPOGRAPHY.fontStyles.regular.fontFamily, TYPOGRAPHY.fontStyles.regular.fontWeight, stepToRem(-1));
export var StatusWithBullet = function StatusWithBullet(_ref2) {
  var statusMessage = _ref2.statusMessage,
      statusType = _ref2.statusType,
      bulletProps = _ref2.bulletProps,
      messageAttributes = _ref2.messageAttributes,
      props = _objectWithoutProperties(_ref2, ["statusMessage", "statusType", "bulletProps", "messageAttributes"]);

  var statusColor = COLORS.valid;

  if (statusType === 'danger') {
    statusColor = COLORS.error;
  }

  return /*#__PURE__*/React.createElement(StyledStatus, _extends({
    statusColor: statusColor
  }, props), /*#__PURE__*/React.createElement(StyledBullet, _extends({
    "aria-hidden": "true"
  }, bulletProps)), statusMessage);
};
StatusWithBullet.propTypes = {
  statusMessage: PropTypes.node.isRequired,
  statusType: PropTypes.oneOf(['danger', 'success']),
  bulletProps: PropTypes.object
};
StatusWithBullet.defaultProps = {
  statusType: 'success',
  bulletProps: {}
};
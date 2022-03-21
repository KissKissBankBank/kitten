import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
var _excluded = ["email", "phoneNumber", "links", "socialLink"];
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../../../helpers/utils/typography';
import { Button } from '../../../../action/button';
import { LinkedinIcon } from '../../../../graphics/icons/linkedin-icon';
import { TwitterIcon } from '../../../../graphics/icons/twitter-icon';
import { EmailIcon } from '../../../../graphics/icons/email-icon';
import { TeamCardPhoneIcon } from './phone-icon';
import deprecated from 'prop-types-extra/lib/deprecated';
var StyledTeamCardIcons = styled.div.withConfig({
  displayName: "icons__StyledTeamCardIcons",
  componentId: "sc-gnlerh-0"
})(["margin-top:", ";display:flex;> *{flex-shrink:0;}gap:", ";"], pxToRem(15), pxToRem(15));
export var TeamCardIcons = function TeamCardIcons(_ref) {
  var email = _ref.email,
      phoneNumber = _ref.phoneNumber,
      links = _ref.links,
      socialLink = _ref.socialLink,
      props = _objectWithoutPropertiesLoose(_ref, _excluded);

  var getSocialLinks = function getSocialLinks() {
    if (links.length > 0) return links; // handle deprecated `socialLink` prop

    if (socialLink) return [{
      name: 'linkedin',
      href: socialLink
    }];
  };

  return /*#__PURE__*/React.createElement(StyledTeamCardIcons, null, email && /*#__PURE__*/React.createElement(Button, {
    size: "tiny",
    fit: "icon",
    tag: "a",
    href: "mailto:" + email,
    modifier: "hydrogen",
    "aria-label": "E-mail"
  }, /*#__PURE__*/React.createElement(EmailIcon, {
    "aria-hidden": true
  })), phoneNumber && /*#__PURE__*/React.createElement(TeamCardPhoneIcon, _extends({}, props, {
    phoneNumber: phoneNumber
  })), /*#__PURE__*/React.createElement(SocialLinks, {
    links: getSocialLinks()
  }));
};

var SocialLinks = function SocialLinks(_ref2) {
  var _ref2$links = _ref2.links,
      links = _ref2$links === void 0 ? [] : _ref2$links;
  return /*#__PURE__*/React.createElement(React.Fragment, null, links.map(function (link) {
    if (!link.href) return;
    return /*#__PURE__*/React.createElement(Button, {
      tag: "a",
      fit: "icon",
      key: link.name,
      "aria-label": link.name,
      href: link.href,
      modifier: "hydrogen",
      target: "_blank",
      rel: "noopener",
      size: "tiny"
    }, link.name === 'linkedin' && /*#__PURE__*/React.createElement(LinkedinIcon, {
      "aria-hidden": true
    }), link.name === 'twitter' && /*#__PURE__*/React.createElement(TwitterIcon, {
      "aria-hidden": true
    }));
  }));
};

TeamCardIcons.propTypes = {
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.oneOf(['linkedin', 'twitter']),
    href: PropTypes.string
  })),
  // Deprecated.
  socialLink: deprecated(PropTypes.string, 'Prefer use links prop')
};
TeamCardIcons.defaultProps = {
  email: '',
  phoneNumber: '',
  links: []
};
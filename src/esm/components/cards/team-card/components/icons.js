import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../../helpers/utils/typography';
import { ButtonIcon } from '../../../buttons/button-icon';
import { LinkedinIcon } from '../../../icons/linkedin-icon';
import { TwitterIcon } from '../../../icons/twitter-icon';
import { EmailIcon } from '../../../icons/email-icon';
import { TeamCardPhoneIcon } from './phone-icon';
import deprecated from 'prop-types-extra/lib/deprecated';
var StyledTeamCardIcons = styled.div.withConfig({
  displayName: "icons__StyledTeamCardIcons",
  componentId: "s658h-0"
})(["margin-top:", ";display:flex;.k-TeamCardIcons__buttonIcon:not(:last-child){margin-right:", ";}"], pxToRem(15), pxToRem(15));
export var TeamCardIcons = function TeamCardIcons(_ref) {
  var email = _ref.email,
      phoneNumber = _ref.phoneNumber,
      links = _ref.links,
      socialLink = _ref.socialLink,
      props = _objectWithoutProperties(_ref, ["email", "phoneNumber", "links", "socialLink"]);

  var getSocialLinks = function getSocialLinks() {
    if (links.length > 0) return links; // handle deprecated `socialLink` prop

    if (socialLink) return [{
      name: 'linkedin',
      href: socialLink
    }];
  };

  return /*#__PURE__*/React.createElement(StyledTeamCardIcons, null, email && /*#__PURE__*/React.createElement(ButtonIcon, {
    tag: "a",
    href: "mailto:".concat(email),
    modifier: "hydrogen",
    className: "k-ButtonIcon--phone k-TeamCardIcons__buttonIcon"
  }, /*#__PURE__*/React.createElement(EmailIcon, {
    className: "k-ButtonIcon__svg"
  })), phoneNumber && /*#__PURE__*/React.createElement(TeamCardPhoneIcon, _extends({}, props, {
    phoneNumber: phoneNumber,
    className: "k-TeamCardIcons__buttonIcon"
  })), /*#__PURE__*/React.createElement(SocialLinks, {
    links: getSocialLinks()
  }));
};

var SocialLinks = function SocialLinks(_ref2) {
  var _ref2$links = _ref2.links,
      links = _ref2$links === void 0 ? [] : _ref2$links;
  return /*#__PURE__*/React.createElement(React.Fragment, null, links.map(function (link) {
    if (!link.href) return;
    return /*#__PURE__*/React.createElement(ButtonIcon, {
      tag: "a",
      key: link.name,
      href: link.href,
      modifier: link.name,
      size: "tiny",
      target: "_blank",
      rel: "noopener",
      className: "k-TeamCardIcons__buttonIcon"
    }, link.name === 'linkedin' && /*#__PURE__*/React.createElement(LinkedinIcon, {
      className: "k-ButtonIcon__svg"
    }), link.name === 'twitter' && /*#__PURE__*/React.createElement(TwitterIcon, {
      className: "k-ButtonIcon__svg"
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
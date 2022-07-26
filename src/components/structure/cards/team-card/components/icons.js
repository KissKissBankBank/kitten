"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TeamCardIcons = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../../helpers/utils/typography");

var _button = require("../../../../action/button");

var _linkedinIcon = require("../../../../graphics/icons/linkedin-icon");

var _twitterIcon = require("../../../../graphics/icons/twitter-icon");

var _emailIcon = require("../../../../graphics/icons/email-icon");

var _phoneIcon = require("./phone-icon");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

const StyledTeamCardIcons = _styledComponents.default.div.withConfig({
  displayName: "icons__StyledTeamCardIcons",
  componentId: "sc-gnlerh-0"
})(["margin-top:", ";display:flex;> *{flex-shrink:0;}gap:", ";"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15));

const TeamCardIcons = _ref => {
  let {
    email,
    phoneNumber,
    links,
    socialLink,
    ...props
  } = _ref;

  const getSocialLinks = () => {
    if (links.length > 0) return links; // handle deprecated `socialLink` prop

    if (socialLink) return [{
      name: 'linkedin',
      href: socialLink
    }];
  };

  return /*#__PURE__*/_react.default.createElement(StyledTeamCardIcons, null, email && /*#__PURE__*/_react.default.createElement(_button.Button, {
    size: "small",
    fit: "icon",
    tag: "a",
    href: "mailto:" + email,
    modifier: "hydrogen",
    "aria-label": "E-mail"
  }, /*#__PURE__*/_react.default.createElement(_emailIcon.EmailIcon, {
    "aria-hidden": true
  })), phoneNumber && /*#__PURE__*/_react.default.createElement(_phoneIcon.TeamCardPhoneIcon, (0, _extends2.default)({}, props, {
    phoneNumber: phoneNumber
  })), /*#__PURE__*/_react.default.createElement(SocialLinks, {
    links: getSocialLinks()
  }));
};

exports.TeamCardIcons = TeamCardIcons;

const SocialLinks = _ref2 => {
  let {
    links = []
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, links.map(link => {
    if (!link.href) return;
    return /*#__PURE__*/_react.default.createElement(_button.Button, {
      tag: "a",
      fit: "icon",
      key: link.name,
      "aria-label": link.name,
      href: link.href,
      modifier: "hydrogen",
      target: "_blank",
      rel: "noopener",
      size: "small"
    }, link.name === 'linkedin' && /*#__PURE__*/_react.default.createElement(_linkedinIcon.LinkedinIcon, {
      "aria-hidden": true
    }), link.name === 'twitter' && /*#__PURE__*/_react.default.createElement(_twitterIcon.TwitterIcon, {
      "aria-hidden": true
    }));
  }));
};

TeamCardIcons.propTypes = {
  email: _propTypes.default.string,
  phoneNumber: _propTypes.default.string,
  links: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.oneOf(['linkedin', 'twitter']),
    href: _propTypes.default.string
  })),
  // Deprecated.
  socialLink: (0, _deprecated.default)(_propTypes.default.string, 'Prefer use links prop')
};
TeamCardIcons.defaultProps = {
  email: '',
  phoneNumber: '',
  links: []
};
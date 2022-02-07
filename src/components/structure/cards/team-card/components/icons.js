"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.TeamCardIcons = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../../helpers/utils/typography");

var _buttonIcon = require("../../../../action/button-icon");

var _linkedinIcon = require("../../../../graphics/icons/linkedin-icon");

var _twitterIcon = require("../../../../graphics/icons/twitter-icon");

var _emailIcon = require("../../../../graphics/icons/email-icon");

var _phoneIcon = require("./phone-icon");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _excluded = ["email", "phoneNumber", "links", "socialLink"];

var StyledTeamCardIcons = _styledComponents.default.div.withConfig({
  displayName: "icons__StyledTeamCardIcons",
  componentId: "sc-gnlerh-0"
})(["margin-top:", ";display:flex;> *{flex-shrink:0;}gap:", ";"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15));

var TeamCardIcons = function TeamCardIcons(_ref) {
  var email = _ref.email,
      phoneNumber = _ref.phoneNumber,
      links = _ref.links,
      socialLink = _ref.socialLink,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

  var getSocialLinks = function getSocialLinks() {
    if (links.length > 0) return links; // handle deprecated `socialLink` prop

    if (socialLink) return [{
      name: 'linkedin',
      href: socialLink
    }];
  };

  return /*#__PURE__*/_react.default.createElement(StyledTeamCardIcons, null, email && /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
    size: "tiny",
    tag: "a",
    href: "mailto:" + email,
    modifier: "hydrogen",
    className: "k-ButtonIcon--phone k-TeamCardIcons__buttonIcon",
    "aria-label": "E-mail"
  }, /*#__PURE__*/_react.default.createElement(_emailIcon.EmailIcon, {
    "aria-hidden": true,
    className: "k-ButtonIcon__svg"
  })), phoneNumber && /*#__PURE__*/_react.default.createElement(_phoneIcon.TeamCardPhoneIcon, (0, _extends2.default)({}, props, {
    phoneNumber: phoneNumber,
    className: "k-TeamCardIcons__buttonIcon"
  })), /*#__PURE__*/_react.default.createElement(SocialLinks, {
    links: getSocialLinks()
  }));
};

exports.TeamCardIcons = TeamCardIcons;

var SocialLinks = function SocialLinks(_ref2) {
  var _ref2$links = _ref2.links,
      links = _ref2$links === void 0 ? [] : _ref2$links;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, links.map(function (link) {
    if (!link.href) return;
    return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
      tag: "a",
      key: link.name,
      "aria-label": link.name,
      href: link.href,
      modifier: "hydrogen",
      target: "_blank",
      rel: "noopener",
      className: "k-TeamCardIcons__buttonIcon",
      size: "tiny"
    }, link.name === 'linkedin' && /*#__PURE__*/_react.default.createElement(_linkedinIcon.LinkedinIcon, {
      "aria-hidden": true,
      className: "k-ButtonIcon__svg"
    }), link.name === 'twitter' && /*#__PURE__*/_react.default.createElement(_twitterIcon.TwitterIcon, {
      "aria-hidden": true,
      className: "k-ButtonIcon__svg"
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
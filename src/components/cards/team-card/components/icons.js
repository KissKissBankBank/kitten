"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardIcons = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../../../helpers/utils/typography");

var _buttonIcon = require("../../../buttons/button-icon");

var _linkedinIcon = require("../../../icons/linkedin-icon");

var _twitterIcon = require("../../../icons/twitter-icon");

var _emailIcon = require("../../../icons/email-icon");

var _phoneIcon = require("./phone-icon");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var StyledTeamCardIcons = _styledComponents.default.div.withConfig({
  displayName: "icons__StyledTeamCardIcons",
  componentId: "s658h-0"
})(["margin-top:", ";display:flex;.k-TeamCardIcons__buttonIcon:not(:last-child){margin-right:", ";}"], (0, _typography.pxToRem)(15), (0, _typography.pxToRem)(15));

var TeamCardIcons = function TeamCardIcons(_ref) {
  var email = _ref.email,
      phoneNumber = _ref.phoneNumber,
      links = _ref.links,
      socialLink = _ref.socialLink,
      props = (0, _objectWithoutProperties2.default)(_ref, ["email", "phoneNumber", "links", "socialLink"]);

  var getSocialLinks = function getSocialLinks() {
    if (links.length > 0) return links; // handle deprecated `socialLink` prop

    if (socialLink) return [{
      name: 'linkedin',
      href: socialLink
    }];
  };

  return /*#__PURE__*/_react.default.createElement(StyledTeamCardIcons, null, email && /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
    tag: "a",
    href: "mailto:".concat(email),
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
      modifier: link.name,
      size: "tiny",
      target: "_blank",
      rel: "noopener",
      className: "k-TeamCardIcons__buttonIcon"
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
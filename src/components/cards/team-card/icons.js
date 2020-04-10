"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardIcons = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonIcon = require("../../buttons/button-icon");

var _linkedinIcon = require("../../icons/linkedin-icon");

var _twitterIcon = require("../../icons/twitter-icon");

var _marger = require("../../layout/marger");

var _emailIcon = require("../../icons/email-icon");

var _phoneIcon = require("./phone-icon");

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Marger = (0, _radium.default)(_marger.Marger);

var TeamCardIcons = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(TeamCardIcons, _Component);

  var _super = _createSuper(TeamCardIcons);

  function TeamCardIcons() {
    var _this;

    (0, _classCallCheck2.default)(this, TeamCardIcons);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.getSocialLinks = function () {
      var _this$props = _this.props,
          links = _this$props.links,
          socialLink = _this$props.socialLink;
      if (links) return links; // handle deprecated `socialLink` prop

      if (socialLink) return [{
        name: 'linkedin',
        href: socialLink
      }];
    };

    return _this;
  }

  (0, _createClass2.default)(TeamCardIcons, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          email = _this$props2.email,
          phoneNumber = _this$props2.phoneNumber;
      return /*#__PURE__*/_react.default.createElement(Marger, {
        top: "1.5",
        style: styles.icons
      }, email && /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
        tag: "a",
        href: "mailto:".concat(email),
        modifier: "hydrogen",
        className: "k-ButtonIcon--phone",
        style: {
          marginRight: 15
        }
      }, /*#__PURE__*/_react.default.createElement(_emailIcon.EmailIcon, {
        className: "k-ButtonIcon__svg"
      })), phoneNumber && /*#__PURE__*/_react.default.createElement(_phoneIcon.TeamCardPhoneIcon, this.props), /*#__PURE__*/_react.default.createElement(SocialLinks, {
        links: this.getSocialLinks()
      }));
    }
  }]);
  return TeamCardIcons;
}(_react.Component);

exports.TeamCardIcons = TeamCardIcons;
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

var SocialLinks = /*#__PURE__*/function (_Component2) {
  (0, _inherits2.default)(SocialLinks, _Component2);

  var _super2 = _createSuper(SocialLinks);

  function SocialLinks() {
    (0, _classCallCheck2.default)(this, SocialLinks);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2.default)(SocialLinks, [{
    key: "render",
    value: function render() {
      var links = this.props.links;
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, links.map(function (link, index) {
        if (!link.href) return;
        var buttonStyle;

        if (index !== links.length - 1) {
          buttonStyle = {
            marginRight: 15
          };
        }

        return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
          tag: "a",
          key: link.name,
          href: link.href,
          modifier: link.name,
          size: "tiny",
          target: "_blank",
          rel: "noopener",
          style: buttonStyle
        }, link.name === 'linkedin' && /*#__PURE__*/_react.default.createElement(_linkedinIcon.LinkedinIcon, {
          className: "k-ButtonIcon__svg"
        }), link.name === 'twitter' && /*#__PURE__*/_react.default.createElement(_twitterIcon.TwitterIcon, {
          className: "k-ButtonIcon__svg"
        }));
      }));
    }
  }]);
  return SocialLinks;
}(_react.Component);

var styles = {
  icons: {
    display: 'flex'
  }
};
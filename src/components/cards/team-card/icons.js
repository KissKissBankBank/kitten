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

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _marger = require("kitten/components/layout/marger");

var _emailIcon = require("kitten/components/icons/email-icon");

var _socialButtonIcon = require("kitten/components/buttons/social-button-icon");

var _phoneIcon = require("kitten/components/cards/team-card/phone-icon");

var Marger = (0, _radium.default)(_marger.Marger);

var TeamCardIcons =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TeamCardIcons, _Component);

  function TeamCardIcons() {
    (0, _classCallCheck2.default)(this, TeamCardIcons);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TeamCardIcons).apply(this, arguments));
  }

  (0, _createClass2.default)(TeamCardIcons, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          email = _this$props.email,
          phoneNumber = _this$props.phoneNumber,
          socialLink = _this$props.socialLink;
      return _react.default.createElement(Marger, {
        top: "1.5",
        style: styles.icons
      }, email && _react.default.createElement(_buttonIcon.ButtonIcon, {
        tag: "a",
        href: "mailto:".concat(email),
        modifier: "hydrogen",
        className: "k-ButtonIcon--phone",
        style: {
          marginRight: 15
        }
      }, _react.default.createElement(_emailIcon.EmailIcon, {
        className: "k-ButtonIcon__svg"
      })), phoneNumber && _react.default.createElement(_phoneIcon.TeamCardPhoneIcon, this.props), socialLink && _react.default.createElement(_socialButtonIcon.LinkedinButtonIcon, {
        tag: "a",
        href: socialLink,
        size: "tiny",
        target: "_blank",
        rel: "noopener"
      }));
    }
  }]);
  return TeamCardIcons;
}(_react.Component);

exports.TeamCardIcons = TeamCardIcons;
TeamCardIcons.propTypes = {
  email: _propTypes.default.string,
  phoneNumber: _propTypes.default.string,
  socialLink: _propTypes.default.string
};
TeamCardIcons.defaultProps = {
  email: '',
  phoneNumber: '',
  socialLink: ''
};
var styles = {
  icons: {
    display: 'flex'
  }
};
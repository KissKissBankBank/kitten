"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RewardCardStarredBadge = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireDefault(require("radium"));

var _iconBadge = require("../../../components/notifications/icon-badge");

var _starIcon = require("../../../components/icons/star-icon");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var IconBadge = (0, _radium.default)(_iconBadge.IconBadge);

var RewardCardStarredBadgeBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(RewardCardStarredBadgeBase, _Component);

  function RewardCardStarredBadgeBase() {
    (0, _classCallCheck2.default)(this, RewardCardStarredBadgeBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RewardCardStarredBadgeBase).apply(this, arguments));
  }

  (0, _createClass2.default)(RewardCardStarredBadgeBase, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          disabled = _this$props.disabled;
      var starredBadgeStyles = [styles.base, disabled && styles.disabled];
      var iconBadgeStyles = [styles.badge.base, disabled && styles.badge.disabled];
      return _react.default.createElement("div", {
        style: starredBadgeStyles
      }, _react.default.createElement(IconBadge, {
        big: true,
        style: iconBadgeStyles
      }, _react.default.createElement(_starIcon.StarIcon, {
        className: "k-IconBadge__svg",
        style: styles.icon
      })), _react.default.createElement("div", {
        style: styles.content
      }, children));
    }
  }]);
  return RewardCardStarredBadgeBase;
}(_react.Component);

RewardCardStarredBadgeBase.propTypes = {
  disabled: _propTypes.default.bool,
  children: _propTypes.default.node
};
RewardCardStarredBadgeBase.defaultProps = {
  disabled: false,
  children: null
};
var styles = {
  base: {
    display: 'flex',
    lineHeight: '1rem',
    alignItems: 'center',
    marginBottom: (0, _typography.pxToRem)(20)
  },
  content: {
    display: 'flex',
    flexDirection: 'column'
  },
  badge: {
    base: {
      marginRight: (0, _typography.pxToRem)(10)
    },
    disabled: {
      backgroundColor: _colorsConfig.default.line2
    }
  },
  icon: {
    height: (0, _typography.pxToRem)(14),
    width: (0, _typography.pxToRem)(14)
  },
  disabled: {
    color: _colorsConfig.default.font2,
    cursor: 'not-allowed'
  }
};
var RewardCardStarredBadge = (0, _radium.default)(RewardCardStarredBadgeBase);
exports.RewardCardStarredBadge = RewardCardStarredBadge;
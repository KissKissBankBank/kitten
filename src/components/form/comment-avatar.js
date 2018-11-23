"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentAvatar = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("kitten/components/layout/marger");

var _buttonImage = require("kitten/components/buttons/button-image");

var _text = require("kitten/components/typography/text");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _mediaQueries = require("kitten/hoc/media-queries");

var CommentAvatarComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CommentAvatarComponent, _Component);

  function CommentAvatarComponent() {
    (0, _classCallCheck2.default)(this, CommentAvatarComponent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CommentAvatarComponent).apply(this, arguments));
  }

  (0, _createClass2.default)(CommentAvatarComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          avatarImgProps = _this$props.avatarImgProps,
          viewportIsMobile = _this$props.viewportIsMobile;
      return _react.default.createElement("div", {
        style: styles.avatar
      }, _react.default.createElement(_marger.Marger, {
        bottom: "1"
      }, _react.default.createElement(_buttonImage.ButtonImage, {
        tag: "span",
        huge: !viewportIsMobile,
        big: viewportIsMobile,
        withoutPointerEvents: true,
        img: avatarImgProps
      })), this.renderDate());
    }
  }, {
    key: "renderDate",
    value: function renderDate() {
      var commentDate = this.props.commentDate;
      if (!commentDate) return;
      return _react.default.createElement(_text.Text, {
        size: "micro",
        weight: "light",
        color: "font1"
      }, commentDate);
    }
  }]);
  return CommentAvatarComponent;
}(_react.Component);

CommentAvatarComponent.propTypes = {
  avatarImgProps: _propTypes.default.object.isRequired,
  commentDate: _propTypes.default.string
};
CommentAvatarComponent.defaultProps = {
  commentDate: ''
};
var styles = {
  avatar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};
var CommentAvatar = (0, _mediaQueries.mediaQueries)((0, _radium.default)(CommentAvatarComponent), {
  viewportIsMobile: true
});
exports.CommentAvatar = CommentAvatar;
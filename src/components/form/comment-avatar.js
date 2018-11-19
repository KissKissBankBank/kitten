"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CommentAvatar = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("kitten/components/layout/marger");

var _buttonImage = require("kitten/components/buttons/button-image");

var _text = require("kitten/components/typography/text");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _mediaQueries = require("kitten/hoc/media-queries");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CommentAvatarComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CommentAvatarComponent, _Component);

  function CommentAvatarComponent() {
    _classCallCheck(this, CommentAvatarComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(CommentAvatarComponent).apply(this, arguments));
  }

  _createClass(CommentAvatarComponent, [{
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

_defineProperty(CommentAvatarComponent, "propTypes", {
  avatarImgProps: _propTypes.default.object.isRequired,
  commentDate: _propTypes.default.string
});

_defineProperty(CommentAvatarComponent, "defaultProps", {
  commentDate: ''
});

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
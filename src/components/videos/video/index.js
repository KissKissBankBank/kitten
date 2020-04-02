"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Video = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _text = require("../../../components/typography/text");

var _typography = require("../../../helpers/utils/typography");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _reactElements = require("../../../helpers/react/react-elements");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "video__StyledContainer",
  componentId: "lqao0j-0"
})(["position:relative;width:100%;height:100%;overflow:hidden;", ""], function (_ref) {
  var poster = _ref.poster,
      autoPlay = _ref.autoPlay;
  return (poster || !autoPlay) && (0, _styledComponents.css)(["cursor:pointer;"]);
});

var StyledContainerButton = _styledComponents.default.div.withConfig({
  displayName: "video__StyledContainerButton",
  componentId: "lqao0j-1"
})(["top:0;right:0;bottom:0;left:0;position:absolute;transition:opacity ease 600ms,z-index ease 600ms;transition-delay:0s,0s;", ""], function (_ref2) {
  var isVideoPlaying = _ref2.isVideoPlaying;
  return isVideoPlaying ? (0, _styledComponents.css)(["opacity:0;z-index:0;"]) : (0, _styledComponents.css)(["opacity:1;z-index:1;transition-delay:0s,600ms;"]);
});

var playerButtonSize = (0, _typography.pxToRem)(70);

var StyledPlayerButton = _styledComponents.default.div.withConfig({
  displayName: "video__StyledPlayerButton",
  componentId: "lqao0j-2"
})(["position:relative;width:", ";height:", ";background:", ";top:calc(50% - ", " / 2);left:calc(50% - ", " / 2);display:flex;align-items:center;justify-content:center;"], playerButtonSize, playerButtonSize, _colorsConfig.default.background1, playerButtonSize, playerButtonSize);

var StyledVideo = _styledComponents.default.video.withConfig({
  displayName: "video__StyledVideo",
  componentId: "lqao0j-3"
})(["position:relative;width:100%;height:100%;", ""], function (_ref3) {
  var controls = _ref3.controls;
  return !controls && (0, _styledComponents.css)(["object-fit:cover;"]);
});

var Video = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2.default)(Video, _PureComponent);

  var _super = _createSuper(Video);

  function Video() {
    var _this;

    (0, _classCallCheck2.default)(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.video = (0, _react.createRef)();
    _this.state = {
      showPlayer: false
    };

    _this.handlePlayClick = function () {
      if (_this.state.showPlayer && !_this.props.autoPlay) {
        _this.video.current.pause();
      } else {
        _this.video.current.play();
      }

      _this.setState({
        showPlayer: !_this.state.showPlayer
      });

      _this.previewVideo.blur();
    };

    _this.handleKeyDown = function (event) {
      var enterKeyCode = 13;
      var spaceKeyCode = 32;

      if (event.keyCode === enterKeyCode || event.keyCode === spaceKeyCode) {
        event.preventDefault();

        _this.handlePlayClick();
      }
    };

    _this.updateVideoSource = function () {
      if (_this.isVideoSourceMatchesSource()) return;
      _this.video.current.src = _this.props.src;
    };

    _this.isVideoSourceMatchesSource = function () {
      if (!_this.video.current || !_this.video.current.src) return;
      return _this.video.current.src === _this.props.src;
    };

    _this.a11yOnClickProps = function () {
      if (_this.props.autoPlay) return;
      return {
        onClick: _this.handlePlayClick,
        onKeyDown: _this.handleKeyDown,
        role: 'button',
        tabIndex: 0
      };
    };

    return _this;
  }

  (0, _createClass2.default)(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateVideoSource();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          ariaLabel = _this$props.ariaLabel,
          autoPlay = _this$props.autoPlay,
          poster = _this$props.poster,
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children", "ariaLabel", "autoPlay", "poster"]);
      var loader = (0, _reactElements.getReactElementsByType)({
        children: children,
        type: Video.Loader
      });
      var childrenWithoutLoader = (0, _reactElements.getReactElementsWithoutType)({
        children: children,
        type: Video.Loader
      });
      var isVideoPlaying = !autoPlay && this.state.showPlayer;
      var controls = isVideoPlaying && this.state.showPlayer;
      return _react.default.createElement(StyledContainer, (0, _extends2.default)({
        onClick: this.handlePlayClick,
        isVideoPlaying: isVideoPlaying
      }, this.a11yOnClickProps()), loader, !autoPlay && _react.default.createElement(StyledContainerButton, {
        isVideoPlaying: isVideoPlaying
      }, _react.default.createElement(StyledPlayerButton, {
        "aria-label": ariaLabel
      }, _react.default.createElement(_text.Text, {
        size: "default",
        weight: "regular"
      }, "\u25BA"))), _react.default.createElement(StyledVideo, (0, _extends2.default)({
        ref: this.video,
        controls: controls,
        autoPlay: autoPlay,
        poster: poster
      }, props), childrenWithoutLoader));
    }
  }]);
  return Video;
}(_react.PureComponent);

exports.Video = Video;
Video.Loader = _styledComponents.default.div.withConfig({
  displayName: "video__Loader",
  componentId: "lqao0j-4"
})(["position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;"]);
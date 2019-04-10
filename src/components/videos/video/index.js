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

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactElements = require("../../../helpers/react/react-elements");

var StyledContainer = _styledComponents.default.div.withConfig({
  displayName: "video__StyledContainer",
  componentId: "lqao0j-0"
})(["position:relative;width:100%;height:100%;overflow:hidden;"]);

var StyledVideo = _styledComponents.default.video.withConfig({
  displayName: "video__StyledVideo",
  componentId: "lqao0j-1"
})(["position:relative;width:100%;height:100%;object-fit:cover;"]);

var Video =
/*#__PURE__*/
function (_PureComponent) {
  (0, _inherits2.default)(Video, _PureComponent);

  function Video(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Video);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Video).call(this, props));

    _this.updateVideoSource = function () {
      if (_this.isVideoSourceMatchesSource()) return;
      _this.video.current.src = _this.props.src;
    };

    _this.isVideoSourceMatchesSource = function () {
      if (!_this.video.current || !_this.video.current.src) return;
      return _this.video.current.src === _this.props.src;
    };

    _this.video = (0, _react.createRef)();
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
          props = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
      var loader = (0, _reactElements.getReactElementsByType)({
        children: children,
        type: Video.Loader
      });
      var childrenWithoutLoader = (0, _reactElements.getReactElementsWithoutType)({
        children: children,
        type: Video.Loader
      });
      return _react.default.createElement(StyledContainer, null, loader, _react.default.createElement(StyledVideo, (0, _extends2.default)({}, props, {
        ref: this.video
      }), childrenWithoutLoader));
    }
  }]);
  return Video;
}(_react.PureComponent);

exports.Video = Video;
Video.Loader = _styledComponents.default.div.withConfig({
  displayName: "video__Loader",
  componentId: "lqao0j-2"
})(["position:absolute;top:0;bottom:0;left:0;right:0;display:flex;align-items:center;justify-content:center;"]);
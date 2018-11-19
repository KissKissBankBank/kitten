"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedPlayer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _radium = _interopRequireWildcard(require("radium"));

var _text = require("kitten/components/typography/text");

var _responsiveIframeContainer = require("kitten/components/layout/responsive-iframe-container");

var _parser = require("kitten/helpers/utils/parser");

var _screenConfig = require("kitten/constants/screen-config");

var _gridConfig = require("kitten/constants/grid-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PlayerButton = function PlayerButton(props) {
  return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("div", {
    style: styles.playerButton
  }, _react.default.createElement(_text.Text, {
    size: "default",
    weight: "regular",
    "aria-label": props.playButtonLabel
  }, "\u25BA")));
};

PlayerButton.propTypes = {
  playButtonLabel: _propTypes.default.string.isRequired
};

var EmbedPlayerBase =
/*#__PURE__*/
function (_Component) {
  _inherits(EmbedPlayerBase, _Component);

  function EmbedPlayerBase(props) {
    var _this;

    _classCallCheck(this, EmbedPlayerBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EmbedPlayerBase).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      _this.setState({
        showPlayer: true
      });

      _this.previewVideo.blur();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (event) {
      event.preventDefault();
      var enterKey = event.key === 'Enter';
      var spaceKey = event.key === ' ';
      if (enterKey || spaceKey) _this.handleClick();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleFocus", function (event) {
      event.preventDefault();

      _this.previewVideo.focus();

      _this.handleKeyPress(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "a11yOnClickProps", function () {
      if (!_this.props.iframeHtml) return;
      return {
        onClick: _this.handleClick,
        onKeyPress: _this.handleKeyPress,
        onFocus: _this.handleFocus,
        role: 'button',
        tabIndex: 0
      };
    });

    _this.state = {
      showPlayer: false
    };
    return _this;
  }

  _createClass(EmbedPlayerBase, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ratio = _this$props.ratio,
          previewProps = _this$props.previewProps,
          iframeHtml = _this$props.iframeHtml,
          playButtonLabel = _this$props.playButtonLabel,
          _this$props$style = _this$props.style,
          mainStyle = _this$props$style === void 0 ? void 0 : _this$props$style,
          t = _this$props.t;
      var validRatio = parseInt(ratio, 10);
      var thumbnail = previewProps.thumbnail,
          badgeComponent = previewProps.badgeComponent,
          style = previewProps.style;
      var isVideoPlaying = iframeHtml && this.state.showPlayer;
      var playerPreviewStyle = [styles.player.base, iframeHtml ? {
        cursor: 'pointer'
      } : null, isVideoPlaying ? styles.player.hide : styles.player.show];
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("div", _extends({
        style: _objectSpread({}, mainStyle, styles.container),
        ref: function ref(node) {
          _this2.previewVideo = node;
        }
      }, this.a11yOnClickProps()), _react.default.createElement("div", {
        style: playerPreviewStyle
      }, iframeHtml && _react.default.createElement(PlayerButton, {
        playButtonLabel: playButtonLabel
      }), _react.default.createElement("img", {
        style: styles.thumbnail,
        src: thumbnail.src,
        alt: thumbnail.alt
      }), badgeComponent), iframeHtml && _react.default.createElement("div", {
        style: styles.embedPlayer
      }, _react.default.createElement(_responsiveIframeContainer.ResponsiveIframeContainer, {
        ratio: validRatio
      }, (0, _parser.parseHtml)(iframeHtml)))));
    }
  }]);

  return EmbedPlayerBase;
}(_react.Component);

EmbedPlayerBase.propTypes = {
  previewProps: _propTypes.default.shape({
    thumbnail: _propTypes.default.shape({
      src: _propTypes.default.string.isRequired,
      alt: _propTypes.default.string.isRequired,
      style: _propTypes.default.string
    }).isRequired
  }).isRequired,
  badgeComponent: _propTypes.default.node,
  playButtonLabel: _propTypes.default.string.isRequired,
  ratio: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  iframeHtml: _propTypes.default.string
};
EmbedPlayerBase.defaultProps = {
  previewProps: {
    thumbnail: {
      style: {}
    }
  },
  badgeComponent: null,
  iframeHtml: null
};
var playerButtonSize = 90;
var playerButtonXSSize = 50;
var styles = {
  container: {
    position: 'relative',
    display: 'block',
    width: '100%'
  },
  thumbnail: {
    display: 'block',
    width: '100%'
  },
  embedPlayer: {
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%'
  },
  playerButton: _defineProperty({
    width: "".concat(playerButtonSize, "px"),
    height: "".concat(playerButtonSize, "px"),
    background: _colorsConfig.default.background1,
    position: 'absolute',
    top: "calc(50% - ".concat(playerButtonSize / 2, "px)"),
    left: "calc(50% - ".concat(playerButtonSize / 2, "px)"),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }, "@media (max-width: ".concat(_screenConfig.ScreenConfig.XS.max, "px)"), {
    width: "".concat(playerButtonXSSize, "px"),
    height: "".concat(playerButtonXSSize, "px"),
    top: "calc(50% - ".concat(playerButtonXSSize / 2, "px)"),
    left: "calc(50% - ".concat(playerButtonXSSize / 2, "px)")
  }),
  player: {
    base: {
      position: 'relative',
      transition: 'opacity ease 600ms, z-index ease 600ms',
      zIndex: 1
    },
    show: {
      opacity: 1
    },
    hide: {
      opacity: 0,
      zIndex: 0
    }
  }
};
var EmbedPlayer = (0, _radium.default)(EmbedPlayerBase);
exports.EmbedPlayer = EmbedPlayer;
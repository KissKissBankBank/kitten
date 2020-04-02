"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmbedPlayer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _radium = _interopRequireWildcard(require("radium"));

var _text = require("../../components/typography/text");

var _responsiveIframeContainer = require("../../components/layout/responsive-iframe-container");

var _parser = require("../../helpers/utils/parser");

var _screenConfig = require("../../constants/screen-config");

var _gridConfig = require("../../constants/grid-config");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

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

var EmbedPlayerBase = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(EmbedPlayerBase, _Component);

  var _super = _createSuper(EmbedPlayerBase);

  function EmbedPlayerBase(props) {
    var _this;

    (0, _classCallCheck2.default)(this, EmbedPlayerBase);
    _this = _super.call(this, props);

    _this.handleClick = function () {
      _this.setState({
        showPlayer: true
      });

      _this.previewVideo.blur();
    };

    _this.handleKeyPress = function (event) {
      event.preventDefault();
      var enterKey = event.key === 'Enter';
      var spaceKey = event.key === ' ';
      if (enterKey || spaceKey) _this.handleClick();
    };

    _this.handleFocus = function (event) {
      event.preventDefault();

      _this.previewVideo.focus();

      _this.handleKeyPress(event);
    };

    _this.a11yOnClickProps = function () {
      if (!_this.props.iframeHtml) return;
      return {
        onClick: _this.handleClick,
        onKeyPress: _this.handleKeyPress,
        onFocus: _this.handleFocus,
        role: 'button',
        tabIndex: 0
      };
    };

    _this.state = {
      showPlayer: false
    };
    return _this;
  }

  (0, _createClass2.default)(EmbedPlayerBase, [{
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
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("div", (0, _extends2.default)({
        style: (0, _extends2.default)({}, mainStyle, {}, styles.container),
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
  playerButton: (0, _defineProperty2.default)({
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
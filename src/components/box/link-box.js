"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinkBox = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrowIcon = require("../../components/icons/arrow-icon");

var _text = require("../../components/typography/text");

var _marger = require("../../components/layout/marger");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _screenConfig = require("../../constants/screen-config");

var _typography = require("../../helpers/utils/typography");

var _navigation;

var Marger = (0, _radium.default)(_marger.Marger);

var LinkBox =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(LinkBox, _Component);

  function LinkBox(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LinkBox);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(LinkBox).call(this, props));

    _this.handleOnMouseEnter = function () {
      _this.setState({
        hover: true
      });
    };

    _this.handleOnMouseLeave = function () {
      _this.setState({
        hover: false
      });
    };

    _this.state = {
      hover: false
    };
    return _this;
  }

  (0, _createClass2.default)(LinkBox, [{
    key: "renderIcon",
    value: function renderIcon() {
      var _this$props = this.props,
          displayIcon = _this$props.displayIcon,
          children = _this$props.children;
      if (!displayIcon) return null;
      return _react.default.createElement("div", {
        style: styles.icon
      }, children);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isExternal = _this$props2.isExternal,
          href = _this$props2.href,
          title = _this$props2.title,
          text = _this$props2.text,
          linkProps = _this$props2.linkProps,
          titleTag = _this$props2.titleTag,
          textTag = _this$props2.textTag,
          viewportIsMobile = _this$props2.viewportIsMobile;
      var target = isExternal ? {
        target: '_blank',
        rel: 'noopener'
      } : {};
      var arrowStyle = [styles.navigation, this.state.hover && styles.navigation.hover];
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("a", (0, _extends2.default)({}, linkProps, {
        style: styles.linkBox,
        href: href
      }, target), _react.default.createElement("div", {
        style: styles.container,
        onMouseEnter: this.handleOnMouseEnter,
        onMouseLeave: this.handleOnMouseLeave
      }, this.renderIcon(), _react.default.createElement(Marger, {
        top: "2",
        bottom: "2",
        style: styles.paragraph
      }, _react.default.createElement(Marger, {
        bottom: text ? 0.5 : 0
      }, _react.default.createElement(_text.Text, {
        tag: titleTag,
        weight: "regular",
        size: viewportIsMobile ? 'tiny' : 'default',
        color: "font1",
        style: {
          lineHeight: 1
        }
      }, title)), text && _react.default.createElement(_text.Text, {
        tag: textTag,
        weight: "light",
        size: "tiny",
        color: "font1",
        style: {
          lineHeight: 1.3
        }
      }, text)), _react.default.createElement("div", {
        style: arrowStyle
      }, _react.default.createElement(_arrowIcon.ArrowIcon, {
        className: "k-ButtonIcon__svg"
      })))));
    }
  }]);
  return LinkBox;
}(_react.Component);

exports.LinkBox = LinkBox;
LinkBox.propTypes = {
  displayIcon: _propTypes.default.bool,
  href: _propTypes.default.string,
  isExternal: _propTypes.default.bool,
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  text: _propTypes.default.string,
  textTag: _propTypes.default.string,
  linkProps: _propTypes.default.object
};
LinkBox.defaultProps = {
  displayIcon: false,
  href: '#',
  isExternal: false,
  titleTag: 'span',
  text: '',
  textTag: 'span'
};
var styles = {
  linkBox: {
    display: 'flex',
    color: _colorsConfig.default.font1,
    textDecoration: 'none'
  },
  container: {
    display: 'flex',
    minHeight: 90,
    width: '100%',
    boxSizing: 'border-box',
    color: _colorsConfig.default.font1,
    backgroundColor: _colorsConfig.default.background1,
    border: "2px solid ".concat(_colorsConfig.default.line1),
    ':hover': {
      backgroundColor: _colorsConfig.default.background2
    },
    ':active': {
      backgroundColor: _colorsConfig.default.background3
    }
  },
  icon: (0, _defineProperty2.default)({
    display: 'none',
    marginTop: -2,
    marginLeft: -2,
    marginBottom: -2,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 90,
    backgroundColor: _colorsConfig.default.primary4
  }, "@media (min-width: ".concat(_screenConfig.ScreenConfig.S.min, "px)"), {
    display: 'flex'
  }),
  paragraph: (0, _defineProperty2.default)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    flexGrow: 1,
    paddingLeft: (0, _typography.pxToRem)(20)
  }, "@media (min-width: ".concat(_screenConfig.ScreenConfig.S.min, "px)"), {
    paddingLeft: (0, _typography.pxToRem)(30)
  }),
  navigation: (_navigation = {
    display: 'flex',
    alignItems: 'center',
    padding: '15px 22px 15px 18px',
    transition: 'all 0.4s ease-in-out'
  }, (0, _defineProperty2.default)(_navigation, "@media (min-width: ".concat(_screenConfig.ScreenConfig.S.min, "px)"), {
    paddingLeft: (0, _typography.pxToRem)(30),
    paddingRight: (0, _typography.pxToRem)(32)
  }), (0, _defineProperty2.default)(_navigation, "hover", {
    transform: 'translate(5px, 0px)'
  }), _navigation)
}; // DEPRECATED: do not use default export.

var _default = LinkBox;
exports.default = _default;
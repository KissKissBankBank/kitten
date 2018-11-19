"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LinkBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _arrowIcon = require("kitten/components/icons/arrow-icon");

var _text = require("kitten/components/typography/text");

var _marger = require("kitten/components/layout/marger");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _screenConfig = require("kitten/constants/screen-config");

var _mediaQueries = require("kitten/hoc/media-queries");

var _typography = require("kitten/helpers/utils/typography");

var _navigation;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LinkBox =
/*#__PURE__*/
function (_Component) {
  _inherits(LinkBox, _Component);

  function LinkBox(props) {
    var _this;

    _classCallCheck(this, LinkBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LinkBox).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnMouseEnter", function () {
      _this.setState({
        hover: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleOnMouseLeave", function () {
      _this.setState({
        hover: false
      });
    });

    _this.state = {
      hover: false
    };
    return _this;
  }

  _createClass(LinkBox, [{
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
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("a", _extends({}, linkProps, {
        style: styles.linkBox,
        href: href
      }, target), _react.default.createElement("div", {
        style: styles.container,
        onMouseEnter: this.handleOnMouseEnter,
        onMouseLeave: this.handleOnMouseLeave
      }, this.renderIcon(), _react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "2",
        style: styles.paragraph
      }, _react.default.createElement(_marger.Marger, {
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

_defineProperty(LinkBox, "propTypes", {
  displayIcon: _propTypes.default.bool,
  href: _propTypes.default.string,
  isExternal: _propTypes.default.bool,
  title: _propTypes.default.string.isRequired,
  titleTag: _propTypes.default.string,
  text: _propTypes.default.string,
  textTag: _propTypes.default.string,
  linkProps: _propTypes.default.object
});

_defineProperty(LinkBox, "defaultProps", {
  displayIcon: false,
  href: '#',
  isExternal: false,
  titleTag: 'span',
  text: '',
  textTag: 'span'
});

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
  icon: _defineProperty({
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
  paragraph: _defineProperty({
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
  }, _defineProperty(_navigation, "@media (min-width: ".concat(_screenConfig.ScreenConfig.S.min, "px)"), {
    paddingLeft: (0, _typography.pxToRem)(30),
    paddingRight: (0, _typography.pxToRem)(32)
  }), _defineProperty(_navigation, "hover", {
    transform: 'translate(5px, 0px)'
  }), _navigation) // DEPRECATED: do not use default export.

};
var _default = LinkBox;
exports.default = _default;
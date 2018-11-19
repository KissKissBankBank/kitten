"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrowdfundingCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _radium = _interopRequireWildcard(require("radium"));

var _card = require("kitten/hoc/card");

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/components/typography/title");

var _text = require("kitten/components/typography/text");

var _horizontalStroke = require("kitten/components/layout/horizontal-stroke");

var _buttonImage = require("kitten/components/buttons/button-image");

var _progress = require("kitten/components/meters/progress");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Text = (0, _radium.default)(_text.Text);
var Title = (0, _radium.default)(_title.Title);
var HorizontalStroke = (0, _radium.default)(_horizontalStroke.HorizontalStroke);
var Marger = (0, _radium.default)(_marger.Marger);

var CrowdfundingCardComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(CrowdfundingCardComponent, _Component);

  function CrowdfundingCardComponent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CrowdfundingCardComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CrowdfundingCardComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "removeCurrentFocus", function () {
      document.activeElement.blur();
    });

    return _this;
  }

  _createClass(CrowdfundingCardComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          imageProps = _this$props.imageProps,
          avatarProps = _this$props.avatarProps,
          titleProps = _this$props.titleProps,
          ownerTitle = _this$props.ownerTitle,
          ownerDescription = _this$props.ownerDescription,
          cardTitle = _this$props.cardTitle,
          cardSubTitle = _this$props.cardSubTitle,
          titlesMinHeight = _this$props.titlesMinHeight,
          titleTruncate = _this$props.titleTruncate,
          subTitleTruncate = _this$props.subTitleTruncate,
          info1 = _this$props.info1,
          info2 = _this$props.info2,
          info3 = _this$props.info3,
          progress = _this$props.progress,
          progressColor = _this$props.progressColor,
          state = _this$props.state,
          loading = _this$props.loading,
          others = _objectWithoutProperties(_this$props, ["imageProps", "avatarProps", "titleProps", "ownerTitle", "ownerDescription", "cardTitle", "cardSubTitle", "titlesMinHeight", "titleTruncate", "subTitleTruncate", "info1", "info2", "info3", "progress", "progressColor", "state", "loading"]);

      var Tag = this.props.href ? 'a' : 'div';
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(Tag, _extends({}, others, {
        style: styles.card,
        onClick: this.removeCurrentFocus
      }), this.renderImage(), this.renderHeader(), _react.default.createElement(Marger, {
        bottom: "2",
        style: titlesMinHeight && styles.titles
      }, this.renderTitle(), this.renderSubtitle()), this.renderInformation(), this.renderProgress(), this.renderState(), this.renderLoading()));
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var _this$props$imageProp = this.props.imageProps,
          alt = _this$props$imageProp.alt,
          backgroundColor = _this$props$imageProp.backgroundColor,
          color = _this$props$imageProp.color,
          imageProps = _objectWithoutProperties(_this$props$imageProp, ["alt", "backgroundColor", "color"]);

      var imageClassName = (0, _classnames.default)('k-Card__image', imageProps.className);
      return _react.default.createElement(Marger, {
        className: "k-Card__imageContainer",
        style: _objectSpread({}, styles.imageContainer, {
          backgroundColor: this.props.loading ? _colorsConfig.default.line2 : backgroundColor
        })
      }, !this.props.loading && _react.default.createElement("img", _extends({}, imageProps, {
        alt: alt || '',
        className: imageClassName,
        style: _objectSpread({}, imageProps.style, styles.image, {
          color: color
        })
      })));
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var titleStyle = [this.props.loading && styles.header.owner.titleLoading];
      var descriptionStyle = [this.props.loading && styles.header.owner.descriptionLoading];
      return _react.default.createElement("div", {
        style: styles.header.grid
      }, _react.default.createElement(Marger, {
        top: "1",
        bottom: "1"
      }, _react.default.createElement(_buttonImage.ButtonImage, {
        tag: "span",
        img: !this.props.loading && this.props.avatarProps,
        withoutPointerEvents: true,
        style: styles.header.avatar
      })), _react.default.createElement("div", {
        style: styles.header.owner
      }, _react.default.createElement(Text, {
        tag: "div",
        size: "micro",
        weight: "regular",
        style: titleStyle
      }, !this.props.loading && this.props.ownerTitle), _react.default.createElement(Text, {
        tag: "div",
        size: "micro",
        weight: "light",
        style: descriptionStyle
      }, !this.props.loading && this.props.ownerDescription)));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var className = (0, _classnames.default)('k-Card__title', this.props.titleProps.className);
      return _react.default.createElement(Marger, {
        bottom: "1",
        style: styles.title
      }, !this.props.loading && _react.default.createElement(Title, _extends({
        tag: "p"
      }, this.props.titleProps, {
        modifier: "senary",
        margin: false,
        className: className
      }), this.props.titleTruncate && _react.default.createElement(_reactTruncate.default, {
        lines: 2,
        style: styles.truncate
      }, this.props.cardTitle), !this.props.titleTruncate && this.props.cardTitle), this.props.loading && _react.default.createElement("div", null, _react.default.createElement("span", {
        style: styles.title.loading
      }), _react.default.createElement("span", {
        style: _objectSpread({}, styles.title.loading, styles.title.loading.small)
      })));
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      var horizontalStroke = [styles.stroke, this.props.loading && styles.stroke.loading];
      var textStyle = [styles.subtitle.text, this.props.subTitleTruncate && styles.subtitle.text.truncated];
      return _react.default.createElement(Marger, {
        top: "1",
        style: styles.subtitle
      }, _react.default.createElement(HorizontalStroke, {
        size: "tiny",
        style: horizontalStroke
      }), this.props.cardSubTitle && !this.props.loading && _react.default.createElement(Text, {
        size: "micro",
        weight: "regular",
        tag: "p",
        style: textStyle
      }, this.props.subTitleTruncate && _react.default.createElement(_reactTruncate.default, {
        style: styles.truncate
      }, this.props.cardSubTitle), !this.props.subTitleTruncate && this.props.cardSubTitle), this.props.loading && _react.default.createElement("span", {
        style: styles.subtitle.loading
      }));
    }
  }, {
    key: "renderInformation",
    value: function renderInformation() {
      if (!this.props.info1 && !this.props.info2 && !this.props.info3) return;
      return _react.default.createElement(Marger, {
        top: "1.5",
        bottom: ".5",
        style: styles.informations
      }, this.renderInfo(this.props.info1), this.renderInfo(this.props.info2), this.renderInfo(this.props.info3, true));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(text) {
      var lastItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var lastItemStyles = lastItem ? styles.informations.info.lastItem : {};
      return _react.default.createElement(Marger, {
        top: "0.5",
        style: _objectSpread({}, styles.informations.info, lastItemStyles)
      }, !this.props.loading && _react.default.createElement(Text, {
        size: "micro",
        lineHeight: "normal",
        weight: "light"
      }, text), this.props.loading && _react.default.createElement("div", null, _react.default.createElement("span", {
        style: styles.informations.info.loading
      }), _react.default.createElement("span", {
        style: _objectSpread({}, styles.informations.info.loading, styles.informations.info.loading.large)
      })));
    }
  }, {
    key: "renderProgress",
    value: function renderProgress() {
      var _this$props2 = this.props,
          progress = _this$props2.progress,
          progressColor = _this$props2.progressColor,
          loading = _this$props2.loading;
      if (progress === false) return;
      var progressValue = loading ? 65 : progress;
      return _react.default.createElement(Marger, {
        top: ".5",
        bottom: "2",
        style: styles.progress
      }, _react.default.createElement(_progress.Progress, {
        value: progressValue,
        className: loading && 'is-disabled',
        color: progressColor,
        rampProps: {
          style: {
            height: '4px'
          }
        },
        style: {
          flex: 1
        }
      }), _react.default.createElement(Text, {
        weight: "regular",
        size: "micro",
        style: styles.progress.percent
      }, loading && _react.default.createElement("span", {
        style: styles.informations.info.loading
      }), !loading && "".concat(progress, " %")));
    }
  }, {
    key: "renderState",
    value: function renderState() {
      if (!this.props.state || this.props.loading) return;
      return _react.default.createElement("div", {
        style: styles.state
      }, _react.default.createElement(Text, {
        size: "micro",
        lineHeight: "normal",
        weight: "regular"
      }, this.props.state));
    }
  }, {
    key: "renderLoading",
    value: function renderLoading() {
      if (!this.props.loading) return;
      return _react.default.createElement("span", {
        style: styles.loading
      });
    }
  }]);

  return CrowdfundingCardComponent;
}(_react.Component);

var COMPONENT_GUTTER = 10;

var loadingKeyframes = _radium.default.keyframes({
  '0%': {
    transform: 'translateX(-100%)'
  },
  '100%': {
    transform: 'translateX(100%)'
  }
});

var styles = {
  card: {
    position: 'relative',
    paddingBottom: '5px'
  },
  imageContainer: {
    overflow: 'hidden',
    position: 'relative',
    paddingTop: "".concat(9 / 16 * 100, "%"),
    backgroundColor: _colorsConfig.default.line2
  },
  imageContainerLoading: {
    backgroundColor: _colorsConfig.default.line2
  },
  image: {
    position: 'absolute',
    top: 0,
    width: '100%',
    display: 'block',
    textAlign: 'center'
  },
  header: {
    grid: {
      display: 'inline-flex',
      alignItems: 'center',
      position: 'relative',
      top: '0',
      marginTop: '-30px',
      backgroundColor: _colorsConfig.default.background1
    },
    avatar: {
      marginLeft: "".concat(COMPONENT_GUTTER, "px"),
      backgroundColor: _colorsConfig.default.line2
    },
    owner: {
      marginLeft: "".concat(COMPONENT_GUTTER, "px"),
      marginRight: "".concat(COMPONENT_GUTTER * 2, "px"),
      lineHeight: '1.2',
      titleLoading: {
        backgroundColor: _colorsConfig.default.line2,
        borderBottom: "1px solid ".concat(_colorsConfig.default.background1),
        width: '70px',
        height: '14px'
      },
      descriptionLoading: {
        backgroundColor: _colorsConfig.default.line2,
        borderTop: "1px solid ".concat(_colorsConfig.default.background1),
        width: '100px',
        height: '14px'
      }
    }
  },
  truncate: {
    whiteSpace: 'nowrap'
  },
  titles: {
    minHeight: '75px'
  },
  title: {
    padding: "0 ".concat(COMPONENT_GUTTER, "px"),
    lineHeight: '1',
    loading: {
      display: 'block',
      backgroundColor: _colorsConfig.default.line2,
      borderBottom: "1px solid ".concat(_colorsConfig.default.background1),
      height: '24px',
      small: {
        width: '70%',
        borderTop: "1px solid ".concat(_colorsConfig.default.background1),
        borderBottom: 0
      }
    }
  },
  subtitle: {
    display: 'flex',
    alignItems: 'center',
    lineHeight: '1',
    padding: "0 ".concat(COMPONENT_GUTTER, "px"),
    loading: {
      display: 'block',
      backgroundColor: _colorsConfig.default.line2,
      width: '80px',
      height: '12px'
    },
    text: {
      lineHeight: '1rem',
      flex: 1,
      truncated: {
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }
    }
  },
  stroke: {
    flexShrink: 0,
    margin: "5px ".concat(COMPONENT_GUTTER, "px 5px 0"),
    loading: {
      backgroundColor: _colorsConfig.default.line2
    }
  },
  informations: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: "0 ".concat(COMPONENT_GUTTER, "px"),
    lineHeight: '1',
    info: {
      marginRight: '30px',
      lastItem: {
        marginRight: 0
      },
      loading: {
        display: 'block',
        backgroundColor: _colorsConfig.default.line2,
        borderBottom: "1px solid ".concat(_colorsConfig.default.background1),
        width: '40px',
        height: '16px',
        large: {
          width: '65px',
          borderTop: "1px solid ".concat(_colorsConfig.default.background1),
          borderBottom: 0
        }
      }
    }
  },
  progress: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: "0 ".concat(COMPONENT_GUTTER, "px"),
    percent: {
      flexShrink: 0,
      marginLeft: "".concat(COMPONENT_GUTTER * 2, "px")
    }
  },
  state: {
    position: 'absolute',
    top: '0',
    right: '0',
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: _colorsConfig.default.background1,
    padding: "".concat(COMPONENT_GUTTER, "px"),
    lineHeight: '1'
  },
  loading: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    transform: 'translateX(-100%)',
    background: 'linear-gradient(90deg, rgba(0, 0, 0, 0), \
      rgba(255, 255, 255, .3), rgba(0, 0, 0, 0))',
    animation: 'x 1s linear infinite',
    animationName: loadingKeyframes
  }
};
CrowdfundingCardComponent.defaultProps = {
  href: null,
  imageProps: {
    backgroundColor: _colorsConfig.default.line2,
    src: 'https://placehold.it/350x200/caf4fe/caf4fe',
    alt: ''
  },
  avatarProps: {
    src: 'https://placehold.it/100x100/caf4fe/caf4fe',
    alt: ''
  },
  ownerTitle: null,
  ownerDescription: null,
  titleProps: {},
  cardTitle: null,
  cardSubTitle: null,
  titlesMinHeight: true,
  titleTruncate: true,
  subTitleTruncate: true,
  info1: null,
  info2: null,
  info3: null,
  progress: false,
  state: null,
  loading: false
};
var CrowdfundingCard = (0, _card.card)(CrowdfundingCardComponent, {
  light: true,
  withoutBoxShadowOnHover: true
});
exports.CrowdfundingCard = CrowdfundingCard;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CrowdfundingCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _radium = _interopRequireWildcard(require("radium"));

var _card = require("../../hoc/card");

var _marger = require("../../components/layout/marger");

var _title = require("../../components/typography/title");

var _text = require("../../components/typography/text");

var _horizontalStroke = require("../../components/layout/horizontal-stroke");

var _buttonImage = require("../../components/buttons/button-image");

var _progress = require("../../components/meters/progress");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _reactTruncate = _interopRequireDefault(require("react-truncate"));

var Text = (0, _radium.default)(_text.Text);
var Title = (0, _radium.default)(_title.Title);
var HorizontalStroke = (0, _radium.default)(_horizontalStroke.HorizontalStroke);
var Marger = (0, _radium.default)(_marger.Marger);

var CrowdfundingCardComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(CrowdfundingCardComponent, _Component);

  function CrowdfundingCardComponent() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, CrowdfundingCardComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CrowdfundingCardComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _this.removeCurrentFocus = function () {
      document.activeElement.blur();
    };

    return _this;
  }

  (0, _createClass2.default)(CrowdfundingCardComponent, [{
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
          others = (0, _objectWithoutProperties2.default)(_this$props, ["imageProps", "avatarProps", "titleProps", "ownerTitle", "ownerDescription", "cardTitle", "cardSubTitle", "titlesMinHeight", "titleTruncate", "subTitleTruncate", "info1", "info2", "info3", "progress", "progressColor", "state", "loading"]);
      var Tag = this.props.href ? 'a' : 'div';
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(Tag, (0, _extends2.default)({}, others, {
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
          imageProps = (0, _objectWithoutProperties2.default)(_this$props$imageProp, ["alt", "backgroundColor", "color"]);
      var imageClassName = (0, _classnames.default)('k-Card__image', imageProps.className);
      return _react.default.createElement(Marger, {
        className: "k-Card__imageContainer",
        style: (0, _extends2.default)({}, styles.imageContainer, {
          backgroundColor: this.props.loading ? _colorsConfig.default.line2 : backgroundColor
        })
      }, !this.props.loading && _react.default.createElement("img", (0, _extends2.default)({}, imageProps, {
        alt: alt || '',
        className: imageClassName,
        style: (0, _extends2.default)({}, imageProps.style, {}, styles.image, {
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
      }, !this.props.loading && _react.default.createElement(Title, (0, _extends2.default)({
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
        style: (0, _extends2.default)({}, styles.title.loading, {}, styles.title.loading.small)
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
        style: (0, _extends2.default)({}, styles.informations.info, {}, lastItemStyles)
      }, !this.props.loading && _react.default.createElement(Text, {
        size: "micro",
        lineHeight: "normal",
        weight: "light"
      }, text), this.props.loading && _react.default.createElement("div", null, _react.default.createElement("span", {
        style: styles.informations.info.loading
      }), _react.default.createElement("span", {
        style: (0, _extends2.default)({}, styles.informations.info.loading, {}, styles.informations.info.loading.large)
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
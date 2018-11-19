"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacyRewardCardContainer = exports.styles = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("kitten/components/layout/marger");

var _grid = require("kitten/components/grid/grid");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _screenConfig = require("kitten/constants/screen-config");

var _content = require("kitten/components/cards/reward-card/content");

var _infos = require("kitten/components/cards/reward-card/infos");

var _image2 = require("kitten/components/cards/reward-card/image");

var _action = require("kitten/components/cards/reward-card/action");

var _deprecated = require("kitten/helpers/utils/deprecated");

var _mediaQueries = require("kitten/hoc/media-queries");

var _paddings, _image, _lists, _paddings2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var Grid = (0, _radium.default)(_grid.Grid);
var GridCol = (0, _radium.default)(_grid.GridCol);

var LegacyRewardCardContainerBase =
/*#__PURE__*/
function (_Component) {
  _inherits(LegacyRewardCardContainerBase, _Component);

  function LegacyRewardCardContainerBase() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LegacyRewardCardContainerBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LegacyRewardCardContainerBase)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isTinyVersion", function () {
      return _this.props.version === 'tiny' || _this.props.viewportIsMobile;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isSOrLessVersion", function () {
      return _this.isTinyVersion() || _this.props.viewportIsSOrLess;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "legacyInfos", function () {
      var _this$props = _this.props,
          titleContributors = _this$props.titleContributors,
          titleDelivery = _this$props.titleDelivery,
          titleAvailability = _this$props.titleAvailability,
          valueContributors = _this$props.valueContributors,
          valueDelivery = _this$props.valueDelivery,
          valueAvailability = _this$props.valueAvailability;
      var infos = [];

      if (titleContributors) {
        infos.push({
          label: titleContributors,
          value: valueContributors
        });
      }

      if (titleDelivery) {
        infos.push({
          label: titleDelivery,
          value: valueDelivery
        });
      }

      if (titleAvailability) {
        infos.push({
          label: titleAvailability,
          value: valueAvailability
        });
      }

      return infos;
    });

    return _this;
  }

  _createClass(LegacyRewardCardContainerBase, [{
    key: "render",
    value: function render() {
      // We need to destructure the props to prevent them to hydrate children components.
      var _this$props2 = this.props,
          titleAmount = _this$props2.titleAmount,
          titleTag = _this$props2.titleTag,
          subtitle = _this$props2.subtitle,
          subtitleTag = _this$props2.subtitleTag,
          description = _this$props2.description,
          infos = _this$props2.infos,
          manageContributionDescription = _this$props2.manageContributionDescription,
          manageContributionLinkLabel = _this$props2.manageContributionLinkLabel,
          manageContributionLinkHref = _this$props2.manageContributionLinkHref,
          buttonLabel = _this$props2.buttonLabel,
          buttonOnMouseEnter = _this$props2.buttonOnMouseEnter,
          buttonOnMouseLeave = _this$props2.buttonOnMouseLeave,
          buttonOnClick = _this$props2.buttonOnClick,
          isDisabled = _this$props2.isDisabled,
          starred = _this$props2.starred,
          starLabel = _this$props2.starLabel,
          version = _this$props2.version,
          viewportIsMobile = _this$props2.viewportIsMobile,
          viewportIsSOrLess = _this$props2.viewportIsSOrLess,
          viewportIsTabletOrLess = _this$props2.viewportIsTabletOrLess,
          titleDescription = _this$props2.titleDescription,
          textDescription = _this$props2.textDescription,
          textTag = _this$props2.textTag,
          myContribution = _this$props2.myContribution,
          manageContribution = _this$props2.manageContribution,
          manageContributionLink = _this$props2.manageContributionLink,
          button = _this$props2.button,
          titleContributors = _this$props2.titleContributors,
          titleDelivery = _this$props2.titleDelivery,
          titleAvailability = _this$props2.titleAvailability,
          valueContributors = _this$props2.valueContributors,
          valueDelivery = _this$props2.valueDelivery,
          valueAvailability = _this$props2.valueAvailability,
          imageProps = _this$props2.imageProps,
          others = _objectWithoutProperties(_this$props2, ["titleAmount", "titleTag", "subtitle", "subtitleTag", "description", "infos", "manageContributionDescription", "manageContributionLinkLabel", "manageContributionLinkHref", "buttonLabel", "buttonOnMouseEnter", "buttonOnMouseLeave", "buttonOnClick", "isDisabled", "starred", "starLabel", "version", "viewportIsMobile", "viewportIsSOrLess", "viewportIsTabletOrLess", "titleDescription", "textDescription", "textTag", "myContribution", "manageContribution", "manageContributionLink", "button", "titleContributors", "titleDelivery", "titleAvailability", "valueContributors", "valueDelivery", "valueAvailability", "imageProps"]);

      var shouldDisplayImage = imageProps && imageProps.src;
      var cardStyles = [others.style, styles.card];
      var cardPaddings = this.isTinyVersion() ? styles.card.paddings.tinyVersion : styles.card.paddings;
      var cardImageStyles = this.isTinyVersion() ? styles.card.image.tinyVersion : styles.card.image;
      var leftColumnProps = this.isTinyVersion() ? null : {
        'col-l': shouldDisplayImage ? 7 : 10,
        'col-s': 7
      };
      var rightColumnProps = this.isTinyVersion() ? null : {
        'col-s': 4,
        'offset-s': 1
      };
      var withImageOnTinyVersion = shouldDisplayImage && this.isTinyVersion();
      if (!titleAmount) return null;
      return _react.default.createElement(_deprecated.Deprecated, {
        warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/kitten/"
      }, _react.default.createElement(_radium.StyleRoot, _extends({}, others, {
        style: cardStyles
      }), _react.default.createElement(_marger.Marger, {
        bottom: this.isSOrLessVersion() ? 0 : 4,
        top: this.isSOrLessVersion() ? 3 : 4
      }, _react.default.createElement(Grid, {
        style: cardPaddings
      }, _react.default.createElement(GridCol, leftColumnProps, titleAmount && _react.default.createElement(_content.RewardCardContent, _extends({}, this.props, {
        subtitle: subtitle || titleDescription,
        subtitleTag: subtitleTag || textTag,
        description: description || textDescription,
        isTinyVersion: this.isTinyVersion()
      })), _react.default.createElement(_infos.RewardCardInfos, _extends({
        infos: this.legacyInfos()
      }, this.props, {
        isTinyVersion: this.isTinyVersion(),
        viewportIsTabletOrLess: viewportIsTabletOrLess
      })), !this.isSOrLessVersion() && _react.default.createElement(_action.RewardCardActionOnMOrMore, _extends({}, this.props, {
        manageContributionDescription: manageContributionDescription || myContribution,
        manageContributionLinkLabel: manageContributionLinkLabel || manageContribution,
        manageContributionLinkHref: manageContributionLinkHref || manageContributionLink,
        buttonLabel: buttonLabel || button,
        isTinyVersion: this.isTinyVersion(),
        isSOrLessVersion: this.isSOrLessVersion()
      }))), shouldDisplayImage && _react.default.createElement(GridCol, _extends({}, rightColumnProps, {
        style: cardImageStyles
      }), _react.default.createElement(_marger.Marger, {
        bottom: !myContribution ? 2 : null
      }, _react.default.createElement(_image2.RewardCardImage, this.props)))), this.isSOrLessVersion() && _react.default.createElement(_action.RewardCardAction, _extends({}, this.props, {
        manageContributionDescription: manageContributionDescription || myContribution,
        manageContributionLinkLabel: manageContributionLinkLabel || manageContribution,
        manageContributionLinkHref: manageContributionLinkHref || manageContributionLink,
        buttonLabel: buttonLabel || button,
        isTinyVersion: this.isTinyVersion(),
        isSOrLessVersion: this.isSOrLessVersion(),
        topMargin: withImageOnTinyVersion ? 2 : 0
      })))));
    }
  }]);

  return LegacyRewardCardContainerBase;
}(_react.Component);

_defineProperty(LegacyRewardCardContainerBase, "propTypes", {
  viewportIsMobile: _propTypes.default.bool,
  viewportIsSOrLess: _propTypes.default.bool,
  viewportIsTabletOrLess: _propTypes.default.bool
});

var styles = {
  disabled: {
    filter: 'grayscale(1) opacity(.4)',
    cursor: 'not-allowed'
  },
  textColor: {
    color: _colorsConfig.default.font1
  },
  card: {
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: _colorsConfig.default.line1,
    paddings: (_paddings = {
      paddingLeft: 20,
      paddingRight: 20
    }, _defineProperty(_paddings, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      paddingLeft: 30,
      paddingRight: 30
    }), _defineProperty(_paddings, "@media (min-width: ".concat(_screenConfig.ScreenConfig['M'].min, "px)"), {
      paddingLeft: 40,
      paddingRight: 0
    }), _defineProperty(_paddings, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      paddingLeft: 115,
      paddingRight: 0
    }), _defineProperty(_paddings, "tinyVersion", {
      paddingLeft: 20,
      paddingRight: 20
    }), _paddings),
    image: (_image = {}, _defineProperty(_image, "@media (min-width: ".concat(_screenConfig.ScreenConfig['M'].min, "px)"), {
      paddingRight: 50
    }), _defineProperty(_image, "tinyVersion", {
      paddingRight: 10
    }), _image)
  },
  textMargin: {
    margin: 0
  },
  infos: {
    lists: (_lists = {
      fontSize: 14
    }, _defineProperty(_lists, "@media (min-width: ".concat(_screenConfig.ScreenConfig['M'].min, "px)"), {
      fontSize: 16,
      marginRight: 30
    }), _defineProperty(_lists, "tinyVersion", {
      fontSize: 14,
      marginRight: 0
    }), _lists)
  },
  choiceButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddings: (_paddings2 = {}, _defineProperty(_paddings2, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      paddingLeft: 30,
      paddingRight: 30
    }), _defineProperty(_paddings2, "tinyVersion", {
      paddingLeft: 20,
      paddingRight: 20
    }), _paddings2)
  },
  myContribution: {
    display: 'flex',
    alignItems: 'center',
    text: {
      display: 'flex',
      lineHeight: 'normal'
    }
  },
  iconBadge: {
    marginRight: 10
  },
  image: {
    width: '100%',
    display: 'block'
  }
};
exports.styles = styles;
var LegacyRewardCardContainer = (0, _mediaQueries.mediaQueries)((0, _radium.default)(LegacyRewardCardContainerBase), {
  viewportIsTabletOrLess: true,
  viewportIsSOrLess: true,
  viewportIsMobile: true
});
exports.LegacyRewardCardContainer = LegacyRewardCardContainer;
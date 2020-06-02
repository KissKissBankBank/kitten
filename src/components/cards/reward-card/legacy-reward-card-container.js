"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegacyRewardCardContainer = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../../components/layout/marger");

var _grid = require("../../../components/grid/grid");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _screenConfig = require("../../../constants/screen-config");

var _content = require("../../../components/cards/reward-card/content");

var _infos = require("../../../components/cards/reward-card/infos");

var _image2 = require("../../../components/cards/reward-card/image");

var _action = require("../../../components/cards/reward-card/action");

var _deprecated = require("../../../helpers/utils/deprecated");

var _mediaQueries = require("../../../hoc/media-queries");

var _paddings, _image, _lists, _paddings2;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Grid = (0, _radium.default)(_grid.Grid);
var GridCol = (0, _radium.default)(_grid.GridCol);

var LegacyRewardCardContainerBase = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(LegacyRewardCardContainerBase, _Component);

  var _super = _createSuper(LegacyRewardCardContainerBase);

  function LegacyRewardCardContainerBase() {
    var _this;

    (0, _classCallCheck2.default)(this, LegacyRewardCardContainerBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _this.isTinyVersion = function () {
      return _this.props.version === 'tiny' || _this.props.viewportIsMobile;
    };

    _this.isSOrLessVersion = function () {
      return _this.isTinyVersion() || _this.props.viewportIsSOrLess;
    };

    _this.legacyInfos = function () {
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
    };

    return _this;
  }

  (0, _createClass2.default)(LegacyRewardCardContainerBase, [{
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
          others = (0, _objectWithoutProperties2.default)(_this$props2, ["titleAmount", "titleTag", "subtitle", "subtitleTag", "description", "infos", "manageContributionDescription", "manageContributionLinkLabel", "manageContributionLinkHref", "buttonLabel", "buttonOnMouseEnter", "buttonOnMouseLeave", "buttonOnClick", "isDisabled", "starred", "starLabel", "version", "viewportIsMobile", "viewportIsSOrLess", "viewportIsTabletOrLess", "titleDescription", "textDescription", "textTag", "myContribution", "manageContribution", "manageContributionLink", "button", "titleContributors", "titleDelivery", "titleAvailability", "valueContributors", "valueDelivery", "valueAvailability", "imageProps"]);
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
      return /*#__PURE__*/_react.default.createElement(_deprecated.Deprecated, {
        warningMessage: "Please use RewardCard sub-component to make your composition. You can check some examples on https://kisskissbankbank.github.io/../../../"
      }, /*#__PURE__*/_react.default.createElement(_radium.StyleRoot, (0, _extends2.default)({}, others, {
        style: cardStyles
      }), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        bottom: this.isSOrLessVersion() ? 0 : 4,
        top: this.isSOrLessVersion() ? 3 : 4
      }, /*#__PURE__*/_react.default.createElement(Grid, {
        style: cardPaddings
      }, /*#__PURE__*/_react.default.createElement(GridCol, leftColumnProps, titleAmount && /*#__PURE__*/_react.default.createElement(_content.RewardCardContent, (0, _extends2.default)({}, this.props, {
        subtitle: subtitle || titleDescription,
        subtitleTag: subtitleTag || textTag,
        description: description || textDescription,
        isTinyVersion: this.isTinyVersion()
      })), /*#__PURE__*/_react.default.createElement(_infos.RewardCardInfos, (0, _extends2.default)({
        infos: this.legacyInfos()
      }, this.props, {
        isTinyVersion: this.isTinyVersion(),
        viewportIsTabletOrLess: viewportIsTabletOrLess
      })), !this.isSOrLessVersion() && /*#__PURE__*/_react.default.createElement(_action.RewardCardActionOnMOrMore, (0, _extends2.default)({}, this.props, {
        manageContributionDescription: manageContributionDescription || myContribution,
        manageContributionLinkLabel: manageContributionLinkLabel || manageContribution,
        manageContributionLinkHref: manageContributionLinkHref || manageContributionLink,
        buttonLabel: buttonLabel || button,
        isTinyVersion: this.isTinyVersion(),
        isSOrLessVersion: this.isSOrLessVersion()
      }))), shouldDisplayImage && /*#__PURE__*/_react.default.createElement(GridCol, (0, _extends2.default)({}, rightColumnProps, {
        style: cardImageStyles
      }), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        bottom: !myContribution ? 2 : null
      }, /*#__PURE__*/_react.default.createElement(_image2.RewardCardImage, this.props)))), this.isSOrLessVersion() && /*#__PURE__*/_react.default.createElement(_action.RewardCardAction, (0, _extends2.default)({}, this.props, {
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

LegacyRewardCardContainerBase.propTypes = {
  viewportIsMobile: _propTypes.default.bool,
  viewportIsSOrLess: _propTypes.default.bool,
  viewportIsTabletOrLess: _propTypes.default.bool
};
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
    }, (0, _defineProperty2.default)(_paddings, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      paddingLeft: 30,
      paddingRight: 30
    }), (0, _defineProperty2.default)(_paddings, "@media (min-width: ".concat(_screenConfig.ScreenConfig['M'].min, "px)"), {
      paddingLeft: 40,
      paddingRight: 0
    }), (0, _defineProperty2.default)(_paddings, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      paddingLeft: 115,
      paddingRight: 0
    }), (0, _defineProperty2.default)(_paddings, "tinyVersion", {
      paddingLeft: 20,
      paddingRight: 20
    }), _paddings),
    image: (_image = {}, (0, _defineProperty2.default)(_image, "@media (min-width: ".concat(_screenConfig.ScreenConfig['M'].min, "px)"), {
      paddingRight: 50
    }), (0, _defineProperty2.default)(_image, "tinyVersion", {
      paddingRight: 10
    }), _image)
  },
  textMargin: {
    margin: 0
  },
  infos: {
    lists: (_lists = {
      fontSize: 14
    }, (0, _defineProperty2.default)(_lists, "@media (min-width: ".concat(_screenConfig.ScreenConfig['M'].min, "px)"), {
      fontSize: 16,
      marginRight: 30
    }), (0, _defineProperty2.default)(_lists, "tinyVersion", {
      fontSize: 14,
      marginRight: 0
    }), _lists)
  },
  choiceButton: {
    paddingLeft: 20,
    paddingRight: 20,
    paddings: (_paddings2 = {}, (0, _defineProperty2.default)(_paddings2, "@media (min-width: ".concat(_screenConfig.ScreenConfig['S'].min, "px)"), {
      paddingLeft: 30,
      paddingRight: 30
    }), (0, _defineProperty2.default)(_paddings2, "tinyVersion", {
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
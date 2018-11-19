"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlFooterKisskiss = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _row = require("kitten/components/grid/row");

var _marger = require("kitten/components/layout/marger");

var _grid = require("kitten/components/grid/grid");

var _textInputWithButton = require("kitten/components/form/text-input-with-button");

var _paragraph2 = require("kitten/components/typography/paragraph");

var _text2 = require("kitten/components/typography/text");

var _socialButtonIcon = require("kitten/components/buttons/social-button-icon");

var _linkList2 = require("kitten/components/links/link-list");

var _selectWithState = require("kitten/components/form/select-with-state");

var _kisskissbankbanklogo = require("kitten/karl/logos/kisskissbankbanklogo");

var _mediaQueries = require("kitten/helpers/utils/media-queries");

var _screenConfig = require("kitten/constants/screen-config");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _parser = require("kitten/helpers/utils/parser");

var _form, _subscribe, _buttons, _social, _network, _linkList, _list, _img2, _logo, _paragraph, _block;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
var Row = (0, _radium.default)(_row.Row);
var Paragraph = (0, _radium.default)(_paragraph2.Paragraph);
var FacebookButtonIcon = (0, _radium.default)(_socialButtonIcon.FacebookButtonIcon);
var TwitterButtonIcon = (0, _radium.default)(_socialButtonIcon.TwitterButtonIcon);
var KissKissBankBankLogo = (0, _radium.default)(_kisskissbankbanklogo.KissKissBankBankLogo);
var TextInputWithButton = (0, _radium.default)(_textInputWithButton.TextInputWithButton);

var KarlFooterKisskiss =
/*#__PURE__*/
function (_Component) {
  _inherits(KarlFooterKisskiss, _Component);

  function KarlFooterKisskiss(props, context) {
    var _this;

    _classCallCheck(this, KarlFooterKisskiss);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KarlFooterKisskiss).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTabletMQ", function (event) {
      _this.setState({
        viewportIsTabletOrLess: event.matches
      });
    });

    _this.mqTabletOrLess = (0, _mediaQueries.createMatchMediaMax)(_screenConfig.SCREEN_SIZE_M);
    _this.state = {
      viewportIsTabletOrLess: false
    };
    return _this;
  }

  _createClass(KarlFooterKisskiss, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.mqTabletOrLess) {
        this.mqTabletOrLess.addListener(this.onTabletMQ);
        this.onTabletMQ(this.mqTabletOrLess);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mqTabletOrLess) this.mqTabletOrLess.removeListener(this.onTabletMQ);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_radium.StyleRoot, null, this.renderNetwork(), _react.default.createElement("div", {
        style: styles.darkBackground
      }, this.renderList(), this.renderNotice()));
    }
  }, {
    key: "renderNetwork",
    value: function renderNetwork() {
      var _this$props = this.props,
          subscribeLabel = _this$props.subscribeLabel,
          socialText = _this$props.socialText,
          newsletterSubmitValue = _this$props.newsletterSubmitValue,
          textInputProps = _this$props.textInputProps,
          hrefFacebook = _this$props.hrefFacebook,
          hrefTwitter = _this$props.hrefTwitter,
          hrefInstagram = _this$props.hrefInstagram,
          others = _objectWithoutProperties(_this$props, ["subscribeLabel", "socialText", "newsletterSubmitValue", "textInputProps", "hrefFacebook", "hrefTwitter", "hrefInstagram"]);

      return _react.default.createElement(Row, {
        style: styles.network
      }, _react.default.createElement(Grid, null, _react.default.createElement(GridCol, {
        "col-m": "12",
        "col-l": "8"
      }, _react.default.createElement(_marger.Marger, {
        top: "3",
        bottom: "3"
      }, _react.default.createElement(Grid, null, _react.default.createElement(GridCol, {
        "col-l": "12",
        "offset-l": "0",
        "col-m": "6",
        "offset-m": "3",
        "col-s": "10",
        "offset-s": "1",
        style: styles.network.subscribe
      }, _react.default.createElement("div", {
        style: styles.network.subscribe.label
      }, _react.default.createElement(_text2.Text, {
        size: "tiny",
        weight: "regular",
        htmlFor: "subscribe",
        tag: "label"
      }, (0, _parser.parseHtml)(subscribeLabel))), _react.default.createElement("div", {
        style: styles.network.subscribe.form
      }, _react.default.createElement(TextInputWithButton, {
        textInputProps: _objectSpread({}, textInputProps, {
          id: 'subscribe'
        }),
        value: newsletterSubmitValue,
        style: styles.network.subscribe.form.textInput
      })))))), _react.default.createElement(GridCol, {
        "col-m": "12",
        "col-l": "4",
        style: styles.network.social
      }, _react.default.createElement("div", {
        style: styles.network.social.text
      }, _react.default.createElement(_text2.Text, {
        size: "tiny",
        weight: "regular"
      }, (0, _parser.parseHtml)(socialText))), _react.default.createElement("div", {
        style: styles.network.social.buttons
      }, _react.default.createElement(FacebookButtonIcon, {
        tag: "a",
        style: styles.network.social.buttons.buttonIcon,
        href: hrefFacebook
      }), _react.default.createElement(TwitterButtonIcon, {
        tag: "a",
        style: styles.network.social.buttons.buttonIcon,
        href: hrefTwitter
      }), _react.default.createElement(_socialButtonIcon.InstagramButtonIcon, {
        tag: "a",
        href: hrefInstagram
      })))));
    }
  }, {
    key: "renderLanguageSelect",
    value: function renderLanguageSelect() {
      var _this$props2 = this.props,
          options = _this$props2.options,
          initialLanguage = _this$props2.initialLanguage;
      return _react.default.createElement(GridCol, {
        col: "8",
        "col-m": "4",
        "col-l": "2",
        offset: "2",
        "offset-m": "4",
        "offset-l": "2"
      }, _react.default.createElement(_selectWithState.SelectWithState, {
        name: "language",
        options: options,
        value: initialLanguage
      }));
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this$props3 = this.props,
          items1 = _this$props3.items1,
          items2 = _this$props3.items2,
          items3 = _this$props3.items3;
      return _react.default.createElement(Row, {
        role: "navigation"
      }, _react.default.createElement(Grid, {
        style: styles.list
      }, _react.default.createElement(GridCol, {
        "col-l": "2"
      }, _react.default.createElement(_marger.Marger, {
        bottom: "4",
        style: styles.list.logo
      }, _react.default.createElement(KissKissBankBankLogo, {
        color: "#fff",
        style: styles.list.logo.img
      }))), _react.default.createElement(GridCol, {
        "col-l": "6",
        style: styles.list.linkList
      }, _react.default.createElement(Grid, null, _react.default.createElement(GridCol, {
        "col-m": "4",
        style: styles.list.linkList.items
      }, _react.default.createElement(_linkList2.LinkList, {
        margin: false,
        items: items1,
        color: "light",
        itemMargin: "double",
        lineHeight: "normal"
      })), _react.default.createElement(GridCol, {
        "col-m": "4",
        style: styles.list.linkList.items
      }, _react.default.createElement(_linkList2.LinkList, {
        margin: false,
        items: items2,
        color: "light",
        itemMargin: "double",
        lineHeight: "normal"
      })), _react.default.createElement(GridCol, {
        "col-m": "4",
        style: styles.list.linkList.items
      }, _react.default.createElement(_linkList2.LinkList, {
        margin: false,
        items: items3,
        color: "light",
        itemMargin: "double",
        lineHeight: "normal"
      })))), this.renderLanguageSelect()));
    }
  }, {
    key: "renderNotice",
    value: function renderNotice() {
      var _this$props4 = this.props,
          noticeAltAutorite = _this$props4.noticeAltAutorite,
          noticeParagraphAutorite = _this$props4.noticeParagraphAutorite,
          noticeAltMangopay = _this$props4.noticeAltMangopay,
          noticeParagraphMangopayText1 = _this$props4.noticeParagraphMangopayText1,
          noticeParagraphMangopayLink = _this$props4.noticeParagraphMangopayLink,
          noticeParagraphMangopayLinkAcronym = _this$props4.noticeParagraphMangopayLinkAcronym,
          noticeParagraphMangopayText2 = _this$props4.noticeParagraphMangopayText2,
          noticeCopyright = _this$props4.noticeCopyright;
      return _react.default.createElement(Row, {
        role: "contentinfo"
      }, _react.default.createElement(Grid, {
        style: styles.notice
      }, _react.default.createElement(GridCol, {
        "col-xs": "8",
        "col-s": "10",
        "col-m": "5",
        "col-l": "4",
        "offset-xs": "2",
        "offset-s": "1",
        "offset-m": "0",
        "offset-l": "0"
      }, _react.default.createElement("div", {
        style: styles.notice.block
      }, _react.default.createElement("div", {
        style: styles.notice.block.logo
      }, _react.default.createElement("img", {
        src: "/assets/partners/french-authorities.svg",
        alt: noticeAltAutorite,
        style: styles.notice.block.logo.img
      })), _react.default.createElement(Paragraph, {
        modifier: "quaternary",
        margin: false,
        style: styles.notice.block.paragraph
      }, (0, _parser.parseHtml)(noticeParagraphAutorite)))), _react.default.createElement(GridCol, {
        "col-xs": "8",
        "col-s": "10",
        "col-m": "5",
        "col-l": "4",
        "offset-xs": "2",
        "offset-s": "1",
        "offset-m": "1",
        "offset-l": "0"
      }, _react.default.createElement("div", {
        style: styles.notice.block
      }, _react.default.createElement("div", {
        style: styles.notice.block.logo
      }, _react.default.createElement("img", {
        src: "/assets/partners/mangopay.svg",
        alt: noticeAltMangopay,
        style: styles.notice.block.logo.img.mangopay
      })), _react.default.createElement(Paragraph, {
        modifier: "quaternary",
        margin: false,
        style: styles.notice.block.paragraph
      }, (0, _parser.parseHtml)(noticeParagraphMangopayText1), ' ', _react.default.createElement("a", {
        href: "https://www.mangopay.com/fr/",
        target: "_blank",
        style: styles.notice.block.paragraph.link
      }, (0, _parser.parseHtml)(noticeParagraphMangopayLink), _react.default.createElement("abbr", null, " ", (0, _parser.parseHtml)(noticeParagraphMangopayLinkAcronym))), ' ', (0, _parser.parseHtml)(noticeParagraphMangopayText2)))), _react.default.createElement(GridCol, {
        "col-l": "4",
        style: styles.notice.block.copyright
      }, _react.default.createElement(_marger.Marger, {
        top: this.state.viewportIsTabletOrLess ? 5 : 0
      }, _react.default.createElement(_text2.Text, {
        size: "tiny",
        weight: "regular",
        color: "background1"
      }, (0, _parser.parseHtml)(noticeCopyright))))));
    }
  }]);

  return KarlFooterKisskiss;
}(_react.Component);

exports.KarlFooterKisskiss = KarlFooterKisskiss;
var styles = {
  darkBackground: {
    backgroundColor: "".concat(_colorsConfig.default.font1)
  },
  network: (_network = {
    background: 'linear-gradient(to top, ' + "".concat(_colorsConfig.default.background3, " 0%, ") + "".concat(_colorsConfig.default.background3, " 50%, ") + "".concat(_colorsConfig.default.background1, " 50%, ") + "".concat(_colorsConfig.default.background1, " 100%)")
  }, _defineProperty(_network, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    background: 'linear-gradient(to right, ' + "".concat(_colorsConfig.default.background3, " 0%, ") + "".concat(_colorsConfig.default.background3, " 70%, ") + "".concat(_colorsConfig.default.background1, " 70%, ") + "".concat(_colorsConfig.default.background1, " 100%)")
  }), _defineProperty(_network, "subscribe", (_subscribe = {
    alignSelf: 'center'
  }, _defineProperty(_subscribe, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    display: 'flex',
    justifyContent: 'flex-end'
  }), _defineProperty(_subscribe, "label", _defineProperty({
    textAlign: 'center'
  }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    alignSelf: 'center',
    pointerEvents: 'auto',
    marginRight: '15px'
  })), _defineProperty(_subscribe, "form", (_form = {
    textAlign: 'center',
    flex: '1'
  }, _defineProperty(_form, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
    marginTop: '10px'
  }), _defineProperty(_form, "textInput", _defineProperty({}, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    maxWidth: '450px'
  })), _form)), _subscribe)), _defineProperty(_network, "social", (_social = {
    alignSelf: 'center'
  }, _defineProperty(_social, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
    marginTop: '30px',
    marginBottom: '30px',
    order: '-1'
  }), _defineProperty(_social, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    display: 'flex',
    justifyContent: 'flex-end'
  }), _defineProperty(_social, "text", _defineProperty({
    textAlign: 'center'
  }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    textAlign: 'right',
    marginRight: '15px',
    alignSelf: 'center'
  })), _defineProperty(_social, "buttons", (_buttons = {
    textAlign: 'center'
  }, _defineProperty(_buttons, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
    marginTop: '10px'
  }), _defineProperty(_buttons, "buttonIcon", {
    marginRight: '15px'
  }), _buttons)), _social)), _network),
  list: (_list = {
    paddingTop: '80px',
    paddingBottom: '50px'
  }, _defineProperty(_list, "@media (min-width: ".concat(_screenConfig.ScreenConfig['M'].min, "px)"), {
    paddingTop: '100px'
  }), _defineProperty(_list, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    paddingTop: '100px',
    paddingBottom: 0
  }), _defineProperty(_list, "logo", {
    textAlign: 'center',
    img: _defineProperty({
      verticalAlign: 'middle'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      display: 'block',
      verticalAlign: 'top'
    })
  }), _defineProperty(_list, "linkList", (_linkList = {
    paddingBottom: 0
  }, _defineProperty(_linkList, "@media (min-width: ".concat(_screenConfig.ScreenConfig['M'].min, "px)"), {
    paddingBottom: '50px'
  }), _defineProperty(_linkList, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    paddingBottom: '80px'
  }), _defineProperty(_linkList, "items", _defineProperty({}, "@media (max-width: ".concat(_screenConfig.ScreenConfig['S'].max, "px)"), {
    marginBottom: '30px'
  })), _linkList)), _list),
  notice: {
    paddingBottom: '100px',
    block: (_block = {}, _defineProperty(_block, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      textAlign: 'left',
      display: 'flex'
    }), _defineProperty(_block, "logo", (_logo = {
      textAlign: 'center',
      marginBottom: '10px',
      lineHeight: 0
    }, _defineProperty(_logo, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      marginRight: '14px'
    }), _defineProperty(_logo, "img", (_img2 = {
      verticalAlign: 'middle'
    }, _defineProperty(_img2, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      display: 'block',
      verticalAlign: 'top',
      marginBottom: '10px'
    }), _defineProperty(_img2, "mangopay", _defineProperty({
      width: '130px',
      marginTop: '30px'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      width: '100px',
      marginTop: 0
    })), _img2)), _logo)), _defineProperty(_block, "paragraph", (_paragraph = {
      color: "".concat(_colorsConfig.default.background1)
    }, _defineProperty(_paragraph, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
      textAlign: 'center'
    }), _defineProperty(_paragraph, "link", {
      color: "".concat(_colorsConfig.default.background1),
      textDecoration: 'underline',
      ':active': {
        color: "".concat(_colorsConfig.default.primary3)
      },
      ':hover': {
        color: "".concat(_colorsConfig.default.primary1)
      }
    }), _paragraph)), _defineProperty(_block, "copyright", _defineProperty({
      textAlign: 'center'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      alignSelf: 'flex-end',
      textAlign: 'right'
    })), _block)
  }
};
KarlFooterKisskiss.defaultProps = {
  // Network
  subscribeLabel: 'Inscrivez-vous à notre Newsletter',
  textInputProps: {
    placeholder: 'Entrez votre e-mail'
  },
  newsletterSubmitValue: 'Envoyer',
  socialText: 'Suivez-nous',
  hrefFacebook: '#',
  hrefTwitter: '#',
  hrefInstagram: '#',
  // List
  items1: [{
    key: 'key1',
    item: 'Réussir ma collecte',
    href: '#'
  }, {
    key: 'key2',
    item: 'Crowdfunding : Questions fréquentes',
    href: '#'
  }, {
    key: 'key3',
    item: 'Financer mon projet food ou agricole',
    href: '#'
  }],
  items2: [{
    key: 'key1',
    item: 'Les Mentors',
    href: '#'
  }, {
    key: 'key2',
    item: 'Blog',
    href: '#'
  }, {
    key: 'key3',
    item: 'Maison de Crowdfunding',
    href: '#'
  }, {
    key: 'key4',
    item: 'Les StaKissTiques',
    href: '#'
  }],
  items3: [{
    key: 'key1',
    item: "L'équipe",
    href: '#'
  }, {
    key: 'key2',
    item: 'Jobs',
    href: '#'
  }, {
    key: 'key3',
    item: 'Presse',
    href: '#'
  }, {
    key: 'key4',
    item: 'Conditions générales',
    href: '#'
  }, {
    key: 'key5',
    item: 'Nos valeurs',
    href: '#'
  }, {
    key: 'key6',
    item: 'Nous contacter',
    href: '#'
  }],
  // LanguageSelect
  options: [{
    value: 'fr',
    label: 'Français'
  }, {
    value: 'en',
    label: 'English'
  }, {
    value: 'nl',
    label: 'Nederlands'
  }],
  initialLanguage: 'fr',
  // Notice
  noticeAltAutorite: 'Autorités françaises',
  noticeParagraphAutorite: 'KissKissBankBank est une plateforme de financement \
    participatif régulée par les autorités françaises.\
    Immatriculation&nbsp; : 14007218',
  noticeAltMangopay: 'Mangopay',
  noticeParagraphMangopayText1: 'KissKissBankBank &amp; Co est agent de \
  l’institution financière',
  noticeParagraphMangopayLink: 'Mangopay',
  noticeParagraphMangopayLinkAcronym: 'SA.',
  noticeParagraphMangopayText2: 'Paiements sécurisés avec Mangopay Payment Services',
  noticeCopyright: '&copy; 2018 KissKissBankBank &amp; Co'
};
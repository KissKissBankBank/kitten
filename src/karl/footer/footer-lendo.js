"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlFooterLendo = void 0;

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

var _lendopolisLogo = require("kitten/karl/logos/lendopolis-logo");

var _screenConfig = require("kitten/constants/screen-config");

var _mediaQueries = require("kitten/hoc/media-queries");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _parser = require("kitten/helpers/utils/parser");

var _subscribe, _social, _network, _items, _linkList, _list2, _img2, _logo, _paragraph, _block;

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

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = (0, _radium.default)(_grid.Grid);
var GridCol = (0, _radium.default)(_grid.GridCol);
var Row = (0, _radium.default)(_row.Row);
var Marger = (0, _radium.default)(_marger.Marger);
var Paragraph = (0, _radium.default)(_paragraph2.Paragraph);
var FacebookButtonIcon = (0, _radium.default)(_socialButtonIcon.FacebookButtonIcon);
var TwitterButtonIcon = (0, _radium.default)(_socialButtonIcon.TwitterButtonIcon);
var LendopolisLogo = (0, _radium.default)(_lendopolisLogo.LendopolisLogo);
var TextInputWithButton = (0, _radium.default)(_textInputWithButton.TextInputWithButton);

var KarlFooterLendoBase =
/*#__PURE__*/
function (_Component) {
  _inherits(KarlFooterLendoBase, _Component);

  function KarlFooterLendoBase() {
    _classCallCheck(this, KarlFooterLendoBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(KarlFooterLendoBase).apply(this, arguments));
  }

  _createClass(KarlFooterLendoBase, [{
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
          viewportIsTabletOrLess = _this$props.viewportIsTabletOrLess,
          others = _objectWithoutProperties(_this$props, ["subscribeLabel", "socialText", "newsletterSubmitValue", "textInputProps", "hrefFacebook", "hrefTwitter", "hrefInstagram", "viewportIsTabletOrLess"]);

      return _react.default.createElement(Row, {
        style: styles.network
      }, _react.default.createElement(Grid, null, _react.default.createElement(GridCol, {
        "col-m": "12",
        "col-l": "8"
      }, _react.default.createElement(Marger, {
        top: "3",
        bottom: "3"
      }, _react.default.createElement(Grid, null, _react.default.createElement(GridCol, {
        "col-s": "10",
        "col-m": "6",
        "col-l": "12",
        "offset-s": "1",
        "offset-m": "3",
        "offset-l": "0",
        style: styles.network.subscribe
      }, _react.default.createElement(Marger, {
        bottom: viewportIsTabletOrLess ? 1 : 0,
        style: styles.network.subscribe.label
      }, _react.default.createElement(_text2.Text, {
        size: "tiny",
        weight: "regular",
        htmlFor: "subscribe",
        tag: "label"
      }, (0, _parser.parseHtml)(subscribeLabel))), _react.default.createElement(Marger, {
        top: viewportIsTabletOrLess ? 1 : 0,
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
      }, _react.default.createElement(Marger, {
        top: "3",
        bottom: "3",
        style: styles.network.social.list
      }, _react.default.createElement(Marger, {
        bottom: viewportIsTabletOrLess ? 1 : 0,
        style: styles.network.social.text
      }, _react.default.createElement(_text2.Text, {
        size: "tiny",
        weight: "regular"
      }, (0, _parser.parseHtml)(socialText))), _react.default.createElement(Marger, {
        top: viewportIsTabletOrLess ? 1 : 0,
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
      }))))));
    }
  }, {
    key: "renderList",
    value: function renderList() {
      var _this$props2 = this.props,
          items1 = _this$props2.items1,
          items2 = _this$props2.items2,
          items3 = _this$props2.items3,
          items4 = _this$props2.items4,
          listLabel1 = _this$props2.listLabel1,
          listLabel2 = _this$props2.listLabel2,
          listLabel3 = _this$props2.listLabel3,
          viewportIsTabletOrLess = _this$props2.viewportIsTabletOrLess,
          viewportIsMobile = _this$props2.viewportIsMobile;
      return _react.default.createElement(Row, {
        role: "navigation"
      }, _react.default.createElement(Grid, {
        style: styles.list
      }, _react.default.createElement(GridCol, {
        "col-l": "2"
      }, _react.default.createElement(Marger, {
        bottom: viewportIsTabletOrLess ? 5 : 0,
        style: styles.list.logo
      }, _react.default.createElement(LendopolisLogo, {
        primaryColor: "#fff",
        secondaryColor: "#caf4fe",
        style: styles.list.logo.img
      }))), _react.default.createElement(GridCol, {
        "col-l": "10",
        style: styles.list.linkList
      }, _react.default.createElement(Grid, null, _react.default.createElement(GridCol, {
        "col-m": "3",
        style: styles.list.linkList.items
      }, _react.default.createElement(Marger, {
        bottom: "1.5",
        style: styles.list.linkList.items.label
      }, _react.default.createElement(_text2.Text, {
        color: "background1",
        weight: "regular",
        size: "tiny"
      }, (0, _parser.parseHtml)(listLabel1))), _react.default.createElement(Marger, {
        bottom: viewportIsMobile ? 3 : 0
      }, _react.default.createElement(_linkList2.LinkList, {
        margin: false,
        items: items1,
        color: "light",
        itemMargin: "triple",
        lineHeight: "normal"
      }))), _react.default.createElement(GridCol, {
        "col-m": "3",
        style: styles.list.linkList.items
      }, _react.default.createElement(Marger, {
        bottom: "1.5",
        style: styles.list.linkList.items.label
      }, _react.default.createElement(_text2.Text, {
        color: "background1",
        weight: "regular",
        size: "tiny"
      }, (0, _parser.parseHtml)(listLabel2))), _react.default.createElement(Marger, {
        bottom: viewportIsMobile ? 3 : 0
      }, _react.default.createElement(_linkList2.LinkList, {
        margin: false,
        items: items2,
        color: "light",
        itemMargin: "triple",
        lineHeight: "normal"
      }))), _react.default.createElement(GridCol, {
        "col-m": "3",
        style: styles.list.linkList.items
      }, _react.default.createElement(Marger, {
        bottom: "1.5",
        style: styles.list.linkList.items.label
      }, _react.default.createElement(_text2.Text, {
        color: "background1",
        weight: "regular",
        size: "tiny"
      }, (0, _parser.parseHtml)(listLabel3))), _react.default.createElement(Marger, {
        bottom: viewportIsMobile ? 3 : 0
      }, _react.default.createElement(_linkList2.LinkList, {
        margin: false,
        items: items3,
        color: "light",
        itemMargin: "triple",
        lineHeight: "normal"
      }))), _react.default.createElement(GridCol, {
        "col-m": "3",
        style: styles.list.linkList.items
      }, _react.default.createElement(Marger, {
        bottom: viewportIsMobile ? 3 : 0
      }, _react.default.createElement(_linkList2.LinkList, {
        margin: false,
        items: items4,
        color: "light",
        itemMargin: "double",
        lineHeight: "normal"
      })))))));
    }
  }, {
    key: "renderNotice",
    value: function renderNotice() {
      var _this$props3 = this.props,
          noticeAltAutorite = _this$props3.noticeAltAutorite,
          noticeParagraphAutorite = _this$props3.noticeParagraphAutorite,
          noticeAltMangopay = _this$props3.noticeAltMangopay,
          noticeParagraphMangopayText1 = _this$props3.noticeParagraphMangopayText1,
          noticeParagraphMangopayLink = _this$props3.noticeParagraphMangopayLink,
          noticeParagraphMangopayLinkAcronym = _this$props3.noticeParagraphMangopayLinkAcronym,
          noticeParagraphMangopayText2 = _this$props3.noticeParagraphMangopayText2,
          noticeCopyright = _this$props3.noticeCopyright,
          viewportIsTabletOrLess = _this$props3.viewportIsTabletOrLess;
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
      }, _react.default.createElement(Marger, {
        bottom: viewportIsTabletOrLess ? 1 : 0,
        style: styles.notice.block.logo
      }, _react.default.createElement("img", {
        src: "/assets/partners/french-authorities.svg",
        alt: noticeAltAutorite,
        style: styles.notice.block.logo.img
      })), _react.default.createElement(Marger, {
        top: viewportIsTabletOrLess ? 1 : 0
      }, _react.default.createElement(Paragraph, {
        modifier: "quaternary",
        margin: false,
        style: styles.notice.block.paragraph
      }, (0, _parser.parseHtml)(noticeParagraphAutorite))))), _react.default.createElement(GridCol, {
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
      }, _react.default.createElement(Marger, {
        bottom: viewportIsTabletOrLess ? 1 : 0,
        style: styles.notice.block.logo
      }, _react.default.createElement("img", {
        src: "/assets/partners/mangopay.svg",
        alt: noticeAltMangopay,
        style: styles.notice.block.logo.img.mangopay
      })), _react.default.createElement(Marger, {
        top: viewportIsTabletOrLess ? 1 : 0
      }, _react.default.createElement(Paragraph, {
        modifier: "quaternary",
        margin: false,
        style: styles.notice.block.paragraph
      }, (0, _parser.parseHtml)(noticeParagraphMangopayText1), ' ', _react.default.createElement("a", {
        href: "https://www.mangopay.com/fr/",
        target: "_blank",
        style: styles.notice.block.paragraph.link
      }, (0, _parser.parseHtml)(noticeParagraphMangopayLink), _react.default.createElement("abbr", {
        title: (0, _parser.parseHtml)(noticeParagraphMangopayLinkAcronym)
      }, ' ', (0, _parser.parseHtml)(noticeParagraphMangopayLinkAcronym))), ' ', (0, _parser.parseHtml)(noticeParagraphMangopayText2))))), _react.default.createElement(GridCol, {
        "col-l": "4",
        style: styles.notice.block.copyright
      }, _react.default.createElement(Marger, {
        top: viewportIsTabletOrLess ? 5 : 0
      }, _react.default.createElement(_text2.Text, {
        size: "tiny",
        weight: "regular",
        color: "background1"
      }, (0, _parser.parseHtml)(noticeCopyright))))));
    }
  }]);

  return KarlFooterLendoBase;
}(_react.Component);

_defineProperty(KarlFooterLendoBase, "defaultProps", {
  // Network
  subscribeLabel: 'Inscrivez-vous à notre Newsletter',
  textInputProps: {
    placeholder: 'Entrez votre e-mail'
  },
  newsletterSubmitValue: "Je m'inscris",
  socialText: 'Suivez-nous',
  hrefFacebook: '#',
  hrefTwitter: '#',
  hrefInstagram: '#',
  // List
  listLabel1: 'Emprunter',
  listLabel2: 'Prêter',
  listLabel3: 'À Propos',
  items1: [{
    key: 'key1',
    item: 'Comment emprunter',
    href: '#',
    weight: 'light'
  }, {
    key: 'key2',
    item: 'FAQ',
    href: '#',
    weight: 'light'
  }, {
    key: 'key3',
    item: 'Déposer un projet',
    href: '#',
    weight: 'light'
  }, {
    key: 'key4',
    item: "S'inscrire",
    href: '#',
    weight: 'light'
  }],
  items2: [{
    key: 'key1',
    item: 'Comment investir',
    href: '#',
    weight: 'light'
  }, {
    key: 'key2',
    item: 'FAQ',
    href: '#',
    weight: 'light'
  }, {
    key: 'key3',
    item: 'Prêter à un projet',
    href: '#',
    weight: 'light'
  }, {
    key: 'key4',
    item: "S'inscrire",
    href: '#',
    weight: 'light'
  }, {
    key: 'key5',
    item: 'Simulateur',
    href: '#',
    weight: 'light'
  }],
  items3: [{
    key: 'key1',
    item: 'Nos valeurs',
    href: '#',
    weight: 'light'
  }, {
    key: 'key2',
    item: 'Manifeste',
    href: '#',
    weight: 'light'
  }, {
    key: 'key3',
    item: 'Statistiques',
    href: '#',
    weight: 'light'
  }, {
    key: 'key4',
    item: 'Indicateurs de performance',
    href: '#',
    weight: 'light'
  }, {
    key: 'key5',
    item: "L'équipe",
    href: '#',
    weight: 'light'
  }, {
    key: 'key6',
    item: 'Mentors',
    href: '#',
    weight: 'light'
  }],
  items4: [{
    key: 'key1',
    item: 'Contact',
    href: '#',
    weight: 'light'
  }, {
    key: 'key2',
    item: "Apporteurs d'affaires",
    href: '#',
    weight: 'light'
  }, {
    key: 'key3',
    item: 'Mentions légales',
    href: '#',
    weight: 'light'
  }, {
    key: 'key4',
    item: 'CGU',
    href: '#',
    weight: 'light'
  }, {
    key: 'key5',
    item: 'Confidentialité',
    href: '#',
    weight: 'light'
  }, {
    key: 'key6',
    item: 'Presse',
    href: '#',
    weight: 'light'
  }, {
    key: 'key7',
    item: 'Le blog',
    href: '#',
    weight: 'light'
  }],
  // Notice
  noticeAltAutorite: 'Autorités françaises',
  noticeParagraphAutorite: 'Lendopolis est une plateforme de financement \
      participatif régulée par les autorités françaises.\
      Immatriculation : 14006007',
  noticeAltMangopay: 'Mangopay',
  noticeParagraphMangopayText1: "Lendopolis est agent de l'institution financière",
  noticeParagraphMangopayLink: 'MANGOPAY',
  noticeParagraphMangopayLinkAcronym: 'SA.',
  noticeParagraphMangopayText2: 'Paiements sécurisés avec MANGOPAY Payment Services.',
  noticeCopyright: '&copy; 2018 KissKissBankBank &amp; Co'
});

var styles = {
  darkBackground: {
    backgroundColor: _colorsConfig.default.font1
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
    marginRight: 15
  })), _defineProperty(_subscribe, "form", {
    textAlign: 'center',
    flex: '1',
    textInput: _defineProperty({}, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      maxWidth: 450
    })
  }), _subscribe)), _defineProperty(_network, "social", (_social = {}, _defineProperty(_social, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
    order: '-1'
  }), _defineProperty(_social, "list", _defineProperty({
    alignSelf: 'center'
  }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    display: 'flex',
    justifyContent: 'flex-end'
  })), _defineProperty(_social, "text", _defineProperty({
    textAlign: 'center'
  }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    textAlign: 'right',
    marginRight: 15,
    alignSelf: 'center'
  })), _defineProperty(_social, "buttons", {
    textAlign: 'center',
    buttonIcon: {
      marginRight: 15
    }
  }), _social)), _network),
  list: (_list2 = {
    paddingTop: 40,
    paddingBottom: 50
  }, _defineProperty(_list2, "@media (min-width: ".concat(_screenConfig.ScreenConfig['M'].min, "px)"), {
    paddingTop: 100
  }), _defineProperty(_list2, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    paddingTop: 100,
    paddingBottom: 0
  }), _defineProperty(_list2, "logo", {
    textAlign: 'center',
    img: _defineProperty({
      verticalAlign: 'middle'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      display: 'block',
      verticalAlign: 'top'
    })
  }), _defineProperty(_list2, "linkList", (_linkList = {
    paddingBottom: 0
  }, _defineProperty(_linkList, "@media (min-width: ".concat(_screenConfig.ScreenConfig['M'].min, "px)"), {
    paddingBottom: 50
  }), _defineProperty(_linkList, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
    paddingBottom: 80
  }), _defineProperty(_linkList, "items", (_items = {}, _defineProperty(_items, "@media (max-width: ".concat(_screenConfig.ScreenConfig['S'].max, "px)"), {
    marginBottom: 30
  }), _defineProperty(_items, "label", _defineProperty({}, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
    textAlign: 'center'
  })), _items)), _linkList)), _list2),
  notice: {
    paddingBottom: 100,
    block: (_block = {}, _defineProperty(_block, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      textAlign: 'left',
      display: 'flex'
    }), _defineProperty(_block, "logo", (_logo = {
      textAlign: 'center',
      lineHeight: 0
    }, _defineProperty(_logo, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      marginRight: 14
    }), _defineProperty(_logo, "img", (_img2 = {
      verticalAlign: 'middle'
    }, _defineProperty(_img2, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      display: 'block',
      verticalAlign: 'top'
    }), _defineProperty(_img2, "mangopay", _defineProperty({
      width: 130,
      marginTop: 30
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      width: 100,
      marginTop: 0
    })), _img2)), _logo)), _defineProperty(_block, "paragraph", (_paragraph = {
      color: _colorsConfig.default.background1
    }, _defineProperty(_paragraph, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
      textAlign: 'center'
    }), _defineProperty(_paragraph, "link", {
      color: _colorsConfig.default.background1,
      textDecoration: 'underline',
      ':active': {
        color: _colorsConfig.default.primary3
      },
      ':hover': {
        color: _colorsConfig.default.primary1
      }
    }), _paragraph)), _defineProperty(_block, "copyright", _defineProperty({
      textAlign: 'center'
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      alignSelf: 'flex-end',
      textAlign: 'right'
    })), _block)
  }
};
var KarlFooterLendo = (0, _mediaQueries.mediaQueries)((0, _radium.default)(KarlFooterLendoBase), {
  viewportIsTabletOrLess: true,
  viewportIsMobile: true
});
exports.KarlFooterLendo = KarlFooterLendo;
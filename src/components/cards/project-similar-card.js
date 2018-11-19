"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectSimilarCard = exports.SimilarProjectCard = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _card = require("kitten/hoc/card");

var _grid = require("kitten/components/grid/grid");

var _marger = require("kitten/components/layout/marger");

var _title = require("kitten/components/typography/title");

var _paragraph = require("kitten/components/typography/paragraph");

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _separator = require("kitten/components/layout/separator");

var _tagList = require("kitten/components/lists/tag-list");

var _arrowIcon = require("kitten/components/icons/arrow-icon");

var _lockIcon = require("kitten/components/icons/lock-icon");

var _loader = require("kitten/components/loaders/loader");

var _typologyTagIcon = require("kitten/components/icons/typology-tag-icon");

var _instrumentTagIcon = require("kitten/components/icons/instrument-tag-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var SimilarProjectCardComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(SimilarProjectCardComponent, _Component);

  function SimilarProjectCardComponent() {
    var _this;

    _classCallCheck(this, SimilarProjectCardComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SimilarProjectCardComponent).call(this));
    _this.renderInfo = _this.renderInfo.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.renderTagsInList = _this.renderTagsInList.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(SimilarProjectCardComponent, [{
    key: "renderRefresh",
    value: function renderRefresh() {
      var _this$props = this.props,
          refresh = _this$props.refresh,
          onRefreshClick = _this$props.onRefreshClick;
      return _react.default.createElement("div", {
        className: "k-ProjectSimilarCard__refresh"
      }, _react.default.createElement("span", {
        className: "k-ProjectSimilarCard__refresh__link",
        onClick: onRefreshClick
      }, refresh));
    }
  }, {
    key: "renderLeftArrow",
    value: function renderLeftArrow() {
      return _react.default.createElement(_buttonIcon.ButtonIcon, {
        size: "tiny",
        type: "button",
        verticalArrow: true,
        disabled: this.props.leftArrowDisabled,
        onClick: this.props.onLeftArrowClick
      }, _react.default.createElement(_arrowIcon.ArrowIcon, {
        direction: "left",
        className: "k-ButtonIcon__svg"
      }));
    }
  }, {
    key: "renderRightArrow",
    value: function renderRightArrow() {
      return _react.default.createElement(_buttonIcon.ButtonIcon, {
        size: "tiny",
        type: "button",
        verticalArrow: true,
        disabled: this.props.rightArrowDisabled,
        onClick: this.props.onRightArrowClick
      }, _react.default.createElement(_arrowIcon.ArrowIcon, {
        className: "k-ButtonIcon__svg"
      }));
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var step = this.props.step;
      return _react.default.createElement("div", {
        className: "k-ProjectSimilarCard__grid"
      }, _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "1"
      }, _react.default.createElement("div", {
        className: "k-ProjectSimilarCard__grid--flex"
      }, this.renderRefresh(), _react.default.createElement("div", {
        className: "k-ProjectSimilarCard__navigation"
      }, _react.default.createElement("div", {
        className: "k-ProjectSimilarCard__header--step"
      }, step), _react.default.createElement("div", {
        className: "k-ProjectSimilarCard__header--button"
      }, this.renderLeftArrow(), this.renderRightArrow())))));
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var imageSrc = this.props.imageSrc;
      if (!imageSrc) return;
      return _react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "1",
        key: "image"
      }, _react.default.createElement("div", {
        className: "k-ProjectSimilarCard__grid"
      }, _react.default.createElement("img", {
        className: "k-ProjectSimilarCard__img",
        src: imageSrc,
        alt: ""
      })));
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props2 = this.props,
          title = _this$props2.title,
          imageSrc = _this$props2.imageSrc;
      var top = imageSrc ? 1 : 2;
      return _react.default.createElement(_marger.Marger, {
        top: top,
        bottom: "1"
      }, _react.default.createElement(_title.Title, {
        modifier: "senary",
        margin: false,
        tag: "p"
      }, title));
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      var paragraph = this.props.paragraph;
      return _react.default.createElement("div", {
        key: "description",
        className: "k-ProjectSimilarCard__grid"
      }, this.renderTitle(), this.renderTagsArea(), _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "2"
      }, _react.default.createElement(_paragraph.Paragraph, {
        modifier: "tertiary",
        margin: false
      }, paragraph)));
    }
  }, {
    key: "renderTags",
    value: function renderTags() {
      return _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "1"
      }, _react.default.createElement(_tagList.TagList, {
        icon: _typologyTagIcon.TypologyTagIcon,
        items: this.props.tags,
        tiny: true
      }));
    }
  }, {
    key: "renderTagsInList",
    value: function renderTagsInList(tagList, index) {
      var icon = this.convertToClass(tagList.icon);

      var list = _react.default.createElement(_tagList.TagList, {
        icon: icon,
        items: tagList.items,
        tiny: true
      });

      var separator = _react.default.createElement("div", {
        className: "k-u-margin-left-single"
      }, _react.default.createElement("hr", {
        className: (0, _classnames.default)('k-VerticalSeparator', 'k-VerticalSeparator--darker')
      }));

      var tagListWithMargin = _react.default.createElement("div", {
        className: "k-u-margin-left-single"
      }, list);

      return _react.default.createElement("div", {
        key: "tag-list-".concat(index),
        className: "k-ProjectCard__grid--flex"
      }, index != 0 && separator, index != 0 && tagListWithMargin, index == 0 && list);
    }
  }, {
    key: "convertToClass",
    value: function convertToClass(stringClassName) {
      switch (stringClassName) {
        case 'InstrumentTagIcon':
          return _instrumentTagIcon.InstrumentTagIcon;

        default:
          return _typologyTagIcon.TypologyTagIcon;
      }
    }
  }, {
    key: "renderTagLists",
    value: function renderTagLists() {
      return _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "1",
        className: "k-ProjectCard__grid--flex"
      }, this.props.tagLists.map(this.renderTagsInList));
    }
  }, {
    key: "renderTagsArea",
    value: function renderTagsArea() {
      if (!this.props.tagLists && !this.props.tags) return;
      return this.props.tagLists ? this.renderTagLists() : this.renderTags();
    }
  }, {
    key: "renderInfos",
    value: function renderInfos() {
      var infos = this.props.infos;
      if (!infos) return;
      return _react.default.createElement("div", {
        key: "infos"
      }, _react.default.createElement(_separator.Separator, null), _react.default.createElement(_marger.Marger, {
        top: "1.5",
        bottom: "1.5",
        className: "k-ProjectCard__grid--flex"
      }, infos.map(this.renderInfo)));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(info) {
      var coloredInfosValues = this.props.coloredInfosValues;
      var infoClassName = (0, _classnames.default)('k-ProjectSimilarCard__info__value', {
        'k-u-color-primary1': coloredInfosValues
      });
      return _react.default.createElement("div", {
        key: info.text,
        className: (0, _classnames.default)('k-u-align-center', 'k-ProjectSimilarCard__info')
      }, info.text, _react.default.createElement("br", null), _react.default.createElement("span", {
        className: infoClassName
      }, info.locked ? _react.default.createElement(_lockIcon.LockIcon, {
        width: "12"
      }) : info.value));
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var loading = this.props.loading;
      if (!loading) return;
      return _react.default.createElement(_marger.Marger, {
        top: "9",
        bottom: "9"
      }, _react.default.createElement("div", {
        className: "k-ProjectSimilarCard__grid"
      }, _react.default.createElement(_loader.Loader, {
        className: "k-ProjectSimilarCard__loading"
      })));
    }
  }, {
    key: "renderProject",
    value: function renderProject() {
      var loading = this.props.loading;
      if (loading) return;
      return [this.renderImage(), this.renderDescription(), this.renderInfos()];
    }
  }, {
    key: "hasLink",
    value: function hasLink() {
      return !this.props.loading && !!this.props.link && !!this.props.link.href;
    }
  }, {
    key: "contentTagProps",
    value: function contentTagProps() {
      var tagClassName = 'k-ProjectSimilarCard__content';
      if (!this.hasLink()) return {
        className: tagClassName
      };

      var _this$props$link = this.props.link,
          className = _this$props$link.className,
          target = _this$props$link.target,
          linkProps = _objectWithoutProperties(_this$props$link, ["className", "target"]);

      return _objectSpread({}, linkProps, {
        target: target || '_blank',
        className: (0, _classnames.default)(tagClassName, className)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var ProjectSimilarCardClassName = (0, _classnames.default)('k-ProjectSimilarCard', className);
      var Tag = this.hasLink() ? 'a' : 'div';
      return _react.default.createElement("div", {
        className: ProjectSimilarCardClassName
      }, this.renderHeader(), _react.default.createElement(_separator.Separator, null), _react.default.createElement(Tag, this.contentTagProps(), this.renderProject(), this.renderLoader()));
    }
  }]);

  return SimilarProjectCardComponent;
}(_react.Component);

SimilarProjectCardComponent.defaultProps = {
  step: '',
  imageSrc: null,
  title: '',
  paragraph: '',
  tagLists: null,
  tags: null,
  infos: false,
  // Eg: [{ key: …, text: …, value: …, locked: … }]
  coloredInfosValues: false,
  refresh: 'Refresh',
  onRefreshClick: function onRefreshClick() {},
  onLeftArrowClick: function onLeftArrowClick() {},
  onRightArrowClick: function onRightArrowClick() {},
  loading: false,
  leftArrowDisabled: true,
  rightArrowDisabled: true,
  // `link` prop should be formatted as follow:
  // {
  //   href: 'link-url',
  //   target: '_blank',
  //   className: 'link-custom-classname',
  //   …
  // }
  link: null // Add generic card styles.

};
var SimilarProjectCard = (0, _card.card)(SimilarProjectCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true
}); // DEPRECATED

exports.SimilarProjectCard = SimilarProjectCard;
var ProjectSimilarCard = SimilarProjectCard;
exports.ProjectSimilarCard = ProjectSimilarCard;
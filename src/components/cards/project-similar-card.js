"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectSimilarCard = exports.SimilarProjectCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _card = require("../../hoc/card");

var _marger = require("../../components/layout/marger");

var _title = require("../../components/typography/title");

var _paragraph = require("../../components/typography/paragraph");

var _buttonIcon = require("../../components/buttons/button-icon");

var _separator = require("../../components/layout/separator");

var _tagList = require("../../components/lists/tag-list");

var _arrowIcon = require("../../components/icons/arrow-icon");

var _lockIcon = require("../../components/icons/lock-icon");

var _loader = require("../../components/loaders/loader");

var _typologyTagIcon = require("../../components/icons/typology-tag-icon");

var _instrumentTagIcon = require("../../components/icons/instrument-tag-icon");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SimilarProjectCardComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(SimilarProjectCardComponent, _Component);

  var _super = _createSuper(SimilarProjectCardComponent);

  function SimilarProjectCardComponent() {
    var _this;

    (0, _classCallCheck2.default)(this, SimilarProjectCardComponent);
    _this = _super.call(this);
    _this.renderInfo = _this.renderInfo.bind((0, _assertThisInitialized2.default)(_this));
    _this.renderTagsInList = _this.renderTagsInList.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(SimilarProjectCardComponent, [{
    key: "renderRefresh",
    value: function renderRefresh() {
      var _this$props = this.props,
          refresh = _this$props.refresh,
          onRefreshClick = _this$props.onRefreshClick;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectSimilarCard__refresh"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "k-ProjectSimilarCard__refresh__link",
        onClick: onRefreshClick
      }, refresh));
    }
  }, {
    key: "renderLeftArrow",
    value: function renderLeftArrow() {
      return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
        size: "tiny",
        type: "button",
        verticalArrow: true,
        disabled: this.props.leftArrowDisabled,
        onClick: this.props.onLeftArrowClick
      }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        direction: "left",
        className: "k-ButtonIcon__svg"
      }));
    }
  }, {
    key: "renderRightArrow",
    value: function renderRightArrow() {
      return /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
        size: "tiny",
        type: "button",
        verticalArrow: true,
        disabled: this.props.rightArrowDisabled,
        onClick: this.props.onRightArrowClick
      }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        className: "k-ButtonIcon__svg"
      }));
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var step = this.props.step;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectSimilarCard__grid"
      }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "1"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectSimilarCard__grid--flex"
      }, this.renderRefresh(), /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectSimilarCard__navigation"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectSimilarCard__header--step"
      }, step), /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectSimilarCard__header--button"
      }, this.renderLeftArrow(), this.renderRightArrow())))));
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var imageSrc = this.props.imageSrc;
      if (!imageSrc) return;
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "1",
        key: "image"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectSimilarCard__grid"
      }, /*#__PURE__*/_react.default.createElement("img", {
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
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: top,
        bottom: "1"
      }, /*#__PURE__*/_react.default.createElement(_title.Title, {
        modifier: "senary",
        margin: false,
        tag: "p"
      }, title));
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      var paragraph = this.props.paragraph;
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "description",
        className: "k-ProjectSimilarCard__grid"
      }, this.renderTitle(), this.renderTagsArea(), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "2"
      }, /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, {
        modifier: "tertiary",
        margin: false
      }, paragraph)));
    }
  }, {
    key: "renderTags",
    value: function renderTags() {
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "1"
      }, /*#__PURE__*/_react.default.createElement(_tagList.TagList, {
        icon: _typologyTagIcon.TypologyTagIcon,
        items: this.props.tags,
        tiny: true
      }));
    }
  }, {
    key: "renderTagsInList",
    value: function renderTagsInList(tagList, index) {
      var icon = this.convertToClass(tagList.icon);

      var list = /*#__PURE__*/_react.default.createElement(_tagList.TagList, {
        icon: icon,
        items: tagList.items,
        tiny: true
      });

      var separator = /*#__PURE__*/_react.default.createElement("div", {
        className: "k-u-margin-left-single"
      }, /*#__PURE__*/_react.default.createElement("hr", {
        className: (0, _classnames.default)('k-VerticalSeparator', 'k-VerticalSeparator--darker')
      }));

      var tagListWithMargin = /*#__PURE__*/_react.default.createElement("div", {
        className: "k-u-margin-left-single"
      }, list);

      return /*#__PURE__*/_react.default.createElement("div", {
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
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
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
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "infos"
      }, /*#__PURE__*/_react.default.createElement(_separator.Separator, null), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
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
      return /*#__PURE__*/_react.default.createElement("div", {
        key: info.text,
        className: (0, _classnames.default)('k-u-align-center', 'k-ProjectSimilarCard__info')
      }, info.text, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("span", {
        className: infoClassName
      }, info.locked ? /*#__PURE__*/_react.default.createElement(_lockIcon.LockIcon, {
        width: "12"
      }) : info.value));
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var loading = this.props.loading;
      if (!loading) return;
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "9",
        bottom: "9"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectSimilarCard__grid"
      }, /*#__PURE__*/_react.default.createElement(_loader.Loader, {
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
          linkProps = (0, _objectWithoutProperties2.default)(_this$props$link, ["className", "target"]);
      return (0, _extends2.default)({}, linkProps, {
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
      return /*#__PURE__*/_react.default.createElement("div", {
        className: ProjectSimilarCardClassName
      }, this.renderHeader(), /*#__PURE__*/_react.default.createElement(_separator.Separator, null), /*#__PURE__*/_react.default.createElement(Tag, this.contentTagProps(), this.renderProject(), this.renderLoader()));
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
  link: null
}; // Add generic card styles.

var SimilarProjectCard = (0, _card.card)(SimilarProjectCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true
}); // DEPRECATED

exports.SimilarProjectCard = SimilarProjectCard;
var ProjectSimilarCard = SimilarProjectCard;
exports.ProjectSimilarCard = ProjectSimilarCard;
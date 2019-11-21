"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectCard = exports.MARGIN_BETWEEN = exports.MIN_WIDTH = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _deprecated = _interopRequireDefault(require("prop-types-extra/lib/deprecated"));

var _card = require("../../hoc/card");

var _grid = require("../../components/grid/grid");

var _marger = require("../../components/layout/marger");

var _title = require("../../components/typography/title");

var _paragraph = require("../../components/typography/paragraph");

var _progress = require("../../components/meters/progress");

var _buttonImage = require("../../components/buttons/button-image");

var _iconBadge = require("../../components/notifications/icon-badge");

var _lockIcon = require("../../components/icons/lock-icon");

var _checkedCircleIcon = require("../../components/icons/checked-circle-icon");

var _tagList = require("../../components/lists/tag-list");

var _typologyTagIcon = require("../../components/icons/typology-tag-icon");

var _instrumentTagIcon = require("../../components/icons/instrument-tag-icon");

var MIN_WIDTH = 280;
exports.MIN_WIDTH = MIN_WIDTH;
var MARGIN_BETWEEN = 40;
exports.MARGIN_BETWEEN = MARGIN_BETWEEN;

var ProjectCardComponent =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ProjectCardComponent, _Component);

  function ProjectCardComponent() {
    var _this;

    (0, _classCallCheck2.default)(this, ProjectCardComponent);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ProjectCardComponent).call(this));
    _this.renderTagsInList = _this.renderTagsInList.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(ProjectCardComponent, [{
    key: "renderDescription",
    value: function renderDescription() {
      var _this$props = this.props,
          ownerAvatarSrc = _this$props.ownerAvatarSrc,
          ownerName = _this$props.ownerName,
          ownerLocation = _this$props.ownerLocation,
          title = _this$props.title;
      return _react.default.createElement("div", {
        className: "k-ProjectCard__grid"
      }, _react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "1",
        className: "k-ProjectCard__grid--flex"
      }, _react.default.createElement(_buttonImage.ButtonImage, {
        tag: "span",
        img: {
          src: ownerAvatarSrc
        },
        withoutPointerEvents: true
      }), _react.default.createElement(_paragraph.Paragraph, {
        className: (0, _classnames.default)('k-ProjectCard__grid--flex__item-fluid', 'k-u-margin-left-single', 'k-u-margin-right-single'),
        margin: false,
        normalLineHeight: true,
        modifier: "quaternary"
      }, _react.default.createElement("span", {
        className: "k-u-weight-regular"
      }, ownerName), ownerLocation && _react.default.createElement(_react.Fragment, null, _react.default.createElement("br", null), ownerLocation)), this.renderTooltip()), _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "1.5",
        className: "k-ProjectCard__grid--flex"
      }, _react.default.createElement(_title.Title, {
        className: "k-ProjectCard__grid--flex__item-fluid k-Card__title",
        margin: false,
        modifier: "senary",
        tag: "p"
      }, title), this.renderScore()));
    }
  }, {
    key: "renderTooltip",
    value: function renderTooltip() {
      if (!this.props.tooltipText) return;
      return _react.default.createElement("div", {
        className: "k-ProjectCard__tooltip"
      }, _react.default.createElement("span", {
        className: "k-ProjectCard__tooltip__content"
      }, this.props.tooltipText), _react.default.createElement(_checkedCircleIcon.CheckedCircleIcon, {
        style: {
          width: '20px',
          height: '20px'
        },
        circleColor: this.props.tooltipIconColor,
        checkedColor: "#fff"
      }));
    }
  }, {
    key: "renderScore",
    value: function renderScore() {
      if (!this.props.scoreValue) return;
      var scoreStyles = {
        backgroundColor: this.props.scoreBackgroundColor
      };
      return _react.default.createElement(_iconBadge.IconBadge, {
        style: scoreStyles,
        className: "k-u-margin-left-single"
      }, this.props.scoreValue);
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      if (!this.props.imageSrc) return;
      return _react.default.createElement("div", {
        className: "k-ProjectCard__grid"
      }, _react.default.createElement(_marger.Marger, {
        top: "1.5",
        bottom: "1.3",
        className: "k-Card__imageContainer",
        style: styles.imageContainer
      }, _react.default.createElement("img", {
        className: "k-ProjectCard__img k-Card__image",
        style: styles.image,
        src: this.props.imageSrc,
        alt: ""
      })));
    }
  }, {
    key: "renderProgress",
    value: function renderProgress() {
      var _this$props2 = this.props,
          progress = _this$props2.progress,
          progressColor = _this$props2.progressColor;
      if (progress === false) return;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('k-ProjectCard__grid', 'k-ProjectCard__grid--withBorderTop')
      }, _react.default.createElement(_marger.Marger, {
        top: "1.3",
        bottom: "1.5",
        className: "k-ProjectCard__grid--flex"
      }, _react.default.createElement(_progress.Progress, {
        className: "k-ProjectCard__grid--flex__item-fluid",
        value: progress,
        color: progressColor
      }), _react.default.createElement(_paragraph.Paragraph, {
        margin: false,
        modifier: "quaternary",
        className: (0, _classnames.default)('k-u-margin-left-double', 'k-u-color-primary1', 'k-u-weight-regular')
      }, progress, "\xA0%")));
    }
  }, {
    key: "renderTags",
    value: function renderTags() {
      return _react.default.createElement("div", {
        key: "tag-list-".concat(Math.random(1)),
        className: "k-ProjectCard__grid"
      }, _react.default.createElement(_marger.Marger, {
        top: "1.3",
        bottom: "1.3"
      }, _react.default.createElement(_tagList.TagList, {
        icon: _typologyTagIcon.TypologyTagIcon,
        items: this.props.tags,
        tiny: true
      })));
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
      return _react.default.createElement("div", {
        className: "k-ProjectCard__grid"
      }, _react.default.createElement(_marger.Marger, {
        top: "1.3",
        bottom: "1.3",
        className: "k-ProjectCard__grid--flex"
      }, this.props.tagLists.map(this.renderTagsInList)));
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
      if (!this.props.info1 && !this.props.info2 && !this.props.info3) return;
      return _react.default.createElement("div", {
        className: "k-ProjectCard__grid--withBorderTop"
      }, _react.default.createElement(_marger.Marger, {
        top: "1.5",
        bottom: "1.5",
        className: "k-ProjectCard__grid--flex"
      }, this.renderInfo(this.props.info1), this.renderInfo(this.props.info2), this.renderInfo(this.props.info3)));
    }
  }, {
    key: "renderParagraph",
    value: function renderParagraph() {
      if (!this.props.paragraph) return;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)('k-ProjectCard__paragraph', 'k-ProjectCard__grid--withBorderTop')
      }, _react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "2"
      }, _react.default.createElement(_paragraph.Paragraph, {
        margin: false,
        modifier: "quaternary"
      }, this.props.paragraph)));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(info) {
      if (!info) return;
      var valueClassName = (0, _classnames.default)('k-ProjectCard__info__value', {
        'k-u-color-primary1': this.props.coloredInfosValues
      });

      var renderValue = _react.default.createElement("span", {
        className: valueClassName
      }, info.locked ? _react.default.createElement(_lockIcon.LockIcon, {
        width: "12"
      }) : info.value);

      var renderLabel = info.text;
      return _react.default.createElement("div", {
        className: "k-u-align-center k-ProjectCard__info"
      }, info.reverse ? renderValue : renderLabel, _react.default.createElement("br", null), info.reverse ? renderLabel : renderValue);
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      var _this$props3 = this.props,
          statusContent = _this$props3.statusContent,
          statusPrimaryBackground = _this$props3.statusPrimaryBackground,
          statusValidBackground = _this$props3.statusValidBackground,
          statusTertiaryBackground = _this$props3.statusTertiaryBackground,
          statusGreyBackground = _this$props3.statusGreyBackground,
          statusErrorBackground = _this$props3.statusErrorBackground,
          statusErrorReverseBackground = _this$props3.statusErrorReverseBackground,
          statusWithoutTopBorder = _this$props3.statusWithoutTopBorder;
      if (!statusContent) return;
      var statusClassName = (0, _classnames.default)('k-ProjectCard__grid', 'k-ProjectCard__status', {
        'k-ProjectCard__grid--withBorderTop': !statusWithoutTopBorder,
        'k-ProjectCard__status--primaryBackground': statusPrimaryBackground,
        'k-ProjectCard__status--validBackground': statusValidBackground,
        'k-ProjectCard__status--tertiaryBackground': statusTertiaryBackground,
        'k-ProjectCard__status--greyBackground': statusGreyBackground,
        'k-ProjectCard__status--errorBackground': statusErrorBackground,
        'k-ProjectCard__status--errorReverseBackground': statusErrorReverseBackground
      });
      return _react.default.createElement("div", {
        className: statusClassName
      }, _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "1",
        className: "k-ProjectCard__status__content"
      }, statusContent));
    }
  }, {
    key: "render",
    value: function render() {
      var projectCardClassName = (0, _classnames.default)('k-ProjectCard', {
        'is-disabled': this.props.disabled
      }, this.props.className);
      var Tag = this.props.linkHref && !this.props.disabled ? 'a' : 'div';
      var href = this.props.disabled ? null : this.props.linkHref;
      var title = this.props.disabled ? null : this.props.linkTitle;
      return _react.default.createElement(Tag, {
        key: this.props.id,
        href: href,
        title: title,
        className: projectCardClassName
      }, this.renderDescription(), this.renderImage(), this.renderTagsArea(), this.renderProgress(), this.renderParagraph(), this.renderInfos(), this.renderStatus());
    }
  }]);
  return ProjectCardComponent;
}(_react.Component);

var styles = {
  imageContainer: {
    overflow: 'hidden',
    position: 'relative',
    paddingTop: "".concat(9 / 16 * 100, "%")
  },
  image: {
    position: 'absolute',
    top: 0,
    display: 'block',
    width: '100%'
  }
};
ProjectCardComponent.defaultProps = {
  id: null,
  linkHref: null,
  linkTitle: null,
  ownerAvatarSrc: null,
  ownerName: 'Name',
  ownerLocation: null,
  tagLists: null,
  tags: null,
  paragraph: null,
  tooltipText: null,
  tooltipIconColor: '#19b4fa',
  scoreValue: null,
  scoreBackgroundColor: null,
  title: 'Title',
  imageSrc: null,
  progress: false,
  coloredInfosValues: false,
  info1: null,
  info2: null,
  info3: null,
  disabled: false,
  statusContent: null,
  statusPrimaryBackground: false,
  statusValidBackground: false,
  statusTertiaryBackground: false,
  statusGreyBackground: false,
  statusErrorBackground: false,
  statusErrorReverseBackground: false,
  statusWithoutTopBorder: false
}; // Deprecated props

ProjectCardComponent.propTypes = {
  tags: (0, _deprecated.default)(_propTypes.default.array, 'Use `tagLists` prop instead')
}; // Add card generic styles.

var ProjectCard = (0, _card.card)(ProjectCardComponent, {
  light: true
});
exports.ProjectCard = ProjectCard;
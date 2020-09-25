import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component, Fragment } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import deprecated from 'prop-types-extra/lib/deprecated';
import { card } from '../../hoc/card';
import { Marger } from '../../components/layout/marger';
import { Title } from '../../components/typography/title';
import { Paragraph } from '../../components/typography/paragraph';
import { Progress } from '../../components/meters/progress';
import { ButtonImage } from '../../components/buttons/button-image';
import { IconBadge } from '../../components/notifications/icon-badge';
import { LockIcon } from '../../components/icons/lock-icon';
import { CheckedCircleIcon } from '../../components/icons/checked-circle-icon';
import { TagList } from '../../components/lists/tag-list';
import { TypologyTagIcon } from '../../components/icons/typology-tag-icon';
import { InstrumentTagIcon } from '../../components/icons/instrument-tag-icon';
export var MIN_WIDTH = 280;
export var MARGIN_BETWEEN = 40;

var ProjectCardComponent = /*#__PURE__*/function (_Component) {
  _inherits(ProjectCardComponent, _Component);

  var _super = _createSuper(ProjectCardComponent);

  function ProjectCardComponent() {
    var _this;

    _classCallCheck(this, ProjectCardComponent);

    _this = _super.call(this);
    _this.renderTagsInList = _this.renderTagsInList.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ProjectCardComponent, [{
    key: "renderDescription",
    value: function renderDescription() {
      var _this$props = this.props,
          ownerAvatarSrc = _this$props.ownerAvatarSrc,
          ownerName = _this$props.ownerName,
          ownerLocation = _this$props.ownerLocation,
          title = _this$props.title;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCard__grid"
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "2",
        bottom: "1",
        className: "k-ProjectCard__grid--flex"
      }, /*#__PURE__*/React.createElement(ButtonImage, {
        tag: "span",
        img: {
          src: ownerAvatarSrc
        },
        withoutPointerEvents: true
      }), /*#__PURE__*/React.createElement(Paragraph, {
        className: classNames('k-ProjectCard__grid--flex__item-fluid', 'k-u-margin-left-single', 'k-u-margin-right-single'),
        margin: false,
        normalLineHeight: true,
        modifier: "quaternary"
      }, /*#__PURE__*/React.createElement("span", {
        className: "k-u-weight-regular"
      }, ownerName), ownerLocation && /*#__PURE__*/React.createElement(Fragment, null, /*#__PURE__*/React.createElement("br", null), ownerLocation)), this.renderTooltip()), /*#__PURE__*/React.createElement(Marger, {
        top: "1",
        bottom: "1.5",
        className: "k-ProjectCard__grid--flex"
      }, /*#__PURE__*/React.createElement(Title, {
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
      return /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCard__tooltip"
      }, /*#__PURE__*/React.createElement("span", {
        className: "k-ProjectCard__tooltip__content"
      }, this.props.tooltipText), /*#__PURE__*/React.createElement(CheckedCircleIcon, {
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
      return /*#__PURE__*/React.createElement(IconBadge, {
        style: scoreStyles,
        className: "k-u-margin-left-single"
      }, this.props.scoreValue);
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      if (!this.props.imageSrc) return;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCard__grid"
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "1.5",
        bottom: "1.3",
        className: "k-Card__imageContainer",
        style: styles.imageContainer
      }, /*#__PURE__*/React.createElement("img", {
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
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('k-ProjectCard__grid', 'k-ProjectCard__grid--withBorderTop')
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "1.3",
        bottom: "1.5",
        className: "k-ProjectCard__grid--flex"
      }, /*#__PURE__*/React.createElement(Progress, {
        className: "k-ProjectCard__grid--flex__item-fluid",
        value: progress,
        color: progressColor
      }), /*#__PURE__*/React.createElement(Paragraph, {
        margin: false,
        modifier: "quaternary",
        className: classNames('k-u-margin-left-double', 'k-u-color-primary1', 'k-u-weight-regular')
      }, progress, "\xA0%")));
    }
  }, {
    key: "renderTags",
    value: function renderTags() {
      return /*#__PURE__*/React.createElement("div", {
        key: "tag-list-".concat(Math.random(1)),
        className: "k-ProjectCard__grid"
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "1.3",
        bottom: "1.3"
      }, /*#__PURE__*/React.createElement(TagList, {
        icon: TypologyTagIcon,
        items: this.props.tags,
        tiny: true
      })));
    }
  }, {
    key: "renderTagsInList",
    value: function renderTagsInList(tagList, index) {
      var icon = this.convertToClass(tagList.icon);
      var list = /*#__PURE__*/React.createElement(TagList, {
        icon: icon,
        items: tagList.items,
        tiny: true
      });
      var separator = /*#__PURE__*/React.createElement("div", {
        className: "k-u-margin-left-single"
      }, /*#__PURE__*/React.createElement("hr", {
        className: classNames('k-VerticalSeparator', 'k-VerticalSeparator--darker')
      }));
      var tagListWithMargin = /*#__PURE__*/React.createElement("div", {
        className: "k-u-margin-left-single"
      }, list);
      return /*#__PURE__*/React.createElement("div", {
        key: "tag-list-".concat(index),
        className: "k-ProjectCard__grid--flex"
      }, index != 0 && separator, index != 0 && tagListWithMargin, index == 0 && list);
    }
  }, {
    key: "convertToClass",
    value: function convertToClass(stringClassName) {
      switch (stringClassName) {
        case 'InstrumentTagIcon':
          return InstrumentTagIcon;

        default:
          return TypologyTagIcon;
      }
    }
  }, {
    key: "renderTagLists",
    value: function renderTagLists() {
      return /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCard__grid"
      }, /*#__PURE__*/React.createElement(Marger, {
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
      return /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCard__grid--withBorderTop"
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "1.5",
        bottom: "1.5",
        className: "k-ProjectCard__grid--flex"
      }, this.renderInfo(this.props.info1), this.renderInfo(this.props.info2), this.renderInfo(this.props.info3)));
    }
  }, {
    key: "renderParagraph",
    value: function renderParagraph() {
      if (!this.props.paragraph) return;
      return /*#__PURE__*/React.createElement("div", {
        className: classNames('k-ProjectCard__paragraph', 'k-ProjectCard__grid--withBorderTop')
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "2",
        bottom: "2"
      }, /*#__PURE__*/React.createElement(Paragraph, {
        margin: false,
        modifier: "quaternary"
      }, this.props.paragraph)));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(info) {
      if (!info) return;
      var valueClassName = classNames('k-ProjectCard__info__value', {
        'k-u-color-primary1': this.props.coloredInfosValues
      });
      var renderValue = /*#__PURE__*/React.createElement("span", {
        className: valueClassName
      }, info.locked ? /*#__PURE__*/React.createElement(LockIcon, {
        width: "12"
      }) : info.value);
      var renderLabel = info.text;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-u-align-center k-ProjectCard__info"
      }, info.reverse ? renderValue : renderLabel, /*#__PURE__*/React.createElement("br", null), info.reverse ? renderLabel : renderValue);
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
      var statusClassName = classNames('k-ProjectCard__grid', 'k-ProjectCard__status', {
        'k-ProjectCard__grid--withBorderTop': !statusWithoutTopBorder,
        'k-ProjectCard__status--primaryBackground': statusPrimaryBackground,
        'k-ProjectCard__status--validBackground': statusValidBackground,
        'k-ProjectCard__status--tertiaryBackground': statusTertiaryBackground,
        'k-ProjectCard__status--greyBackground': statusGreyBackground,
        'k-ProjectCard__status--errorBackground': statusErrorBackground,
        'k-ProjectCard__status--errorReverseBackground': statusErrorReverseBackground
      });
      return /*#__PURE__*/React.createElement("div", {
        className: statusClassName
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "1",
        bottom: "1",
        className: "k-ProjectCard__status__content"
      }, statusContent));
    }
  }, {
    key: "render",
    value: function render() {
      var projectCardClassName = classNames('k-ProjectCard', {
        'is-disabled': this.props.disabled
      }, this.props.className);
      var Tag = this.props.linkHref && !this.props.disabled ? 'a' : 'div';
      var href = this.props.disabled ? null : this.props.linkHref;
      var title = this.props.disabled ? null : this.props.linkTitle;
      return /*#__PURE__*/React.createElement(Tag, {
        key: this.props.id,
        href: href,
        title: title,
        className: projectCardClassName
      }, this.renderDescription(), this.renderImage(), this.renderTagsArea(), this.renderProgress(), this.renderParagraph(), this.renderInfos(), this.renderStatus());
    }
  }]);

  return ProjectCardComponent;
}(Component);

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
  tags: deprecated(PropTypes.array, 'Use `tagLists` prop instead')
}; // Add card generic styles.

export var ProjectCard = card(ProjectCardComponent, {
  light: true
});
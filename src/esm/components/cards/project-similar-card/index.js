import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';
import { card } from '../../../hoc/card';
import { Marger } from '../../../components/layout/marger';
import { Title } from '../../../components/typography/title';
import { Paragraph } from '../../../components/typography/paragraph';
import { ButtonIcon } from '../../../components/buttons/button-icon';
import { Separator } from '../../../components/layout/separator';
import { TagList } from '../../../components/lists/tag-list';
import { ArrowIcon } from '../../../components/icons/arrow-icon';
import { LockIcon } from '../../../components/icons/lock-icon';
import { Loader } from '../../../components/loaders/loader';
import { TypologyTagIcon } from '../../../components/icons/typology-tag-icon';
import { InstrumentTagIcon } from '../../../components/icons/instrument-tag-icon';

var SimilarProjectCardComponent = /*#__PURE__*/function (_Component) {
  _inherits(SimilarProjectCardComponent, _Component);

  var _super = _createSuper(SimilarProjectCardComponent);

  function SimilarProjectCardComponent() {
    var _this;

    _classCallCheck(this, SimilarProjectCardComponent);

    _this = _super.call(this);
    _this.renderInfo = _this.renderInfo.bind(_assertThisInitialized(_this));
    _this.renderTagsInList = _this.renderTagsInList.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SimilarProjectCardComponent, [{
    key: "renderRefresh",
    value: function renderRefresh() {
      var _this$props = this.props,
          refresh = _this$props.refresh,
          onRefreshClick = _this$props.onRefreshClick;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectSimilarCard__refresh"
      }, /*#__PURE__*/React.createElement("span", {
        className: "k-ProjectSimilarCard__refresh__link",
        onClick: onRefreshClick
      }, refresh));
    }
  }, {
    key: "renderLeftArrow",
    value: function renderLeftArrow() {
      return /*#__PURE__*/React.createElement(ButtonIcon, {
        size: "tiny",
        type: "button",
        verticalArrow: true,
        disabled: this.props.leftArrowDisabled,
        onClick: this.props.onLeftArrowClick
      }, /*#__PURE__*/React.createElement(ArrowIcon, {
        direction: "left",
        className: "k-ButtonIcon__svg"
      }));
    }
  }, {
    key: "renderRightArrow",
    value: function renderRightArrow() {
      return /*#__PURE__*/React.createElement(ButtonIcon, {
        size: "tiny",
        type: "button",
        verticalArrow: true,
        disabled: this.props.rightArrowDisabled,
        onClick: this.props.onRightArrowClick
      }, /*#__PURE__*/React.createElement(ArrowIcon, {
        className: "k-ButtonIcon__svg"
      }));
    }
  }, {
    key: "renderHeader",
    value: function renderHeader() {
      var step = this.props.step;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectSimilarCard__grid"
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "1",
        bottom: "1"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectSimilarCard__grid--flex"
      }, this.renderRefresh(), /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectSimilarCard__navigation"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectSimilarCard__header--step"
      }, step), /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectSimilarCard__header--button"
      }, this.renderLeftArrow(), this.renderRightArrow())))));
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var imageSrc = this.props.imageSrc;
      if (!imageSrc) return;
      return /*#__PURE__*/React.createElement(Marger, {
        top: "2",
        bottom: "1",
        key: "image"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectSimilarCard__grid"
      }, /*#__PURE__*/React.createElement("img", {
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
      return /*#__PURE__*/React.createElement(Marger, {
        top: top,
        bottom: "1"
      }, /*#__PURE__*/React.createElement(Title, {
        modifier: "senary",
        margin: false,
        tag: "p"
      }, title));
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      var paragraph = this.props.paragraph;
      return /*#__PURE__*/React.createElement("div", {
        key: "description",
        className: "k-ProjectSimilarCard__grid"
      }, this.renderTitle(), this.renderTagsArea(), /*#__PURE__*/React.createElement(Marger, {
        top: "1",
        bottom: "2"
      }, /*#__PURE__*/React.createElement(Paragraph, {
        modifier: "tertiary",
        margin: false
      }, paragraph)));
    }
  }, {
    key: "renderTags",
    value: function renderTags() {
      return /*#__PURE__*/React.createElement(Marger, {
        top: "1",
        bottom: "1"
      }, /*#__PURE__*/React.createElement(TagList, {
        icon: TypologyTagIcon,
        items: this.props.tags,
        tiny: true
      }));
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
      return /*#__PURE__*/React.createElement(Marger, {
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
      return /*#__PURE__*/React.createElement("div", {
        key: "infos"
      }, /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(Marger, {
        top: "1.5",
        bottom: "1.5",
        className: "k-ProjectCard__grid--flex"
      }, infos.map(this.renderInfo)));
    }
  }, {
    key: "renderInfo",
    value: function renderInfo(info) {
      var coloredInfosValues = this.props.coloredInfosValues;
      var infoClassName = classNames('k-ProjectSimilarCard__info__value', {
        'k-u-color-primary1': coloredInfosValues
      });
      return /*#__PURE__*/React.createElement("div", {
        key: info.text,
        className: classNames('k-u-align-center', 'k-ProjectSimilarCard__info')
      }, info.text, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
        className: infoClassName
      }, info.locked ? /*#__PURE__*/React.createElement(LockIcon, {
        width: "12"
      }) : info.value));
    }
  }, {
    key: "renderLoader",
    value: function renderLoader() {
      var loading = this.props.loading;
      if (!loading) return;
      return /*#__PURE__*/React.createElement(Marger, {
        top: "9",
        bottom: "9"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectSimilarCard__grid"
      }, /*#__PURE__*/React.createElement(Loader, {
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

      return _extends({}, linkProps, {
        target: target || '_blank',
        className: classNames(tagClassName, className)
      });
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var ProjectSimilarCardClassName = classNames('k-ProjectSimilarCard', className);
      var Tag = this.hasLink() ? 'a' : 'div';
      return /*#__PURE__*/React.createElement("div", {
        className: ProjectSimilarCardClassName
      }, this.renderHeader(), /*#__PURE__*/React.createElement(Separator, null), /*#__PURE__*/React.createElement(Tag, this.contentTagProps(), this.renderProject(), this.renderLoader()));
    }
  }]);

  return SimilarProjectCardComponent;
}(Component);

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

export var SimilarProjectCard = card(SimilarProjectCardComponent, {
  light: true,
  withBorder: true,
  withShadow: true,
  translateOnHover: true
}); // DEPRECATED

export var ProjectSimilarCard = SimilarProjectCard;
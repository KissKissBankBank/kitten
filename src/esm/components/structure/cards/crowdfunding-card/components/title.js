import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../typography/text';
import { Title } from '../../../../typography/title';
import Truncate from 'react-truncate';

var TitleComponent = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(TitleComponent, _PureComponent);

  function TitleComponent() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TitleComponent.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        widgetTitle = _this$props.widgetTitle;
    return /*#__PURE__*/React.createElement(React.Fragment, null, title && this.renderTitle(), widgetTitle && this.renderWidgetTitle());
  };

  _proto.renderTitle = function renderTitle() {
    var _this$props2 = this.props,
        loading = _this$props2.loading,
        titleProps = _this$props2.titleProps,
        titleTruncate = _this$props2.titleTruncate,
        title = _this$props2.title;
    return /*#__PURE__*/React.createElement("div", {
      className: "k-CrowdfundingCard__title"
    }, !loading && /*#__PURE__*/React.createElement(Title, _extends({
      tag: "p",
      noMargin: true,
      className: "k-CrowdfundingCard__title__title"
    }, titleProps), titleTruncate && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Truncate, {
      lines: 2,
      className: "k-CrowdfundingCard__noWrap k-u-hidden@s-down"
    }, title), /*#__PURE__*/React.createElement(Truncate, {
      lines: 3,
      className: "k-CrowdfundingCard__noWrap k-u-hidden@m-up"
    }, title)), !titleTruncate && title), loading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "k-CrowdfundingCard__title__loadingElement"
    }), /*#__PURE__*/React.createElement("span", {
      className: "k-CrowdfundingCard__title__loadingElement"
    })));
  };

  _proto.renderWidgetTitle = function renderWidgetTitle() {
    var _this$props3 = this.props,
        widgetTitle = _this$props3.widgetTitle,
        dayCounter = _this$props3.dayCounter,
        loading = _this$props3.loading,
        titleTruncate = _this$props3.titleTruncate;
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: "k-CrowdfundingCard__titleWrapper"
    }, /*#__PURE__*/React.createElement("div", {
      className: "k-CrowdfundingCard__title"
    }, !loading && /*#__PURE__*/React.createElement(Text, {
      tag: "span",
      color: "font1",
      size: "default",
      weight: "bold",
      lineHeight: "normal",
      className: "k-Card__title"
    }, titleTruncate && /*#__PURE__*/React.createElement(Truncate, {
      lines: 2
    }, widgetTitle), !titleTruncate && widgetTitle)), !loading && /*#__PURE__*/React.createElement("div", {
      className: "k-CrowdfundingCard__title__dayCounter"
    }, /*#__PURE__*/React.createElement(Text, {
      size: "tiny",
      color: "font1",
      weight: "regular",
      lineHeight: "normal"
    }, dayCounter))), loading && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      className: "k-CrowdfundingCard__title__loadingElement"
    }), /*#__PURE__*/React.createElement("span", {
      className: "k-CrowdfundingCard__title__loadingElement"
    })));
  };

  return TitleComponent;
}(PureComponent);

TitleComponent.propTypes = {
  title: PropTypes.string,
  titleTruncate: PropTypes.bool,
  loading: PropTypes.bool,
  widgetTitle: PropTypes.string,
  dayCounter: PropTypes.element,
  titleProps: PropTypes.shape()
};
TitleComponent.defaultProps = {
  title: '',
  titleTruncate: true,
  loading: false,
  widgetTitle: '',
  dayCounter: null,
  titleProps: {}
};
export default TitleComponent;
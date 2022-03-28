import _extends from "@babel/runtime/helpers/extends";
import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../typography/text';
import { HorizontalStroke } from '../../../../typography/horizontal-stroke';
import classNames from 'classnames';

var Subtitle = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(Subtitle, _PureComponent);

  function Subtitle() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = Subtitle.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        subTitle = _this$props.subTitle,
        widgetSubtitle = _this$props.widgetSubtitle;
    return /*#__PURE__*/React.createElement(React.Fragment, null, subTitle && this.renderSubtitle(), widgetSubtitle && this.renderWidgetSubtitle());
  };

  _proto.renderSubtitle = function renderSubtitle() {
    var _this$props2 = this.props,
        loading = _this$props2.loading,
        subTitle = _this$props2.subTitle,
        subTitleTruncate = _this$props2.subTitleTruncate,
        style = _this$props2.style;
    return /*#__PURE__*/React.createElement("div", {
      className: "k-CrowdfundingCard__subtitle__container"
    }, /*#__PURE__*/React.createElement(HorizontalStroke, {
      className: "k-CrowdfundingCard__subtitle__horizontalStroke",
      size: "micro"
    }), subTitle && !loading && /*#__PURE__*/React.createElement(Text, {
      className: classNames('k-CrowdfundingCard__subtitle__subtitleText', 'k-u-margin-none', {
        'k-u-clamp': subTitleTruncate
      }),
      size: "micro",
      weight: "regular",
      tag: "p",
      color: "font1",
      style: _extends({
        '--line-clamp': 1
      }, style)
    }, subTitle), loading && /*#__PURE__*/React.createElement("span", {
      className: "k-CrowdfundingCard__subtitle__loadingElement"
    }));
  };

  _proto.renderWidgetSubtitle = function renderWidgetSubtitle() {
    var _this$props3 = this.props,
        widgetSubtitle = _this$props3.widgetSubtitle,
        subTitleTruncate = _this$props3.subTitleTruncate,
        loading = _this$props3.loading,
        style = _this$props3.style;
    return /*#__PURE__*/React.createElement(React.Fragment, null, widgetSubtitle && !loading && /*#__PURE__*/React.createElement(Text, {
      className: classNames('k-u-margin-top-noneHalf', 'k-u-margin-bottom-double', {
        'k-u-clamp': subTitleTruncate
      }),
      tag: "p",
      size: "micro",
      color: "font1",
      lineHeight: "normal",
      weight: "light",
      style: _extends({
        '--line-clamp': 1
      }, style)
    }, widgetSubtitle), loading && /*#__PURE__*/React.createElement("span", {
      className: "k-CrowdfundingCard__subtitle__loadingElement"
    }));
  };

  return Subtitle;
}(PureComponent);

Subtitle.propTypes = {
  subTitle: PropTypes.string,
  widgetSubtitle: PropTypes.string,
  subTitleTruncate: PropTypes.bool,
  loading: PropTypes.bool,
  titleProps: PropTypes.shape()
};
Subtitle.defaultProps = {
  subTitle: '',
  widgetSubtitle: '',
  subTitleTruncate: true,
  loading: false,
  titleProps: {}
};
export default Subtitle;
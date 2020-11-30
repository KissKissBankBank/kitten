import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from '../../../../components/typography/text';
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke';
import Truncate from 'react-truncate';
import classNames from 'classnames';

var Subtitle = /*#__PURE__*/function (_PureComponent) {
  _inherits(Subtitle, _PureComponent);

  var _super = _createSuper(Subtitle);

  function Subtitle() {
    _classCallCheck(this, Subtitle);

    return _super.apply(this, arguments);
  }

  _createClass(Subtitle, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          subTitle = _this$props.subTitle,
          widgetSubtitle = _this$props.widgetSubtitle;
      return /*#__PURE__*/React.createElement(React.Fragment, null, subTitle && this.renderSubtitle(), widgetSubtitle && this.renderWidgetSubtitle());
    }
  }, {
    key: "renderSubtitle",
    value: function renderSubtitle() {
      var _this$props2 = this.props,
          loading = _this$props2.loading,
          subTitle = _this$props2.subTitle,
          subTitleTruncate = _this$props2.subTitleTruncate;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-CrowdfundingCard__subtitle__container"
      }, /*#__PURE__*/React.createElement(HorizontalStroke, {
        className: "k-CrowdfundingCard__subtitle__horizontalStroke",
        size: "micro"
      }), subTitle && !loading && /*#__PURE__*/React.createElement(Text, {
        className: classNames('k-CrowdfundingCard__subtitle__subtitleText', 'k-u-margin-none', {
          'k-CrowdfundingCard__subtitle__subtitleText--truncated': subTitleTruncate
        }),
        size: "micro",
        weight: "regular",
        tag: "p",
        color: "font1"
      }, subTitleTruncate && /*#__PURE__*/React.createElement(Truncate, {
        className: "k-CrowdfundingCard__noWrap"
      }, subTitle), !subTitleTruncate && subTitle), loading && /*#__PURE__*/React.createElement("span", {
        className: "k-CrowdfundingCard__subtitle__loadingElement"
      }));
    }
  }, {
    key: "renderWidgetSubtitle",
    value: function renderWidgetSubtitle() {
      var _this$props3 = this.props,
          widgetSubtitle = _this$props3.widgetSubtitle,
          subTitleTruncate = _this$props3.subTitleTruncate,
          loading = _this$props3.loading;
      return /*#__PURE__*/React.createElement(React.Fragment, null, widgetSubtitle && !loading && /*#__PURE__*/React.createElement(Text, {
        className: "k-u-margin-top-noneHalf k-u-margin-bottom-double",
        tag: "p",
        size: "micro",
        color: "font1",
        lineHeight: "normal",
        weight: "light"
      }, subTitleTruncate && /*#__PURE__*/React.createElement(Truncate, {
        lines: 3
      }, widgetSubtitle), !subTitleTruncate && widgetSubtitle), loading && /*#__PURE__*/React.createElement("span", {
        className: "k-CrowdfundingCard__subtitle__loadingElement"
      }));
    }
  }]);

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
import _extends from "@babel/runtime/helpers/esm/extends";
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
import { Title } from '../../../../components/typography/title';
import Truncate from 'react-truncate';

var TitleComponent = /*#__PURE__*/function (_PureComponent) {
  _inherits(TitleComponent, _PureComponent);

  var _super = _createSuper(TitleComponent);

  function TitleComponent() {
    _classCallCheck(this, TitleComponent);

    return _super.apply(this, arguments);
  }

  _createClass(TitleComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          widgetTitle = _this$props.widgetTitle;
      return /*#__PURE__*/React.createElement(React.Fragment, null, title && this.renderTitle(), widgetTitle && this.renderWidgetTitle());
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      var _this$props2 = this.props,
          loading = _this$props2.loading,
          titleProps = _this$props2.titleProps,
          titleTruncate = _this$props2.titleTruncate,
          title = _this$props2.title;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-CrowdfundingCard__title"
      }, !loading && /*#__PURE__*/React.createElement(Title, _extends({
        tag: "p",
        margin: false,
        className: "k-Card__title k-CrowdfundingCard__title__title"
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
    }
  }, {
    key: "renderWidgetTitle",
    value: function renderWidgetTitle() {
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
    }
  }]);

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
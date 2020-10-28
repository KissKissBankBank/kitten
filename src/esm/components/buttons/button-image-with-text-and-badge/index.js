import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import COLORS from '../../../constants/colors-config';

var NotificationBadge = function NotificationBadge(_ref) {
  var notifications = _ref.notifications,
      badgeColor = _ref.badgeColor;
  return /*#__PURE__*/React.createElement("span", {
    className: "k-ButtonWithBadge__badge k-Badge",
    style: {
      backgroundColor: badgeColor
    }
  }, notifications);
};

export var ButtonImageWithTextAndBadge = /*#__PURE__*/function (_React$Component) {
  _inherits(ButtonImageWithTextAndBadge, _React$Component);

  var _super = _createSuper(ButtonImageWithTextAndBadge);

  function ButtonImageWithTextAndBadge() {
    _classCallCheck(this, ButtonImageWithTextAndBadge);

    return _super.apply(this, arguments);
  }

  _createClass(ButtonImageWithTextAndBadge, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isExpanded = _this$props.isExpanded,
          text = _this$props.text,
          title = _this$props.title,
          textClassName = _this$props.textClassName,
          srcImg = _this$props.srcImg,
          widthImg = _this$props.widthImg,
          heightImg = _this$props.heightImg,
          altImg = _this$props.altImg,
          notifications = _this$props.notifications,
          badgeColor = _this$props.badgeColor,
          rest = _objectWithoutProperties(_this$props, ["className", "isExpanded", "text", "title", "textClassName", "srcImg", "widthImg", "heightImg", "altImg", "notifications", "badgeColor"]);

      var textClass = classNames('k-ButtonImageWithText__text', 'k-ButtonImageWithText__text--withoutPaddingRight', textClassName);
      var buttonClassName = classNames('k-ButtonImageWithText', className);
      return /*#__PURE__*/React.createElement("button", _extends({
        className: buttonClassName,
        "aria-haspopup": "true",
        "aria-expanded": isExpanded,
        title: title
      }, rest), /*#__PURE__*/React.createElement("span", {
        className: "k-ButtonWithBadge"
      }, /*#__PURE__*/React.createElement("span", {
        ref: "buttonImage",
        className: "k-ButtonImage"
      }, /*#__PURE__*/React.createElement("img", {
        className: "k-ButtonImage__img",
        src: srcImg,
        width: widthImg,
        height: heightImg,
        alt: altImg
      })), notifications && /*#__PURE__*/React.createElement(NotificationBadge, {
        notifications: notifications,
        badgeColor: badgeColor
      })), /*#__PURE__*/React.createElement("p", {
        className: textClass
      }, text));
    }
  }]);

  return ButtonImageWithTextAndBadge;
}(React.Component);
ButtonImageWithTextAndBadge.propTypes = {
  onClick: PropTypes.func,
  isExpanded: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string,
  srcImg: PropTypes.string,
  widthImg: PropTypes.number,
  heightImg: PropTypes.number,
  altImg: PropTypes.string,
  notifications: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  badgeColor: PropTypes.string
};
ButtonImageWithTextAndBadge.defaultProps = {
  onClick: function onClick() {},
  badgeColor: COLORS.primary1
}; // DEPRECATED: do not use default export.

export default ButtonImageWithTextAndBadge;
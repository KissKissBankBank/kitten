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
import classNames from 'classnames';
import { HeaderItem } from '../../components/headers/header';
export var HeaderTitles = /*#__PURE__*/function (_React$Component) {
  _inherits(HeaderTitles, _React$Component);

  var _super = _createSuper(HeaderTitles);

  function HeaderTitles() {
    _classCallCheck(this, HeaderTitles);

    return _super.apply(this, arguments);
  }

  _createClass(HeaderTitles, [{
    key: "renderSubtitle",
    value: function renderSubtitle() {
      if (!this.props.subtitle) return;
      return /*#__PURE__*/React.createElement("p", {
        className: classNames('k-Header__subtitle', this.props.subtitleClassName)
      }, this.props.subtitle);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          subtitle = _this$props.subtitle,
          className = _this$props.className,
          titleClassName = _this$props.titleClassName,
          subtitleClassName = _this$props.subtitleClassName,
          headerItemProps = _objectWithoutProperties(_this$props, ["title", "subtitle", "className", "titleClassName", "subtitleClassName"]);

      return /*#__PURE__*/React.createElement(HeaderItem, _extends({
        className: classNames('k-Header__titles', className)
      }, headerItemProps), /*#__PURE__*/React.createElement("p", {
        className: classNames('k-Header__title', titleClassName)
      }, title), this.renderSubtitle());
    }
  }]);

  return HeaderTitles;
}(React.Component);
HeaderTitles.defaultProps = {
  title: 'You forgot the title!',
  subtitle: null,
  className: null,
  titleClassName: null,
  subtitleClassName: null
};
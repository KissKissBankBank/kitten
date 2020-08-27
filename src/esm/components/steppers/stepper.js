import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import classNames from 'classnames';
import { StepperIconDefault, StepperIconInProgress, StepperIconValidated } from './stepper-icon';
var iconTypeComponents = {
  default: StepperIconDefault,
  inProgress: StepperIconInProgress,
  validated: StepperIconValidated
};
export var Stepper = /*#__PURE__*/function (_Component) {
  _inherits(Stepper, _Component);

  var _super = _createSuper(Stepper);

  function Stepper() {
    _classCallCheck(this, Stepper);

    return _super.apply(this, arguments);
  }

  _createClass(Stepper, [{
    key: "lineBreaks",
    value: function lineBreaks(text) {
      var regex = /(\n)/i;
      var brClassNames = classNames({
        'k-Stepper__break': !this.props.withAlignStart
      });
      return text.split(regex).map(function (line, index) {
        return line.match(regex) ? /*#__PURE__*/React.createElement("br", {
          className: brClassNames,
          key: index
        }) : line;
      });
    }
  }, {
    key: "renderLink",
    value: function renderLink(item) {
      var href = item.href,
          iconType = item.iconType,
          linkClassNames = item.linkClassNames,
          text = item.text,
          other = _objectWithoutProperties(item, ["href", "iconType", "linkClassNames", "text"]);

      var Tag = href ? 'a' : 'span';
      var IconType = iconTypeComponents[iconType];
      var className = classNames('k-Stepper__link', linkClassNames);
      return /*#__PURE__*/React.createElement(Tag, _extends({
        className: className,
        href: href
      }, other), /*#__PURE__*/React.createElement(IconType, null), this.lineBreaks(text));
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      var items = this.props.items;
      var itemClassNames = classNames('k-Stepper__item', {
        'k-Stepper__item--tinySpacing': this.props.withTinySpacing
      });
      return items.map(function (item, index) {
        return /*#__PURE__*/React.createElement("li", {
          className: itemClassNames,
          key: index
        }, _this.renderLink(item, index));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var listClassNames = classNames('k-Stepper__list', {
        'k-Stepper__list--alignStart': this.props.withAlignStart
      });
      return /*#__PURE__*/React.createElement("nav", {
        className: "k-Stepper",
        role: "navigation"
      }, /*#__PURE__*/React.createElement("ul", {
        className: listClassNames
      }, this.renderItems()));
    }
  }]);

  return Stepper;
}(Component);
Stepper.defaultProps = {
  withAlignStart: false,
  withTinySpacing: false,
  items: []
};
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
import classNames from 'classnames';
import { parseHtml } from '../../../../helpers/utils/parser';
import { Title } from '../../../../components/typography/title';
import { Marger } from '../../../../components/layout/marger';
export var TitleComponent = /*#__PURE__*/function (_PureComponent) {
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
          titleProps = _this$props.titleProps;
      var titleClassName = classNames('k-Card__title', titleProps.className);
      return /*#__PURE__*/React.createElement(Marger, {
        top: "2",
        bottom: ".3"
      }, /*#__PURE__*/React.createElement(Title, _extends({
        tag: "p"
      }, titleProps, {
        className: titleClassName,
        margin: false,
        modifier: "senary"
      }), parseHtml(title)));
    }
  }]);

  return TitleComponent;
}(PureComponent);
TitleComponent.propTypes = {
  title: PropTypes.string,
  titleProps: PropTypes.shape()
};
TitleComponent.defaultProps = {
  title: null,
  titleProps: {}
};
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
import { Marger } from '../../../../components/layout/marger';
import { parseHtml } from '../../../../helpers/utils/parser';
export var Subtitle = /*#__PURE__*/function (_PureComponent) {
  _inherits(Subtitle, _PureComponent);

  var _super = _createSuper(Subtitle);

  function Subtitle() {
    _classCallCheck(this, Subtitle);

    return _super.apply(this, arguments);
  }

  _createClass(Subtitle, [{
    key: "render",
    value: function render() {
      var subtitle = this.props.subtitle;
      return /*#__PURE__*/React.createElement(Marger, {
        top: ".3",
        bottom: "1.5"
      }, /*#__PURE__*/React.createElement(Text, {
        size: "micro",
        weight: "regular"
      }, parseHtml(subtitle)));
    }
  }]);

  return Subtitle;
}(PureComponent);
Subtitle.propTypes = {
  subtitle: PropTypes.string
};
Subtitle.defaultProps = {
  subtitle: null
};
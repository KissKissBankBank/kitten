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
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke';
import { parseHtml } from '../../../../helpers/utils/parser';
export var Paragraph = /*#__PURE__*/function (_PureComponent) {
  _inherits(Paragraph, _PureComponent);

  var _super = _createSuper(Paragraph);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _super.apply(this, arguments);
  }

  _createClass(Paragraph, [{
    key: "render",
    value: function render() {
      var paragraph = this.props.paragraph;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Marger, {
        top: ".3",
        bottom: "1.5"
      }, /*#__PURE__*/React.createElement(Text, {
        lineHeight: "normal",
        size: "micro",
        weight: "light"
      }, parseHtml(paragraph))), /*#__PURE__*/React.createElement(Marger, {
        top: "1.5"
      }, /*#__PURE__*/React.createElement(HorizontalStroke, {
        size: "tiny"
      })));
    }
  }]);

  return Paragraph;
}(PureComponent);
Paragraph.propTypes = {
  paragraph: PropTypes.string
};
Paragraph.defaultProps = {
  paragraph: null
};
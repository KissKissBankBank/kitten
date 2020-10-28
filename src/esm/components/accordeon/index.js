import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item } from './components/item';
import { Header } from './components/header';
import { Content } from './components/content';
import { Context } from './components/context';
import { Marger } from '../layout/marger';
import { getReactElementsByType } from '../../helpers/react/react-elements';
export var Accordeon = /*#__PURE__*/function (_Component) {
  _inherits(Accordeon, _Component);

  var _super = _createSuper(Accordeon);

  function Accordeon(props) {
    var _this;

    _classCallCheck(this, Accordeon);

    _this = _super.call(this, props);

    _this.componentDidUpdate = function (prevProps) {
      if (prevProps.selectedItem !== _this.props.selectedItem) {
        _this.updateSelectedItem(_this.props.selectedItem);
      }

      if (prevProps.isAnimated !== _this.props.isAnimated) {
        _this.setState({
          isAnimated: _this.props.isAnimated
        });
      }
    };

    _this.updateSelectedItem = function (newSelectedItemId) {
      _this.setState({
        selectedItem: newSelectedItemId
      });

      _this.props.onChange(newSelectedItemId);
    };

    _this.state = {
      selectedItem: props.selectedItem,
      updateSelectedItem: _this.updateSelectedItem,
      isAnimated: props.isAnimated,
      componentId: props.id
    };
    return _this;
  }

  _createClass(Accordeon, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      var items = getReactElementsByType({
        children: children,
        type: Accordeon.Item
      });
      return /*#__PURE__*/React.createElement(Context.Provider, {
        value: this.state
      }, items.map(function (item, index) {
        return /*#__PURE__*/React.createElement(Marger, {
          key: index,
          bottom: index === items.length - 1 ? 0 : 1.5
        }, React.cloneElement(item, {
          id: item.props.id || index
        }));
      }));
    }
  }]);

  return Accordeon;
}(Component);
Accordeon.Item = Item;
Accordeon.Header = Header;
Accordeon.Content = Content;
Accordeon.propTypes = {
  selectedItem: PropTypes.number,
  onChange: PropTypes.func,
  isAnimated: PropTypes.bool,
  id: PropTypes.string
};
Accordeon.defaultProps = {
  selectedItem: null,
  onChange: function onChange() {},
  isAnimated: true,
  id: 'accordeon'
};
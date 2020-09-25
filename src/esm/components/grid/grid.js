import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
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
import { ScreenConfig } from '../../constants/screen-config';
export var Grid = /*#__PURE__*/function (_Component) {
  _inherits(Grid, _Component);

  var _super = _createSuper(Grid);

  function Grid() {
    _classCallCheck(this, Grid);

    return _super.apply(this, arguments);
  }

  _createClass(Grid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          others = _objectWithoutProperties(_this$props, ["className"]);

      var gridClassName = classNames('k-Grid', className);
      return /*#__PURE__*/React.createElement("div", _extends({
        className: gridClassName
      }, others));
    }
  }]);

  return Grid;
}(Component);
export var GridCol = /*#__PURE__*/function (_React$Component) {
  _inherits(GridCol, _React$Component);

  var _super2 = _createSuper(GridCol);

  function GridCol() {
    _classCallCheck(this, GridCol);

    return _super2.apply(this, arguments);
  }

  _createClass(GridCol, [{
    key: "classByMediaQuery",
    value: function classByMediaQuery() {
      var props = this.props;
      var classNamesByMediaQuery = Object.keys(ScreenConfig).map(function (size) {
        var _classNames;

        var mediaQuery = size.toLowerCase();
        var col = props["col-".concat(mediaQuery)];
        var offset = props["offset-".concat(mediaQuery)];
        return classNames(classNamesByMediaQuery, (_classNames = {}, _defineProperty(_classNames, "k-Grid__col--".concat(col, "@").concat(mediaQuery), col), _defineProperty(_classNames, "k-Grid__col--offset-".concat(offset, "@").concat(mediaQuery), offset), _classNames));
      });
      return classNamesByMediaQuery;
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames2;

      var _this$props2 = this.props,
          col = _this$props2.col,
          offset = _this$props2.offset,
          className = _this$props2.className,
          others = _objectWithoutProperties(_this$props2, ["col", "offset", "className"]);

      var gridClassNames = classNames((_classNames2 = {}, _defineProperty(_classNames2, "k-Grid__col--".concat(col), col), _defineProperty(_classNames2, "k-Grid__col--offset-".concat(offset), offset), _classNames2), this.classByMediaQuery(), className); // Remove unknown props in others.

      Object.keys(ScreenConfig).map(function (size) {
        var mediaQuery = size.toLowerCase();
        delete others["col-".concat(mediaQuery)];
        delete others["offset-".concat(mediaQuery)];
      });
      return /*#__PURE__*/React.createElement("div", _extends({}, others, {
        className: gridClassNames
      }));
    }
  }]);

  return GridCol;
}(React.Component);
Grid.defaultProps = {
  className: null
};
GridCol.defaultProps = {
  col: '12',
  offset: null,
  className: null
};
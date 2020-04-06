"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridCol = exports.Grid = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _screenConfig = require("../../constants/screen-config");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Grid = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Grid, _Component);

  var _super = _createSuper(Grid);

  function Grid() {
    (0, _classCallCheck2.default)(this, Grid);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Grid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className"]);
      var gridClassName = (0, _classnames.default)('k-Grid', className);
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        className: gridClassName
      }, others));
    }
  }]);
  return Grid;
}(_react.Component);

exports.Grid = Grid;

var GridCol = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(GridCol, _React$Component);

  var _super2 = _createSuper(GridCol);

  function GridCol() {
    (0, _classCallCheck2.default)(this, GridCol);
    return _super2.apply(this, arguments);
  }

  (0, _createClass2.default)(GridCol, [{
    key: "classByMediaQuery",
    value: function classByMediaQuery() {
      var props = this.props;
      var classNamesByMediaQuery = Object.keys(_screenConfig.ScreenConfig).map(function (size) {
        var _classNames;

        var mediaQuery = size.toLowerCase();
        var col = props["col-".concat(mediaQuery)];
        var offset = props["offset-".concat(mediaQuery)];
        return (0, _classnames.default)(classNamesByMediaQuery, (_classNames = {}, (0, _defineProperty2.default)(_classNames, "k-Grid__col--".concat(col, "@").concat(mediaQuery), col), (0, _defineProperty2.default)(_classNames, "k-Grid__col--offset-".concat(offset, "@").concat(mediaQuery), offset), _classNames));
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
          others = (0, _objectWithoutProperties2.default)(_this$props2, ["col", "offset", "className"]);
      var gridClassNames = (0, _classnames.default)((_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, "k-Grid__col--".concat(col), col), (0, _defineProperty2.default)(_classNames2, "k-Grid__col--offset-".concat(offset), offset), _classNames2), this.classByMediaQuery(), className); // Remove unknown props in others.

      Object.keys(_screenConfig.ScreenConfig).map(function (size) {
        var mediaQuery = size.toLowerCase();
        delete others["col-".concat(mediaQuery)];
        delete others["offset-".concat(mediaQuery)];
      });
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, others, {
        className: gridClassNames
      }));
    }
  }]);
  return GridCol;
}(_react.default.Component);

exports.GridCol = GridCol;
Grid.defaultProps = {
  className: null
};
GridCol.defaultProps = {
  col: '12',
  offset: null,
  className: null
};
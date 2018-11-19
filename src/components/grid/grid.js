"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GridCol = exports.Grid = void 0;

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _screenConfig = require("kitten/constants/screen-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Grid =
/*#__PURE__*/
function (_Component) {
  _inherits(Grid, _Component);

  function Grid() {
    _classCallCheck(this, Grid);

    return _possibleConstructorReturn(this, _getPrototypeOf(Grid).apply(this, arguments));
  }

  _createClass(Grid, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          others = _objectWithoutProperties(_this$props, ["className"]);

      var gridClassName = (0, _classnames.default)('k-Grid', className);
      return _react.default.createElement("div", _extends({
        className: gridClassName
      }, others));
    }
  }]);

  return Grid;
}(_react.Component);

exports.Grid = Grid;

var GridCol =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GridCol, _React$Component);

  function GridCol() {
    _classCallCheck(this, GridCol);

    return _possibleConstructorReturn(this, _getPrototypeOf(GridCol).apply(this, arguments));
  }

  _createClass(GridCol, [{
    key: "classByMediaQuery",
    value: function classByMediaQuery() {
      var props = this.props;
      var classNamesByMediaQuery = Object.keys(_screenConfig.ScreenConfig).map(function (size) {
        var _classNames;

        var mediaQuery = size.toLowerCase();
        var col = props["col-".concat(mediaQuery)];
        var offset = props["offset-".concat(mediaQuery)];
        return (0, _classnames.default)(classNamesByMediaQuery, (_classNames = {}, _defineProperty(_classNames, "k-Grid__col--".concat(col, "@").concat(mediaQuery), col), _defineProperty(_classNames, "k-Grid__col--offset-".concat(offset, "@").concat(mediaQuery), offset), _classNames));
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

      var gridClassNames = (0, _classnames.default)((_classNames2 = {}, _defineProperty(_classNames2, "k-Grid__col--".concat(col), col), _defineProperty(_classNames2, "k-Grid__col--offset-".concat(offset), offset), _classNames2), this.classByMediaQuery(), className); // Remove unknown props in others.

      Object.keys(_screenConfig.ScreenConfig).map(function (size) {
        var mediaQuery = size.toLowerCase();
        delete others["col-".concat(mediaQuery)];
        delete others["offset-".concat(mediaQuery)];
      });
      return _react.default.createElement("div", _extends({}, others, {
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
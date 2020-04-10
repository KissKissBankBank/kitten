"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LegoGrid = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactMasonryComponent = _interopRequireDefault(require("react-masonry-component"));

var _screenConfig = require("../../constants/screen-config");

var _gridConfig = require("../../constants/grid-config");

var _radium = _interopRequireDefault(require("radium"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var LegoGridBase = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(LegoGridBase, _Component);

  var _super = _createSuper(LegoGridBase);

  function LegoGridBase(props) {
    var _this;

    (0, _classCallCheck2.default)(this, LegoGridBase);
    _this = _super.call(this, props);
    _this.state = {
      show: false
    };
    return _this;
  }

  (0, _createClass2.default)(LegoGridBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        show: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          masonryProps = _this$props.masonryProps,
          children = _this$props.children,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["className", "masonryProps", "children"]);

      var classByMediaQuery = function classByMediaQuery() {
        var classNamesByMediaQuery = Object.keys(_screenConfig.ScreenConfig).map(function (size) {
          var mediaQuery = size.toLowerCase();

          var items = _this2.props["items-".concat(mediaQuery, "-up")];

          return (0, _classnames.default)(classNamesByMediaQuery, (0, _defineProperty2.default)({}, "k-LegoGrid--".concat(_gridConfig.NUM_COLUMNS / items, "col@").concat(mediaQuery), items));
        });
        return classNamesByMediaQuery;
      };

      var gridClassName = (0, _classnames.default)('k-LegoGrid', classByMediaQuery(), className);
      var masonryStyle = [styles.masonry, !this.state.show && styles.masonry.hidden, others.style];
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        className: gridClassName
      }, others, {
        style: masonryStyle
      }), /*#__PURE__*/_react.default.createElement(_reactMasonryComponent.default, masonryProps, children));
    }
  }]);
  return LegoGridBase;
}(_react.Component);

LegoGridBase.defaultProps = {
  className: null,
  masonryProps: {}
};
var LegoGrid = (0, _radium.default)(LegoGridBase);
exports.LegoGrid = LegoGrid;

LegoGrid.Item = function (_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  var itemClassName = (0, _classnames.default)('k-LegoGrid__item', props.className);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: itemClassName
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "k-LegoGrid__item__content"
  }, children));
};

LegoGrid.Item.defaultProps = {
  className: null
};
var styles = {
  masonry: {
    opacity: 1,
    visibility: 'visible',
    transition: 'opacity .5s, visibility .5s',
    hidden: {
      visibility: 'hidden',
      opacity: 0
    }
  }
};
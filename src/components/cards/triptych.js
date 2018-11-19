"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Triptych = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _grid = require("kitten/components/grid/grid");

var _marger = require("kitten/components/layout/marger");

var _verticalStroke2 = require("kitten/components/layout/vertical-stroke");

var _screenConfig = require("kitten/constants/screen-config");

var _mediaQueries = require("kitten/hoc/media-queries");

var _debounce = require("kitten/helpers/utils/debounce");

var _gridConfig = require("kitten/constants/grid-config");

var _firstItem, _secondItem, _thirdItem;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Marger = (0, _radium.default)(_marger.Marger);
var GridCol = (0, _radium.default)(_grid.GridCol);
var VerticalStroke = (0, _radium.default)(_verticalStroke2.VerticalStroke);

var TriptychBase =
/*#__PURE__*/
function (_Component) {
  _inherits(TriptychBase, _Component);

  function TriptychBase(_props) {
    var _this;

    _classCallCheck(this, TriptychBase);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TriptychBase).call(this, _props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateSecondCardMargin", function () {
      _this.setState(function (_state, props) {
        var viewportIsTabletOrLess = props.viewportIsTabletOrLess,
            viewportIsSOrLess = props.viewportIsSOrLess;
        var isTablet = viewportIsTabletOrLess && !viewportIsSOrLess;
        if (!isTablet) return {
          secondCardComputedTopMargin: null
        };
        var titleHeight = _this.title.clientHeight;
        var cardHeight = _this.firstCard.clientHeight;
        return {
          secondCardComputedTopMargin: -(cardHeight - titleHeight)
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setRef", function (name) {
      return function (node) {
        _this[name] = node;
      };
    });

    _this.state = {
      secondCardComputedTopMargin: null
    };
    return _this;
  }

  _createClass(TriptychBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.updateSecondCardMargin();
      window.addEventListener('resize', (0, _debounce.debounce)(this.updateSecondCardMargin, 250));
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', (0, _debounce.debounce)(this.updateSecondCardMargin, 250));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          viewportIsTabletOrLess = _this$props.viewportIsTabletOrLess,
          title = _this$props.title,
          item1 = _this$props.item1,
          item2 = _this$props.item2,
          item3 = _this$props.item3;
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(_grid.Grid, {
        className: "k-u-align-center"
      }, _react.default.createElement(GridCol, {
        "col-l": "6",
        "offset-l": "3",
        "col-m": "6",
        "offset-m": "0"
      }, _react.default.createElement("div", {
        ref: this.setRef('title')
      }, _react.default.createElement(Marger, {
        bottom: "2"
      }, title), _react.default.createElement(Marger, {
        bottom: "2"
      }, _react.default.createElement(VerticalStroke, {
        size: "huge",
        style: styles.verticalStroke
      })))), _react.default.createElement(GridCol, {
        "col-l": "4",
        "col-m": "6",
        style: styles.oddMargin
      }, _react.default.createElement(Marger, {
        style: styles.gutter.firstItem
      }, _react.default.createElement("div", {
        ref: this.setRef('firstCard')
      }, _react.default.createElement(Marger, {
        bottom: viewportIsTabletOrLess ? 5 : 0
      }, item1)))), _react.default.createElement(GridCol, {
        "col-l": "4",
        "col-m": "6"
      }, _react.default.createElement(Marger, {
        style: _objectSpread({}, styles.secondCard, styles.gutter.secondItem),
        top: this.state.secondCardComputedTopMargin / 10,
        bottom: viewportIsTabletOrLess ? 5 : 0
      }, item2)), _react.default.createElement(GridCol, {
        "col-l": "4",
        "col-m": "6",
        style: styles.oddMargin
      }, _react.default.createElement(Marger, {
        style: styles.gutter.thirdItem
      }, item3))));
    }
  }]);

  return TriptychBase;
}(_react.Component);

TriptychBase.propTypes = {
  title: _propTypes.default.node.isRequired,
  item1: _propTypes.default.node.isRequired,
  item2: _propTypes.default.node.isRequired,
  item3: _propTypes.default.node.isRequired
};
var strokeHeight = 80;
var marginStroke = 2;
var tabletGutter = 50 / 2 - _gridConfig.GUTTER / 2;
var desktopGutter = 40 / 2 - _gridConfig.GUTTER / 2;
var styles = {
  verticalStroke: _defineProperty({
    height: strokeHeight,
    margin: '0 auto'
  }, "@media (max-width: ".concat(_screenConfig.ScreenConfig.S.max, "px)"), {
    height: 50
  }),
  oddMargin: _defineProperty({}, "@media (min-width: ".concat(_screenConfig.ScreenConfig.L.min, "px)"), {
    marginTop: -(strokeHeight * 2 / 3 + marginStroke * 10)
  }),
  gutter: {
    firstItem: (_firstItem = {
      marginRight: desktopGutter
    }, _defineProperty(_firstItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.M.max, "px)"), {
      marginRight: 'inherit',
      marginLeft: tabletGutter
    }), _defineProperty(_firstItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.S.max, "px)"), {
      marginRight: 'inherit',
      marginLeft: 'inherit'
    }), _firstItem),
    secondItem: (_secondItem = {
      marginRight: desktopGutter,
      marginLeft: desktopGutter
    }, _defineProperty(_secondItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.M.max, "px)"), {
      marginRight: tabletGutter,
      marginLeft: 'inherit'
    }), _defineProperty(_secondItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.S.max, "px)"), {
      marginRight: 'inherit',
      marginLeft: 'inherit'
    }), _secondItem),
    thirdItem: (_thirdItem = {
      marginLeft: desktopGutter
    }, _defineProperty(_thirdItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.M.max, "px)"), {
      marginLeft: tabletGutter
    }), _defineProperty(_thirdItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.S.max, "px)"), {
      marginLeft: 'inherit'
    }), _thirdItem)
  },
  secondCard: {
    transition: 'margin 500ms'
  }
};
var Triptych = (0, _mediaQueries.mediaQueries)(TriptychBase, {
  viewportIsTabletOrLess: true,
  viewportIsSOrLess: true
});
exports.Triptych = Triptych;
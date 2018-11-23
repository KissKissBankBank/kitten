"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Triptych = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

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

var Marger = (0, _radium.default)(_marger.Marger);
var GridCol = (0, _radium.default)(_grid.GridCol);
var VerticalStroke = (0, _radium.default)(_verticalStroke2.VerticalStroke);

var TriptychBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TriptychBase, _Component);

  function TriptychBase(_props) {
    var _this;

    (0, _classCallCheck2.default)(this, TriptychBase);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TriptychBase).call(this, _props));

    _this.updateSecondCardMargin = function () {
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
    };

    _this.setRef = function (name) {
      return function (node) {
        _this[name] = node;
      };
    };

    _this.state = {
      secondCardComputedTopMargin: null
    };
    return _this;
  }

  (0, _createClass2.default)(TriptychBase, [{
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
        style: (0, _extends2.default)({}, styles.secondCard, styles.gutter.secondItem),
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
  verticalStroke: (0, _defineProperty2.default)({
    height: strokeHeight,
    margin: '0 auto'
  }, "@media (max-width: ".concat(_screenConfig.ScreenConfig.S.max, "px)"), {
    height: 50
  }),
  oddMargin: (0, _defineProperty2.default)({}, "@media (min-width: ".concat(_screenConfig.ScreenConfig.L.min, "px)"), {
    marginTop: -(strokeHeight * 2 / 3 + marginStroke * 10)
  }),
  gutter: {
    firstItem: (_firstItem = {
      marginRight: desktopGutter
    }, (0, _defineProperty2.default)(_firstItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.M.max, "px)"), {
      marginRight: 'inherit',
      marginLeft: tabletGutter
    }), (0, _defineProperty2.default)(_firstItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.S.max, "px)"), {
      marginRight: 'inherit',
      marginLeft: 'inherit'
    }), _firstItem),
    secondItem: (_secondItem = {
      marginRight: desktopGutter,
      marginLeft: desktopGutter
    }, (0, _defineProperty2.default)(_secondItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.M.max, "px)"), {
      marginRight: tabletGutter,
      marginLeft: 'inherit'
    }), (0, _defineProperty2.default)(_secondItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.S.max, "px)"), {
      marginRight: 'inherit',
      marginLeft: 'inherit'
    }), _secondItem),
    thirdItem: (_thirdItem = {
      marginLeft: desktopGutter
    }, (0, _defineProperty2.default)(_thirdItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.M.max, "px)"), {
      marginLeft: tabletGutter
    }), (0, _defineProperty2.default)(_thirdItem, "@media (max-width: ".concat(_screenConfig.ScreenConfig.S.max, "px)"), {
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
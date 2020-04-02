"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = void 0;

var _extends3 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _screenConfig = require("../../constants/screen-config");

var _mediaQueries = require("../../hoc/media-queries");

var _radium = _interopRequireWildcard(require("radium"));

var _text = require("../../components/typography/text");

var _marger = require("../../components/layout/marger");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _pathOr = _interopRequireDefault(require("ramda/src/pathOr"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("../../constants/typography-config"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Marger = (0, _radium.default)(_marger.Marger);
var Text = (0, _radium.default)(_text.Text);

var Timeline = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Timeline, _Component);

  var _super = _createSuper(Timeline);

  function Timeline() {
    (0, _classCallCheck2.default)(this, Timeline);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Timeline, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          itemHeight = _this$props.itemHeight;

      var arrayOfChildren = _react.default.Children.toArray(children);

      var bulletStyle = [styles.circle, styles.circleMarger[itemHeight]];
      return _react.default.createElement(_radium.StyleRoot, {
        style: styles.timelineContainer
      }, _react.default.createElement("span", {
        style: styles.verticalDashedLine
      }), _react.default.createElement("ol", {
        style: styles.customList
      }, _react.default.Children.map(arrayOfChildren, function (child, index) {
        return _react.default.createElement("li", {
          style: styles.list
        }, _react.default.createElement(Text, {
          size: "tiny",
          style: bulletStyle
        }, ++index), _react.default.createElement(Marger, {
          top: "2.5",
          bottom: "2.5",
          style: styles.textList
        }, child));
      })));
    }
  }]);
  return Timeline;
}(_react.Component);

exports.Timeline = Timeline;
Timeline.propTypes = {
  children: _propTypes.default.node.isRequired,
  itemHeight: _propTypes.default.oneOf(['thin', 'large'])
};
Timeline.defaultProps = {
  itemHeight: 'large'
};
var circleSize = 50;
var styles = {
  timelineContainer: (0, _defineProperty2.default)({
    position: 'relative'
  }, "@media (max-width: ".concat(_screenConfig.ScreenConfig.XS.max, "px)"), {
    marginLeft: 20
  }),
  verticalDashedLine: {
    backgroundImage: "linear-gradient(".concat(_colorsConfig.default.line1, " 50%,\n      rgba(255, 255, 255, 0) 0%)"),
    backgroundPosition: 'right',
    backgroundSize: '2px 8px',
    backgroundRepeat: 'repeat-y',
    position: 'absolute',
    height: '100%',
    top: 0,
    left: -1,
    width: 2
  },
  customList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  circle: (0, _extends3.default)({
    boxSizing: 'border-box',
    height: circleSize,
    width: circleSize,
    border: "2px solid ".concat(_colorsConfig.default.line1),
    backgroundColor: _colorsConfig.default.background1,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 40,
    marginLeft: -circleSize / 2,
    lineHeight: 0,
    flex: "0 0 ".concat(circleSize, "px"),
    position: 'relative'
  }, _typographyConfig.default.fontStyles.bold, (0, _defineProperty2.default)({}, "@media (max-width: ".concat(_screenConfig.ScreenConfig.XS.max, "px)"), {
    marginRight: 20
  })),
  circleMarger: {
    large: (0, _defineProperty2.default)({
      marginTop: 80,
      marginBottom: 80
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig.S.min, "px) and\n        (max-width: ").concat(_screenConfig.ScreenConfig.M.max, "px)"), {
      marginTop: 60,
      marginBottom: 60
    }),
    thin: (0, _defineProperty2.default)({
      marginTop: 40,
      marginBottom: 40
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig.S.min, "px) and\n        (max-width: ").concat(_screenConfig.ScreenConfig.M.max, "px)"), {
      marginTop: 20,
      marginBottom: 20
    })
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textList: {
    flexGrow: 1,
    alignItems: 'center'
  }
};
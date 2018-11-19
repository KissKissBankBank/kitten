"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = void 0;

var _react = _interopRequireWildcard(require("react"));

var _screenConfig = require("kitten/constants/screen-config");

var _mediaQueries = require("kitten/hoc/media-queries");

var _radium = _interopRequireWildcard(require("radium"));

var _text = require("kitten/components/typography/text");

var _marger = require("kitten/components/layout/marger");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _pathOr = _interopRequireDefault(require("ramda/src/pathOr"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typographyConfig = _interopRequireDefault(require("kitten/constants/typography-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Marger = (0, _radium.default)(_marger.Marger);
var Text = (0, _radium.default)(_text.Text);

var Timeline =
/*#__PURE__*/
function (_Component) {
  _inherits(Timeline, _Component);

  function Timeline() {
    _classCallCheck(this, Timeline);

    return _possibleConstructorReturn(this, _getPrototypeOf(Timeline).apply(this, arguments));
  }

  _createClass(Timeline, [{
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
  timelineContainer: _defineProperty({
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
  circle: _objectSpread({
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
  }, _typographyConfig.default.fontStyles.bold, _defineProperty({}, "@media (max-width: ".concat(_screenConfig.ScreenConfig.XS.max, "px)"), {
    marginRight: 20
  })),
  circleMarger: {
    large: _defineProperty({
      marginTop: 80,
      marginBottom: 80
    }, "@media (min-width: ".concat(_screenConfig.ScreenConfig.S.min, "px) and\n        (max-width: ").concat(_screenConfig.ScreenConfig.M.max, "px)"), {
      marginTop: 60,
      marginBottom: 60
    }),
    thin: _defineProperty({
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
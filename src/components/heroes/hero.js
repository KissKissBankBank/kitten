"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero = void 0;

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = require("kitten/components/grid/container");

var _grid = require("kitten/components/grid/grid");

var _screenConfig = require("kitten/constants/screen-config");

var _gridConfig = require("kitten/constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _right2, _content, _left3, _right3, _image;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Grid = (0, _radium.default)(_grid.Grid);
var GridCol = (0, _radium.default)(_grid.GridCol);

var HeroBase =
/*#__PURE__*/
function (_Component) {
  _inherits(HeroBase, _Component);

  function HeroBase() {
    _classCallCheck(this, HeroBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeroBase).apply(this, arguments));
  }

  _createClass(HeroBase, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_container.Container, null, _react.default.createElement(Grid, null, this.renderContent(), this.renderImage()));
    }
  }, {
    key: "renderContent",
    value: function renderContent() {
      var gridStyles = [styles.content.grid, this.props.direction == 'left' && styles.content.grid.left, this.props.direction == 'right' && styles.content.grid.right, this.props.tiny && styles.content.grid.tiny];
      var contentStyles = [styles.content, this.props.direction == 'left' && styles.content.left, this.props.direction == 'right' && styles.content.right, {
        backgroundColor: this.props.contentBackgroundColor,
        color: this.props.contentColor
      }];
      return _react.default.createElement(GridCol, {
        col: "12",
        "col-s": "10",
        "col-l": "6",
        style: gridStyles
      }, _react.default.createElement("div", {
        style: contentStyles
      }, this.props.children));
    }
  }, {
    key: "renderImage",
    value: function renderImage() {
      var gridStyles = [styles.image.grid, this.props.direction == 'left' && styles.image.grid.left, this.props.direction == 'right' && styles.image.grid.right, this.props.tiny && styles.image.grid.tiny];
      var imageStyles = [styles.image, this.props.direction == 'right' && styles.image.right, {
        backgroundImage: "url(".concat(this.props.imageSrc, ")")
      }];
      return _react.default.createElement(GridCol, {
        col: "12",
        "col-l": "7",
        style: gridStyles
      }, _react.default.createElement("div", {
        style: imageStyles
      }));
    }
  }]);

  return HeroBase;
}(_react.Component);

_defineProperty(HeroBase, "propTypes", {
  direction: _propTypes.default.oneOf(['left', 'right']),
  tiny: _propTypes.default.bool,
  imageSrc: _propTypes.default.string,
  contentBackgroundColor: _propTypes.default.string,
  contentColor: _propTypes.default.string
});

_defineProperty(HeroBase, "defaultProps", {
  direction: 'left',
  tiny: false,
  imageSrc: '',
  contentBackgroundColor: _colorsConfig.default.font1,
  contentColor: _colorsConfig.default.background1
});

var styles = {
  content: (_content = {
    padding: '100px 115px'
  }, _defineProperty(_content, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
    padding: '100px 85px'
  }), _defineProperty(_content, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
    padding: '50px 20px'
  }), _defineProperty(_content, "left", _defineProperty({}, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
    marginLeft: "-".concat(_gridConfig.CONTAINER_PADDING_MOBILE, "px")
  })), _defineProperty(_content, "right", _defineProperty({}, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
    marginRight: "-".concat(_gridConfig.CONTAINER_PADDING_MOBILE, "px")
  })), _defineProperty(_content, "grid", {
    position: 'relative',
    zIndex: 1,
    paddingTop: "".concat(1 / _gridConfig.NUM_COLUMNS * 100, "vw"),
    marginLeft: "".concat(1 / _gridConfig.NUM_COLUMNS * 100, "%"),
    left: _defineProperty({}, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
      paddingTop: "".concat(8 / _gridConfig.NUM_COLUMNS * 100, "vw"),
      marginLeft: 0
    }),
    right: (_right2 = {
      marginLeft: "".concat(5 / _gridConfig.NUM_COLUMNS * 100, "%")
    }, _defineProperty(_right2, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
      paddingTop: "".concat(8 / _gridConfig.NUM_COLUMNS * 100, "vw"),
      marginLeft: "".concat(2 / _gridConfig.NUM_COLUMNS * 100, "%")
    }), _defineProperty(_right2, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
      marginLeft: 0
    }), _right2),
    tiny: _defineProperty({}, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      paddingBottom: "".concat(1 / 2 / _gridConfig.NUM_COLUMNS * 100, "vw")
    })
  }), _content),
  image: (_image = {
    width: "calc(100% + ".concat(_gridConfig.CONTAINER_PADDING, "px)"),
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }, _defineProperty(_image, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
    width: "calc(100% + ".concat(_gridConfig.CONTAINER_PADDING * 2, "px)"),
    height: '100vw',
    marginLeft: "-".concat(_gridConfig.CONTAINER_PADDING, "px")
  }), _defineProperty(_image, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
    width: "calc(100% + ".concat(_gridConfig.CONTAINER_PADDING_MOBILE * 2, "px)"),
    marginLeft: "-".concat(_gridConfig.CONTAINER_PADDING_MOBILE, "px")
  }), _defineProperty(_image, "right", {
    marginLeft: "-".concat(_gridConfig.CONTAINER_PADDING, "px")
  }), _defineProperty(_image, "grid", {
    marginLeft: "-".concat(2 / _gridConfig.NUM_COLUMNS * 100, "%"),
    paddingBottom: "".concat(1 / 2 / _gridConfig.NUM_COLUMNS * 100, "vw"),
    left: (_left3 = {}, _defineProperty(_left3, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
      marginLeft: "-".concat(10 / _gridConfig.NUM_COLUMNS * 100, "%"),
      paddingBottom: 0
    }), _defineProperty(_left3, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
      marginLeft: "-100%"
    }), _left3),
    right: (_right3 = {
      marginLeft: "-".concat(11 / _gridConfig.NUM_COLUMNS * 100, "%")
    }, _defineProperty(_right3, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
      marginLeft: "-".concat(12 / _gridConfig.NUM_COLUMNS * 100, "%")
    }), _defineProperty(_right3, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
      marginLeft: "-100%"
    }), _right3),
    tiny: _defineProperty({}, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      paddingBottom: 0
    })
  }), _image)
};
var Hero = (0, _radium.default)(HeroBase);
exports.Hero = Hero;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Hero = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _container = require("../../components/grid/container");

var _grid = require("../../components/grid/grid");

var _screenConfig = require("../../constants/screen-config");

var _gridConfig = require("../../constants/grid-config");

var _colorsConfig = _interopRequireDefault(require("../../constants/colors-config"));

var _right2, _content, _left3, _right3, _image;

var Grid = (0, _radium.default)(_grid.Grid);
var GridCol = (0, _radium.default)(_grid.GridCol);

var HeroBase =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(HeroBase, _Component);

  function HeroBase() {
    (0, _classCallCheck2.default)(this, HeroBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(HeroBase).apply(this, arguments));
  }

  (0, _createClass2.default)(HeroBase, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_container.Container, null, _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement(Grid, null, this.renderContent(), this.renderImage())));
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

HeroBase.propTypes = {
  direction: _propTypes.default.oneOf(['left', 'right']),
  tiny: _propTypes.default.bool,
  imageSrc: _propTypes.default.string,
  contentBackgroundColor: _propTypes.default.string,
  contentColor: _propTypes.default.string
};
HeroBase.defaultProps = {
  direction: 'left',
  tiny: false,
  imageSrc: '',
  contentBackgroundColor: _colorsConfig.default.font1,
  contentColor: _colorsConfig.default.background1
};
var styles = {
  content: (_content = {
    padding: '100px 115px'
  }, (0, _defineProperty2.default)(_content, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
    padding: '100px 85px'
  }), (0, _defineProperty2.default)(_content, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
    padding: '50px 20px'
  }), (0, _defineProperty2.default)(_content, "left", (0, _defineProperty2.default)({}, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
    marginLeft: "-".concat(_gridConfig.CONTAINER_PADDING_MOBILE, "px")
  })), (0, _defineProperty2.default)(_content, "right", (0, _defineProperty2.default)({}, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
    marginRight: "-".concat(_gridConfig.CONTAINER_PADDING_MOBILE, "px")
  })), (0, _defineProperty2.default)(_content, "grid", {
    position: 'relative',
    zIndex: 1,
    paddingTop: "".concat(1 / _gridConfig.NUM_COLUMNS * 100, "vw"),
    marginLeft: "".concat(1 / _gridConfig.NUM_COLUMNS * 100, "%"),
    left: (0, _defineProperty2.default)({}, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
      paddingTop: "".concat(8 / _gridConfig.NUM_COLUMNS * 100, "vw"),
      marginLeft: 0
    }),
    right: (_right2 = {
      marginLeft: "".concat(5 / _gridConfig.NUM_COLUMNS * 100, "%")
    }, (0, _defineProperty2.default)(_right2, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
      paddingTop: "".concat(8 / _gridConfig.NUM_COLUMNS * 100, "vw"),
      marginLeft: "".concat(2 / _gridConfig.NUM_COLUMNS * 100, "%")
    }), (0, _defineProperty2.default)(_right2, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
      marginLeft: 0
    }), _right2),
    tiny: (0, _defineProperty2.default)({}, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      paddingBottom: "".concat(1 / 2 / _gridConfig.NUM_COLUMNS * 100, "vw")
    })
  }), _content),
  image: (_image = {
    width: "calc(100% + ".concat(_gridConfig.CONTAINER_PADDING, "px)"),
    height: '100%',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }, (0, _defineProperty2.default)(_image, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
    width: "calc(100% + ".concat(_gridConfig.CONTAINER_PADDING * 2, "px)"),
    height: '100vw',
    marginLeft: "-".concat(_gridConfig.CONTAINER_PADDING, "px")
  }), (0, _defineProperty2.default)(_image, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
    width: "calc(100% + ".concat(_gridConfig.CONTAINER_PADDING_MOBILE * 2, "px)"),
    marginLeft: "-".concat(_gridConfig.CONTAINER_PADDING_MOBILE, "px")
  }), (0, _defineProperty2.default)(_image, "right", {
    marginLeft: "-".concat(_gridConfig.CONTAINER_PADDING, "px")
  }), (0, _defineProperty2.default)(_image, "grid", {
    marginLeft: "-".concat(2 / _gridConfig.NUM_COLUMNS * 100, "%"),
    paddingBottom: "".concat(1 / 2 / _gridConfig.NUM_COLUMNS * 100, "vw"),
    left: (_left3 = {}, (0, _defineProperty2.default)(_left3, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
      marginLeft: "-".concat(10 / _gridConfig.NUM_COLUMNS * 100, "%"),
      paddingBottom: 0
    }), (0, _defineProperty2.default)(_left3, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
      marginLeft: "-100%"
    }), _left3),
    right: (_right3 = {
      marginLeft: "-".concat(11 / _gridConfig.NUM_COLUMNS * 100, "%")
    }, (0, _defineProperty2.default)(_right3, "@media (max-width: ".concat(_screenConfig.ScreenConfig['M'].max, "px)"), {
      marginLeft: "-".concat(12 / _gridConfig.NUM_COLUMNS * 100, "%")
    }), (0, _defineProperty2.default)(_right3, "@media (max-width: ".concat(_screenConfig.ScreenConfig['XS'].max, "px)"), {
      marginLeft: "-100%"
    }), _right3),
    tiny: (0, _defineProperty2.default)({}, "@media (min-width: ".concat(_screenConfig.ScreenConfig['L'].min, "px)"), {
      paddingBottom: 0
    })
  }), _image)
};
var Hero = (0, _radium.default)(HeroBase);
exports.Hero = Hero;
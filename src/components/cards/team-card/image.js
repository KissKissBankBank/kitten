"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardImage = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marger = require("../../layout/marger");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TeamCardImage = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(TeamCardImage, _Component);

  var _super = _createSuper(TeamCardImage);

  function TeamCardImage() {
    (0, _classCallCheck2.default)(this, TeamCardImage);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TeamCardImage, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          src = _this$props.src,
          title = _this$props.title;
      return /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        bottom: "2"
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: imgBackground(src),
        title: title
      }));
    }
  }]);
  return TeamCardImage;
}(_react.Component);

exports.TeamCardImage = TeamCardImage;
TeamCardImage.propTypes = {
  src: _propTypes.default.string.isRequired,
  title: _propTypes.default.string.isRequired
};
var imageHeight = 378;
var imageWidth = 252;

var imgBackground = function imgBackground(image) {
  return {
    backgroundImage: "url(".concat(image, ")"),
    backgroundColor: _colorsConfig.default.background1,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    paddingBottom: imageHeight / imageWidth * 100 + '%'
  };
};
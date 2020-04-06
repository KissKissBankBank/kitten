"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TeamCardButtonWithTooltip = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = require("radium");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonIcon = require("../../buttons/button-icon");

var _phoneIcon = require("../../icons/phone-icon");

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TeamCardButtonWithTooltip = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(TeamCardButtonWithTooltip, _Component);

  var _super = _createSuper(TeamCardButtonWithTooltip);

  function TeamCardButtonWithTooltip(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TeamCardButtonWithTooltip);
    _this = _super.call(this, props);

    _this.handleSubmitFocus = function () {
      _this.setState({
        focus: true
      });
    };

    _this.handleSubmitBlur = function () {
      _this.setState({
        focus: false
      });
    };

    _this.handleOnMouseEnter = function () {
      _this.setState({
        hover: true
      });
    };

    _this.handleOnMouseLeave = function () {
      _this.setState({
        hover: false
      });
    };

    _this.state = {
      hover: false,
      focus: false
    };
    return _this;
  }

  (0, _createClass2.default)(TeamCardButtonWithTooltip, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          phoneNumber = _this$props.phoneNumber,
          color = _this$props.color;
      var tooltipStyle = [tooltipColor(color), styles.tooltip.content, this.state.hover && styles.tooltip.content.hover, this.state.focus && styles.tooltip.content.focus];
      var arrowTooltipStyle = [styles.tooltip.content.after, arrowTooltipColor(color)];
      return /*#__PURE__*/_react.default.createElement(_radium.StyleRoot, null, /*#__PURE__*/_react.default.createElement("a", {
        href: "tel:".concat(phoneNumber),
        onMouseEnter: this.handleOnMouseEnter,
        onMouseLeave: this.handleOnMouseLeave,
        onFocus: this.handleSubmitFocus,
        onBlur: this.handleSubmitBlur,
        style: {
          outline: 'none'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: styles.tooltip
      }, /*#__PURE__*/_react.default.createElement("span", {
        style: tooltipStyle
      }, phoneNumber, /*#__PURE__*/_react.default.createElement("span", {
        style: arrowTooltipStyle
      })), /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
        modifier: "hydrogen",
        className: "k-ButtonIcon--phone",
        style: {
          marginRight: 15
        }
      }, /*#__PURE__*/_react.default.createElement(_phoneIcon.PhoneIcon, {
        className: "k-ButtonIcon__svg"
      })))));
    }
  }]);
  return TeamCardButtonWithTooltip;
}(_react.Component);

exports.TeamCardButtonWithTooltip = TeamCardButtonWithTooltip;
TeamCardButtonWithTooltip.propTypes = {
  phoneNumber: _propTypes.default.string.isRequired
};
var pseudoClass = {
  visibility: 'visible',
  opacity: 1
};

var arrowTooltipColor = function arrowTooltipColor(backgroundTooltipColor) {
  return {
    borderBottomColor: "".concat(backgroundTooltipColor)
  };
};

var tooltipColor = function tooltipColor(backgroundTooltipColor) {
  return {
    backgroundColor: "".concat(backgroundTooltipColor),
    borderColor: "".concat(backgroundTooltipColor)
  };
};

var styles = {
  tooltip: {
    position: 'relative',
    content: {
      position: 'absolute',
      top: 55,
      padding: 15,
      marginLeft: -50,
      borderSize: 2,
      borderStyle: 'solid',
      fontSize: 14,
      lineHeight: 'normal',
      fontWeight: 'regular',
      color: _colorsConfig.default.background1,
      whiteSpace: 'nowrap',
      opacity: 0,
      visibility: 'hidden',
      transition: 'opacity .2s, visibility .2s',
      hover: pseudoClass,
      focus: pseudoClass,
      after: {
        position: 'absolute',
        left: '50%',
        bottom: '102%',
        height: 0,
        width: 0,
        marginLeft: -8,
        borderWidth: 10,
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderStyle: 'solid',
        pointerEvents: 'none'
      }
    }
  }
};
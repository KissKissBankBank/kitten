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

var _radium = _interopRequireWildcard(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _phoneIcon = require("kitten/components/icons/phone-icon");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var ButtonIcon = (0, _radium.default)(_buttonIcon.ButtonIcon);

var TeamCardButtonWithTooltip =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(TeamCardButtonWithTooltip, _Component);

  function TeamCardButtonWithTooltip(props) {
    var _this;

    (0, _classCallCheck2.default)(this, TeamCardButtonWithTooltip);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(TeamCardButtonWithTooltip).call(this, props));

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
      var phoneNumber = this.props.phoneNumber;
      var tooltipStyle = [styles.tooltip.content, this.state.hover && styles.tooltip.content.hover, this.state.focus && styles.tooltip.content.focus];
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("a", {
        href: "tel:".concat(phoneNumber),
        onMouseEnter: this.handleOnMouseEnter,
        onMouseLeave: this.handleOnMouseLeave,
        onFocus: this.handleSubmitFocus,
        onBlur: this.handleSubmitBlur,
        style: {
          outline: 'none'
        }
      }, _react.default.createElement("div", {
        style: styles.tooltip
      }, _react.default.createElement("span", {
        style: tooltipStyle
      }, phoneNumber, _react.default.createElement("span", {
        style: styles.tooltip.content.after
      })), _react.default.createElement(ButtonIcon, {
        modifier: "hydrogen",
        className: "k-ButtonIcon--phone",
        style: {
          marginRight: 15
        }
      }, _react.default.createElement(_phoneIcon.PhoneIcon, {
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
var backgroundColor = _colorsConfig.default.primary1;
var pseudoClass = {
  visibility: 'visible',
  opacity: 1
};
var styles = {
  tooltip: {
    position: 'relative',
    content: {
      position: 'absolute',
      top: 55,
      padding: 15,
      marginLeft: -50,
      backgroundColor: backgroundColor,
      border: '2px solid #19b4fa',
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
        border: '10px solid transparent',
        borderBottomColor: backgroundColor,
        pointerEvents: 'none'
      }
    }
  }
};
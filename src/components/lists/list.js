"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = exports.ListBase = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _radium = _interopRequireWildcard(require("radium"));

var _arrowIcon = require("kitten/components/icons/arrow-icon");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _typography = require("kitten/helpers/utils/typography");

var ArrowIcon = (0, _radium.default)(_arrowIcon.ArrowIcon);

var ListButtonItem =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ListButtonItem, _Component);

  function ListButtonItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, ListButtonItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ListButtonItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      focus: false
    };

    _this.handleKeyPress = function (event) {
      var _this$props = _this.props,
          onKeyPress = _this$props.onKeyPress,
          onClick = _this$props.onClick;
      var enterKey = 13;
      var spaceKey = 32;

      switch (event.which) {
        case enterKey:
        case spaceKey:
          event.preventDefault;
          onClick();
          onKeyPress();
          break;
      }
    };

    _this.updateFocus = function (focusState) {
      _this.setState({
        focus: focusState
      });
    };

    _this.handleFocus = function (event) {
      _this.updateFocus(true);

      _this.props.onFocus();
    };

    _this.handleBlur = function () {
      _this.updateFocus(false);

      _this.props.onBlur();
    };

    _this.handleMouseEnter = function () {
      _this.updateFocus(true);

      _this.props.onMouseEnter();
    };

    _this.handleMouseLeave = function () {
      _this.updateFocus(false);

      _this.props.onMouseLeave();
    };

    return _this;
  }

  (0, _createClass2.default)(ListButtonItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          style = _this$props2.style,
          onClick = _this$props2.onClick,
          withTopBorder = _this$props2.withTopBorder,
          others = (0, _objectWithoutProperties2.default)(_this$props2, ["children", "disabled", "style", "onClick", "withTopBorder"]);
      var focus = this.state.focus;
      var buttonStyles = [styles.buttonItem.base, style, withTopBorder && styles.buttonItem.topBorder, disabled && styles.buttonItem.disabled];
      var arrowStyles = [styles.buttonItem.icon.base, disabled && styles.buttonItem.icon.disabled, !disabled && focus && styles.buttonItem.icon.focus];
      return _react.default.createElement(_radium.StyleRoot, null, _react.default.createElement("div", (0, _extends2.default)({}, others, {
        role: "button",
        style: buttonStyles,
        tabIndex: "0",
        onClick: disabled ? null : onClick,
        onKeyPress: disabled ? null : this.handleKeyPress,
        onMouseEnter: this.handleMouseEnter,
        onFocus: this.handleFocus,
        onMouseLeave: this.handleMouseLeave,
        onBlur: this.handleBlur
      }), _react.default.createElement("div", {
        style: styles.buttonItem.content
      }, children), _react.default.createElement("div", {
        style: styles.buttonItem.arrow
      }, _react.default.createElement(ArrowIcon, {
        className: "k-Button__icon",
        style: arrowStyles
      }))));
    }
  }]);
  return ListButtonItem;
}(_react.Component);

ListButtonItem.propTypes = {
  children: _propTypes.default.node.isRequired,
  style: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.array]),
  disabled: _propTypes.default.bool,
  withTopBorder: _propTypes.default.bool,
  onClick: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onMouseEnter: _propTypes.default.func,
  onMouseLeave: _propTypes.default.func
};
ListButtonItem.defaultProps = {
  style: {},
  disabled: false,
  withTopBorder: false,
  onClick: function onClick() {},
  onFocus: function onFocus() {},
  onBlur: function onBlur() {},
  onMouseEnter: function onMouseEnter() {},
  onMouseLeave: function onMouseLeave() {}
};

var ListBase =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(ListBase, _Component2);

  function ListBase() {
    (0, _classCallCheck2.default)(this, ListBase);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(ListBase).apply(this, arguments));
  }

  (0, _createClass2.default)(ListBase, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return _react.default.createElement("ul", {
        style: styles.list
      }, _react.default.Children.map(children, function (child, index) {
        if (!_react.default.isValidElement(child)) return null;
        return _react.default.createElement("li", null, child);
      }));
    }
  }]);
  return ListBase;
}(_react.Component);

exports.ListBase = ListBase;
ListBase.ButtonItem = ListButtonItem;
ListBase.propTypes = {
  children: _propTypes.default.node.isRequired
};
var styles = {
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  },
  buttonItem: {
    base: {
      display: 'flex',
      borderLeft: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      borderRight: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      borderBottom: "".concat(_colorsConfig.default.line1, " 0.125rem solid"),
      cursor: 'pointer',
      paddingLeft: '1.25rem',
      paddingRight: '1.25rem',
      ':hover': {
        backgroundColor: _colorsConfig.default.background2
      }
    },
    topBorder: {
      borderTop: "".concat(_colorsConfig.default.line1, " 0.125rem solid")
    },
    disabled: {
      color: _colorsConfig.default.line2,
      backgroundColor: _colorsConfig.default.background1,
      cursor: 'not-allowed',
      ':hover': {
        backgroundColor: _colorsConfig.default.background1
      }
    },
    content: {
      flexGrow: 1
    },
    arrow: {
      display: 'flex',
      alignItems: 'center'
    },
    icon: {
      base: {
        position: 'relative',
        left: 0,
        transition: 'left .2s'
      },
      focus: {
        left: (0, _typography.pxToRem)(5)
      },
      disabled: {
        fill: _colorsConfig.default.line2
      }
    }
  }
};
var List = (0, _radium.default)(ListBase);
exports.List = List;
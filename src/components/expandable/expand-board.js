"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandBoard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _radium = _interopRequireDefault(require("radium"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _button = require("kitten/components/buttons/button");

var _arrowIcon = require("kitten/components/icons/arrow-icon");

var _colorsConfig = _interopRequireDefault(require("kitten/constants/colors-config"));

var _typography = require("kitten/helpers/utils/typography");

var Button = (0, _radium.default)(_button.Button);

var ExpandBoardButton =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(ExpandBoardButton, _Component);

  function ExpandBoardButton() {
    (0, _classCallCheck2.default)(this, ExpandBoardButton);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ExpandBoardButton).apply(this, arguments));
  }

  (0, _createClass2.default)(ExpandBoardButton, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          expandChildren = _this$props.expandChildren,
          expanded = _this$props.expanded,
          disabled = _this$props.disabled,
          style = _this$props.style,
          onClick = _this$props.onClick,
          ariaId = _this$props.ariaId;
      var defaultExpandChildren = expandChildren ? expandChildren : children;
      var buttonStyles = expanded ? (0, _extends2.default)({}, style.base, style.expanded) : style.base;
      return _react.default.createElement(Button, {
        icon: true,
        iconOnRight: true,
        size: "big",
        modifier: "helium",
        disabled: disabled,
        "aria-expanded": expanded,
        "aria-controls": ariaId,
        style: buttonStyles,
        onClick: onClick,
        type: "button"
      }, _react.default.createElement("div", null, expanded ? defaultExpandChildren : children, _react.default.createElement(_arrowIcon.ArrowIcon, {
        version: "solid",
        direction: expanded ? 'top' : 'bottom',
        fill: _colorsConfig.default.background1,
        style: style.arrow
      })));
    }
  }]);
  return ExpandBoardButton;
}(_react.Component);

ExpandBoardButton.propTypes = {
  children: _propTypes.default.node.isRequired,
  ariaId: _propTypes.default.string,
  expandChildren: _propTypes.default.node,
  expanded: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  style: _propTypes.default.object,
  onClick: _propTypes.default.func
};
ExpandBoardButton.defaultProps = {
  expandChildren: null,
  expanded: false,
  disabled: false,
  style: {},
  onClick: function onClick() {},
  ariaId: ''
};

var ExpandBoardContent =
/*#__PURE__*/
function (_Component2) {
  (0, _inherits2.default)(ExpandBoardContent, _Component2);

  function ExpandBoardContent() {
    (0, _classCallCheck2.default)(this, ExpandBoardContent);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ExpandBoardContent).apply(this, arguments));
  }

  (0, _createClass2.default)(ExpandBoardContent, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          ariaId = _this$props2.ariaId;
      return _react.default.createElement("div", {
        id: ariaId
      }, children);
    }
  }]);
  return ExpandBoardContent;
}(_react.Component);

ExpandBoardContent.propTypes = {
  children: _propTypes.default.node.isRequired,
  ariaId: _propTypes.default.string
};
ExpandBoardContent.defaultProps = {
  ariaId: ''
};

var ExpandBoardBase =
/*#__PURE__*/
function (_Component3) {
  (0, _inherits2.default)(ExpandBoardBase, _Component3);

  function ExpandBoardBase(props) {
    var _this;

    (0, _classCallCheck2.default)(this, ExpandBoardBase);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ExpandBoardBase).call(this));

    _this.isButtonComponent = function (component) {
      return component.type === ExpandBoardButton;
    };

    _this.isContentComponent = function (component) {
      return component.type === ExpandBoardContent;
    };

    _this.handleClick = function () {
      _this.setState(function (prevState) {
        return {
          expanded: !prevState.expanded
        };
      }, function () {
        document.activeElement.blur();

        _this.props.onClick({
          expanded: _this.state.expanded
        });
      });
    };

    _this.state = {
      expanded: false
    };
    return _this;
  }

  (0, _createClass2.default)(ExpandBoardBase, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          style = _this$props3.style,
          disabled = _this$props3.disabled,
          ariaId = _this$props3.ariaId;
      var button = null;
      var content = null;

      _react.default.Children.forEach(children, function (child) {
        if (!_react.default.isValidElement(child)) return null;

        if (_this2.isButtonComponent(child)) {
          button = _react.default.cloneElement(child, {
            disabled: disabled,
            expanded: _this2.state.expanded,
            onClick: _this2.handleClick,
            style: styles.button,
            ariaId: ariaId
          });
        }

        if (_this2.isContentComponent(child)) {
          content = _react.default.cloneElement(child, {
            ariaId: ariaId
          });
        }
      });

      return _react.default.createElement("div", {
        style: style
      }, button, this.state.expanded && content);
    }
  }]);
  return ExpandBoardBase;
}(_react.Component);

ExpandBoardBase.Button = ExpandBoardButton;
ExpandBoardBase.Content = ExpandBoardContent;
ExpandBoardBase.propTypes = {
  children: _propTypes.default.node.isRequired,
  disabled: _propTypes.default.bool,
  style: _propTypes.default.object,
  onClick: _propTypes.default.func,
  ariaId: _propTypes.default.string.isRequired
};
ExpandBoardBase.defaultProps = {
  disabled: false,
  style: {},
  onClick: function onClick() {},
  ariaId: 'k-ExpandBoard'
};
var styles = {
  button: {
    base: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      lineHeight: '1.3rem',
      padding: "".concat((0, _typography.pxToRem)(22), " ").concat((0, _typography.pxToRem)(30))
    },
    expanded: {
      backgroundColor: _colorsConfig.default.font1,
      borderColor: _colorsConfig.default.font1
    },
    arrow: {
      width: (0, _typography.pxToRem)(8),
      height: '0.75rem',
      // half of button base line-height
      marginLeft: (0, _typography.pxToRem)(10)
    }
  }
};
var ExpandBoard = (0, _radium.default)(ExpandBoardBase);
exports.ExpandBoard = ExpandBoard;
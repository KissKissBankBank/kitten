"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Stepper = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _stepperIcon = require("./stepper-icon");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var iconTypeComponents = {
  default: _stepperIcon.StepperIconDefault,
  inProgress: _stepperIcon.StepperIconInProgress,
  validated: _stepperIcon.StepperIconValidated
};

var Stepper = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(Stepper, _Component);

  var _super = _createSuper(Stepper);

  function Stepper() {
    (0, _classCallCheck2.default)(this, Stepper);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Stepper, [{
    key: "lineBreaks",
    value: function lineBreaks(text) {
      var regex = /(\n)/i;
      var brClassNames = (0, _classnames.default)({
        'k-Stepper__break': !this.props.withAlignStart
      });
      return text.split(regex).map(function (line, index) {
        return line.match(regex) ? /*#__PURE__*/_react.default.createElement("br", {
          className: brClassNames,
          key: index
        }) : line;
      });
    }
  }, {
    key: "renderLink",
    value: function renderLink(item) {
      var href = item.href,
          iconType = item.iconType,
          linkClassNames = item.linkClassNames,
          text = item.text,
          other = (0, _objectWithoutProperties2.default)(item, ["href", "iconType", "linkClassNames", "text"]);
      var Tag = href ? 'a' : 'span';
      var IconType = iconTypeComponents[iconType];
      var className = (0, _classnames.default)('k-Stepper__link', linkClassNames);
      return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
        className: className,
        href: href
      }, other), /*#__PURE__*/_react.default.createElement(IconType, null), this.lineBreaks(text));
    }
  }, {
    key: "renderItems",
    value: function renderItems() {
      var _this = this;

      var items = this.props.items;
      var itemClassNames = (0, _classnames.default)('k-Stepper__item', {
        'k-Stepper__item--tinySpacing': this.props.withTinySpacing
      });
      return items.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement("li", {
          className: itemClassNames,
          key: index
        }, _this.renderLink(item, index));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var listClassNames = (0, _classnames.default)('k-Stepper__list', {
        'k-Stepper__list--alignStart': this.props.withAlignStart
      });
      return /*#__PURE__*/_react.default.createElement("nav", {
        className: "k-Stepper",
        role: "navigation"
      }, /*#__PURE__*/_react.default.createElement("ul", {
        className: listClassNames
      }, this.renderItems()));
    }
  }]);
  return Stepper;
}(_react.Component);

exports.Stepper = Stepper;
Stepper.defaultProps = {
  withAlignStart: false,
  withTinySpacing: false,
  items: []
};
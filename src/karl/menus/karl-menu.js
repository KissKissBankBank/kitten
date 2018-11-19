"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlMenuContent = exports.KarlMenu = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _karlHeader = require("kitten/karl/headers/karl-header");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var KarlMenu =
/*#__PURE__*/
function (_React$Component) {
  _inherits(KarlMenu, _React$Component);

  function KarlMenu(props) {
    var _this;

    _classCallCheck(this, KarlMenu);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KarlMenu).call(this, props));
    _this.state = {
      opened: false
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(KarlMenu, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        opened: !this.state.opened
      });
    }
  }, {
    key: "renderShadow",
    value: function renderShadow() {
      if (this.state.opened) return _react.default.createElement("div", {
        className: "karl-MenuShadow",
        onClick: this.handleClick
      });
    }
  }, {
    key: "render",
    value: function render() {
      var karlMenuHeaderClassName = (0, _classnames.default)('karl-Menu', {
        'is-opened': this.state.opened
      });
      return _react.default.createElement("div", null, _react.default.createElement("div", {
        className: karlMenuHeaderClassName
      }, _react.default.createElement(_karlHeader.KarlMenuHeader, {
        onButtonClick: this.handleClick
      }), _react.default.createElement(KarlMenuContent, {
        onMenuItemClick: this.handleClick,
        brandingCategories: this.props.brandingCategories,
        componentCategories: this.props.componentCategories
      })), this.renderShadow());
    }
  }]);

  return KarlMenu;
}(_react.default.Component);

exports.KarlMenu = KarlMenu;

var KarlMenuContent =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(KarlMenuContent, _React$Component2);

  function KarlMenuContent(props) {
    var _this2;

    _classCallCheck(this, KarlMenuContent);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(KarlMenuContent).call(this, props));
    _this2.renderComponentCategory = _this2.renderComponentCategory.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }

  _createClass(KarlMenuContent, [{
    key: "renderComponentCategory",
    value: function renderComponentCategory(category) {
      return _react.default.createElement(KarlMenuCategory, _extends({
        key: category.id,
        onMenuItemClick: this.props.onMenuItemClick
      }, category));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("nav", {
        className: "karl-Menu__content"
      }, _react.default.createElement("a", {
        href: "#branding",
        className: "karl-Menu__listTitle",
        onClick: this.props.onMenuItemClick
      }, "Branding"), _react.default.createElement("ul", null, this.props.brandingCategories.map(this.renderComponentCategory)), _react.default.createElement("a", {
        href: "#components",
        className: "karl-Menu__listTitle",
        onClick: this.props.onMenuItemClick
      }, "Components"), _react.default.createElement("ul", null, this.props.componentCategories.map(this.renderComponentCategory)));
    }
  }]);

  return KarlMenuContent;
}(_react.default.Component);

exports.KarlMenuContent = KarlMenuContent;
KarlMenuContent.defaultProps = {
  brandingCategories: [],
  componentCategories: []
};

var KarlMenuCategory =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(KarlMenuCategory, _React$Component3);

  function KarlMenuCategory(props) {
    var _this3;

    _classCallCheck(this, KarlMenuCategory);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(KarlMenuCategory).call(this, props));
    _this3.state = {
      opened: false
    };
    _this3.renderComponent = _this3.renderComponent.bind(_assertThisInitialized(_assertThisInitialized(_this3)));
    _this3.handleClick = _this3.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this3)));
    return _this3;
  }

  _createClass(KarlMenuCategory, [{
    key: "renderComponent",
    value: function renderComponent(component) {
      return _react.default.createElement("li", {
        key: component.path
      }, _react.default.createElement("a", {
        href: "#".concat(component.path),
        className: "karl-Menu__subListItem karl-Menu__link",
        onClick: this.props.onMenuItemClick
      }, component.name));
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        opened: !this.state.opened
      });
    }
  }, {
    key: "render",
    value: function render() {
      var karlMenuCategoryClassName = (0, _classnames.default)('karl-Menu__subList', {
        'is-opened': this.state.opened
      });
      var karlMenuItemClassName = (0, _classnames.default)('karl-Menu__listItem with-arrow', {
        'is-opened': this.state.opened
      });
      return _react.default.createElement("li", {
        className: "karl-Menu__list"
      }, _react.default.createElement("a", {
        href: "#".concat(this.props.id),
        className: karlMenuItemClassName,
        onClick: this.handleClick
      }, this.props.label), _react.default.createElement("ul", {
        className: karlMenuCategoryClassName
      }, this.props.components.map(this.renderComponent)));
    }
  }]);

  return KarlMenuCategory;
}(_react.default.Component);
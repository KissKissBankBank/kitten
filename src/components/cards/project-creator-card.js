"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectCreatorCard = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _card = require("kitten/hoc/card");

var _marger = require("kitten/components/layout/marger");

var _clockIcon = require("kitten/components/icons/clock-icon");

var _paragraph = require("kitten/components/typography/paragraph");

var _buttonIcon = require("kitten/components/buttons/button-icon");

var _separator = require("kitten/components/layout/separator");

var _arrowIcon = require("kitten/components/icons/arrow-icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ProjectCreatorCardComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProjectCreatorCardComponent, _React$Component);

  function ProjectCreatorCardComponent() {
    _classCallCheck(this, ProjectCreatorCardComponent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProjectCreatorCardComponent).apply(this, arguments));
  }

  _createClass(ProjectCreatorCardComponent, [{
    key: "renderDate",
    value: function renderDate() {
      if (!this.props.date) return;
      return _react.default.createElement("div", {
        className: "k-ProjectCreatorCard__content"
      }, _react.default.createElement(_clockIcon.ClockIcon, {
        width: "10px",
        height: "10px"
      }), _react.default.createElement("span", {
        className: "k-ProjectCreatorCard__date"
      }, this.props.date));
    }
  }, {
    key: "renderStatus",
    value: function renderStatus() {
      if (!this.props.statusText) return;
      var _this$props = this.props,
          statusBackgroundColor = _this$props.statusBackgroundColor,
          statusBorderColor = _this$props.statusBorderColor,
          statusText = _this$props.statusText;
      var statusStyles = {
        backgroundColor: statusBackgroundColor,
        borderColor: statusBorderColor ? statusBorderColor : statusBackgroundColor
      };
      return _react.default.createElement("div", {
        className: "k-ProjectCreatorCard__status"
      }, _react.default.createElement("span", {
        className: "k-ProjectCreatorCard__status--icon",
        style: statusStyles
      }), _react.default.createElement("div", {
        className: "k-ProjectCreatorCard__status--text"
      }, statusText));
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      return _react.default.createElement("div", {
        className: "k-ProjectCreatorCard__grid"
      }, _react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "1"
      }, _react.default.createElement("div", {
        className: "k-ProjectCreatorCard__grid--flexEnd"
      }, this.renderDate(), this.renderStatus())), _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "2"
      }, _react.default.createElement(_paragraph.Paragraph, {
        margin: false
      }, this.props.children)));
    }
  }, {
    key: "renderLink",
    value: function renderLink() {
      if (!this.props.href) return;
      var target = this.props.isExternal ? {
        target: '_blank'
      } : {};
      return _react.default.createElement("a", _extends({
        className: "k-ProjectCreatorCard__link",
        href: this.props.href
      }, target), _react.default.createElement(_separator.Separator, {
        darker: true
      }), _react.default.createElement("div", {
        className: "k-ProjectCreatorCard__grid"
      }, _react.default.createElement(_marger.Marger, {
        top: "1.2",
        bottom: "1.2",
        className: "k-ProjectCreatorCard__grid--flex"
      }, this.props.linkText, _react.default.createElement(_buttonIcon.ButtonIcon, {
        size: "tiny",
        withoutHover: true,
        verticalArrow: true
      }, _react.default.createElement(_arrowIcon.ArrowIcon, {
        className: "k-ButtonIcon__svg"
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var ProjectCreatorCardClassName = (0, _classnames.default)('k-ProjectCreatorCard', this.props.className);
      return _react.default.createElement("div", {
        className: ProjectCreatorCardClassName
      }, this.renderDescription(), this.renderLink());
    }
  }]);

  return ProjectCreatorCardComponent;
}(_react.default.Component);

var ProjectCreatorCard = function ProjectCreatorCard(props) {
  var ProjectCreatorCardContent = (0, _card.card)(ProjectCreatorCardComponent);
  return _react.default.createElement(ProjectCreatorCardContent, _extends({
    withDarkBorder: !!props.href,
    light: true,
    withBorder: true,
    withShadow: false,
    translateOnHover: true,
    rounded: 'tiny'
  }, props));
};

exports.ProjectCreatorCard = ProjectCreatorCard;
ProjectCreatorCard.defaultProps = {
  date: null,
  children: null,
  href: null,
  isExternal: false,
  linkText: null,
  statusBackgroundColor: null,
  statusBorderColor: null,
  statusText: 'Status'
};
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProjectCreatorCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _card = require("../../hoc/card");

var _marger = require("../../components/layout/marger");

var _clockIcon = require("../../components/icons/clock-icon");

var _paragraph = require("../../components/typography/paragraph");

var _buttonIcon = require("../../components/buttons/button-icon");

var _separator = require("../../components/layout/separator");

var _arrowIcon = require("../../components/icons/arrow-icon");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ProjectCreatorCardComponent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ProjectCreatorCardComponent, _React$Component);

  var _super = _createSuper(ProjectCreatorCardComponent);

  function ProjectCreatorCardComponent() {
    (0, _classCallCheck2.default)(this, ProjectCreatorCardComponent);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ProjectCreatorCardComponent, [{
    key: "renderDate",
    value: function renderDate() {
      if (!this.props.date) return;
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectCreatorCard__content"
      }, /*#__PURE__*/_react.default.createElement(_clockIcon.ClockIcon, {
        width: "10px",
        height: "10px"
      }), /*#__PURE__*/_react.default.createElement("span", {
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
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectCreatorCard__status"
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: "k-ProjectCreatorCard__status--icon",
        style: statusStyles
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectCreatorCard__status--text"
      }, statusText));
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectCreatorCard__grid"
      }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "2",
        bottom: "1"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectCreatorCard__grid--flexEnd"
      }, this.renderDate(), this.renderStatus())), /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "2"
      }, /*#__PURE__*/_react.default.createElement(_paragraph.Paragraph, {
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
      return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        className: "k-ProjectCreatorCard__link",
        href: this.props.href
      }, target), /*#__PURE__*/_react.default.createElement(_separator.Separator, {
        darker: true
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: "k-ProjectCreatorCard__grid"
      }, /*#__PURE__*/_react.default.createElement(_marger.Marger, {
        top: "1.2",
        bottom: "1.2",
        className: "k-ProjectCreatorCard__grid--flex"
      }, this.props.linkText, /*#__PURE__*/_react.default.createElement(_buttonIcon.ButtonIcon, {
        size: "tiny",
        withoutHover: true,
        verticalArrow: true
      }, /*#__PURE__*/_react.default.createElement(_arrowIcon.ArrowIcon, {
        className: "k-ButtonIcon__svg"
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var ProjectCreatorCardClassName = (0, _classnames.default)('k-ProjectCreatorCard', this.props.className);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: ProjectCreatorCardClassName
      }, this.renderDescription(), this.renderLink());
    }
  }]);
  return ProjectCreatorCardComponent;
}(_react.default.Component);

var ProjectCreatorCard = function ProjectCreatorCard(props) {
  var ProjectCreatorCardContent = (0, _card.card)(ProjectCreatorCardComponent);
  return /*#__PURE__*/_react.default.createElement(ProjectCreatorCardContent, (0, _extends2.default)({
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
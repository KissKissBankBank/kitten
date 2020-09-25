import _extends from "@babel/runtime/helpers/esm/extends";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import classNames from 'classnames';
import { card } from '../../hoc/card';
import { Marger } from '../../components/layout/marger';
import { ClockIcon } from '../../components/icons/clock-icon';
import { Paragraph } from '../../components/typography/paragraph';
import { ButtonIcon } from '../../components/buttons/button-icon';
import { Separator } from '../../components/layout/separator';
import { ArrowIcon } from '../../components/icons/arrow-icon';

var ProjectCreatorCardComponent = /*#__PURE__*/function (_React$Component) {
  _inherits(ProjectCreatorCardComponent, _React$Component);

  var _super = _createSuper(ProjectCreatorCardComponent);

  function ProjectCreatorCardComponent() {
    _classCallCheck(this, ProjectCreatorCardComponent);

    return _super.apply(this, arguments);
  }

  _createClass(ProjectCreatorCardComponent, [{
    key: "renderDate",
    value: function renderDate() {
      if (!this.props.date) return;
      return /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCreatorCard__content"
      }, /*#__PURE__*/React.createElement(ClockIcon, {
        width: "10px",
        height: "10px"
      }), /*#__PURE__*/React.createElement("span", {
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
      return /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCreatorCard__status"
      }, /*#__PURE__*/React.createElement("span", {
        className: "k-ProjectCreatorCard__status--icon",
        style: statusStyles
      }), /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCreatorCard__status--text"
      }, statusText));
    }
  }, {
    key: "renderDescription",
    value: function renderDescription() {
      return /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCreatorCard__grid"
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "2",
        bottom: "1"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCreatorCard__grid--flexEnd"
      }, this.renderDate(), this.renderStatus())), /*#__PURE__*/React.createElement(Marger, {
        top: "1",
        bottom: "2"
      }, /*#__PURE__*/React.createElement(Paragraph, {
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
      return /*#__PURE__*/React.createElement("a", _extends({
        className: "k-ProjectCreatorCard__link",
        href: this.props.href
      }, target), /*#__PURE__*/React.createElement(Separator, {
        darker: true
      }), /*#__PURE__*/React.createElement("div", {
        className: "k-ProjectCreatorCard__grid"
      }, /*#__PURE__*/React.createElement(Marger, {
        top: "1.2",
        bottom: "1.2",
        className: "k-ProjectCreatorCard__grid--flex"
      }, this.props.linkText, /*#__PURE__*/React.createElement(ButtonIcon, {
        size: "tiny",
        withoutHover: true,
        verticalArrow: true
      }, /*#__PURE__*/React.createElement(ArrowIcon, {
        className: "k-ButtonIcon__svg"
      })))));
    }
  }, {
    key: "render",
    value: function render() {
      var ProjectCreatorCardClassName = classNames('k-ProjectCreatorCard', this.props.className);
      return /*#__PURE__*/React.createElement("div", {
        className: ProjectCreatorCardClassName
      }, this.renderDescription(), this.renderLink());
    }
  }]);

  return ProjectCreatorCardComponent;
}(React.Component);

export var ProjectCreatorCard = function ProjectCreatorCard(props) {
  var ProjectCreatorCardContent = card(ProjectCreatorCardComponent);
  return /*#__PURE__*/React.createElement(ProjectCreatorCardContent, _extends({
    withDarkBorder: !!props.href,
    light: true,
    withBorder: true,
    withShadow: false,
    translateOnHover: true,
    rounded: 'tiny'
  }, props));
};
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
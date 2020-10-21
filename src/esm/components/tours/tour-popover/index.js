import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React from 'react';
import classNames from 'classnames';
export var TourPopover = /*#__PURE__*/function (_React$Component) {
  _inherits(TourPopover, _React$Component);

  var _super = _createSuper(TourPopover);

  function TourPopover(props) {
    var _this;

    _classCallCheck(this, TourPopover);

    _this = _super.call(this, props);
    _this.handleResize = _this.handleResize.bind(_assertThisInitialized(_this));
    return _this;
  } // Component lifecycle.


  _createClass(TourPopover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.onPopoverPosition(this.refs.popover);
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.shouldUpdatePosition(prevProps)) {
        this.props.onPopoverPosition(this.refs.popover);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize);
    } // Component listener callbacks.

  }, {
    key: "handleResize",
    value: function handleResize() {
      this.props.onPopoverPosition(this.refs.popover);
    } // Component methods.

  }, {
    key: "shouldUpdatePosition",
    value: function shouldUpdatePosition(prevProps) {
      return prevProps.name != this.props.name;
    } // Component rendering.

  }, {
    key: "renderNextButton",
    value: function renderNextButton() {
      var isDisabled = !this.props.buttons.next.active;
      var buttonClassName = classNames('k-Tour__popover__button', 'k-Tour__popover__button--right', 'k-Button', 'k-Button--tiny', 'k-Button--icon', 'k-Button--iconRight', {
        'k-Button--helium': !isDisabled,
        'k-Button--hydrogen': isDisabled
      });
      return /*#__PURE__*/React.createElement("button", {
        onClick: isDisabled ? null : this.props.onNextClick,
        title: this.props.buttons.next.title,
        className: buttonClassName,
        disabled: isDisabled
      }, this.props.buttons.next.label, /*#__PURE__*/React.createElement("svg", {
        className: "k-Button__icon",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 6 6"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M6 0H0v6h2V2h4z"
      })));
    }
  }, {
    key: "renderPrevButton",
    value: function renderPrevButton() {
      var isDisabled = !this.props.buttons.prev.active;
      var buttonClassName = classNames('k-Tour__popover__button', 'k-Button', 'k-Button--tiny', 'k-Button--icon', {
        'k-Button--helium': !isDisabled,
        'k-Button--hydrogen': isDisabled
      });
      return /*#__PURE__*/React.createElement("button", {
        onClick: isDisabled ? null : this.props.onPrevClick,
        title: this.props.buttons.prev.title,
        className: buttonClassName,
        disabled: isDisabled
      }, /*#__PURE__*/React.createElement("svg", {
        className: "k-Button__icon--tiny",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 6 6",
        fill: "#fff"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M6 0H0v6h2V2h4z"
      })), this.props.buttons.prev.label);
    }
  }, {
    key: "renderCloseButton",
    value: function renderCloseButton() {
      return /*#__PURE__*/React.createElement("button", {
        title: this.props.buttons.close.label,
        "aria-label": this.props.buttons.close.label,
        onClick: this.props.onCloseClick,
        className: "k-ButtonIcon k-ButtonIcon--hydrogen k-ButtonIcon--tiny"
      }, /*#__PURE__*/React.createElement("svg", {
        className: "k-ButtonIcon__svg k-ButtonIcon__svgRotate",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "-11 -4 125 105"
      }, /*#__PURE__*/React.createElement("path", {
        d: "M91.968 21.407l-70.56 70.56-13.44-13.44 70.56-70.56z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M91.968 78.527l-13.44 13.44-70.56-70.56 13.44-13.44z"
      })));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", {
        ref: "popover",
        className: "k-Popover k-Tour__popover",
        role: "dialog",
        "aria-hidden": "true",
        "aria-labelledby": "dialogtitle",
        style: this.props.style
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-Popover__container k-Tour__popover__container"
      }, /*#__PURE__*/React.createElement("div", {
        className: "k-Tour__popover__illustration"
      }, this.props.illustration), /*#__PURE__*/React.createElement("div", {
        className: "k-Tour__popover__content"
      }, /*#__PURE__*/React.createElement("p", {
        id: "dialogtitle",
        className: "k-Tour__popover__title"
      }, this.props.title), /*#__PURE__*/React.createElement("p", {
        className: "k-Tour__popover__text"
      }, this.props.content), /*#__PURE__*/React.createElement("div", {
        className: "k-Tour__popover__navigation"
      }, /*#__PURE__*/React.createElement("p", {
        className: "k-Tour__popover__numbering"
      }, this.props.progress), /*#__PURE__*/React.createElement("div", {
        className: "k-Tour__popover__buttons"
      }, this.renderPrevButton(), this.renderNextButton()))), /*#__PURE__*/React.createElement("div", {
        className: "k-Popover__close"
      }, this.renderCloseButton())));
    }
  }]);

  return TourPopover;
}(React.Component); // DEPRECATED: do not use default export.

export default TourPopover;
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import { TextInput } from '../../../components/form/text-input';
import { SearchIcon } from '../../../components/icons/search-icon';
export var Search = /*#__PURE__*/function (_Component) {
  _inherits(Search, _Component);

  var _super = _createSuper(Search);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this, props);
    _this.state = {
      focus: false,
      hover: false
    }; // These listeners help us to handle the text input display depending on the
    // submit input state (as we cannot handle it directly in css).

    _this.handleSubmitFocus = _this.handleSubmitFocus.bind(_assertThisInitialized(_this));
    _this.handleSubmitBlur = _this.handleSubmitBlur.bind(_assertThisInitialized(_this));
    _this.handleSubmitMouseOver = _this.handleSubmitMouseOver.bind(_assertThisInitialized(_this));
    _this.handleSubmitMouseOut = _this.handleSubmitMouseOut.bind(_assertThisInitialized(_this));
    return _this;
  } // Component listeners callbacks.


  _createClass(Search, [{
    key: "handleSubmitFocus",
    value: function handleSubmitFocus() {
      this.setState({
        focus: true
      });
    }
  }, {
    key: "handleSubmitBlur",
    value: function handleSubmitBlur() {
      this.setState({
        focus: false
      });
    }
  }, {
    key: "handleSubmitMouseOver",
    value: function handleSubmitMouseOver() {
      this.setState({
        hover: true
      });
    }
  }, {
    key: "handleSubmitMouseOut",
    value: function handleSubmitMouseOut() {
      this.setState({
        hover: false
      });
    } // Rendering.

  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          actionUrl = _this$props.actionUrl,
          inputId = _this$props.inputId,
          inputName = _this$props.inputName,
          inputPlaceholder = _this$props.inputPlaceholder,
          inputLabel = _this$props.inputLabel,
          submitLabel = _this$props.submitLabel;
      var inputClassName = classNames('k-TextInput', 'k-TextInput--tiny', 'k-SearchInput__input', {
        'is-active': this.state.focus
      }, {
        'is-hover': this.state.hover
      });
      return /*#__PURE__*/React.createElement("form", {
        className: "k-SearchInput",
        role: "search",
        action: actionUrl,
        acceptCharset: "UTF-8",
        method: "get"
      }, /*#__PURE__*/React.createElement(TextInput, {
        className: inputClassName,
        type: "search",
        id: inputId,
        name: inputName,
        placeholder: inputPlaceholder,
        "aria-label": inputLabel
      }), /*#__PURE__*/React.createElement("button", {
        type: "submit",
        "aria-label": submitLabel,
        className: "k-SearchInput__submit k-SearchInput__submit--tiny",
        onFocus: this.handleSubmitFocus,
        onBlur: this.handleSubmitBlur,
        onMouseOver: this.handleSubmitMouseOver,
        onMouseOut: this.handleSubmitMouseOut
      }, /*#__PURE__*/React.createElement(SearchIcon, {
        width: "14",
        height: "14",
        circleProps: {
          className: 'k-SearchInput__submit__svgCircle'
        },
        pathProps: {
          className: 'k-SearchInput__submit__svgPath'
        }
      })));
    }
  }]);

  return Search;
}(Component); // DEPRECATED: do not use default export.

export default Search;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchModal = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _typographyConfig = _interopRequireDefault(require("../../../constants/typography-config"));

var _colorsConfig = _interopRequireDefault(require("../../../constants/colors-config"));

var _typography = require("../../../helpers/utils/typography");

var ModalStyled = _styledComponents.default.div.withConfig({
  displayName: "search-modal__ModalStyled",
  componentId: "pdeiou-0"
})(["position:absolute;top:0;right:0;bottom:0;left:0;"]); // const ModalAnimationStyled = styled(ModalStyled)`
//   transition: visibility .4s, opacity .4s;
//   visibility: visible;
//   opacity: 1;
// `


var OverlayStyled = (0, _styledComponents.default)(ModalStyled).withConfig({
  displayName: "search-modal__OverlayStyled",
  componentId: "pdeiou-1"
})(["background:rgba(34,34,34,.9);"]);
var ContentStyled = (0, _styledComponents.default)(ModalStyled).withConfig({
  displayName: "search-modal__ContentStyled",
  componentId: "pdeiou-2"
})(["position:relative;background-color:", ";"], _colorsConfig.default.background1);

var SearchModal =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SearchModal, _Component);

  function SearchModal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SearchModal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SearchModal).call(this, props));

    _this.open = function () {
      return _this.setState({
        open: true
      });
    };

    _this.close = function () {
      return _this.setState({
        open: false
      });
    };

    _this.toggle = function () {
      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
      return _this.setState({
        open: !_this.state.open
      }, callback);
    };

    _this.handleKeyDown = function (event) {
      var enterKeyCode = 27;

      if (event.keyCode === enterKeyCode) {
        _this.close();
      }
    };

    _this.state = {
      open: props.open
    };
    return _this;
  }

  (0, _createClass2.default)(SearchModal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyDown);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          other = (0, _objectWithoutProperties2.default)(_this$props, ["children"]);
      var open = this.state.open;
      if (!open) return null;
      return _react.default.createElement(ModalStyled, other, _react.default.createElement(OverlayStyled, {
        onClick: this.close
      }), _react.default.createElement(ContentStyled, null, children));
    }
  }]);
  return SearchModal;
}(_react.Component);

exports.SearchModal = SearchModal;
SearchModal.propTypes = {
  open: _propTypes.default.bool
};
SearchModal.defaultProps = {
  open: false
};
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlModalExternalTrigger = exports.KarlModal = void 0;

var _react = _interopRequireWildcard(require("react"));

var _button = require("kitten/components/buttons/button");

var _title = require("kitten/components/typography/title");

var _paragraph = require("kitten/components/typography/paragraph");

var _modal = require("kitten/components/modals/modal");

var _marger = require("kitten/components/layout/marger");

var _mediaQueries = require("kitten/helpers/utils/media-queries");

var _screenConfig = require("kitten/constants/screen-config");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var KarlModalComponent =
/*#__PURE__*/
function (_Component) {
  _inherits(KarlModalComponent, _Component);

  function KarlModalComponent(props, context) {
    var _this;

    _classCallCheck(this, KarlModalComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(KarlModalComponent).call(this, props, context));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onMobileMQ", function (event) {
      _this.setState({
        viewportIsMobile: event.matches
      });
    });

    _this.mqMobile = (0, _mediaQueries.createMatchMediaMax)(_screenConfig.SCREEN_SIZE_XS);
    _this.state = {
      viewportIsMobile: false
    };
    return _this;
  }

  _createClass(KarlModalComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.mqMobile) {
        this.mqMobile.addListener(this.onMobileMQ);
        this.onMobileMQ(this.mqMobile);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.mqMobile) this.mqMobile.removeListener(this.onMobileMQ);
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_marger.Marger, {
        top: this.state.viewportIsMobile ? 8 : 10,
        bottom: this.state.viewportIsMobile ? 8 : 10
      }, _react.default.createElement(_marger.Marger, {
        bottom: "1"
      }, _react.default.createElement(_title.Title, {
        id: "heading",
        modifier: "tertiary",
        margin: false,
        tag: "p"
      }, "Lorem ipsum dolor sit consectetuer")), _react.default.createElement(_marger.Marger, {
        top: "1",
        bottom: "4"
      }, _react.default.createElement(_paragraph.Paragraph, {
        id: "full-description",
        modifier: "tertiary",
        margin: false,
        tag: "p"
      }, "Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet")), _react.default.createElement(_marger.Marger, {
        top: "4",
        bottom: "10"
      }, _react.default.createElement(_button.Button, {
        modifier: "helium",
        size: "big"
      }, "Action 1 Button")));
    }
  }]);

  return KarlModalComponent;
}(_react.Component);

var KarlModalButton = function KarlModalButton() {
  return _react.default.createElement(_button.Button, {
    modifier: "helium"
  }, "Open");
};

var KarlModal = function KarlModal(props) {
  return _react.default.createElement(_modal.Modal, {
    trigger: _react.default.createElement(KarlModalButton, null),
    content: _react.default.createElement(KarlModalComponent, null),
    labelledby: "heading",
    describedby: "full-description"
  });
};

exports.KarlModal = KarlModal;

var KarlModalExternalTrigger =
/*#__PURE__*/
function (_Component2) {
  _inherits(KarlModalExternalTrigger, _Component2);

  function KarlModalExternalTrigger() {
    _classCallCheck(this, KarlModalExternalTrigger);

    return _possibleConstructorReturn(this, _getPrototypeOf(KarlModalExternalTrigger).apply(this, arguments));
  }

  _createClass(KarlModalExternalTrigger, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react.default.createElement("div", null, _react.default.createElement(_button.Button, {
        onClick: function onClick() {
          return _this2._modal.open();
        }
      }, "Open"), _react.default.createElement(_modal.Modal, {
        ref: function ref(node) {
          return _this2._modal = node;
        },
        content: _react.default.createElement(KarlModalComponent, null)
      }));
    }
  }]);

  return KarlModalExternalTrigger;
}(_react.Component);

exports.KarlModalExternalTrigger = KarlModalExternalTrigger;
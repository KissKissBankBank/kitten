"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KarlSideLayout = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _sideLayout = require("kitten/components/layout/side-layout");

var _grid = require("kitten/components/grid/grid");

var _title = require("kitten/components/typography/title");

var _paragraph = require("kitten/components/typography/paragraph");

var _informationBox = require("kitten/components/box/information-box");

var _docLinkBox = require("kitten/components/box/doc-link-box");

var _formActions = require("kitten/components/form/form-actions");

var _button = require("kitten/components/buttons/button");

var _label = require("kitten/components/form/label");

var _textInputWithLimit = require("kitten/components/form/text-input-with-limit");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var KarlSideLayout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(KarlSideLayout, _React$Component);

  function KarlSideLayout() {
    _classCallCheck(this, KarlSideLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(KarlSideLayout).apply(this, arguments));
  }

  _createClass(KarlSideLayout, [{
    key: "renderDocLinkBox",
    value: function renderDocLinkBox(item) {
      var id = item.id,
          docLinkBoxProps = _objectWithoutProperties(item, ["id"]);

      return _react.default.createElement("div", {
        key: id,
        className: (0, _classnames.default)('k-u-margin-top-triple', 'k-u-margin-right-double', 'k-u-margin-left-quadruple')
      }, _react.default.createElement(_docLinkBox.DocLinkBox, docLinkBoxProps));
    }
  }, {
    key: "renderDocLinkBoxes",
    value: function renderDocLinkBoxes() {
      return this.props.sidebar.docLinkBoxes.items.map(this.renderDocLinkBox);
    }
  }, {
    key: "renderInformationBox",
    value: function renderInformationBox() {
      return _react.default.createElement("div", {
        key: "karlSideLayoutInformationBox",
        className: (0, _classnames.default)('k-u-margin-top-quadruple', 'k-u-margin-right-quadruple', 'k-u-margin-left-quadruple')
      }, _react.default.createElement(_informationBox.InformationBox, {
        title: this.props.sidebar.informationBox.title
      }, _react.default.createElement("p", null, this.props.sidebar.informationBox.text.paragraph1), _react.default.createElement("p", {
        className: "k-u-margin-bottom-none"
      }, this.props.sidebar.informationBox.text.paragraph2)));
    }
  }, {
    key: "renderSidebar",
    value: function renderSidebar() {
      return [this.renderDocLinkBoxes(), this.renderInformationBox()];
    }
  }, {
    key: "renderTitle",
    value: function renderTitle() {
      return _react.default.createElement(_title.Title, null, this.props.form.title);
    }
  }, {
    key: "renderIntro",
    value: function renderIntro() {
      return _react.default.createElement(_paragraph.Paragraph, null, this.props.form.intro);
    }
  }, {
    key: "renderSummaryProjectForm",
    value: function renderSummaryProjectForm() {
      return _react.default.createElement("div", {
        className: "k-u-margin-bottom-triple"
      }, _react.default.createElement(_label.Label, {
        className: "k-u-margin-bottom-single",
        tag: "span",
        size: "tiny",
        focusId: false
      }, this.shortDescField().label), _react.default.createElement(_textInputWithLimit.TextInputWithLimit, {
        onBlur: this.handleInputUpdate,
        name: this.shortDescField().name,
        tag: "textarea",
        placeholder: this.shortDescField().placeholder,
        rows: "8",
        limit: "500"
      }));
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      return _react.default.createElement(_formActions.FormActions, {
        className: (0, _classnames.default)('k-u-margin-top-quadruple', 'k-u-margin-bottom-quadruple')
      }, _react.default.createElement(_button.Button, {
        tag: "a",
        modifier: "hydrogen",
        href: this.props.previousStepUrl
      }, this.props.previousStepLabel), _react.default.createElement(_button.Button, {
        tag: "a",
        modifier: "helium",
        onClick: this.handleOnSubmit
      }, this.props.nextStepLabel));
    }
  }, {
    key: "renderSideLayout",
    value: function renderSideLayout() {
      return _react.default.createElement(_sideLayout.SideLayout, {
        className: "k-VerticalGrid__fluid",
        sidebar: this.renderSidebar()
      }, this.renderTitle(), _react.default.createElement(_grid.Grid, null, _react.default.createElement(_grid.GridCol, {
        "col-s": "10",
        "col-l": "8"
      }, this.renderIntro(), this.renderSummaryProjectForm(), this.renderActions())));
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        className: "k-VerticalGrid__page"
      }, this.renderSideLayout());
    }
  }, {
    key: "shortDescField",
    value: function shortDescField() {
      return this.props.form.fields['project[short_desc]'];
    }
  }]);

  return KarlSideLayout;
}(_react.default.Component);

exports.KarlSideLayout = KarlSideLayout;
"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimilarProjectsCard = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _projectSimilarCard = require("../../components/cards/project-similar-card");

function _createSuper(Derived) { return function () { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SimilarProjectsCard = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(SimilarProjectsCard, _Component);

  var _super = _createSuper(SimilarProjectsCard);

  function SimilarProjectsCard() {
    var _this;

    (0, _classCallCheck2.default)(this, SimilarProjectsCard);
    _this = _super.call(this);
    _this.state = {
      currentIndex: 0
    };
    return _this;
  }

  (0, _createClass2.default)(SimilarProjectsCard, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.projects != nextProps.projects) {
        this.setState({
          currentIndex: 0
        });
      }
    }
  }, {
    key: "curryHandleArrowClick",
    value: function curryHandleArrowClick(newCurrentIndex, callback) {
      var _this2 = this;

      return function () {
        _this2.setState({
          currentIndex: newCurrentIndex
        });

        callback();
      };
    }
  }, {
    key: "hasProjects",
    value: function hasProjects() {
      return this.props.projects.length > 0;
    }
  }, {
    key: "isAtEnd",
    value: function isAtEnd() {
      if (!this.hasProjects()) return false;
      return this.state.currentIndex == this.props.projects.length - 1;
    }
  }, {
    key: "isAtStart",
    value: function isAtStart() {
      if (!this.hasProjects()) return false;
      return this.state.currentIndex == 0;
    }
  }, {
    key: "currentProject",
    value: function currentProject() {
      if (!this.hasProjects()) return;
      return this.props.projects[this.state.currentIndex];
    }
  }, {
    key: "currentProjectProps",
    value: function currentProjectProps() {
      var project = this.currentProject();
      if (!project) return;
      var description = project.description,
          otherProjectProps = (0, _objectWithoutProperties2.default)(project, ["description"]);
      return (0, _extends2.default)({}, otherProjectProps, {
        paragraph: description
      });
    }
  }, {
    key: "currentStep",
    value: function currentStep() {
      if (!this.hasProjects()) return;
      return "".concat(this.state.currentIndex + 1, "/").concat(this.props.projects.length);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          projects = _this$props.projects,
          onLeftArrowClick = _this$props.onLeftArrowClick,
          onRightArrowClick = _this$props.onRightArrowClick,
          others = (0, _objectWithoutProperties2.default)(_this$props, ["projects", "onLeftArrowClick", "onRightArrowClick"]);
      var nextIndex = this.state.currentIndex + 1;
      var previousIndex = this.state.currentIndex - 1;
      return /*#__PURE__*/_react.default.createElement(_projectSimilarCard.SimilarProjectCard, (0, _extends2.default)({}, others, this.currentProjectProps(), {
        step: this.currentStep(),
        onLeftArrowClick: this.curryHandleArrowClick(previousIndex, this.props.onLeftArrowClick),
        onRightArrowClick: this.curryHandleArrowClick(nextIndex, this.props.onRightArrowClick),
        leftArrowDisabled: this.isAtStart(),
        rightArrowDisabled: this.isAtEnd()
      }));
    }
  }]);
  return SimilarProjectsCard;
}(_react.Component);

exports.SimilarProjectsCard = SimilarProjectsCard;
SimilarProjectsCard.defaultProps = {
  projects: [],
  // Check ProjectSimilarCard for project data format.
  onLeftArrowClick: function onLeftArrowClick() {},
  onRightArrowClick: function onRightArrowClick() {}
};
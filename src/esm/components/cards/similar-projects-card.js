import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { Component } from 'react';
import { SimilarProjectCard } from '../../components/cards/project-similar-card';
export var SimilarProjectsCard = /*#__PURE__*/function (_Component) {
  _inherits(SimilarProjectsCard, _Component);

  var _super = _createSuper(SimilarProjectsCard);

  function SimilarProjectsCard() {
    var _this;

    _classCallCheck(this, SimilarProjectsCard);

    _this = _super.call(this);
    _this.state = {
      currentIndex: 0
    };
    return _this;
  }

  _createClass(SimilarProjectsCard, [{
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
          otherProjectProps = _objectWithoutProperties(project, ["description"]);

      return _extends({}, otherProjectProps, {
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
          others = _objectWithoutProperties(_this$props, ["projects", "onLeftArrowClick", "onRightArrowClick"]);

      var nextIndex = this.state.currentIndex + 1;
      var previousIndex = this.state.currentIndex - 1;
      return /*#__PURE__*/React.createElement(SimilarProjectCard, _extends({}, others, this.currentProjectProps(), {
        step: this.currentStep(),
        onLeftArrowClick: this.curryHandleArrowClick(previousIndex, this.props.onLeftArrowClick),
        onRightArrowClick: this.curryHandleArrowClick(nextIndex, this.props.onRightArrowClick),
        leftArrowDisabled: this.isAtStart(),
        rightArrowDisabled: this.isAtEnd()
      }));
    }
  }]);

  return SimilarProjectsCard;
}(Component);
SimilarProjectsCard.defaultProps = {
  projects: [],
  // Check ProjectSimilarCard for project data format.
  onLeftArrowClick: function onLeftArrowClick() {},
  onRightArrowClick: function onRightArrowClick() {}
};
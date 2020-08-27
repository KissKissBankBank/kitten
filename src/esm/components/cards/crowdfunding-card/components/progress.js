import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Progress } from '../../../../components/meters/progress';
import { Text } from '../../../../components/typography/text';
import COLORS from '../../../../constants/colors-config';
import classNames from 'classnames';

var ProgressBar = /*#__PURE__*/function (_PureComponent) {
  _inherits(ProgressBar, _PureComponent);

  var _super = _createSuper(ProgressBar);

  function ProgressBar() {
    _classCallCheck(this, ProgressBar);

    return _super.apply(this, arguments);
  }

  _createClass(ProgressBar, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          progress = _this$props.progress,
          progressColor = _this$props.progressColor,
          loading = _this$props.loading;
      if (progress === false) return null;
      var progressValue = loading ? 65 : parseInt(progress, 10);
      return /*#__PURE__*/React.createElement("div", {
        className: "k-CrowdfundingCard__progressBar"
      }, /*#__PURE__*/React.createElement(Progress, {
        value: progressValue,
        className: classNames('k-CrowdfundingCard__progressBar__progress', {
          'is-disabled': loading
        }),
        color: progressColor,
        rampProps: {
          style: {
            height: '4px'
          }
        }
      }), /*#__PURE__*/React.createElement(Text, {
        weight: "regular",
        size: "micro",
        color: "font1",
        className: "k-CrowdfundingCard__progressBar__percent k-u-hidden@s-down"
      }, loading && /*#__PURE__*/React.createElement("span", {
        className: "k-CrowdfundingCard__progressBar__loadingPercent"
      }), !loading && "".concat(progress, " %")));
    }
  }]);

  return ProgressBar;
}(PureComponent);

ProgressBar.propTypes = {
  progress: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  progressColor: PropTypes.string,
  loading: PropTypes.bool
};
ProgressBar.defaultProps = {
  progress: 0,
  progressColor: COLORS.primary1,
  loading: false
};
export default ProgressBar;
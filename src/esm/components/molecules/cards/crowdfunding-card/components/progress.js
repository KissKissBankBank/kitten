import _inheritsLoose from "@babel/runtime/helpers/inheritsLoose";
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Progress } from '../../../../../components/atoms/progress';
import { Text } from '../../../../../components/atoms/typography/text';
import COLORS from '../../../../../constants/colors-config';
import classNames from 'classnames';

var ProgressBar = /*#__PURE__*/function (_PureComponent) {
  _inheritsLoose(ProgressBar, _PureComponent);

  function ProgressBar() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = ProgressBar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        progress = _this$props.progress,
        progressColor = _this$props.progressColor,
        loading = _this$props.loading,
        progressLabel = _this$props.progressLabel;
    if (progress === false || progress === null) return null;
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
      },
      "aria-label": progressLabel
    }), /*#__PURE__*/React.createElement(Text, {
      weight: "regular",
      size: "micro",
      color: "font1",
      className: "k-CrowdfundingCard__progressBar__percent"
    }, loading && /*#__PURE__*/React.createElement("span", {
      className: "k-CrowdfundingCard__progressBar__loadingPercent"
    }), !loading && progress + " %"));
  };

  return ProgressBar;
}(PureComponent);

ProgressBar.propTypes = {
  progress: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  progressColor: PropTypes.string,
  loading: PropTypes.bool,
  progressLabel: PropTypes.string.isRequired
};
ProgressBar.defaultProps = {
  progress: 0,
  progressColor: COLORS.primary1,
  loading: false
};
export default ProgressBar;
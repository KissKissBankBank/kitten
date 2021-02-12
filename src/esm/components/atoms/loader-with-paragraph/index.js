import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { Loader } from '../../../components/atoms/loader';
import { Paragraph } from '../../../components/typography/paragraph';
export var LoaderWithParagraph = styled(function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      loaderPosition = _ref.loaderPosition,
      loaderProps = _ref.loaderProps,
      paragraphProps = _ref.paragraphProps,
      others = _objectWithoutProperties(_ref, ["children", "className", "loaderPosition", "loaderProps", "paragraphProps"]);

  var containerClassName = classNames('k-LoaderWithParagraph', {
    'k-LoaderWithParagraph--column': loaderPosition == 'top' || loaderPosition == 'bottom'
  }, className);
  var loaderClassName = classNames({
    'k-u-margin-bottom-single': loaderPosition == 'top',
    'k-u-margin-left-single': loaderPosition == 'right',
    'k-u-margin-top-single': loaderPosition == 'bottom',
    'k-u-margin-right-single': loaderPosition == 'left'
  }, loaderProps.className);
  var loader = /*#__PURE__*/React.createElement(Loader, _extends({}, loaderProps, {
    className: loaderClassName
  }));
  var loaderBefore = loaderPosition == 'top' || loaderPosition == 'left';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: containerClassName
  }, others), loaderBefore ? loader : null, /*#__PURE__*/React.createElement(Paragraph, _extends({
    modifier: "secondary",
    margin: false
  }, paragraphProps), children), loaderBefore ? null : loader);
}).withConfig({
  displayName: "loader-with-paragraph__LoaderWithParagraph",
  componentId: "sc-1a44voe-0"
})(["display:flex;flex-direction:row;align-items:center;&.k-LoaderWithParagraph--column{flex-direction:column;}"]);
LoaderWithParagraph.propTypes = {
  className: PropTypes.string,
  loaderPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  loaderProps: PropTypes.object,
  paragraphProps: PropTypes.object
};
LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  className: null,
  loaderPosition: 'left',
  loaderProps: {},
  // Show Loader component.
  paragraphProps: {} // Show Paragraph component.

};
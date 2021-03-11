import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { Loader } from '../../../components/atoms/loader';
import { Paragraph } from '../../../components/typography/paragraph';
import PropTypes from 'prop-types';
import { pxToRem } from '../../../helpers/utils/typography';
import { useFlexGapCheck } from '../../../helpers/dom/use-flex-gap-check';
var StyledLoaderWithParagraph = styled.div.withConfig({
  displayName: "loader-with-paragraph__StyledLoaderWithParagraph",
  componentId: "sc-1a44voe-0"
})(["display:flex;align-items:center;gap:", ";&.k-LoaderWithParagraph--noGap .k-LoaderWithParagraph__loader{margin-right:", ";}&.k-LoaderWithParagraph--top{flex-direction:column;}&.k-LoaderWithParagraph--bottom{flex-direction:column-reverse;}&.k-LoaderWithParagraph--left{flex-direction:row;}&.k-LoaderWithParagraph--right{flex-direction:row-reverse;}"], pxToRem(10), pxToRem(10));
export var LoaderWithParagraph = function LoaderWithParagraph(_ref) {
  var className = _ref.className,
      loaderPosition = _ref.loaderPosition,
      loaderProps = _ref.loaderProps,
      paragraphProps = _ref.paragraphProps,
      children = _ref.children,
      others = _objectWithoutProperties(_ref, ["className", "loaderPosition", "loaderProps", "paragraphProps", "children"]);

  var canUseGap = useFlexGapCheck();
  return /*#__PURE__*/React.createElement(StyledLoaderWithParagraph, _extends({
    className: classNames('k-LoaderWithParagraph', className, "k-LoaderWithParagraph--".concat(loaderPosition), {
      'k-LoaderWithParagraph--noGap': !canUseGap
    })
  }, others), /*#__PURE__*/React.createElement(Loader, _extends({
    "aria-hidden": true
  }, loaderProps, {
    className: classNames('k-LoaderWithParagraph__loader', loaderProps.className)
  })), /*#__PURE__*/React.createElement(Paragraph, _extends({
    modifier: "secondary",
    margin: false
  }, paragraphProps, {
    className: classNames('k-LoaderWithParagraph__paragraph', paragraphProps.className)
  }), children));
};
LoaderWithParagraph.defaultProps = {
  children: 'Loading',
  loaderPosition: 'left',
  loaderProps: {},
  paragraphProps: {}
};
LoaderWithParagraph.propTypes = {
  loaderPosition: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
  loaderProps: PropTypes.object,
  paragraphProps: PropTypes.object
};
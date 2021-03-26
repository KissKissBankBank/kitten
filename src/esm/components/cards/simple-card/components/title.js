import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { parseHtml } from '../../../../helpers/utils/parser';
import { Title as TitleComponent } from '../../../../components/typography/title';
import { Marger } from '../../../../components/layout/marger';
export var Title = function Title(_ref) {
  var title = _ref.title,
      titleProps = _ref.titleProps;
  return /*#__PURE__*/React.createElement(Marger, {
    top: "2",
    bottom: ".3"
  }, /*#__PURE__*/React.createElement(TitleComponent, _extends({
    tag: "p"
  }, titleProps, {
    className: classNames('k-SimpleCard__title', titleProps.className),
    noMargin: true,
    modifier: "senary"
  }), parseHtml(title)));
};
Title.propTypes = {
  title: PropTypes.string,
  titleProps: PropTypes.object
};
Title.defaultProps = {
  title: null,
  titleProps: {}
};
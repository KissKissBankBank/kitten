import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { StyledLayout } from './styles'
import { Loader } from '../../../components/atoms/loader'

export const DeskLayout = ({
  children,
  className,
  menu,
  menuProps,
  fullWidth,
  contentProps,
  loading,
  loaderComponent,
  ...props
}) => (
  <StyledLayout
    className={classNames('k-DeskLayout__wrapper', className)}
    {...props}
  >
    <div className="k-DeskLayout">
      <div
        {...menuProps}
        className={classNames('k-DeskLayout__menu', menuProps.className)}
      >
        <div className="k-DeskLayout__menu__inside">{menu}</div>
      </div>
      {loading && (
        <div className="k-DeskLayout__loading">{loaderComponent}</div>
      )}
      {!loading && (
        <div
          {...contentProps}
          className={classNames(
            'k-DeskLayout__content',
            contentProps.className,
            {
              'k-DeskLayout__content--fullWidth': fullWidth,
            },
          )}
        >
          {children}
        </div>
      )}
    </div>
  </StyledLayout>
)

DeskLayout.defaultProps = {
  menu: null,
  menuProps: {},
  contentProps: {},
  fullWidth: false,
  loading: false,
  loaderComponent: <Loader />,
}

DeskLayout.propTypes = {
  menu: PropTypes.node,
  menuProps: PropTypes.object,
  contentProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  loaderComponent: PropTypes.node,
}

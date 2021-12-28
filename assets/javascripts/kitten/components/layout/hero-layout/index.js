import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { StyledLayout } from './styles'
import { Loader } from '../../../components/atoms/loader'
import { Grid, GridCol } from '../../../components/layout/grid'

export const HeroLayout = ({ className, children, ...props }) => (
  <StyledLayout className={classNames('k-HeroLayout', className)} {...props}>
    {children}
  </StyledLayout>
)

HeroLayout.Hero = ({ className, ...props }) => (
  <div className={classNames('k-HeroLayout__hero', className)} {...props} />
)

HeroLayout.Hero.Image = ({ className, ...props }) => (
  <div
    className={classNames('k-HeroLayout__hero__background', className)}
    {...props}
  />
)

HeroLayout.Hero.Block = ({ children, className, ...props }) => (
  <Grid
    className={classNames('k-HeroLayout__hero__block', className)}
    {...props}
  >
    <GridCol col="12" col-s="10" offset-s="1" col-l="8" offset-l="2">
      {children}
    </GridCol>
  </Grid>
)

HeroLayout.Promo = ({ className, ...props }) => (
  <div className={classNames('k-HeroLayout__promo', className)} {...props} />
)

HeroLayout.Main = ({ className, ...props }) => (
  <div className={classNames('k-HeroLayout__page', className)} {...props} />
)

HeroLayout.Main.Aside = ({ children, className, ...props }) => (
  <div
    className={classNames(
      'k-HeroLayout__aside k-HeroLayout__sticky',
      className,
    )}
    {...props}
  >
    <div className="k-HeroLayout__sticky__inside">{children}</div>
  </div>
)

HeroLayout.Main.Menu = ({ children, className, ...props }) => (
  <div
    className={classNames('k-HeroLayout__menu k-HeroLayout__sticky', className)}
    {...props}
  >
    <div className="k-HeroLayout__sticky__inside">{children}</div>
  </div>
)

HeroLayout.Main.Content = ({
  children,
  loading,
  loaderComponent,
  contentProps,
  ...props
}) => (
  <>
    {loading && (
      <div {...props} className="k-HeroLayout__loading">
        {loaderComponent}
      </div>
    )}
    {!loading && (
      <div
        {...props}
        {...contentProps}
        className={classNames('k-HeroLayout__content', contentProps.className)}
      >
        {children}
      </div>
    )}
  </>
)

HeroLayout.Main.Content.defaultProps = {
  contentProps: {},
  loading: false,
  loaderComponent: <Loader />,
}

HeroLayout.Main.Content.propTypes = {
  contentProps: PropTypes.object,
  loading: PropTypes.bool,
  loaderComponent: PropTypes.node,
}

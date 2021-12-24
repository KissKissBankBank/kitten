import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { StyledLayout } from './styles'
import { Loader } from '../../../components/atoms/loader'
import { Grid, GridCol } from '../../../components/layout/grid'

export const HeroLayout = ({
  className,
  fullWidth,
  loading,
  loaderComponent,

  children,
  contentProps,

  menu,
  menuProps,
  aside,
  asideProps,

  hero_content,
  hero_header,
  hero_bg,
  promo,
  ...props
}) => (
  <StyledLayout className={classNames('k-HeroLayout', className)} {...props}>
    <div className="k-HeroLayout__hero">
      <div className="k-HeroLayout__hero__background">{hero_bg}</div>
      <Grid className="k-HeroLayout__hero__block">
        <GridCol col="12" col-s="10" offset-s="1" col-l="8" offset-l="2">
          {hero_header}
        </GridCol>
      </Grid>
      <Grid className="k-HeroLayout__hero__block">
        <GridCol col="12" col-s="10" offset-s="1" col-l="8" offset-l="2">
          {hero_content}
        </GridCol>
      </Grid>
    </div>
    <div className="k-HeroLayout__promo">{promo}</div>
    <div className="k-HeroLayout__page">
      <div
        {...menuProps}
        className={classNames(
          'k-HeroLayout__menu k-HeroLayout__sticky',
          menuProps.className,
        )}
      >
        <div className="k-HeroLayout__sticky__inside">{menu}</div>
      </div>
      {loading && (
        <div className="k-HeroLayout__loading">{loaderComponent}</div>
      )}
      {!loading && (
        <div
          {...contentProps}
          className={classNames(
            'k-HeroLayout__content',
            contentProps.className,
            {
              'k-HeroLayout__content--fullWidth': fullWidth,
            },
          )}
        >
          {children}
        </div>
      )}
      <div
        {...asideProps}
        className={classNames(
          'k-HeroLayout__aside k-HeroLayout__sticky',
          asideProps.className,
        )}
      >
        <div className="k-HeroLayout__sticky__inside">{aside}</div>
      </div>
    </div>
  </StyledLayout>
)

HeroLayout.defaultProps = {
  menu: null,
  menuProps: {},
  aside: null,
  asideProps: {},
  contentProps: {},
  fullWidth: false,
  loading: false,
  loaderComponent: <Loader />,
}

HeroLayout.propTypes = {
  menu: PropTypes.node,
  menuProps: PropTypes.object,
  contentProps: PropTypes.object,
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  loaderComponent: PropTypes.node,
}

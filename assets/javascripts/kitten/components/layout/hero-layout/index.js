import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { StyledLayout } from './styles'
import { Loader } from '../../graphics/animations/loader'
import { Grid, GridCol } from '../../layout/grid'
import {
  getReactElementsByType,
  getReactElementsWithoutType,
} from '../../../helpers/react/get-react-elements'

export const HeroLayout = ({ className, children, ...props }) => (
  <StyledLayout className={classNames('k-HeroLayout', className)} {...props}>
    {children}
  </StyledLayout>
)

const Hero = ({ className, children, ...props }) => {
  const imageElement = getReactElementsByType({
    children: children,
    type: HeroImage,
  })[0]
  const otherChildren = getReactElementsWithoutType({
    children: children,
    type: HeroImage,
  })

  return (
    <div className={classNames('k-HeroLayout__hero', className)} {...props}>
      {imageElement}
      <Grid className="k-HeroLayout__hero__grid">{otherChildren}</Grid>
    </div>
  )
}

const HeroImage = ({ className, ...props }) => (
  <div
    className={classNames('k-HeroLayout__hero__background', className)}
    {...props}
  />
)

const HeroBlock = ({ children, className, ...props }) => (
  <GridCol
    className={classNames('k-HeroLayout__hero__block', className)}
    col="12"
    col-s="10"
    offset-s="1"
    col-l="8"
    offset-l="2"
    {...props}
  >
    {children}
  </GridCol>
)

HeroLayout.Promo = ({ className, ...props }) => (
  <div className={classNames('k-HeroLayout__promo', className)} {...props} />
)

HeroLayout.Main = ({ className, hasTopMenu, children, ...props }) => {
  const TopMenuElement = getReactElementsByType({
    children: children,
    type: MainTopMenu,
  })[0]

  return (
    <div
      className={classNames('k-HeroLayout__page', className, {
        'k-HeroLayout__page--hasTopMenu': !!TopMenuElement,
      })}
      {...props}
    >
      {children}
    </div>
  )
}

HeroLayout.Main.defaultProps = {
  hasTopMenu: false,
}

HeroLayout.Main.propTypes = {
  hasTopMenu: PropTypes.bool,
}

HeroLayout.Main.Image = ({ className, ...props }) => (
  <div
    className={classNames('k-HeroLayout__page__background', className)}
    {...props}
  />
)

HeroLayout.Main.FirstAside = ({ children, className, sticky, ...props }) => (
  <div
    className={classNames('k-HeroLayout__firstAside', className, {
      [`k-HeroLayout__sticky--${sticky}`]: !!sticky && sticky != 'none',
    })}
    {...props}
  >
    <div className="k-HeroLayout__sticky__inside">{children}</div>
  </div>
)

HeroLayout.Main.Menu = HeroLayout.Main.FirstAside

HeroLayout.Main.LastAside = ({ children, className, sticky, ...props }) => (
  <div
    className={classNames('k-HeroLayout__lastAside', className, {
      [`k-HeroLayout__sticky--${sticky}`]: !!sticky && sticky != 'none',
    })}
    {...props}
  >
    <div className="k-HeroLayout__sticky__inside">{children}</div>
  </div>
)

HeroLayout.Main.Aside = HeroLayout.Main.LastAside

const MainTopMenu = ({ children, className, ...props }) => (
  <div
    className={classNames(
      'k-HeroLayout__topMenu k-HeroLayout__sticky--both',
      className,
    )}
    {...props}
  >
    <div className="k-HeroLayout__sticky__insideTop">{children}</div>
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

HeroLayout.Hero = Hero
HeroLayout.Hero.Image = HeroImage
HeroLayout.Hero.Block = HeroBlock
HeroLayout.Main.TopMenu = MainTopMenu

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

HeroLayout.Hero = Hero
HeroLayout.Hero.Image = HeroImage
HeroLayout.Hero.Block = HeroBlock

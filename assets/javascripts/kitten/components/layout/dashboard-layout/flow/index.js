import React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { LightbulbIllustration as Lightbulb } from '../../../../components/illustrations/lightbulb-illustration'
import { Loader } from '../../../../components/loaders/loader'

import { SideCard } from './side-card'
import { MobileAside } from './side-modal'

const StyledFlow = styled.div`
  position: relative;

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    display: grid;
    grid-template-columns: 4fr 3fr;
    gap: calc(100% * 4 / 3 * 0.1); /* 10% of the parent element */
  }

  &:not(.k-DashboardLayout__flow--isLoading) {
    .k-DashboardLayout__flow__loading {
      display: none;
    }
  }

  &.k-DashboardLayout__flow--isLoading {
    .k-DashboardLayout__flow__contentGrid {
      display: none;
    }
  }

  .k-DashboardLayout__flow__contentGrid,
  .k-DashboardLayout__flow__loading {
    background-color: ${COLORS.background1};
    position: relative;
    z-index: 1;
  }

  .k-DashboardLayout__flow__contentGrid,
  .k-DashboardLayout__flow__loading {
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin-bottom: ${pxToRem(30)};
    }
  }

  .k-DashboardLayout__flow__contentGrid {
    box-sizing: border-box;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    position: relative;

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      grid-column: 1 / 2;
    }
  }

  .k-DashboardLayout__flow__content {
    padding-bottom: ${pxToRem(50)};
    flex-grow: 1;

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      padding-bottom: ${pxToRem(20)};
    }
  }

  .k-DashboardLayout__flow__nav {
    background-color: ${COLORS.background1};
    position: absolute;
    width: 100%;
    bottom: ${pxToRem(-80)};

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      bottom: 0;
      position: sticky;
    }
  }

  .k-DashboardLayout__flow__nav__actionsContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${pxToRem(20)};
    margin: ${pxToRem(20)} 0;

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      justify-content: stretch;
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      gap: ${pxToRem(40)};
      margin: ${pxToRem(30)} 0;
    }

    > * {
      min-width: 0;
      max-width: ${pxToRem(180)};
      flex: 1 1 ${pxToRem(180)};
    }
  }

  .k-DashboardLayout__flow__aside {
    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      grid-column: 2 / 3;
    }
  }

  .k-DashboardLayout__flow__aside__content {
    position: sticky;
    top: ${pxToRem(80)};
    padding-bottom: ${pxToRem(40)};
  }

  .k-DashboardLayout__flow__loading {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding-bottom: ${pxToRem(80)};

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      grid-column: 1 / 2;
    }
  }
`

const Content = ({ className, ...props }) => {
  return (
    <section
      {...props}
      className={classNames('k-DashboardLayout__flow__content', className)}
    />
  )
}

const Nav = ({ className, children, ...props }) => {
  return (
    <nav
      {...props}
      className={classNames('k-DashboardLayout__flow__nav', className)}
    >
      <HorizontalStroke
        size="tiny"
        customSize={{ width: '100%' }}
        color={COLORS.line1}
      />
      <div className="k-DashboardLayout__flow__nav__actionsContainer">
        {children}
      </div>
    </nav>
  )
}

const Aside = ({ className, children, withoutLight = false, ...props }) => {
  return (
    <aside
      {...props}
      className={classNames('k-DashboardLayout__flow__aside', className)}
    >
      <MobileAside>{children}</MobileAside>
      <div className="k-DashboardLayout__flow__aside__content k-u-hidden@m-down">
        {!withoutLight && <Lightbulb className="k-u-margin-bottom-double" />}
        {children}
      </div>
    </aside>
  )
}

export const Flow = ({
  children,
  className,
  loading,
  backgroundImage,
  loaderComponent,
  ...props
}) => {
  return (
    <StyledFlow
      className={classNames('k-DashboardLayout__flow', className, {
        'k-DashboardLayout__flow--isLoading': loading,
      })}
      {...props}
    >
      <div className="k-DashboardLayout__flow__loading">
        {!!loaderComponent ? loaderComponent : <Loader />}
      </div>
      {React.Children.map(children, child => {
        if (!child) return null
        return loading && child.type.name !== 'Aside' ? null : child
      })}
    </StyledFlow>
  )
}

Flow.Content = Content
Flow.Nav = Nav
Flow.Aside = Aside
Flow.AsideCard = SideCard

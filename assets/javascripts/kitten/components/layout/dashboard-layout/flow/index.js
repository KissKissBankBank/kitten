import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'

import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { HorizontalStroke } from '../../../../components/layout/horizontal-stroke'
import { LightbulbIllustration as Lightbulb } from '../../../../components/illustrations/lightbulb-illustration'
import { Loader } from '../../../../components/atoms/loader'
import { getReactElementsWithoutType } from '../../../../helpers/react/react-elements'

import { SideCard } from './side-card'
import { MobileAside } from './side-modal'

const StyledFlow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: 100%;

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 4fr 3fr;
    gap: 0 calc(100% * 4 / 3 * 0.1); /* 10% of the parent element */
  }

  &:not(.k-DashboardLayout__flow--isLoading) {
    .k-DashboardLayout__flow__loading {
      display: none;
    }
  }

  &.k-DashboardLayout__flow--isLoading {
    .k-DashboardLayout__flow__content {
      display: none;
    }
  }

  .k-DashboardLayout__flow__loading,
  .k-DashboardLayout__flow__content {
    flex: 1 0 100%;
    background-color: ${COLORS.background1};
    padding-top: ${pxToRem(50)};
    padding-bottom: ${pxToRem(50)};

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      padding-top: ${pxToRem(80)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      grid-column: 1 / 2;
      padding-bottom: ${pxToRem(20)};
    }
  }

  .k-DashboardLayout__flow__nav {
    flex: 0 0 auto;
    background-color: ${COLORS.background1};
    width: 100%;

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      grid-column: 1 / 2;
      bottom: 0;
      position: sticky;
      z-index: 1;
    }
  }

  .k-DashboardLayout__flow__nav__actionsContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${pxToRem(20)} 0;

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      margin: ${pxToRem(30)} 0;
    }

    & > :not(:last-child) {
      margin-right: ${pxToRem(20)};

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        margin-right: ${pxToRem(40)};
      }
    }

    & > * {
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

    svg {
      margin-bottom: ${pxToRem(20)};
    }

    @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
      display: none;
    }
  }

  .k-DashboardLayout__flow__loading {
    display: flex;
    align-items: center;
    justify-content: center;
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

const Aside = ({
  className,
  children,
  withoutLight = false,
  mobileAsideProps,
  ...props
}) => {
  return (
    <aside
      {...props}
      className={classNames('k-DashboardLayout__flow__aside', className)}
    >
      <MobileAside {...mobileAsideProps}>{children}</MobileAside>
      <div className="k-DashboardLayout__flow__aside__content">
        {!withoutLight && <Lightbulb />}
        {children}
      </div>
    </aside>
  )
}

export const Flow = ({
  children,
  className,
  loading,
  loaderComponent,
  ...props
}) => {
  return (
    <StyledFlow
      className={classNames(
        'k-DashboardLayout__flow',
        className,
        'k-DashboardLayout__fullHeight',
        {
          'k-DashboardLayout__flow--isLoading': loading,
        },
      )}
      {...props}
    >
      <div className="k-DashboardLayout__flow__loading">
        {!!loaderComponent ? loaderComponent : <Loader />}
      </div>
      {getReactElementsWithoutType({ children, type: 'Aside' })}
    </StyledFlow>
  )
}

Aside.propTypes = {
  withoutLight: PropTypes.bool,
  mobileAsideProps: PropTypes.shape({
    openLabel: PropTypes.node.isRequired,
    closeLabel: PropTypes.node.isRequired,
  }),
}

Flow.propTypes = {
  loading: PropTypes.bool,
  loaderComponent: PropTypes.node,
}

Flow.Content = Content
Flow.Nav = Nav
Flow.Aside = Aside
Flow.AsideCard = SideCard

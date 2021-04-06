import React, { createContext, useContext } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import COLORS from '../../../constants/colors-config'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { Grid, GridCol } from '../../../components/grid/grid'
import { Container } from '../../../components/grid/container'
import { GUTTER } from '../../../constants/grid-config'

const Context = createContext({
  asideSize: 'default',
})

const StyledSideGrid = styled.div`
  @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
    background: linear-gradient(
      to right,
      ${COLORS.background1} 0%,
      ${COLORS.background1} 50%,
      ${COLORS.background2} 50%,
      ${COLORS.background2} 100%
    );
  }
  .k-SideGrid__content {
    background-color: ${COLORS.background1};
    padding-bottom: ${pxToRem(30)};

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      padding-bottom: ${pxToRem(50)};
    }
  }

  .k-SideGrid__aside {
    display: none;

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      display: flex;
      border-left: ${pxToRem(GUTTER / 2)} solid ${COLORS.background1};
      padding-left: 0;
      padding-right: ${pxToRem(GUTTER / 2)};
    }
  }

  .k-SideGrid__asideContent {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    border-left: ${pxToRem(1)} solid ${COLORS.line1};
    background-color: ${COLORS.background2};
  }

  &.k-SideGrid--aside-start {
    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      background: linear-gradient(
        to left,
        ${COLORS.background1} 0%,
        ${COLORS.background1} 50%,
        ${COLORS.background2} 50%,
        ${COLORS.background2} 100%
      );
    }

    .k-SideGrid__row {
      flex-direction: row-reverse;
    }

    .k-SideGrid__aside {
      border-left: none;
      border-right: ${pxToRem(GUTTER / 2)} solid ${COLORS.background1};
      padding-left: ${pxToRem(GUTTER / 2)};
      padding-right: 0;
    }

    .k-SideGrid__asideContent {
      border-left: none;
      border-right: ${pxToRem(1)} solid ${COLORS.line1};
    }
  }
`

export const SideGrid = ({
  children,
  className,
  containerClassName,
  rowClassName,
  asidePosition,
  asideSize,
}) => {
  const sideGridClassName = classNames(
    'k-SideGrid',
    className,
    `k-SideGrid--aside-${asidePosition}`,
    `k-SideGrid--aside-${asideSize}`,
  )

  return (
    <StyledSideGrid className={sideGridClassName}>
      <Container
        className={classNames('k-SideGrid__container', containerClassName)}
      >
        <Grid className={classNames('k-SideGrid__row', rowClassName)}>
          <Context.Provider value={{ asideSize }}>{children}</Context.Provider>
        </Grid>
      </Container>
    </StyledSideGrid>
  )
}

export const SideGridContent = ({ className, children, ...props }) => {
  const { asideSize } = useContext(Context)

  const contentWidth = (() => {
    switch (asideSize) {
      case 'large':
        return 7
      case 'small':
        return 9
      default:
        return 8
    }
  })()

  return (
    <GridCol
      col={12}
      col-m={contentWidth}
      className={classNames('k-SideGrid__content', className)}
      {...props}
    >
      {children}
    </GridCol>
  )
}

export const SideGridAside = ({
  className,
  children,
  contentClassName,
  ...props
}) => {
  const { asideSize } = useContext(Context)

  const sideWidth = (() => {
    switch (asideSize) {
      case 'large':
        return 5
      case 'small':
        return 3
      default:
        return 4
    }
  })()

  return (
    <GridCol
      col={12}
      col-m={sideWidth}
      className={classNames('k-SideGrid__aside', className)}
      {...props}
    >
      <div className={classNames('k-SideGrid__asideContent', contentClassName)}>
        {children}
      </div>
    </GridCol>
  )
}

SideGrid.defaultProps = {
  className: null,
  containerClassName: null,
  rowClassName: null,
  asidePosition: 'end', // 'start' or 'end'
  asideSize: 'default', // 'default', 'small' or 'large'
}

SideGridContent.defaultProps = {
  className: null,
}

SideGridAside.defaultProps = {
  className: null,
  contentClassName: null,
}

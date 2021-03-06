import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import styled from 'styled-components'
import Bowser from 'bowser'
import {
  SideGrid,
  SideGridContent,
  SideGridAside,
} from '../../../components/grid/side-grid'
import domElementHelper from '../../../helpers/dom/element-helper'

const StyledSideLayout = styled(SideGrid)`
  .k-VerticalGrid__fluid {
    flex-basis: 100%;
  }
  .k-VerticalGrid__fullHeight {
    height: 100vh;
  }
  .k-VerticalGrid__container {
    display: flex;
    height: 100%;
  }
  .k-VerticalGrid__element {
    flex-grow: 1;
  }
`

export const SideLayout = ({ className, children, sidebar }) => {
  const [needsFullHeight, setNeedsFullHeight] = useState(false)

  useEffect(() => {
    if (!domElementHelper.canUseDom()) return
    const browser = Bowser.getParser(window.navigator.userAgent)
    setNeedsFullHeight(browser.isBrowser('safari'))
  }, [])

  const hasFluidLayout = (className || '').search('k-VerticalGrid__fluid') != -1

  return (
    <StyledSideLayout
      className={classNames(className, {
        'k-VerticalGrid__fullHeight': hasFluidLayout && needsFullHeight,
      })}
      containerClassName="k-VerticalGrid__container"
      rowClassName="k-VerticalGrid__element"
    >
      <SideGridContent>{children}</SideGridContent>

      <SideGridAside className="k-VerticalGrid__element">
        {sidebar}
      </SideGridAside>
    </StyledSideLayout>
  )
}

SideLayout.defaultProps = {
  children: 'Children',
  sidebar: null,
}

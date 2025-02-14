import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import isFunction from 'lodash/fp/isFunction'
import classNames from 'classnames'

import COLORS from '../../../constants/colors-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { useMedia } from '../../../helpers/hooks/use-media-query'
import { getMinQuery } from '../../../helpers/utils/media-queries'
import {
  getReactElementsByType,
  getReactElementsWithoutTypeArray,
} from '../../../helpers/react/get-react-elements'
import {
  DASHBOARD_HIDE_CONTENT_EVENT,
  DASHBOARD_SHOW_CONTENT_EVENT,
  dispatchEvent,
} from '../../../helpers/dom/events'

import { BurgerIcon } from '../../graphics/icons/burger-icon'
import { ArrowIcon } from '../../graphics/icons/arrow-icon'

import { Flow } from './flow'

import { StyledDashboard } from './styles'

export const DashboardLayout = ({
  children,
  backLinkProps,
  buttonProps,
  quickAccessLinkText,
  fullHeightContent,
  overlayZIndex = 100,
  style,
  sidebarProps = {},
  contentProps = {},
  hasDarkBg = false,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false)
  const [touchCoords, setTouchCoords] = useState([])
  const sideBarElement = useRef(null)
  const contentElement = useRef(null)

  const renderComponentChildrenArray = (childrenArray, otherProps) => {
    return childrenArray.map(child => {
      if (!child || !child.props) return null

      return isFunction(child.props?.children)
        ? React.cloneElement(child, {
            children: child.props.children({
              openSideBar: () => setOpen(true),
              closeSideBar: () => setOpen(false),
              isSidebarOpen: isOpen,
              ...otherProps,
            }),
          })
        : React.cloneElement(child, otherProps)
    })
  }

  const renderComponentArray = (childrenArray, otherProps) => {
    return childrenArray.map((child, index) => {
      if (!child) return null

      return isFunction(child)
        ? child({
            openSideBar: () => setOpen(true),
            closeSideBar: () => setOpen(false),
            isSidebarOpen: isOpen,
            ...otherProps,
          })
        : React.cloneElement(child, {
            key: `content_child_${index}`,
            ...otherProps,
          })
    })
  }

  const isDesktop = useMedia({
    queries: [getMinQuery(ScreenConfig.L.min)],
    values: [true],
    defaultValue: false,
  })

  useEffect(() => {
    if (sideBarElement && contentElement) {
      if (isOpen) {
        dispatchEvent(DASHBOARD_HIDE_CONTENT_EVENT)()

        sideBarElement?.current?.focus()

        window.addEventListener('keydown', handleKeyDown)
        contentElement.current.addEventListener('click', handleMainClick)
        sideBarElement.current.addEventListener('touchstart', handleTouchStart)
        sideBarElement.current.addEventListener('touchend', handleTouchEnd)

        return () => {
          window.removeEventListener('keydown', handleKeyDown)
          contentElement.current.removeEventListener('click', handleMainClick)
          sideBarElement.current.removeEventListener(
            'touchstart',
            handleTouchStart,
          )
          sideBarElement.current.removeEventListener('touchend', handleTouchEnd)
        }
      }

      if (!isOpen) {
        dispatchEvent(DASHBOARD_SHOW_CONTENT_EVENT)()
        contentElement?.current?.focus()
      }
    }
  }, [isOpen, sideBarElement, contentElement])

  const handleTouchStart = event => {
    setTouchCoords([event?.touches[0]?.clientX])
  }

  const handleTouchEnd = event => {
    setTouchCoords(current => [current[0], event?.changedTouches[0]?.clientX])
  }

  useEffect(() => {
    if (touchCoords[1] && touchCoords[0]) {
      const distanceX = touchCoords[1] - touchCoords[0]

      if (distanceX < -40) {
        setOpen(false)
      }
    }
  }, [touchCoords])

  const handleButtonClick = () => {
    setOpen(current => {
      return !current
    })
  }

  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      setOpen(false)
    }
  }

  const handleMainClick = event => {
    event.stopPropagation()
    setOpen(false)
  }

  return (
    <StyledDashboard className="k-DashboardLayout__wrapper">
      {renderComponentChildrenArray(
        getReactElementsByType({
          children: children,
          type: SiteHeader,
        }),
      )}

      <a className="k-DashboardLayout__quickAccessLink" href="#main">
        {quickAccessLinkText}
      </a>

      <section
        className={classNames('k-DashboardLayout', props.className, {
          'k-DashboardLayout--isOpen': isOpen,
        })}
        style={{
          ...style,
          '--DashboardLayout-overlay-zindex': overlayZIndex,
        }}
      >
        <div
          ref={sideBarElement}
          {...sidebarProps}
          tabIndex={-1}
          className={classNames(
            'k-DashboardLayout__sideWrapper',
            sidebarProps?.className,
          )}
          aria-hidden={isDesktop ? null : !isOpen}
        >
          <a
            {...backLinkProps}
            className={classNames(
              'k-DashboardLayout__backLink',
              backLinkProps.className,
            )}
          >
            <ArrowIcon
              aria-hidden
              direction="left"
              color={COLORS.background1}
            />
            <span className="k-DashboardLayout__backLink__text">
              {backLinkProps.children}
            </span>
          </a>
          {renderComponentChildrenArray(
            getReactElementsByType({
              children: children,
              type: Header,
            }),
          )}

          {renderComponentChildrenArray(
            getReactElementsByType({
              children: children,
              type: SideContent,
            }),
          )}

          {renderComponentChildrenArray(
            getReactElementsByType({
              children: children,
              type: SideFooter,
            }),
          )}
        </div>

        <div
          ref={contentElement}
          {...contentProps}
          tabIndex={-1}
          className={classNames(
            'k-DashboardLayout__mainWrapper',
            contentProps?.className,
            { 'k-DashboardLayout__mainWrapper--darkBg': hasDarkBg },
          )}
        >
          {renderComponentChildrenArray(
            getReactElementsByType({
              children: children,
              type: Header,
            }),
            {
              isOpen,
              hasButton: true,
              buttonProps: {
                ...buttonProps,
                onClick: handleButtonClick,
                'aria-expanded': isOpen ? isOpen : null,
              },
            },
          )}

          {renderComponentChildrenArray(
            getReactElementsByType({
              children: children,
              type: Alerts,
            }),
          )}

          <main
            className={classNames('k-DashboardLayout__main', {
              'k-DashboardLayout__main--fullHeight': fullHeightContent,
            })}
            id="main"
          >
            {renderComponentArray(
              getReactElementsWithoutTypeArray({
                children,
                typeArray: [
                  SiteHeader,
                  Header,
                  SideContent,
                  SideFooter,
                  Alerts,
                ],
              }),
            )}
          </main>
        </div>
      </section>
    </StyledDashboard>
  )
}

const Header = ({
  className,
  hasButton,
  buttonProps,
  children,
  isOpen,
  ...props
}) => {
  const { openLabel, closeLabel, ...otherButtonProps } = buttonProps || {}

  return (
    <header
      className={classNames('k-DashboardLayout__heading', className)}
      {...props}
    >
      {hasButton && buttonProps && (
        <div className="k-DashboardLayout__heading__buttonWrapper">
          <button
            {...otherButtonProps}
            className={classNames(
              'k-DashboardLayout__heading__button',
              'k-u-reset-button',
              buttonProps.className,
            )}
          >
            <BurgerIcon isActive={isOpen} mainColor={COLORS.background1} />
            <span className="k-DashboardLayout__heading__button__text">
              {isOpen ? closeLabel : openLabel}
            </span>
          </button>
        </div>
      )}

      {children}
    </header>
  )
}

const SiteHeader = ({ className, children, tag = 'div', ...props }) => {
  const SiteHeaderComponent = tag

  return (
    <SiteHeaderComponent
      className={classNames('k-DashboardLayout__siteHeader', className)}
      {...props}
    >
      {children}
    </SiteHeaderComponent>
  )
}

const SideContent = ({ className, ...props }) => (
  <section
    className={classNames('k-DashboardLayout__navigation', className)}
    {...props}
  />
)

const SideFooter = ({ className, ...props }) => (
  <footer
    className={classNames('k-DashboardLayout__footer', className)}
    {...props}
  />
)

const Alerts = ({ className, ...props }) => (
  <section
    className={classNames(
      'k-DashboardLayout__alerts',
      'k-DashboardLayout__fullWidth',
      className,
    )}
    {...props}
  />
)

const Toaster = ({
  className,
  isOpen,
  children,
  background = 'dark',
  fullSize = true,
  ...props
}) => {
  return (
    <>
      <section
        className={classNames(
          'k-DashboardLayout__toaster__wrapper',
          className,
          {
            'k-DashboardLayout__toaster--isOpen': isOpen,
          },
        )}
        aria-live="polite"
        {...props}
      >
        <div
          className={classNames(
            'k-DashboardLayout__toaster',
            `k-DashboardLayout__toaster--${background}`,
            {
              'k-DashboardLayout__toaster--fullSize': fullSize,
            },
          )}
        >
          {children}
        </div>
      </section>
      <div className="k-DashboardLayout__toaster__spacer" />
    </>
  )
}

DashboardLayout.propTypes = {
  backLinkProps: PropTypes.object,
  buttonProps: PropTypes.shape({
    openLabel: PropTypes.node.isRequired,
    closeLabel: PropTypes.node.isRequired,
  }),
  quickAccessLinkText: PropTypes.node.isRequired,
  fullHeightContent: PropTypes.bool,
  overlayZIndex: PropTypes.number,
  sidebarProps: PropTypes.object,
  contentProps: PropTypes.object,
  hasDarkBg: PropTypes.bool,
}

Header.propTypes = {
  buttonProps: PropTypes.shape({
    openLabel: PropTypes.node.isRequired,
    closeLabel: PropTypes.node.isRequired,
  }),
  hasButton: PropTypes.bool,
  isOpen: PropTypes.bool,
}

Toaster.propTypes = {
  isOpen: PropTypes.bool,
  fullSize: PropTypes.bool,
  background: PropTypes.oneOf(['dark', 'light']),
}

DashboardLayout.SiteHeader = SiteHeader
DashboardLayout.Header = Header
DashboardLayout.SideContent = SideContent
DashboardLayout.SideFooter = SideFooter
DashboardLayout.Flow = Flow
DashboardLayout.Alerts = Alerts
DashboardLayout.Toaster = Toaster

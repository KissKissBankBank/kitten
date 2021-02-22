import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import isFunction from 'lodash/fp/isFunction'
import classNames from 'classnames'

import {
  NUM_COLUMNS,
  GUTTER,
  CONTAINER_PADDING_THIN,
  CONTAINER_PADDING,
} from '../../../constants/grid-config'
import COLORS from '../../../constants/colors-config'
import TYPOGRAPHY from '../../../constants/typography-config'
import { ScreenConfig } from '../../../constants/screen-config'
import { pxToRem, stepToRem } from '../../../helpers/utils/typography'
import { useMedia } from '../../../helpers/utils/use-media-query'
import { getMinQuery } from '../../../helpers/utils/media-queries'

import { BurgerIcon } from '../../../components/icons/burger-icon'
import { ArrowIcon } from '../../../components/icons/arrow-icon'

const ALL_COLS = `(100vw - ${pxToRem(
  2 * CONTAINER_PADDING + (NUM_COLUMNS - 1) * GUTTER,
)})`
const ONE_COL = `(${ALL_COLS} / ${NUM_COLUMNS})`
const SIX_COLS = `(${ALL_COLS} / 2 + ${pxToRem(
  5 * GUTTER + CONTAINER_PADDING,
)})`

const StyledDashboard = styled.div`
  position: relative;

  * {
    box-sizing: border-box;
  }

  .k-DashboardLayout {
    min-height: 100vh;
    display: grid;

    .k-DashboardLayout__sideWrapper {
      background-color: ${COLORS.font1};
    }
  }

  .k-DashboardLayout__backLink:focus {
    outline: ${COLORS.primary4} solid ${pxToRem(2)};
    outline-offset: ${pxToRem(2)};
  }

  /* TABLET + MOBILE */

  @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
    overflow: hidden;

    .k-DashboardLayout {
      --DashboardLayout-main-margin: calc(
        ${ONE_COL} + ${pxToRem(GUTTER + CONTAINER_PADDING)}
      );

      width: calc(${SIX_COLS} + 100vw);
      grid-template-columns: calc(${SIX_COLS}) calc(100vw + ${pxToRem(2)});
      transform: translateX(calc(-1 * ${SIX_COLS} - ${pxToRem(2)}));
      transition: transform 0.3s ease-in-out;

      .k-DashboardLayout__heading__button__text,
      .k-DashboardLayout__backLink__text {
        clip: rect(0 0 0 0);
        clip-path: inset(100%);
        height: ${pxToRem(1)};
        overflow: hidden;
        position: absolute;
        white-space: nowrap;
        width: ${pxToRem(1)};
      }

      &.k-DashboardLayout--isOpen {
        position: fixed;
        transform: none;
        transition: transform 0.3s ease-in-out;

        .k-DashboardLayout__mainWrapper .k-DashboardLayout__main::before {
          opacity: .8;
          background-color: ${COLORS.font1};
          pointer-events: all;
        }
      }

      .k-DashboardLayout__sideWrapper {
        height: 100vh;
        overflow-y: scroll;
        padding: ${pxToRem(30)};
        display: flex;
        flex-direction: column;
        gap: ${pxToRem(30)};

        .k-DashboardLayout__backLink {
          flex: 0 0 ${pxToRem(40)};
          width: ${pxToRem(40)};
          height: ${pxToRem(40)};
          background-color: ${COLORS.line3};
          border-radius: ${pxToRem(6)};
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color .2s ease;
        }

        .k-DashboardLayout__heading {
          display: none;
        }
        .k-DashboardLayout__navigation {
          flex: 1 1 100%;
        }
        .k-DashboardLayout__footer {
          flex: 0 1 auto;
        }
      }

      .k-DashboardLayout__mainWrapper {
        width: calc(100vw + ${pxToRem(2)});
        display: flex;
        align-items: stretch;
        flex-direction: column;

        .k-DashboardLayout__heading {
          padding-left: ${pxToRem(CONTAINER_PADDING)};
          padding-right: ${pxToRem(CONTAINER_PADDING)};
          height: ${pxToRem(80)};
          flex: 0 0 ${pxToRem(80)};
          display: flex;
          align-items: center;

          background-color: ${COLORS.font1};
          border-left: ${pxToRem(2)} solid ${COLORS.line3};

          > * {
            align-self: initial;
          }
        }

        .k-DashboardLayout__heading__buttonWrapper {
          flex: 0 0 ${pxToRem(12 + 12 * 2)};
          margin-left: ${pxToRem(-12)};
          margin-right: ${pxToRem(12)};
        }

        .k-DashboardLayout__heading__button {
          padding: ${pxToRem(12)};
        }

        .k-DashboardLayout__main {
          position: relative;
          margin-left: ${pxToRem(2)};
          flex: 1 0 auto;
          padding-top: ${pxToRem(80)};
          padding-bottom: ${pxToRem(80)};

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: ${pxToRem(-2)};
            right: 0;
            bottom: 0;
            background-color: ${COLORS.background1};
            opacity: 0;
            pointer-events: none;
            z-index: 100;
            transition: background-color .2s ease-in-out, opacity .2s ease-in-out;
          }

          > *:not(.k-DashboardLayout__fullWidth) {
            margin-left: var(--DashboardLayout-main-margin);
            margin-right: var(--DashboardLayout-main-margin);
          }
        }
      }
    }
  }

  /* MOBILE */

  @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
    .k-DashboardLayout {
      --DashboardLayout-main-margin: ${pxToRem(CONTAINER_PADDING_THIN)};
      width: calc(200vw - ${pxToRem(50 + 2)});
      grid-template-columns: calc(100vw - ${pxToRem(50)}) calc(
          100vw + ${pxToRem(2)}
        );
      transform: translateX(calc(-100vw + ${pxToRem(50 - 2)}));

      .k-DashboardLayout__sideWrapper {
        padding: ${pxToRem(20)};
      }
      .k-DashboardLayout__mainWrapper {
        .k-DashboardLayout__heading {
          padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
          padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};
        }
        .k-DashboardLayout__main {
          padding-top: ${pxToRem(50)};
        }
      }
    }
  }

  /* DESKTOP */

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    .k-DashboardLayout {
      grid-template-columns: 25% 1fr;

      .k-DashboardLayout__sideWrapper {
        display: flex;
        flex-direction: column;
        height: 100vh;
        position: sticky;
        top: 0;
        bottom: 0;
        overflow: scroll;
        gap: ${pxToRem(30)};
        padding: ${pxToRem(30)};

        .k-DashboardLayout__backLink {
          flex: 0 0 auto;
          align-self: start;
          display: inline-flex;
          align-items: center;
          gap: ${pxToRem(15)};
          color: ${COLORS.background1};
          transition: color .2s ease;
          ${TYPOGRAPHY.fontStyles.bold}
          font-size: ${stepToRem(-1)};
          line-height: 1.2;
          text-decoration: none;

          svg {
            fill: currentColor;
          }

          &:hover {
            color: ${COLORS.primary1};
          }
        }

        .k-DashboardLayout__heading {
          flex: 0 1 auto;
        }
        .k-DashboardLayout__navigation {
          flex: 1 1 100%;
        }
        .k-DashboardLayout__footer {
          flex: 0 1 auto;
        }
      }

      .k-DashboardLayout__mainWrapper {
        .k-DashboardLayout__heading {
          display: none;
        }

        .k-DashboardLayout__main {
          padding-top: ${pxToRem(80)};
          padding-bottom: ${pxToRem(80)};

          > *:not(.k-DashboardLayout__fullWidth) {
            margin-left: 10%;
            margin-right: 15%;
          }
        }
      }
    }
  }

  /* SUPER DESKTOP */
  @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
    .k-DashboardLayout {
      grid-template-columns: ${pxToRem(385)} 1fr;
    }
  }


  /* FIX AvatarWithTextAndBadge */

  .text--withEllipsis {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .k-ButtonImageWithText__text {
    padding-top: 0;
    padding-bottom: 0;
  }
`

export const DashboardLayout = ({
  children,
  backLinkProps,
  buttonProps,
  ...props
}) => {
  const [isOpen, setOpen] = useState(false)
  const [touchCoords, setTouchCoords] = useState([])
  const sideBarElement = useRef(null)
  const contentElement = useRef(null)

  const renderComponent = child =>
    isFunction(child?.props?.children)
      ? React.cloneElement(child, {
          children: child.props.children({
            openSideBar: () => setOpen(true),
            closeSideBar: () => setOpen(false),
            isSidebarOpen: isOpen,
          }),
        })
      : child

  const isDesktop = useMedia({
    queries: [getMinQuery(ScreenConfig.L.min)],
    values: [true],
    defaultValue: false,
  })

  useEffect(() => {
    if (sideBarElement && contentElement) {
      if (isOpen) {
        sideBarElement.current.focus()

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
        contentElement.current.focus()
      }
    }
  }, [isOpen, sideBarElement, contentElement])

  const handleTouchStart = event => {
    setTouchCoords([event.touches[0].clientX])
  }

  const handleTouchEnd = event => {
    setTouchCoords(current => [current[0], event.changedTouches[0].clientX])
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
      <div
        className={classNames('k-DashboardLayout', props.className, {
          'k-DashboardLayout--isOpen': isOpen,
        })}
      >
        <div
          ref={sideBarElement}
          tabIndex={0}
          className="k-DashboardLayout__sideWrapper"
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
              direction="left"
              color={COLORS.background1}
              version="solid"
            />
            <span className="k-DashboardLayout__backLink__text">
              {backLinkProps.children}
            </span>
          </a>
          {React.Children.map(children, child => {
            if (!child) return null
            return child.type.name !== 'Header' ? null : renderComponent(child)
          })}

          {React.Children.map(children, child => {
            if (!child) return null
            return child.type.name !== 'SideContent'
              ? null
              : renderComponent(child)
          })}

          {React.Children.map(children, child => {
            if (!child) return null
            return child.type.name !== 'SideFooter'
              ? null
              : renderComponent(child)
          })}
        </div>
        <div
          ref={contentElement}
          tabIndex={0}
          className="k-DashboardLayout__mainWrapper"
        >
          {React.Children.map(children, child => {
            if (!child) return null
            return child.type.name !== 'Header'
              ? null
              : React.cloneElement(child, {
                  isOpen,
                  hasButton: true,
                  buttonProps: {
                    ...buttonProps,
                    onClick: handleButtonClick,
                    'aria-expanded': isOpen ? isOpen : null,
                  },
                })
          })}

          <section className="k-DashboardLayout__main">
            {React.Children.map(children, child => {
              if (!child) return null
              return ['Header', 'SideContent', 'SideFooter'].includes(
                child.type.name,
              )
                ? null
                : renderComponent(child)
            })}
          </section>
        </div>
      </div>
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

DashboardLayout.Header = Header
DashboardLayout.SideContent = SideContent
DashboardLayout.SideFooter = SideFooter

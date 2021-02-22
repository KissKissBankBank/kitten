import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import classNames from 'classnames'

import { domElementHelper } from '../../../../helpers/dom/element-helper'
import { useModal } from '../../../../helpers/dom/use-modal'
import COLORS from '../../../../constants/colors-config'
import { ScreenConfig } from '../../../../constants/screen-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { CrossIcon } from '../../../../components/icons/cross-icon'
import { LightbulbIllustration as Lightbulb } from '../../../../components/illustrations/lightbulb-illustration'

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: ${pxToRem(20)};
  padding-left: ${pxToRem(20)};
  padding-right: ${pxToRem(20)};
  padding-bottom: ${pxToRem(105)};
  z-index: var(--DashboardLayout-modal-zIndex, 1000);
  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;
  pointer-events: none;

  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    padding: ${pxToRem(40)} ${pxToRem(40)} ${pxToRem(135)};
  }

  @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
    display: none;
  }

  .k-DashboardLayout__flow__mobileAsideButton {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    flex: 0 0 ${pxToRem(50)};
    width: ${pxToRem(50)};
    height: ${pxToRem(50)};
    background-color: ${COLORS.primary5};
    border-radius: 100%;
    box-shadow: ${pxToRem(0)} ${pxToRem(2)} ${pxToRem(5)} ${pxToRem(5)}
      rgba(0, 0, 0, 0.15);
    pointer-events: all;
    border: none;

    &:focus {
      outline: ${COLORS.primary4} solid ${pxToRem(2)};
      outline-offset: ${pxToRem(2)};
    }

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      flex: 0 0 ${pxToRem(70)};
      width: ${pxToRem(70)};
      height: ${pxToRem(70)};
    }
  }

  .k-DashboardLayout__flow__mobileAsideContent {
    margin-bottom: ${pxToRem(20)};
    pointer-events: all;
    background-color: ${COLORS.primary5};
    padding: ${pxToRem(30)};
    border-radius: ${pxToRem(6)};
    overflow-y: scroll;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      max-width: ${pxToRem(350)};
      border-radius: ${pxToRem(8)};
    }

    &[hidden] {
      display: none;
    }

    & > * {
      max-height: calc(100vh - ${pxToRem(20 + 105 + 50 + 20 + 2 * 30)});

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        max-height: calc(100vh - ${pxToRem(40 + 135 + 50 + 20 + 2 * 30)});
      }
    }
  }

  &.k-DashboardLayout__flow__mobileAside--open {
    pointer-events: all;

    .k-DashboardLayout__flow__mobileAsideBackground {
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(34, 34, 34, 0.8);
    }

    .k-DashboardLayout__flow__mobileAsideButton {
      background-color: ${COLORS.primary1};
    }
  }
`

const MobileAsideComponent = ({ children }) => {
  const { show, buttonProps, modalProps, wrapperProps, closeAction } = useModal(
    {
      id: 'DashboardLayout-sideModal',
      modalCloseText: '1',
      modalOpenText: '2',
    },
  )

  return (
    <Wrapper
      className={classNames('k-DashboardLayout__flow__mobileAside', {
        'k-DashboardLayout__flow__mobileAside--open': show,
      })}
      {...wrapperProps}
    >
      <button
        className="k-DashboardLayout__flow__mobileAsideButton"
        {...buttonProps}
      >
        {show ? (
          <CrossIcon color={COLORS.background1} aria-hidden />
        ) : (
          <Lightbulb size="small" aria-hidden />
        )}
      </button>
      <div
        className="k-DashboardLayout__flow__mobileAsideContent"
        {...modalProps}
      >
        {children}
      </div>
      <div
        className="k-DashboardLayout__flow__mobileAsideBackground"
        onClick={closeAction}
      />
    </Wrapper>
  )
}

export const MobileAside = ({ children }) => {
  const bodyElement =
    domElementHelper.canUseDom() && document.querySelector('#root')

  return bodyElement
    ? ReactDOM.createPortal(
        <MobileAsideComponent>{children}</MobileAsideComponent>,
        bodyElement,
      )
    : null
}

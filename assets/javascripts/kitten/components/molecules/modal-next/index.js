import React, { useEffect, createContext, useReducer, useContext } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import deprecated from 'prop-types-extra/lib/deprecated'
import classNames from 'classnames'
import ReactModal from 'react-modal'
import isEmpty from 'lodash/fp/isEmpty'
import styled, { createGlobalStyle, css } from 'styled-components'
import { CloseButton } from '../../../components/molecules/buttons/close-button'
import { Button, ICON_TINY } from '../../../components/molecules/buttons/button'
import { Paragraph } from '../../../components/atoms/typography/paragraph/next'
import { Text } from '../../../components/atoms/typography/text'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import { Title } from '../../atoms/typography/title'
import COLORS from '../../../constants/colors-config'
import {
  CONTAINER_PADDING,
  CONTAINER_PADDING_THIN,
  GUTTER,
  CONTAINER_MAX_WIDTH,
} from '../../../constants/grid-config'
import { domElementHelper } from '../../../helpers/dom/element-helper'

const paddingPlusGutters = 2 * CONTAINER_PADDING + 11 * GUTTER

const oneGridCol = `calc((100vw - ${pxToRem(
  paddingPlusGutters,
)}) / 12 + ${pxToRem(GUTTER)})`

const oneGridColXl = `calc((${pxToRem(CONTAINER_MAX_WIDTH)} - ${pxToRem(
  paddingPlusGutters,
)}) / 12 + ${pxToRem(GUTTER)})`

const StyledParagraph = styled(Paragraph)`
  font-size: ${pxToRem(12)};
  @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
    font-size: ${pxToRem(14)};
  }
`

const GlobalStyle = createGlobalStyle`

  body.k-ModalNext__body--open {
    overflow: hidden;
  }

  .k-ModalNext__content {
    --Modal-colNumber: 6;
    --Modal-wrapperMaxWidth: 100vw;
    --Modal-contentCols: 4;
    --Modal-contentMargin: 1;
    --Modal-headerHeight: 0px;

    flex: 1 0 auto;
    position: relative;
    background-color: ${COLORS.background1};
    box-sizing: border-box;
    transform: scale(0.94);
    margin: auto;
    width: calc(100vw - ${pxToRem(2 * CONTAINER_PADDING_THIN)});
    display: flex;
    flex-direction: column;

    @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
      width: calc(100vw - ${pxToRem(2 * CONTAINER_PADDING)})
    }

    @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
      --Modal-contentMargin: calc((var(--Modal-colNumber) - var(--Modal-contentCols)) / 2);

      width: calc(
        ((var(--Modal-wrapperMaxWidth) - ${pxToRem(paddingPlusGutters)}) / 12
        + ${pxToRem(GUTTER)}) * var(--Modal-colNumber) - ${pxToRem(GUTTER)}
      );
    }

    @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
      --Modal-wrapperMaxWidth: ${pxToRem(CONTAINER_MAX_WIDTH)};
    }

    &.k-ModalNext__content--big {
      --Modal-colNumber: 8;

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        --Modal-contentCols: 6;
      }
    }
    &.k-ModalNext__content--huge {
      --Modal-colNumber: 10;

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        --Modal-contentCols: 6;
      }
    }
    &.k-ModalNext__content--giant {
      --Modal-colNumber: 12;

      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        --Modal-contentCols: 8;
      }
      @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
        --Modal-contentCols: 6;
      }
    }
    &.k-ModalNext__content--fullSize {
      min-width: 100vw;
      height: 100%;
      margin: 0;
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      &.k-ModalNext__content--fullSizeOnMobile {
        min-width: 100vw;
        height: 100%;
        margin: 0;
      }
    }

    &.k-ModalNext__content--customContentCols {
      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        --Modal-contentCols: var(--Modal-contentCols--s, var(--Modal-contentCols--default, 4));
      }
      @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
        --Modal-contentCols: var(--Modal-contentCols--m);
      }
      @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
        --Modal-contentCols: var(--Modal-contentCols--l);
      }
      @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
        --Modal-contentCols: var(--Modal-contentCols--xl);
      }
    }

    .k-ModalNext__header {
      flex: 0 0 auto;
      position: sticky;
      z-index: var(--Modal-headerZIndex);
      top: 0;
      height: var(--Modal-headerHeight);
      display: grid;
      gap: ${pxToRem(GUTTER)};
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
      padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};
      background-color: ${COLORS.background1};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        padding-left: ${pxToRem(CONTAINER_PADDING)};
        padding-right: ${pxToRem(CONTAINER_PADDING)};
      }

      .k-ModalNext__header__closeButton {
        min-width: ${pxToRem(40)};
        text-align: left;
      }

      .k-ModalNext__header__title {
        min-width: ${pxToRem(40)};
        text-align: center;
      }

      .k-ModalNext__header__actions {
        min-width: ${pxToRem(40)};
        text-align: right;
      }

      .k-ModalNext__header__message {
        position: absolute;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        left: ${pxToRem(CONTAINER_PADDING_THIN + 40 + 35)};

        &:empty {
          display: none;
        }

        @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
          left: ${pxToRem(CONTAINER_PADDING + 40 + 35)};
        }
      }
    }

    .k-ModalNext__closeButton {
      position: absolute;
      top: 0;
      right: ${pxToRem(30)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        right: ${pxToRem(50)};
      }
    }

    .k-ModalNext__actions {
      display: flex;
      flex-direction: column;
      background-color: ${COLORS.background1};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        gap: ${pxToRem(GUTTER)};
        flex-direction: row;
      }

      .k-Button {
        margin-top: ${pxToRem(20)};
      }

      &.k-ModalNext__actions--sticky {
        position: sticky;
        bottom: 0;
      }
      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        &.k-ModalNext__actions--stickyOnMobile {
          position: sticky;
          bottom: 0;
        }
      }
    }

    .k-ModalNext__main {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      padding: 0 ${pxToRem(CONTAINER_PADDING_THIN)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        padding: 0 calc(var(--Modal-contentMargin) * ${oneGridCol});
      }

      @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
        padding: 0 calc(var(--Modal-contentMargin) * ${oneGridColXl});
      }

      & > *:not(.k-ModalNext__block):first-child {
        margin-top: ${pxToRem(50)};

        @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
          margin-top: ${pxToRem(80)};
        }
      }

      & > * {
        flex: 0 0 auto;
      }

      & > :nth-last-child(2) {
        flex-grow: 1;
      }

      & > *:last-child {
        margin-bottom: ${pxToRem(50)};

        @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
          margin-bottom: ${pxToRem(80)};
        }
      }
    }

    .k-ModalNext__header ~ .k-ModalNext__main > *:not(.k-ModalNext__block):first-child {
      margin-top: 0;
    }

    .k-ModalNext__block {
      margin-left: -${pxToRem(CONTAINER_PADDING_THIN)};
      margin-right: -${pxToRem(CONTAINER_PADDING_THIN)};
      padding-left: ${pxToRem(CONTAINER_PADDING_THIN)};
      padding-right: ${pxToRem(CONTAINER_PADDING_THIN)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        margin-left: calc(-1 * var(--Modal-contentMargin) * ${oneGridCol});
        margin-right: calc(-1 * var(--Modal-contentMargin) * ${oneGridCol});
        padding-left: ${pxToRem(CONTAINER_PADDING)};
        padding-right: ${pxToRem(CONTAINER_PADDING)};
      }
      @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
        margin-left: calc(-1 * var(--Modal-contentMargin) * ${oneGridColXl});
        margin-right: calc(-1 * var(--Modal-contentMargin) * ${oneGridColXl});
        padding-left: ${pxToRem(CONTAINER_PADDING)};
        padding-right: ${pxToRem(CONTAINER_PADDING)};
      }
    }

    .k-ModalNext__actions.k-ModalNext__actions--fullSize {
      margin-left: -${pxToRem(CONTAINER_PADDING_THIN)};
      margin-right: -${pxToRem(CONTAINER_PADDING_THIN)};
      margin-bottom: 0;

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        margin-left: calc(-1 * var(--Modal-contentMargin) * ${oneGridCol});
        margin-right: calc(-1 * var(--Modal-contentMargin) * ${oneGridCol});
      }
      @media (min-width: ${pxToRem(ScreenConfig.XL.min)}) {
        margin-left: calc(-1 * var(--Modal-contentMargin) * ${oneGridColXl});
        margin-right: calc(-1 * var(--Modal-contentMargin) * ${oneGridColXl});
      }

      .k-Button--orion:first-child:last-child {
        border-radius: 0;
      }
    }
    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      .k-ModalNext__actions.k-ModalNext__actions--fullSizeOnMobile {
        margin-left: -${pxToRem(CONTAINER_PADDING_THIN)};
        margin-right: -${pxToRem(CONTAINER_PADDING_THIN)};
        margin-bottom: 0;

        .k-Button--orion:first-child:last-child {
          border-radius: 0;
        }
      }
    }

    .k-ModalNext__main__title {
      margin-bottom:
    }
  }

  /* ANDROMEDA STYLES */

  .k-ModalNext__content--andromeda {
    .k-ModalNext__header {
      border-bottom: ${pxToRem(2)} solid ${COLORS.line1};
      margin-bottom: ${pxToRem(50)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        padding-left: ${pxToRem(CONTAINER_PADDING)};
        padding-right: ${pxToRem(CONTAINER_PADDING)};
      }
    }

    &.k-ModalNext__content--hasHeader {
      --Modal-headerHeight: ${pxToRem(60)};
    }
  }


  /* ORION STYLES */

  .k-ModalNext__content--orion {
    padding-top: 0;
    padding-left: 0;
    padding-right: 0;

    &:not(.k-ModalNext__content--fullSize) {
      border-radius: ${pxToRem(12)};

      .k-ModalNext__closeButton .k-Button {
        border-top-right-radius: ${pxToRem(12)};
      }
    }
    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      &.k-ModalNext__content--fullSizeOnMobile {
        border-radius: 0 !important;
      }
    }

    &.k-ModalNext__content--hasHeader {
      --Modal-headerHeight: ${pxToRem(80)};

      @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
        --Modal-headerHeight: ${pxToRem(100)};
      }
    }

    .k-ModalNext__header {
      border-top-left-radius: ${pxToRem(12)};
      border-top-right-radius: ${pxToRem(12)};

      .k-Button {
        @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
          ${() => ICON_TINY}
        }
      }
    }

    &.k-ModalNext__content--giant {
      @media (max-width: ${pxToRem(ScreenConfig.M.max)}) {
        margin-left: 0;
        margin-right: 0;
        width: 100vw;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }

      @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
        overflow: auto;
        min-height: calc(100% - ${pxToRem(50 * 2)});
        margin: 0;
        min-height: 100%;
        border-radius: 0;
      }
    }
  }


  /* OVERLAY STYLES */

  .k-ModalNext__overlay {
    position: fixed;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    background-color: rgba(34, 34, 34, .8);

    &.k-ModalNext__overlay--andromeda {
      &:not(.k-ModalNext__overlay--fullSize) {
        &::before,
        &::after {
          content: '';
          flex: 1 1 33%;
          min-height: ${pxToRem(50)};

          @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
            min-height: ${pxToRem(100)};
          }
        }
      }
    }

    &.k-ModalNext__overlay--orion {
      &:not(.k-ModalNext__overlay--giant):not(.k-ModalNext__overlay--fullSize) {
        &::before,
        &::after {
          content: '';
          flex: 1 1 33%;
          min-height: ${pxToRem(50)};

          @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
            min-height: ${pxToRem(80)};
          }
        }
      }
      &.k-ModalNext__overlay--giant {
        &::before,
        &::after {
          @media (min-width: ${pxToRem(ScreenConfig.S.min)}) {
            content: '';
            flex: 1 1 33%;
            min-height: ${pxToRem(50)};
          }

          @media (min-width: ${pxToRem(ScreenConfig.L.min)}) {
            min-height: ${pxToRem(80)};
          }
        }
      }
    }

    &.k-ModalNext__overlay--fullSize {
      background: white;
    }

    @media (max-width: ${pxToRem(ScreenConfig.XS.max)}) {
      &.k-ModalNext__overlay--fullSizeOnMobile {
        background: white;

        .k-ModalNext__content {
          flex: 1;
        }

        &::before, &::after {
          min-height: 0 !important;
          flex: 0 !important;
        }
      }
    }

    ${props =>
      css`
        z-index: ${props.zIndex};
      `}
  }

  .k-ModalNext__overlay--afterOpen {
    transition: opacity .3s ease;
    opacity: 1;
  }
  .k-ModalNext--afterOpen {
    transition: opacity .3s ease, transform .3s ease;
    transform: scale(1);
    opacity: 1;
  }

  .k-ModalNext__overlay--beforeClose {
    opacity: 0;
  }
  .k-ModalNext--beforeClose {
    transition: opacity .3s ease, transform .5s ease;
    transform: scale(1.06);
    opacity: 0;
  }

`

const ModalTitle = ({ children, className, ...props }) => (
  <Title
    modifier="quaternary"
    noMargin
    tag="p"
    className={classNames(
      'k-ModalNext__main__title',
      className,
      'k-u-align-center',
    )}
    {...props}
  >
    {children}
  </Title>
)

const ModalParagraph = ({
  children,
  withoutMargin,
  className,
  align,
  tag,
  ...props
}) => (
  <StyledParagraph
    modifier="tertiary"
    noMargin
    tag={tag || 'p'}
    className={classNames(
      'k-ModalNext__main__paragraph',
      className,
      `k-u-align-${align}`,
      {
        'k-u-margin-bottom-triple': !withoutMargin || !noMargin,
        'k-u-margin-bottom-quadruple@s-up': !withoutMargin || !noMargin,
      },
    )}
    {...props}
  >
    {children}
  </StyledParagraph>
)

ModalParagraph.propTypes = {
  withoutMargin: deprecated(PropTypes.bool, 'Please use `noMargin` instead'),
  noMargin: PropTypes.bool,
  align: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
}

ModalParagraph.defaultProps = {
  noMargin: false,
  align: 'center',
}

const Actions = ({
  className,
  sticky,
  stickyOnMobile,
  fullSize,
  fullSizeOnMobile,
  ...props
}) => (
  <div
    className={classNames('k-ModalNext__actions', className, {
      'k-ModalNext__actions--sticky': sticky,
      'k-ModalNext__actions--stickyOnMobile': stickyOnMobile,
      'k-ModalNext__actions--fullSize': fullSize,
      'k-ModalNext__actions--fullSizeOnMobile': fullSizeOnMobile,
    })}
    {...props}
  />
)

const ModalButton = props => (
  <Button
    size="big"
    fluid
    {...props}
    className={classNames('k-ModalNext__buttons', props.className)}
  />
)

const Block = props => (
  <div
    {...props}
    className={classNames(props.className, 'k-ModalNext__block')}
  />
)

const initialState = {
  show: false,
}

const ModalContext = createContext(initialState)

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, ...action }
  }
}

export const updateState = show => ({
  type: 'update',
  show,
})

const CloseActionButton = ({ onClick, ...props }) => {
  const [, dispatch] = useContext(ModalContext)
  return (
    <ModalButton
      {...props}
      onClick={e => {
        onClick(e)
        dispatch(updateState(false))
      }}
    />
  )
}

CloseActionButton.propTypes = {
  onClick: PropTypes.func,
}

CloseActionButton.defaultProps = {
  onClick: () => null,
}

const ModalProvider = ({ children }) => {
  return (
    <ModalContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ModalContext.Provider>
  )
}

const InnerModal = ({
  trigger,
  children,
  label,
  labelledby,
  describedby,
  className,
  closeButtonLabel,
  onClose,
  modalProps,
  hasCloseButton,
  maxWidth,
  size,
  isOpen,
  zIndex,
  fullSize,
  fullSizeOnMobile,
  fullSizeTitle,
  variant,
  headerTitle,
  headerActions,
  headerMessage,
  contentCols,
  headerZIndex,
  ...others
}) => {
  const [{ show }, dispatch] = useContext(ModalContext)
  const close = () => {
    dispatch(updateState(false))
    if (onClose) {
      onClose()
    }
  }
  useEffect(() => {
    if (!trigger) {
      dispatch(updateState(true))
    }
  }, [])

  useEffect(() => {
    dispatch(updateState(isOpen))
  }, [isOpen])

  let customStyle = {
    '--Modal-headerZIndex': headerZIndex,
  }
  if (!isEmpty(contentCols)) {
    for (const [key, value] of Object.entries(contentCols)) {
      customStyle[`--Modal-contentCols--${key}`] = value
    }
  }

  const shouldDisplayHeader =
    !!headerTitle || !!fullSizeTitle || !!headerActions

  const ModalPortal = ReactDOM.createPortal(
    <>
      <GlobalStyle zIndex={zIndex} />
      <ReactModal
        closeTimeoutMS={500}
        role="dialog"
        className={{
          base: classNames(
            'k-ModalNext__content',
            `k-ModalNext__content--${size}`,
            `k-ModalNext__content--${variant}`,
            {
              'k-ModalNext__content--hasHeader': shouldDisplayHeader,
              'k-ModalNext__content--fullSize': fullSize,
              'k-ModalNext__content--fullSizeOnMobile': fullSizeOnMobile,
              'k-ModalNext__content--customContentCols': !isEmpty(contentCols),
            },
          ),
          afterOpen: 'k-ModalNext--afterOpen',
          beforeClose: 'k-ModalNext--beforeClose',
        }}
        overlayClassName={{
          base: classNames(
            'k-ModalNext__overlay',
            `k-ModalNext__overlay--${size}`,
            `k-ModalNext__overlay--${variant}`,
            {
              'k-ModalNext__overlay--fullSize': fullSize,
              'k-ModalNext__overlay--fullSizeOnMobile': fullSizeOnMobile,
            },
          ),
          afterOpen: 'k-ModalNext__overlay--afterOpen',
          beforeClose: 'k-ModalNext__overlay--beforeClose',
        }}
        isOpen={show}
        onAfterOpen={({ overlayEl }) => {
          overlayEl.scrollTop = 0
        }}
        aria={{
          labelledby,
          describedby,
        }}
        ariaHideApp={false}
        onRequestClose={close}
        contentLabel={label}
        bodyOpenClassName="k-ModalNext__body--open"
        style={{ content: customStyle }}
        {...modalProps}
      >
        <>
          {shouldDisplayHeader ? (
            <div className="k-ModalNext__header">
              <div className="k-ModalNext__header__closeButton">
                {hasCloseButton && (
                  <CloseButton
                    modifier="hydrogen"
                    onClick={close}
                    variant={variant}
                    size={variant === 'orion' ? 'regular' : 'micro'}
                    closeButtonLabel={closeButtonLabel}
                    aria-labelledby={
                      !!headerMessage ? 'ModalHeaderMessage' : null
                    }
                  />
                )}
              </div>

              <div className="k-ModalNext__header__title">
                {headerTitle ? (
                  headerTitle
                ) : (
                  <Text size="tiny" color="font1" weight="regular">
                    {fullSizeTitle}
                  </Text>
                )}
              </div>

              {!!headerMessage && (
                <div
                  className="k-ModalNext__header__message"
                  id="ModalHeaderMessage"
                >
                  {headerMessage}
                </div>
              )}

              <div className="k-ModalNext__header__actions">
                {headerActions &&
                  headerActions({
                    open: () => dispatch(updateState(true)),
                    close: () => dispatch(updateState(false)),
                  })}
              </div>
            </div>
          ) : (
            hasCloseButton && (
              <div className="k-ModalNext__closeButton">
                <CloseButton
                  style={{ position: 'fixed' }}
                  className="k-u-hidden@s-up k-u-margin-none"
                  modifier="hydrogen"
                  onClick={close}
                  size="micro"
                  closeButtonLabel={closeButtonLabel}
                />
                <CloseButton
                  style={{ position: 'fixed' }}
                  className="k-u-hidden@xs-down k-u-margin-none"
                  modifier="hydrogen"
                  onClick={close}
                  closeButtonLabel={closeButtonLabel}
                />
              </div>
            )
          )}
          <div className="k-ModalNext__main">
            {children({
              open: () => dispatch(updateState(true)),
              close: () => dispatch(updateState(false)),
            })}
          </div>
        </>
      </ReactModal>
    </>,
    document.body,
  )
  return (
    <div className={classNames('k-ModalNext', className)} {...others}>
      {trigger && (
        React.cloneElement(trigger, {
          onClick: (clickEvent) => {
            dispatch(updateState(true))
            if ('onClick' in trigger.props && typeof(trigger.props.onClick) === 'function') {
              trigger.props.onClick(clickEvent)
            }
          },
        })
      )}
      {ModalPortal}
    </div>
  )
}

export const Modal = props => {
  if (!domElementHelper.canUseDom()) return null
  return (
    <ModalProvider>
      <InnerModal {...props} />
    </ModalProvider>
  )
}

Modal.propTypes = {
  label: PropTypes.string,
  labelledby: PropTypes.string,
  describedby: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  fullSize: PropTypes.bool,
  fullSizeOnMobile: PropTypes.bool,
  modalProps: PropTypes.object,
  hasCloseButton: PropTypes.bool,
  size: PropTypes.oneOf(['regular', 'big', 'huge', 'giant']),
  isOpen: PropTypes.bool,
  zIndex: PropTypes.number,
  fullSizeTitle: deprecated(PropTypes.string, 'Please use `headerTitle`.'),
  variant: PropTypes.oneOf(['andromeda', 'orion']),
  headerTitle: PropTypes.node,
  headerActions: PropTypes.func,
  headerMessage: PropTypes.node,
  contentCols: PropTypes.object,
  headerZIndex: PropTypes.number,
}

Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: 'Fermer',
  fullSize: false,
  fullSizeOnMobile: false,
  modalProps: {},
  hasCloseButton: true,
  size: 'regular',
  isOpen: false,
  zIndex: 110,
  variant: 'orion',
  headerTitle: null,
  headerActions: null,
  headerMessage: null,
  contentCols: {},
  headerZIndex: 10,
}

Modal.Title = ModalTitle
Modal.Paragraph = ModalParagraph
Modal.Actions = Actions
Modal.Button = ModalButton
Modal.CloseButton = CloseActionButton
Modal.Block = Block

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// Via "https://github.com/reactjs/react-modal"
import ReactModal from 'react-modal'
import { CloseButton } from '../../../components/buttons/close-button'
import { createGlobalStyle } from 'styled-components'
import { pxToRem } from '../../../helpers/utils/typography'
import { ScreenConfig } from '../../../constants/screen-config'
import COLORS from '../../../constants/colors-config'

const GlobalStyle = createGlobalStyle`
  body.k-Modal__body--open {
    overflow: hidden;
  }

  .k-Modal__content {
    position: relative;
    max-height: calc(100vh - ${pxToRem(20)} * 2);
    max-width: calc(100vw - ${pxToRem(20)} * 2);

    background-color: ${COLORS.background1};
    text-align: center;
    padding-left: ${pxToRem(60)};
    padding-right: ${pxToRem(60)};

    outline: none;
    box-sizing: border-box;
    overflow: scroll;

    @media (min-width: ${pxToRem(ScreenConfig.M.min)}) {
      max-width: ${pxToRem(690)};
      padding-left: ${pxToRem(110)};
      padding-right: ${pxToRem(110)};
    }
  }

  .k-Modal__close {
    position: absolute;
    top: 0;
    right: ${pxToRem(50)};
  }

  .k-Modal__close--fixed {
    position: fixed;
  }

  .k-Modal__overlay {
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(34, 34, 34, .9);
  }
`

const AnimatedGlobalStyle = createGlobalStyle`
  .k-Modal__overlay {
    opacity: 0;
  }
  .k-Modal__content {
    opacity: 0;
    margin-top: 33%;
  }

  .k-Modal__overlay--afterOpen {
    transition: opacity .3s ease;
    opacity: 1;
  }
  .k-Modal--afterOpen {
    transition: opacity .3s ease, margin-top .5s ease;
    margin-top: 0;
    opacity: 1;
  }

  .k-Modal__overlay--beforeClose {
    opacity: 0;
  }
  .k-Modal--beforeClose {
    margin-top: -33%;
    opacity: 0;
  }
`

export class Modal extends Component {
  state = {
    showModal: false,
  }

  open = () => {
    this.setState({ showModal: true })
  }

  close = () => {
    this.setState({ showModal: false })
    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  renderCloseModal() {
    const { closeButtonLabel } = this.props

    return (
      <div className="k-Modal__close">
        <CloseButton
          className="k-Modal__close--fixed"
          modifier="beryllium"
          onClick={this.close}
          closeButtonLabel={closeButtonLabel}
        />
      </div>
    )
  }

  renderTriggerAction() {
    if (!this.props.trigger) return

    return <span onClick={this.open}>{this.props.trigger}</span>
  }

  renderGlobalStyle() {
    const modalClassNames = this.props.modalClassNames

    if (
      modalClassNames.className.base !== 'k-Modal__content' &&
      modalClassNames.overlayClassName.base !== 'k-Modal__overlay'
    )
      return

    return <GlobalStyle />
  }

  render() {
    const {
      trigger,
      content,
      label,
      labelledby,
      describedby,
      className,
      closeButtonLabel,
      onClose,
      modalProps,
      disableOutsideScroll,
      modalClassNames,
      hasCloseButton,
      isAnimated,
      ...others
    } = this.props

    const triggerClassNames = classNames('k-Modal', className)

    return (
      <div className={triggerClassNames} {...others}>
        {this.renderTriggerAction()}

        {this.renderGlobalStyle()}

        {isAnimated && <AnimatedGlobalStyle />}

        <ReactModal
          closeTimeoutMS={500}
          role="dialog"
          className={{ ...modalClassNames.className }}
          overlayClassName={{ ...modalClassNames.overlayClassName }}
          isOpen={this.state.showModal}
          aria={{
            labelledby,
            describedby,
          }}
          ariaHideApp={false}
          onRequestClose={this.close}
          contentLabel={label}
          bodyOpenClassName={
            disableOutsideScroll ? 'k-Modal__body--open' : null
          }
          {...modalProps}
        >
          {content}

          {hasCloseButton && this.renderCloseModal()}
        </ReactModal>
      </div>
    )
  }
}

Modal.propTypes = {
  label: PropTypes.string,
  labelledby: PropTypes.string,
  describedby: PropTypes.string,
  closeButtonLabel: PropTypes.string,
  modalProps: PropTypes.object,
  disableOutsideScroll: PropTypes.bool,
  modalClassNames: PropTypes.shape({
    className: PropTypes.shape({
      base: PropTypes.string,
      afterOpen: PropTypes.string,
      beforeClose: PropTypes.string,
    }),
    overlayClassName: PropTypes.shape({
      base: PropTypes.string,
      afterOpen: PropTypes.string,
      beforeClose: PropTypes.string,
    }),
    closeContainerClassName: PropTypes.string,
  }),
  hasCloseButton: PropTypes.bool,
  isAnimated: PropTypes.bool,
}

Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: '',
  modalProps: {},
  disableOutsideScroll: false,
  modalClassNames: {
    className: {
      base: 'k-Modal__content',
      afterOpen: 'k-Modal--afterOpen',
      beforeClose: 'k-Modal--beforeClose',
    },
    overlayClassName: {
      base: 'k-Modal__overlay',
      afterOpen: 'k-Modal__overlay--afterOpen',
      beforeClose: 'k-Modal__overlay--beforeClose',
    },
    closeContainerClassName: 'k-Modal__close',
  },
  hasCloseButton: true,
  isAnimated: true,
}

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
// Via "https://github.com/reactjs/react-modal"
import ReactModal from 'react-modal'
import { CloseButton } from '../../../components/buttons/close-button'

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

    return (
      <span className="k-Modal__trigger" onClick={this.open}>
        {this.props.trigger}
      </span>
    )
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
      ...others
    } = this.props

    const triggerClassNames = classNames('k-Modal', className)

    return (
      <div className={triggerClassNames} {...others}>
        {this.renderTriggerAction()}

        <ReactModal
          role="dialog"
          className={{
            base: 'k-Modal__content',
            afterOpen: 'k-Modal--afterOpen',
            beforeClose: 'k-Modal--beforeClose',
          }}
          overlayClassName={{
            base: 'k-Modal__overlay',
            afterOpen: 'k-Modal__overlay--afterOpen',
            beforeClose: 'k-Modal__overlay--beforeClose',
          }}
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

          {this.renderCloseModal()}
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
}

Modal.defaultProps = {
  label: 'Modal',
  labelledby: '',
  describedby: '',
  closeButtonLabel: '',
  modalProps: {},
  disableOutsideScroll: false,
}

import React, { Component } from 'react'
import classNames from 'classnames'
// Via "https://github.com/reactjs/react-modal"
import ReactModal from 'react-modal'
import { CloseButton } from 'kitten/components/buttons/close-button'

export class Modal extends Component {
  constructor() {
    super()

    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleOpenModal() {
    this.setState({ showModal: true })
  }

  handleCloseModal() {
    this.setState({ showModal: false })
  }

  renderCloseModal() {
    return (
      <CloseButton
        className="k-Modal__close"
        modifier="hydrogen"
        onClick={ this.handleCloseModal }
      />
    )
  }

  render() {
    const {
      trigger,
      content,
      label,
      className,
      ...others,
    } = this.props

    const triggerClassNames = classNames(
      'k-ModalTrigger',
      className,
    )

    return (
      <div className={ triggerClassNames } { ...others }>
        <span
          className="k-ModalTrigger__trigger"
          onClick={ this.handleOpenModal }>
          { trigger }
        </span>

        <ReactModal
          className={{
            base: 'k-Modal',
            afterOpen: 'k-Modal--afterOpen',
            beforeClose: 'k-Modal--beforeClose',
          }}
          overlayClassName={{
            base: 'k-Modal__overlay',
            afterOpen: 'k-Modal__overlay--afterOpen',
            beforeClose: 'k-Modal__overlay--beforeClose',
          }}
          isOpen={ this.state.showModal }
          onRequestClose={ this.handleCloseModal }
          contentLabel={ label }>

          { content }

          { this.renderCloseModal() }
        </ReactModal>
      </div>
    )
  }
}

Modal.defaultProps = {
  label: "Modal",
}

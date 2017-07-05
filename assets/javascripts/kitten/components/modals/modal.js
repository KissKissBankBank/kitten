import React, { Component } from 'react'
// Via "https://github.com/reactjs/react-modal"
import classNames from 'classnames'
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
      className,
      ...others
    } = this.props

    const triggerClassNames = classNames(
      'k-ModalTrigger',
      className,
    )

    return (
      <div className={ triggerClassNames } { ...others }>
        <span className="k-ModalTrigger__trigger"
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
            base: 'k-ModalOverlay',
            afterOpen: 'k-ModalOverlay--afterOpen',
            beforeClose: 'k-ModalOverlay--beforeClose',
          }}
          isOpen={ this.state.showModal }
          onRequestClose={ this.handleCloseModal }
          contentLabel="Modal">

          { content }

          { this.renderCloseModal() }
        </ReactModal>
      </div>
    )
  }
}

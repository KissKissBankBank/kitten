import React, { Component } from 'react'
// Via "https://github.com/reactjs/react-modal"
import ReactModal from 'react-modal'
import { CloseButton } from 'kitten/components/buttons/close-button'

export const modal = (ModalContentComponent, TriggerComponent, ModalProps) => {
  return class Modal extends Component {
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

    renderModal() {
      const { TriggerComponent,
              className,
              ... others } = this.props

      return (
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
          onRequestClose={ this.handleCloseModal }>
          <ModalContentComponent />

          { this.renderCloseModal() }

        </ReactModal>
      )
    }

    render() {
      return (
        <div>
          { this.renderModal() }
          <TriggerComponent
            onClick={ this.handleOpenModal }
          />
        </div>
      )
    }
  }
}

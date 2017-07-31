import React, { Component } from 'react'
import classNames from 'classnames'
// Via "https://github.com/reactjs/react-modal"
import ReactModal from 'react-modal'
import { CloseButton } from 'kitten/components/buttons/close-button'

export class Modal extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false
    }

    this.handleOpenModal = this.handleOpenModal.bind(this)
    this.handleCloseModal = this.handleCloseModal.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }


  open() {
    this.setState({ showModal: true })
  }

  close() {
    this.setState({ showModal: false })
  }

  handleOpenModal() {
    this.open()
  }

  handleCloseModal() {
    this.close()
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

  renderTriggerAction(trigger) {
    if (!trigger) return

    return (
      <span
        className="k-Modal__trigger"
        onClick={ this.handleOpenModal }>
        { trigger }
      </span>
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
      'k-Modal',
      className,
    )

    return (
      <div className={ triggerClassNames } { ...others }>
        { this.renderTriggerAction(trigger) }

        <ReactModal
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

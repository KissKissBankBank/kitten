import React, { Component } from 'react'
import PropTypes from 'prop-types'
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

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  open() {
    this.setState({ showModal: true })
  }

  close() {
    this.setState({ showModal: false })
  }

  renderCloseModal() {
    return (
      <CloseButton
        className="k-Modal__close"
        modifier="beryllium"
        onClick={ this.close }
      />
    )
  }

  renderTriggerAction() {
    if (!this.props.trigger) return

    return (
      <span
        className="k-Modal__trigger"
        onClick={ this.open }>
        { this.props.trigger }
      </span>
    )
  }

  render() {
    const {
      trigger,
      content,
      label,
      role,
      labelledby,
      describedby,
      className,
      ...others,
    } = this.props

    const triggerClassNames = classNames(
      'k-Modal',
      className,
    )

    return (
      <div
        className={ triggerClassNames }
        { ...others }
      >
        { this.renderTriggerAction() }

        <ReactModal
          role="dialog"
          ariaHidden="true"
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
          aria={{
            labelledby: { labelledby },
            describedby: { describedby },
          }}
          onRequestClose={ this.close }
          contentLabel={ label }
        >

          { content }

          { this.renderCloseModal() }
        </ReactModal>
      </div>
    )
  }
}

Modal.propTypes = {
  label: PropTypes.string,
  labelledby: PropTypes.string,
  describedby: PropTypes.string,
}

Modal.defaultProps = {
  label: 'Modal',
  labelledby: 'heading',
  describedby: 'full_description',
}

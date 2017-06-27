import React from 'react'
// Via "https://github.com/reactjs/react-modal"
import ReactModal from 'react-modal'
import classNames from 'classnames'
// import { Button } from 'kitten/components/buttons/button'
// import { CloseButton } from 'kitten/components/buttons/close-button'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'

export class Modal extends React.Component {

  renderModal() {
    const customStyles = {
      content : {
         top          : '50%',
         left         : '50%',
         right        : 'auto',
         bottom       : 'auto',
         maxWidth     : '550px',
         padding      : '10px',
         transform    : 'translate(-50%, -50%)',
         borderRadius : '15px'
      }
    }

    return (
      <ReactModal
        isOpen={ true }
        style={ customStyles }>

        <Title
          modifier="quaternary"
          ref={subtitle => this.subtitle = subtitle}>
            Popin title
        </Title>

        <Paragraph
          modifier="tertiary">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
            ligula eget dolor. Donec quam felis, ultricies nec, pellentesque eu, pretium
        </Paragraph>
      </ReactModal>
    )
  }

  render () {
    return (
      <div>
        { this.renderModal() }
      </div>
    )
  }
}

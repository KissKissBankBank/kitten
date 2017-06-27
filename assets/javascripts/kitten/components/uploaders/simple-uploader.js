import React from 'react'
import { Uploader } from 'kitten/components/uploaders/uploader'
import { Button } from 'kitten/components/buttons/button'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { CrossIcon } from 'kitten/components/icons/cross-icon'

const Theme = props => {
  const deleteButton = props.fileName
    ? <ButtonIcon className="k-SimpleUploader__buttonIcon"
                  size="micro"
                  onClick={ props.onCancel }>
        <CrossIcon className="k-ButtonIcon__svg" />
      </ButtonIcon>
    : null

  return (
    <div className="k-SimpleUploader">
      <Button size="tiny"
              type="button"
              className="k-SimpleUploader__button"
              onClick={ props.onClick }>
        { props.buttonLabel }
      </Button>

      <span className="k-SimpleUploader__text">
        { props.fileName }
      </span>

      { deleteButton }
    </div>
  )
}

Theme.defaultProps = {
  buttonLabel: 'Choose a file',
  fileName: null,
  onClick: () => {},
  onCancel: () => {},
}

export const SimpleUploader = props => {
  return (
    <Uploader
      { ...props }
      theme={ Theme }
    />
  )
}

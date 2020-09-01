import React from 'react'
import { Uploader } from '../../../components/uploaders/uploader'
import { Button } from '../../../components/buttons/button'
import { ButtonIcon } from '../../../components/buttons/button-icon'
import { CrossIcon } from '../../../components/icons/cross-icon'

const Theme = props => {
  const handleClick = props.disabled ? null : props.onCancel
  const deleteButton =
    props.deletable && props.fileName ? (
      <ButtonIcon
        className="k-SimpleUploader__buttonIcon"
        size="nano"
        disabled={props.disabled}
        onClick={handleClick}
      >
        <CrossIcon className="k-ButtonIcon__svg" />
      </ButtonIcon>
    ) : null

  return (
    <div className="k-SimpleUploader">
      <Button
        size="tiny"
        type="button"
        className="k-SimpleUploader__button"
        disabled={props.disabled}
        onClick={props.onClick}
      >
        {props.buttonLabel}
      </Button>

      <div className="k-SimpleUploader__link">
        <span className="k-SimpleUploader__text">{props.fileName}</span>

        {deleteButton}
      </div>
    </div>
  )
}

Theme.defaultProps = {
  buttonLabel: 'Choose a file',
  fileName: null,
  onClick: () => {},
  onCancel: () => {},
  disabled: false,
  deletable: true,
}

export const SimpleUploader = props => {
  return <Uploader {...props} theme={Theme} />
}

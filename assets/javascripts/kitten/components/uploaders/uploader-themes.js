import React from 'react'
import classNames from 'classnames'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { CrossIcon } from 'kitten/components/icons/cross-icon'

export const UploaderThemes = () => {}

UploaderThemes.Light = props => {
  const deleteButton = props.fileName
    ? <ButtonIcon className="k-UploaderLight__buttonIcon"
                size="micro"
                onClick={ props.onCancel }>
      <CrossIcon className="k-ButtonIcon__svg" />
    </ButtonIcon>
    : null

  return (
    <div className="k-UploaderLight">
      <button className="k-UploaderLight__button"
              onClick={ props.onClick }>
        { props.buttonLabel }
      </button>

      <span className="k-UploaderLight__text">
        { props.fileName }
      </span>

      { deleteButton }
    </div>
  )
}

UploaderThemes.Light.defaultProps = {
  buttonLabel: 'Lorem ipsum…',
  fileName: null,
  onClick: () => {},
  onCancel: () => {},
}

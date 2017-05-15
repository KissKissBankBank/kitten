import React from 'react'
import classNames from 'classnames'

export const UploaderThemes = () => {}

UploaderThemes.Light = props => {
  return (
    <div className="k-UploaderLight">
      <button className="k-UploaderLight__button">
        { props.buttonLabel }
      </button>

      <span className="k-UploaderLight__text">
        { props.fileName }
      </span>
    </div>
  )
}

UploaderThemes.Light.defaultProps = {
  buttonLabel: 'Lorem ipsum…',
  fileName: null,
}

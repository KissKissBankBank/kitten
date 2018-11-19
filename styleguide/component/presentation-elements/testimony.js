import React from 'react'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Normal">
        <div className="k-Testimony">
          <h2 className="k-Testimony__title">De Finibus Bonorum et Malorum</h2>
          <img
            className="k-Testimony__image"
            alt="Cute kitten"
            src="https://placehold.it/150x150/caf4fe/caf4fe"
            width="150"
            height="150"
          />
          <blockquote className="k-Testimony__text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit.”
          </blockquote>
        </div>
      </Example>
    </div>
  )
}

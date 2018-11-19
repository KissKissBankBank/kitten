import React from 'react'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="With list">
        <div className="k-TestimonyList">
          <div className="k-TestimonyList__row">
            <div className="k-TestimonyList__item">
              <div className="k-Testimony">
                <h2 className="k-Testimony__title">Sed ut perspiciatis</h2>
                <img
                  className="k-Testimony__image"
                  alt="Cute kitten"
                  src="https://placehold.it/150x150/caf4fe/caf4fe"
                  width="150"
                  height="150"
                />
                <blockquote className="k-Testimony__text">
                  “At vero eos et accusamus et iusto odio dignissimos.”
                </blockquote>
              </div>
            </div>
            <div className="k-TestimonyList__item">
              <div className="k-Testimony">
                <h2 className="k-Testimony__title">
                  Itaque earum rerum hic tenetur
                </h2>
                <img
                  className="k-Testimony__image"
                  alt="Cute kitten"
                  src="https://placehold.it/150x150/caf4fe/caf4fe"
                  width="150"
                  height="150"
                />
                <blockquote className="k-Testimony__text">
                  “Maturus est et potest procreare”
                </blockquote>
              </div>
            </div>
            <div className="k-TestimonyList__item">
              <div className="k-Testimony">
                <h2 className="k-Testimony__title">Excepteur sint</h2>
                <img
                  className="k-Testimony__image"
                  alt="Cute kitten"
                  src="https://placehold.it/150x150/caf4fe/caf4fe"
                  width="150"
                  height="150"
                />
                <blockquote className="k-Testimony__text">
                  "Nam libero"
                </blockquote>
              </div>
            </div>
            <div className="k-TestimonyList__item">
              <div className="k-Testimony">
                <h2 className="k-Testimony__title">
                  Etrusci feles cognoverunt
                </h2>
                <img
                  className="k-Testimony__image"
                  alt="Cute kitten"
                  src="https://placehold.it/150x150/caf4fe/caf4fe"
                  width="150"
                  height="150"
                />
                <blockquote className="k-Testimony__text">
                  “Inter tales libros modo historia Alberti recognovit.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </Example>
    </div>
  )
}

import React from 'react'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="With image on the left">
        <div className="k-Teaser">
          <div className="k-Teaser__col k-Teaser__col--image">
            <img
              alt="Cute kitten"
              src="https://placehold.it/400x300/caf4fe/caf4fe"
              width="400"
              height="300"
            />
          </div>
          <div className="k-Teaser__col k-Teaser__col--text">
            <h2 className="k-Teaser__title">Parva feles</h2>
            <p>A partu solet feline kittens binarii ad quinarium est.</p>
            <p className="k-Teaser__action">
              <button className="k-Button k-Button--hydrogen">Button</button>
            </p>
          </div>
        </div>
      </Example>
      <Example title="With image on the right">
        <div className="k-Teaser">
          <div className="k-Teaser__col k-Teaser__col--text">
            <h2 className="k-Teaser__title">Lactis</h2>
            <p>
              Lacte matris kittens sit amet, nutritionem et augmentum proprium.
            </p>
            <p className="k-Teaser__action">
              <button className="k-Button k-Button--helium">Button</button>
            </p>
          </div>
          <div className="k-Teaser__col k-Teaser__col--image">
            <img
              alt="Cute kitten"
              src="https://placehold.it/400x300/caf4fe/caf4fe"
              width="400"
              height="300"
            />
          </div>
        </div>
      </Example>
    </div>
  )
}

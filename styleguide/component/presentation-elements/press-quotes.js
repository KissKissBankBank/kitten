import React from 'react'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Press quotes">
        <div className="k-PressQuotes">
          <p className="k-PressQuotes__title">Inscriptio huius sepulchri</p>
          <div className="k-PressQuotes__quotes">
            <div className="k-PressQuotes__quote">
              <blockquote className="k-PressQuotes__quote__text">
                “Dis Manibus Calpurnia Felicla Germulio coniugi”
              </blockquote>
              <img
                src="https://placehold.it/80x40/caf4fe/caf4fe"
                width="80"
                height="40"
                alt=""
              />
            </div>
            <div className="k-PressQuotes__quote">
              <blockquote className="k-PressQuotes__quote__text">
                “Musio appellatus, quod muribus infestus sit.”
              </blockquote>
              <img
                src="https://placehold.it/60x40/caf4fe/caf4fe"
                width="60"
                height="40"
                alt=""
              />
            </div>
            <div className="k-PressQuotes__quote">
              <blockquote className="k-PressQuotes__quote__text">
                “fulgore luminis noctis tenebras superet.”
              </blockquote>
              <img
                src="https://placehold.it/40x40/caf4fe/caf4fe"
                width="40"
                height="40"
                alt=""
              />
            </div>
          </div>
        </div>
      </Example>
    </div>
  )
}

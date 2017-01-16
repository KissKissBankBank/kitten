import React from 'react'
import classNames from 'classnames'
import { Button } from 'kitten/components/buttons/button'

export class TitleWithActions extends React.Component {
  render() {
    const { className,
            title,
            textFirst,
            textLast,
            ...others }
    = this.props

    return (
      <div className="k-titleWithActions">
        <h2 className="k-titleWithActions__title">
          { title }
        </h2>

        <p className="k-titleWithActions__action is-first">
          <a { ...this.props } className="k-titleWithActions__action__button">
            { textFirst }
          </a>
        </p>

        <p class="k-titleWithActions__action is-last">
          <a href="#" class="k-Button k-Button--hydrogen k-titleWithActions__action__button">
            { textLast }
          </a>
        </p>
      </div>
    )
  }
}

TitleWithActions.defaultProps = {
  name: 'hydrogen',
  title: 'Feles sunt socialis animalibus',
  textFirst: 'Quod prodigo potissimun',
  textLast: 'Et mutuo cum animalibus',
}

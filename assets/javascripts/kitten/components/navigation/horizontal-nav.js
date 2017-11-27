import React, { Component } from 'react'
import classNames from 'classnames'

export class HorizontalNav extends Component {
  renderItems() {
    const { items } = this.props

    return items.map((item, key) => this.renderItems(item, key))
  }

  renderItem(item, key) {
    const { className ...linkProps } = item
    const itemClassName = classNames(
      "k-HorizontalNav__item",
      className,
      { "is-selected": selected },
    )

    return (
      <li key={ key }>
        <a className={ itemClassName } { ...linkProps }>
          <Markdown softBreak="br" source={ text } />
        </a>
      </li>
    )
  }

  render() {
    return (
      <div id={ this.props.id }
           className={ classNames("k-HorizontalNav", this.props.className) }>
      </div>
    )
  }
}




<ul class="k-HorizontalNav" role="menubar">
  <li class="k-HorizontalNav__element" role="menuitem">
    <a class="k-HorizontalNav__item karl-Height" href="#">
      Nav link
    </a>
  </li>
  <li class="k-HorizontalNav__element" role="menuitem">
    <a class="k-HorizontalNav__item karl-Height" href="#">
      Nav link 2
    </a>
  </li>
  <li class="k-HorizontalNav__element" role="menuitem">
    <a class="k-HorizontalNav__item karl-Height" href="#">
      Nav link 3
    </a>
  </li>
  <li class="k-HorizontalNav__element" role="menuitem">
    <a class="k-HorizontalNav__item karl-Height is-selected" href="#">
      Nav link 4 (selected)
    </a>
  </li>
</ul>

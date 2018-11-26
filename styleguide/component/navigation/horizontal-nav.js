import React from 'react'
import {
  KarlHorizontalNav,
  KarlTouchHorizontalNav,
  KarlTouchHorizontalNavWithNotification,
} from '../../../assets/javascripts/kitten/karl/navigation/horizontal-nav'
import Example from '../../app/example'

export default () => {
  return (
    <div className="k-Grid">
      <Example title="Horizontal Nav">
        <KarlHorizontalNav />
      </Example>
      <Example title="Horizontal Nav touch">
        <KarlTouchHorizontalNav />
      </Example>
      <Example title="Horizontal Nav touch with notification">
        <KarlTouchHorizontalNavWithNotification />
      </Example>
    </div>
  )
}

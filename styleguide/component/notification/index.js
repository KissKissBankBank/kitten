import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import Alert from './alert'
import Badge from './badge'
import IconBadge from './icon-badge'
import Modal from './modal'
import Tour from './tour'

export default () => {
  return (
    <Section title="Notification" id="notification">
      <Component
        title="Alert"
        id="components/notification/alert"
        component={Alert}
      />
      <Component
        title="Badge"
        id="components/notification/badge"
        component={Badge}
      />
      <Component
        title="Icon badge"
        id="components/notification/icon-badge"
        component={IconBadge}
      />
      <Component
        title="Modal"
        id="components/notification/modal"
        component={Modal}
      />
      <Component
        title="Tour"
        id="components/notification/tour"
        component={Tour}
      />
    </Section>
  )
}

import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import HorizontalNav from './horizontal-nav'
import TabBar from './tab-bar'
import UserMenu from './user-menu'
import PlateformSwitch from './plateform-switch'
import Header from './header'
import Stepper from './stepper'
import Pagination from './pagination'

export default () => {
  return (
    <Section title="Navigation" id="navigation">
      <Component
        title="Horizontal nav"
        id="components/navigation/horizontal-nav"
        component={HorizontalNav}
      />
      <Component
        title="Tab bar"
        id="components/navigation/tab-bar"
        component={TabBar}
      />
      <Component
        title="User menu"
        id="components/navigation/user-menu"
        component={UserMenu}
      />
      <Component
        title="Plateform switch"
        id="components/navigation/plateform-switch"
        component={PlateformSwitch}
      />
      <Component
        title="Header"
        id="components/navigation/header"
        component={Header}
      />
      <Component
        title="Stepper"
        id="components/navigation/stepper"
        component={Stepper}
      />
      <Component
        title="Pagination"
        id="components/navigation/pagination"
        component={Pagination}
      />
    </Section>
  )
}

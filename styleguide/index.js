import './style/karl.scss'

import React, { Fragment } from 'react'
import { render } from 'react-dom'
import Menu from './app/menu'
import Component from './app/component'
import Section from './app/section'
import Colors from './branding/colors'
import GridSystem from './component/grid-system'
import Typography from './component/typography'
import Buttons from './component/buttons'
import Icons from './component/icons'
import FormElements from './component/form-elements'
import Navigation from './component/navigation'
import Notification from './component/notification'
import Crowdfunding from './component/crowdfunding'
import PresentationElements from './component/presentation-elements'
import ContextualElements from './component/contextual-elements'
import ContextualContent from './component/contextual-content'
import Layout from './component/layout'
import Carousel from './component/carousel'
import Media from './component/media'
import { DevGrid } from '../assets/javascripts/kitten/components/dev/dev-grid'

render(
  <Fragment>
    <Menu />
    <div className="k-Row">
      <div className="k-Row__content">
        <section className="k-Grid">
          <div className="k-Grid__col k-Grid__col--10 k-Grid__col--offset-1">
            <div id="branding">
              <Section title="Brand colors" id="brand-colors">
                <Component component={Colors} />
              </Section>
            </div>
            <div id="components">
              <GridSystem />
              <Typography />
              <Buttons />
              <Icons />
              <FormElements />
              <Navigation />
              <Notification />
              <Crowdfunding />
              <PresentationElements />
              <ContextualElements />
              <ContextualContent />
              <Layout />
              <Carousel />
              <Media />
            </div>
          </div>
        </section>
      </div>
    </div>
    <DevGrid />
  </Fragment>,
  document.getElementById('body'),
)

import React, { Component, Fragment } from 'react'

import { Container } from '../../../../components/layout/container'
import { Grid } from '../../../../components/layout/grid'

import { ThanksHeader } from './components/thanks-header'
import { ThanksComment } from './components/thanks-comment'
import { ThanksSocial } from './components/thanks-social'

import ProjectsCarousel from '../../common/projects-carousel'

export class ThanksPage extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Grid>
            <ThanksHeader />
            <ThanksComment />
            <ThanksSocial />
          </Grid>
        </Container>

        <ProjectsCarousel title="Test" buttonHref="#" buttonLabel="Voir plus" />
      </Fragment>
    )
  }
}

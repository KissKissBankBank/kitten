import React from 'react'

import { Container, Grid } from '../../../..'

import { ThanksHeader } from './components/thanks-header'
import { ThanksComment } from './components/thanks-comment'
import { ThanksSocial } from './components/thanks-social'

import { ProjectsCarousel } from '../../common/projects-carousel'

export const ThanksPage = () => (
      <>
        <Container>
          <Grid>
            <ThanksHeader />
            <ThanksComment />
            <ThanksSocial />
          </Grid>
        </Container>

        <ProjectsCarousel title="Test" buttonHref="#" buttonLabel="Voir plus" />
      </>
    )

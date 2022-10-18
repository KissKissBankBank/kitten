import React from 'react'
import { Title } from 'kitten'
import Hero from './components/hero'
import UnderHero from './components/under-hero'
import New from './components/new'
import CampaignCarousel from './components/campaign-carousel'
import ProjectCarousel from './components/project-carousel'
import Why from './components/why'
import Manifesto from './components/manifesto'
import Engagements from './components/engagements'
import PartnerCarousel from './components/partner-carousel'
import Challenges from './components/challenges'
import Pricing from './components/pricing'

const HomePage = () => (
  <>
    <Hero />
    <UnderHero />
    <New />
    <Title
      tag="h1"
      modifier="tertiary"
      className="k-u-align-center k-u-margin-vertical-double k-u-margin-vertical-sextuple@s-up"
    >
      Les plus beaux projets du moment prennent vie<br />
      sur KissKissBankBank
    </Title>
    <CampaignCarousel />
    <ProjectCarousel />
    <Why />
    <Manifesto
      top={[100, 160]}
      bottom={[50, 50]}
      title={
        <Title cssColor="inherit" modifier="secondary">
          Ensemble, engageons-nous <br className="k-u-hidden@l-down" />
          pour un monde plus juste.
        </Title>
      }
      illustration
    />
    <Engagements />
    <Manifesto
      top={[50, 150]}
      bottom={[50, 140]}
      title={
        <Title cssColor="inherit" modifier="tertiary">
          Chaque projet qui se lance sur KissKissBankBank{' '}
          <br className="k-u-hidden@l-down" />
          s’engage à respecter ces valeurs en acceptant{' '}
          <br className="k-u-hidden@l-down" />
          notre charte éthique.
        </Title>
      }
    />
    <PartnerCarousel />
    <Challenges />
    <Pricing />
  </>
)

export default HomePage

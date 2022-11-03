import { Title } from 'kitten'
import React from 'react'
import CampaignCarousel from './components/campaign-carousel'
import Challenges from './components/challenges'
import EngagementCarousel from './components/engagement-carousel'
import Hero from './components/hero'
import Manifesto from './components/manifesto'
import New from './components/new'
import PartnerCarousel from './components/partner-carousel'
import Pricing from './components/pricing'
import ProjectCarousel from './components/project-carousel'
import UnderHero from './components/under-hero'
import Why from './components/why'

const HomePage = () => (
  <>
    <Hero />
    <UnderHero />
    <New />
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
    <EngagementCarousel />
    <Manifesto
      top={[50, 70]}
      bottom={[70, 120]}
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

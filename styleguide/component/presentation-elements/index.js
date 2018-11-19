import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import Card from './card'
import SimpleCard from './simple-card'
import VerticalCard from './vertical-card'
import VerticalCardWithAction from './vertical-card-with-action'
import ProjectCard from './project-card'
import ArticleCard from './article-card'
import BackerCard from './backer-card'
import CartRewardCard from './cart-reward-card'
import CrowdfundingCard from './crowdfunding-card'
import RewardCard from './reward-card'
import DonationCard from './donation-card'
import ProjectSimilarCard from './project-similar-card'
import Tryptich from './tryptich'
import Hero from './hero'
import PressQuotes from './press-quotes'
import Testimony from './testimony'
import TestimonyList from './testimony-list'
import TitleWithActions from './title-with-actions'
import LinkList from './link-list'
import BulletList from './bullet-list'
import TagList from './tag-list'
import Timeline from './timeline'
import InfoLines from './info-lines'

export default () => {
  return (
    <Section title="Presentation elements" id="presentation-elements">
      <Component
        title="Card"
        id="components/presentation-elements/card"
        component={Card}
      />
      <Component
        title="Simple card"
        id="components/presentation-elements/simple-card"
        component={SimpleCard}
      />
      <Component
        title="Vertical card"
        id="components/presentation-elements/vertical-card"
        component={VerticalCard}
      />
      <Component
        title="Vertical card with action"
        id="components/presentation-elements/vertical-card-with-action"
        component={VerticalCardWithAction}
      />
      <Component
        title="Project card"
        id="components/presentation-elements/project-card"
        component={ProjectCard}
      />
      <Component
        title="Article card"
        id="components/presentation-elements/article-card"
        component={ArticleCard}
      />
      <Component
        title="Backer card"
        id="components/presentation-elements/backer-card"
        component={BackerCard}
      />
      <Component
        title="Cart reward card"
        id="components/presentation-elements/cart-reward-card"
        component={CartRewardCard}
      />
      <Component
        title="Crowdfunding card"
        id="components/presentation-elements/crowdfunding-card"
        component={CrowdfundingCard}
      />
      <Component
        title="Reward card"
        id="components/presentation-elements/reward-card"
        component={RewardCard}
      />
      <Component
        title="Donation card"
        id="components/presentation-elements/donation-card"
        component={DonationCard}
      />
      <Component
        title="Project similar card"
        id="components/presentation-elements/project-similar-card"
        component={ProjectSimilarCard}
      />
      <Component
        title="Tryptich"
        id="components/presentation-elements/tryptich"
        component={Tryptich}
      />
      <Component
        title="Hero"
        id="components/presentation-elements/hero"
        component={Hero}
      />
      <Component
        title="Press quotes"
        id="components/presentation-elements/press-quotes"
        component={PressQuotes}
      />
      <Component
        title="Testimony"
        id="components/presentation-elements/testimony"
        component={Testimony}
      />
      <Component
        title="Testimony list"
        id="components/presentation-elements/testimony-list"
        component={TestimonyList}
      />
      <Component
        title="Title with actions"
        id="components/presentation-elements/title-with-actions"
        component={TitleWithActions}
      />
      <Component
        title="Link list"
        id="components/presentation-elements/link-list"
        component={LinkList}
      />
      <Component
        title="Bullet list"
        id="components/presentation-elements/bullet-list"
        component={BulletList}
      />
      <Component
        title="Tag list"
        id="components/presentation-elements/tag-list"
        component={TagList}
      />
      <Component
        title="Timeline"
        id="components/presentation-elements/timeline"
        component={Timeline}
      />
      <Component
        title="Info lines"
        id="components/presentation-elements/info-lines"
        component={InfoLines}
      />
    </Section>
  )
}

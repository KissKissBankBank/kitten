import React from 'react'
import { CrowdfundingCard } from 'kitten/components/cards/crowdfunding-card'

export const ArticleCard = ({ articleTitle, articleSubTitle, ...props }) => (
  <CrowdfundingCard
    { ...props }
    cardTitle={ props.articleTitle }
    cardSubTitle={ props.articleSubTitle }
    info1={ false }
    info2={ false }
    info3={ false }
    progress={ false }
    state={ false }
    titlesMinHeight={ false }
  />
)

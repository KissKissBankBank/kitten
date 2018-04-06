import React from 'react'
import { CrowdfundingCard } from 'kitten/components/cards/crowdfunding-card'

export const ArticleCard = ({ articleTitle, articleSubTitle, ...props }) => (
  <CrowdfundingCard
    cardTitle={articleTitle}
    cardSubTitle={articleSubTitle}
    {...props}
    info1={false}
    info2={false}
    info3={false}
    progress={false}
    state={false}
    titlesMinHeight={false}
    titleTruncate={false}
  />
)

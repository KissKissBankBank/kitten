import React from 'react'
import { CrowdfundingCard } from '../../components/cards/crowdfunding-card'

export const ArticleCard = ({ articleTitle, articleSubTitle, ...props }) => (
  <CrowdfundingCard
    cardTitle={articleTitle}
    cardSubTitle={articleSubTitle}
    {...props}
    info1=""
    info2=""
    info3=""
    progress={0}
    state=""
    titlesMinHeight={false}
    titleTruncate={false}
  />
)

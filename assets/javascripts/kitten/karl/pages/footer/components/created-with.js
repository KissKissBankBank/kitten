import React from 'react'
import { Paragraph, Text, KissKissBankBankLogo } from 'kitten'

export const CreatedWith = props => {
  return (
    <div className="k-Footer__createdWith" {...props}>
      <div className="k-Footer__createdWith--logo">
        <Text size="small" weight="regular">
          Crée avec
        </Text>
        <KissKissBankBankLogo width="165" />
      </div>

      <Paragraph
        modifier="secondary"
        noMargin
        className="k-Footer__createdWith--paragraph"
      >
        Nous aidons les créateurs et les entrepreneurs à
        <br /> financer et faire vivre leurs projets.
      </Paragraph>
    </div>
  )
}

import React from 'react'
import { 
  Title,
  KkbbFlashIllustration,
} from 'kitten'
import { SocialButton } from './social-button'

export const Baseline = props => {
  return (
    <div className="k-Footer__baseline">
      <KkbbFlashIllustration className="k-u-hidden@m-down" />
      <KkbbFlashIllustration size="small" className="k-u-hidden@l-up" />
      <div className="k-Footer__baselineText">
        <Title
          tag="h1"
          noMargin
          modifier="senary"
          cssColor="var(--color-grey-000)"
          {...props}
        >
          Nous aidons les créateurs et les entrepreneurs à financer et faire vivre leurs projets.
        </Title>
        <SocialButton className="k-u-hidden@l-up k-u-margin-top-double@m-down" />
      </div>
    </div>
  )
}

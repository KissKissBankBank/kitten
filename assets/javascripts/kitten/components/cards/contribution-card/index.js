import React, { useEffect, useRef, useState }  from 'react'
import { CloseButton } from '../../../components/buttons/close-button'
import { StyledContributionCard } from './styles'
import classNames from 'classnames'
import {
  Image,
  Title,
  PillNumber,
  Amount,
} from './components'

export const ContributionCard = ({
  className,
  closeButtonLabel,
  children,
  show,
  ...props
}) => {

  const [isTrashed, trashIt] = useState(false)
  const [isMounted, setMounted] = useState(true)
  const contributionRef = useRef(null)

  useEffect(() => {
    let clearDelayBeforeTrash
    if (!isMounted) {
      clearDelayBeforeTrash = setTimeout(() => {
        trashIt(true)
        onAfterClose()
      }, 400)
    }
    return () => clearTimeout(clearDelayBeforeTrash)
  }, [isMounted])

  if (isTrashed || !show) return null
  
  return (
    <StyledContributionCard
      className={classNames('k-ContributionCard', className, {
        'k-contributionCard--shouldHide': !isMounted,
      })}
      ref={contributionRef}
      role="dialog"
      {...props}
    >
     
      <CloseButton 
        className="k-ContributionCard__close" 
        size="micro" 
        closeButtonLabel={closeButtonLabel}
        onClick={() => setMounted(false)}
      />

      {React.Children.map(children, child => {
        if (!child) return null
        return child.props.__TYPE === 'Image' ? child : null
      })}

      <div className="k-ContributionCard__gridWrapper">

        {React.Children.map(children, child => {
          if (!child) return null
          return ['Image'].includes(child.props.__TYPE) ? null : child
        })}
 
      </div>
    </StyledContributionCard>
  )
}

ContributionCard.Image = Image
ContributionCard.Title = Title
ContributionCard.PillNumber = PillNumber
ContributionCard.Amount = Amount


ContributionCard.defaultProps = {
  show: true,
  closeButtonLabel: "Close",
}

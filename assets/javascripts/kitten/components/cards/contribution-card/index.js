import React from 'react'
import { CloseButton } from '../../../components/buttons/close-button'
import { StyledContributionCard } from './styles'
import classNames from 'classnames'
import COLORS from '../../../constants/colors-config'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../helpers/utils/typography'
import {
  Image,
  Title,
  Description,
  PillNumber,
  Amount,
  Input,
  Action,
} from './components'

export const ContributionCard = ({
  className,
  closeButtonLabel,
  children,
  show,
  style,
  borderWidth,
  borderRadius,
  imageBorderRadius,
  borderColor,
  borderStyle,
  onClose,
  largeInput,
  ...props
}) => {
  if (!show) return null

  return (
    <StyledContributionCard
      className={classNames('k-ContributionCard', className)}
      style={{
        ...style,
        '--contributionCard--border-width': pxToRem(borderWidth),
        '--contributionCard--border-radius': pxToRem(borderRadius),
        '--contributionCard--image-border-radius': pxToRem(imageBorderRadius),
        '--contributionCard--border-color': borderColor,
        '--contributionCard--border-style': borderStyle,
      }}
      {...props}
    >
      {onClose && (
        <CloseButton
          className="k-ContributionCard__close"
          size="micro"
          closeButtonLabel={closeButtonLabel}
          onClick={onClose}
        />
      )}

      {React.Children.map(children, child => {
        if (!child) return null
        return child.props.__TYPE === 'Image' ? child : null
      })}

      <div className={classNames('k-ContributionCard__gridWrapper', {
        'k-ContributionCard__gridWrapper--largeInput': largeInput,
      })}>
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
ContributionCard.Description = Description
ContributionCard.PillNumber = PillNumber
ContributionCard.Amount = Amount
ContributionCard.Input = Input
ContributionCard.Action = Action

ContributionCard.defaultProps = {
  show: true,
  closeButtonLabel: 'Close',
  borderColor: COLORS.line1,
  borderRadius: 8,
  borderStyle: 'solid',
  borderWidth: 2,
  imageBorderRadius: 5,
  onClose: undefined,
  largeInput: false,
}

ContributionCard.propTypes = {
  show: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onClose: PropTypes.func,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imageBorderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  largeInput: PropTypes.bool,
}

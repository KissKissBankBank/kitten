import React, { useState, cloneElement } from 'react'
import { CloseButton } from '../../../../components/molecules/buttons/close-button'
import { StyledContributionCard } from './styles'
import classNames from 'classnames'
import COLORS from '../../../../constants/colors-config'
import PropTypes from 'prop-types'
import { pxToRem } from '../../../../helpers/utils/typography'
import {
  Image,
  Title,
  Description,
  PillNumber,
  Amount,
  Input,
  Action,
} from './components'
import { Context } from './context'
import {
  getReactElementsByType,
  getReactElementsWithoutType,
} from '../../../../helpers/react/react-elements'

export const ContributionCard = ({
  className,
  closeButtonLabel,
  children,
  show,
  style,
  borderWidth,
  borderRadius,
  borderColor,
  borderStyle,
  onClose,
  largeInput,
  largeTitle,
  ...props
}) => {
  const imageChild = getReactElementsByType({
    children,
    type: ContributionCard.Image,
  })[0]
  const wrappedChildren = getReactElementsWithoutType({
    children,
    type: ContributionCard.Image,
  })

  const [isInputEmpty, setEmptyInput] = useState(true)
  if (!show) return null

  return (
    <StyledContributionCard
      className={classNames('k-ContributionCard', className)}
      style={{
        ...style,
        '--contributionCard--border-width': pxToRem(borderWidth),
        '--contributionCard--border-radius': pxToRem(borderRadius),
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

      {imageChild && cloneElement(imageChild)}

      <div
        className={classNames('k-ContributionCard__gridWrapper', {
          'k-ContributionCard__gridWrapper--largeInput': largeInput,
        })}
      >
        <Context.Provider value={{ isInputEmpty, setEmptyInput }}>
          {wrappedChildren.map((item, index) =>
            cloneElement(item, { key: `ContributionCard-${index}` }),
          )}
        </Context.Provider>
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
  onClose: undefined,
  largeInput: false,
  largeTitle: false,
}

ContributionCard.propTypes = {
  show: PropTypes.bool,
  closeButtonLabel: PropTypes.string,
  onClose: PropTypes.func,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderStyle: PropTypes.string,
  borderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  largeInput: PropTypes.bool,
  largeTitle: PropTypes.bool,
}

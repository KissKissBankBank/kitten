import React, { useState } from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { Title as KittenTitle } from '../../../typography/title'
import { Text } from '../../../typography/text'
import TYPOGRAPHY from '../../../../constants/typography-config'
import { mq } from '../../../../constants/screen-config'
import { pxToRem } from '../../../../helpers/utils/typography'
import { LongArrowIconNext } from '../../../graphics/icons-next/long-arrow-icon-next'
import {
  getReactElementsByType,
  getReactElementsWithoutType
} from '../../../../helpers/react/get-react-elements'

const StyledEditorialCard = styled.div`
  box-sizing: border-box;
  height: 100%;
  position: relative;
  color: var(--color-grey-200);
  border-radius: var(--border-radius-m);
  overflow: hidden;

  font-size: var(--font-size-3);
  line-height: ${pxToRem(18)};

  .k-EditorialCard__grid {
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    transition: transform var(--transition);
  }

  &.k-EditorialCard--hasVerso .k-EditorialCard__grid {
    grid-template-columns: repeat(2, 100%);
  }

  &:not(.k-EditorialCard--isRecto) .k-EditorialCard__grid {
    transform: translateX(-100%);
  }

  .k-EditorialCard__recto,
  .k-EditorialCard__verso {
    box-sizing: border-box;
    height: 100%;
    padding: ${pxToRem(30)};
    display: flex;
    flex-direction: column;
  }

  @media ${mq.tabletAndDesktop} {
    font-size: var(--font-size-4);
    line-height: ${pxToRem(20)};
  }

  .k-EditorialCard__recto {
    ${TYPOGRAPHY.fontStyles.regular}
  }

  .k-EditorialCard__verso {
    ${TYPOGRAPHY.fontStyles.light}
  }

  .k-EditorialCard__content {
    flex: 1 1 auto;

    p {
      margin: 0;

      & + p {
        margin-top: 1em;
      }
    }
  }

  .k-EditorialCard__action {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .k-EditorialCard__arrow {
    margin-top: ${pxToRem(20)};
    align-self: end;
  }

  &.k-EditorialCard--info {
    background-color: var(--color-primary-500);
  }
  &.k-EditorialCard--success {
    background-color: var(--color-success-500);
  }
  &.k-EditorialCard--custom {
    background-color: var(--editorialCard-customColor);
  }
`

export const EditorialCard = ({
  children,
  className,
  status,
  customColor,
  hasArrow,
  href,
  style,
  linkActionText,
  showVersoActionText,
  ...props
}) => {
  const [isRecto, setIsVerso] = useState(true)

  const VersoChild = getReactElementsByType({ children, type: Verso })[0]
  const hasVerso = !!VersoChild

  let Action = 'a'
  let actionProps = {
    className: 'k-EditorialCard__action',
    href: href,
    'aria-label': linkActionText
  }

  if (hasVerso && isRecto) {
    Action = 'button'
    actionProps = {
      className: 'k-EditorialCard__action k-u-reset-button',
      type: 'button',
      onClick: () => setIsVerso(false),
      'aria-label': showVersoActionText
    }
  }

  return (
    <StyledEditorialCard
      className={classNames(
        'k-EditorialCard',
        className,
        `k-EditorialCard--${status}`,
        {
          'k-EditorialCard--hasArrow': hasArrow,
          'k-EditorialCard--hasVerso': hasVerso,
          'k-EditorialCard--isRecto': isRecto,
          'k-EditorialCard--isVerso': !isRecto,
        },
      )}
      style={{
        '--editorialCard-customColor': !!customColor ? customColor : null,
        ...style
      }}
      {...props}
    >
      <div className="k-EditorialCard__grid">
        <div className="k-EditorialCard__recto">
          {getReactElementsWithoutType({ children, type: Verso })}
          {!!hasArrow && <LongArrowIconNext className="k-EditorialCard__arrow" color="var(--color-grey-000)" />}
        </div>

        {hasVerso && VersoChild}
      </div>

      <Action {...actionProps} />
    </StyledEditorialCard>
  )
}

EditorialCard.propTypes = {
  status: PropTypes.oneOf(['info', 'success', 'custom']),
  customColor: PropTypes.string,
  hasArrow: PropTypes.bool,
  linkActionText: PropTypes.string,
  showVersoActionText: PropTypes.string,
}

EditorialCard.defaultProps = {
  status: 'info',
  customColor: '',
  hasArrow: true,
  linkActionText: 'Voir tous les projets',
  showVersoActionText: 'Plus de précisions',
}

const Title = ({ className, children, ...props }) => {
  return (
    <KittenTitle
      modifier="tertiary"
      cssColor="inherit"
      noMargin
      className={classNames('k-EditorialCard__title', className)}
      {...props}
    >
      {children}
      <br />
      <span aria-hidden>-</span>
    </KittenTitle>
  )
}

const Content = ({ className, ...props }) => {
  return (
    <div
      className={classNames('k-EditorialCard__content', className)}
      {...props}
    />
  )
}

const Verso = ({ className, actionText, children, ...props }) => {
  return (
    <div
      className={classNames('k-EditorialCard__verso', className)}
      {...props}
    >
      <div className="k-EditorialCard__content">{children}</div>
      <Text className="k-EditorialCard__actionText k-u-m-t-8" weight="bold">
        {actionText}
      </Text>
    </div>
  )
}

EditorialCard.Title = Title
EditorialCard.Content = Content
EditorialCard.Verso = Verso

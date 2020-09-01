import React from 'react'
import { QuestionMarkIcon } from '../../../components/icons/question-mark-icon'
import { ButtonIcon } from '../../../components/buttons/button-icon'

export const ButtonQuestionMarkIcon = props => (
  <ButtonIcon
    className="k-ButtonIcon--tooltip--nano"
    modifier="helium"
    size="nano"
    type="button"
    rounded
    {...props}
  >
    <QuestionMarkIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
)

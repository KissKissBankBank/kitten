import React from 'react'
import { Button } from '../../action/button'
import { QuestionMarkIcon } from '../../graphics/icons/question-mark-icon'

export const ButtonQuestionMarkIcon = props => (
  <Button
    modifier="helium"
    size="nano"
    rounded
    fit="icon"
    type="button"
    {...props}
  >
    <QuestionMarkIcon width="10" height="10" />
  </Button>
)

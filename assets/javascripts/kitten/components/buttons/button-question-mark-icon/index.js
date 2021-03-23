import React from 'react'
import { Button } from '../../../components/buttons/button'
import { QuestionMarkIcon } from '../../../components/icons/question-mark-icon'

export const ButtonQuestionMarkIcon = props => (
  <Button modifier="helium" size="nano" rounded icon type="button" {...props}>
    <QuestionMarkIcon width="10" height="10" />
  </Button>
)

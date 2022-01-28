import React from 'react'
import { Button } from '../../../components/actions/button'
import { QuestionMarkIcon } from '../../../../components/visuals/icons/question-mark-icon'

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

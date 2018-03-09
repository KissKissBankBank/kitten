import React from 'react';
import { QuestionMarkIcon } from 'kitten/components/icons/question-mark-icon';
import { ButtonIcon } from 'kitten/components/buttons/button-icon';

export const ButtonQuestionMarkIcon = props => (
  <ButtonIcon modifier="helium" size="nano" rounded {...props}>
    <QuestionMarkIcon className="k-ButtonIcon__svg" />
  </ButtonIcon>
);

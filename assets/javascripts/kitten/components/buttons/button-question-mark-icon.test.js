import React from 'react'

import { QuestionMarkIcon } from 'kitten/components/icons/question-mark-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ButtonQuestionMarkIcon }
  from 'kitten/components/buttons/button-question-mark-icon'

describe('ButtonQuestionMarkIcon />', () => {
  describe('by default', () => {
    const button = shallow(<ButtonQuestionMarkIcon />)

    test('is a <ButtonIcon modifier="helium />', () => {
      expect(button).to.have.descendants(ButtonIcon)
      expect(button).to.have.prop('modifier', 'helium')
    })

    test('has a <QuestionMarkIcon />', () => {
      expect(button).to.have.descendants(QuestionMarkIcon)
    })
  })

  describe('with other props', () => {
    const button = shallow(<QuestionMarkIcon className="custom__class" />)

    test('has custom class', () => {
      expect(button.hasClass('custom__class')).to.equal(true)
    })
  })
})

import React from 'react'
import { shallow } from 'enzyme'
import { QuestionMarkIcon } from 'kitten/components/icons/question-mark-icon'
import { ButtonIcon } from 'kitten/components/buttons/button-icon'
import { ButtonQuestionMarkIcon }
  from 'kitten/components/buttons/button-question-mark-icon'

describe('ButtonQuestionMarkIcon />', () => {
  describe('by default', () => {
    const button = shallow(<ButtonQuestionMarkIcon />)

    it('is a <ButtonIcon modifier="helium />', () => {
      expect(button).to.have.descendants(ButtonIcon)
      expect(button).to.have.prop('modifier', 'helium')
    })

    it('has a <QuestionMarkIcon />', () => {
      expect(button).to.have.descendants(QuestionMarkIcon)
    })
  })

  describe('with other props', () => {
    const button = shallow(<QuestionMarkIcon className="custom__class" />)

    it('has custom class', () => {
      expect(button).to.have.className('custom__class')
    })
  })
})

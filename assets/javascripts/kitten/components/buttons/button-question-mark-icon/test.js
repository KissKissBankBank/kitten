import React from 'react'
import { QuestionMarkIcon } from '../../../components/icons/question-mark-icon'
import { ButtonIcon } from '../../../components/buttons/button-icon'
import { ButtonQuestionMarkIcon } from '../../../components/buttons/button-question-mark-icon'

describe('ButtonQuestionMarkIcon />', () => {
  describe('by default', () => {
    const button = shallow(<ButtonQuestionMarkIcon />)

    it('is a <ButtonIcon modifier="helium />', () => {
      expect(button.find(ButtonIcon).exists()).toBe(true)
      expect(button.props().modifier).toBe('helium')
    })

    it('has a <QuestionMarkIcon />', () => {
      expect(button.find(QuestionMarkIcon).exists()).toBe(true)
    })

    it('should be type of button', () => {
      expect(button.props().type).toBe('button')
    })
  })

  describe('with other props', () => {
    const button = shallow(<QuestionMarkIcon className="custom__class" />)

    it('has custom class', () => {
      expect(button.hasClass('custom__class')).toBe(true)
    })
  })
})

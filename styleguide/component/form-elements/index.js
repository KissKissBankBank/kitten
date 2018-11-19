import React from 'react'
import Component from '../../app/component'
import Section from '../../app/section'
import Checkbox from './checkbox'
import RadioButton from './radio-button'
import TextInput from './text-input'
import TextInputWithButton from './text-input-with-button'
import TextInputWithLimit from './text-input-with-limit'
import TextInputWithUnit from './text-input-with-unit'
import LocationInput from './location-input'
import PasswordInput from './password-input'
import Select from './select'
import Switch from './switch'
import Slider from './slider'
import SearchInput from './search-input'
import FormInfo from './form-info'
import FormAmountAndCurrency from './form-amount-and-currency'
import FormPhoneNumber from './form-phone-number'
import Comment from './comment'
import ImageCropper from './image-cropper'
import ImageWithCaption from './image-with-caption'

export default () => {
  return (
    <Section title="Form elements" id="form-elements">
      <Component
        title="Checkbox"
        id="components/form-elements/checkbox"
        component={Checkbox}
      />
      <Component
        title="Radio button"
        id="components/form-elements/radio-button"
        component={RadioButton}
      />
      <Component
        title="Text input"
        id="components/form-elements/text-input"
        component={TextInput}
      />
      <Component
        title="Text input with button"
        id="components/form-elements/text-input-with-button"
        component={TextInputWithButton}
      />
      <Component
        title="Text input with limit"
        id="components/form-elements/text-input-with-limit"
        component={TextInputWithLimit}
      />
      <Component
        title="Text input with unit"
        id="components/form-elements/text-input-with-unit"
        component={TextInputWithUnit}
      />
      <Component
        title="Location input"
        id="components/form-elements/location-input"
        component={LocationInput}
      />
      <Component
        title="Password input"
        id="components/form-elements/password-input"
        component={PasswordInput}
      />
      <Component
        title="Select"
        id="components/form-elements/select"
        component={Select}
      />
      <Component
        title="Switch"
        id="components/form-elements/switch"
        component={Switch}
      />
      <Component
        title="slider"
        id="components/form-elements/slider"
        component={Slider}
      />
      <Component
        title="Search input"
        id="components/form-elements/search-input"
        component={SearchInput}
      />
      <Component
        title="Form info"
        id="components/form-elements/form-info"
        component={FormInfo}
      />
      <Component
        title="Form amount and currency"
        id="components/form-elements/form-amount-and-currency"
        component={FormAmountAndCurrency}
      />
      <Component
        title="Form phone number"
        id="components/form-elements/form-phone-number"
        component={FormPhoneNumber}
      />
      <Component
        title="Comment"
        id="components/form-elements/comment"
        component={Comment}
      />
      <Component
        title="Image cropper"
        id="components/form-elements/image-cropper"
        component={ImageCropper}
      />
      <Component
        title="Image with caption"
        id="components/form-elements/image-with-caption"
        component={ImageWithCaption}
      />
    </Section>
  )
}

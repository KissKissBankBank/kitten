import React from 'react'
import SelectWithState from 'kitten/components/form/select-with-state'

function FormPhoneNumber(props) {
  return (
    <div className="k-FormComposer">
      <div className="k-FormComposer__element k-FormComposer__element--main">
        <SelectWithState name={ props.name }
                         options={ props.areaZoneOptions }
                         value={ props.value } />
      </div>

      <div className="k-FormComposer__element">
        <input className="k-TextInput k-TextInput--tiny"
               type="text"
               placeholder={ props.placeholder } />
      </div>
    </div>
  )
}

export default FormPhoneNumber

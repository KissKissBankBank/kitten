import React from 'react'
//import moment from 'moment'
import classNames from 'classnames'
import ReactDatePicker from 'react-datepicker'

export class DatePicker extends React.Component {
  render() {
    const { className,
            startDate,
            handleChange,
            ...others } = this.props

    return (
      <div className="k-DatePicker">
        <ReactDatePicker selected={ startDate }
                         onChange={ handleChange } />
      </div>
    )
  }
}

DatePicker.defaultProps = {

}

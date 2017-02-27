import React from 'react'
import ReactTooltip from 'react-tooltip'
//import { Button } from 'kitten/components/buttons/button'

export class StaticTooltip extends React.Component {
  // constructor(props) {
  //   super(props)

  //   this.renderButton = this.renderButton.bind(this)
  // }

  // renderButton() {
  //   // const { id,
  //   //         ...others } = this.buttonsProps

  //   return (
  //     <Button data-tip
  //             data-for={ this.prop.id }
  //             data-event="click"
  //             data-dismiss={ this.prop.id }
  //             aria-describedby={ this.prop.id }
  //             { ...others } />
  //   )
  // }

  // renderButtonsList() {
  //   return this.props.buttons.map(this.renderButton)
  // }

  render() {
    const { id,
            place,
            ...others } = this.props

    return (
      // <div className="k-StaticTooltip">
      //   { this.renderButtonsList() }
        <ReactTooltip id={ id }
                      // This is not a mistake, this attribute is called
                      // class not className !
                      class="k-Tooltip__content"
                      role="tooltip"
                      effect="solid"
                      place={ place }
                      show >
          { this.props.children }
        </ReactTooltip>
      // </div>
    )
  }
}

StaticTooltip.defaultProps = {
  id: '',
  place: 'bottom',
  type: 'button',
  children: null,
  // buttons: [{
  //   label: "But",
  //   modifier: "helium",
  // }],
}

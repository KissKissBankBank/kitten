import React from 'react'
import classNames from 'classnames'
import { SideGrid,
         SideGridContent,
         SideGridAside } from 'kitten/components/grid/side-grid'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Stepper } from 'kitten/components/steppers/stepper'
import { RadioButton } from 'kitten/components/form/radio-button'
import { Checkbox } from 'kitten/components/form/checkbox'
import { FormActions } from 'kitten/components/form/form-actions'
import { Button } from 'kitten/components/buttons/button'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import DocLinkBox from 'kitten/components/box/doc-link-box'
import { MakerHeader } from 'app/maker/components/maker-header'

export class MakerWhoAmIStep extends React.Component {

  renderHeader() {
    const { header } = this.props

    return (
      <MakerHeader { ...header } />
    )
  }

  renderStepper() {
    if (!this.props.stepper.items)
      return

    return (
      <div className="k-Row k-Row--centered k-Row--lightBottomBorder">
        <div className="k-Row__content">
          <Stepper items={ this.props.stepper.items } />
        </div>
      </div>
    )
  }

  renderTitle() {
    return (
      <Title modifier="secondary">{ this.props.form.title }</Title>
    )
  }

  renderRadioButtons() {
    const { name, items } = this.props.form.radioButtons

    return items.map(item => {
      return (
        <RadioButton className="k-u-margin-bottom-triple"
                     key={ item.id }
                     name={ name }
                     { ...item }>
          <Paragraph modifier="quaternary">{ item.content }</Paragraph>
        </RadioButton>
      )
    })
  }

  renderCheckboxes() {
    const { items } = this.props.form.checkboxes

    return items.map(item => {
      return (
        <Checkbox key={ item.id } { ...item } />
      )
    })
  }

  renderActions() {
    const { actions } = this.props.form

    return (
      <FormActions className="k-u-margin-top-quadruple
                              k-u-margin-bottom-quadruple">
        <Button tag="a"
                modifier="hydrogen"
                href={ actions.return.href }>
          { actions.return.text }
        </Button>

        <Button tag="input"
                modifier="helium"
                type="submit"
                value={ actions.submit.text } />
      </FormActions>
    )
  }

  renderSideGrid() {
    return (
      <SideGrid className="k-VerticalGrid__fluid"
                containerClassName="k-VerticalGrid__container">
        { this.renderContent() }
        { this.renderAside() }
      </SideGrid>
    )
  }

  renderContent() {
    return (
      <SideGridContent>
        <Grid>
          <GridCol col-s="10" offset-s="1" col-l="8">
            <form>
              { this.renderTitle() }
              { this.renderRadioButtons() }
              { this.renderCheckboxes() }
              { this.renderActions() }
            </form>
          </GridCol>
        </Grid>
      </SideGridContent>
    )
  }

  renderAside() {
    const { items } = this.props.sidebar.docLinkBoxes

    const docLinkBoxes = items.map((item, key) => {
      return (
        <div key={ key }
             className="k-u-margin-top-triple
                        k-u-margin-right-double
                        k-u-margin-left-quadruple">
          <DocLinkBox { ...item } />
        </div>
      )
    })

    return (
      <SideGridAside>{ docLinkBoxes }</SideGridAside>
    )
  }

  render() {
    return (
      <div className="k-VerticalGrid__page">
        { this.renderHeader() }
        { this.renderStepper() }
        { this.renderSideGrid() }
      </div>
    )
  }
}

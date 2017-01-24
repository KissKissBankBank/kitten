import React from 'react'
import classNames from 'classnames'
import { SideGrid,
         SideGridContent,
         SideGridAside } from 'kitten/components/grid/side-grid'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { RadioButton } from 'kitten/components/form/radio-button'
import { Checkbox } from 'kitten/components/form/checkbox'
import { FormActions } from 'kitten/components/form/form-actions'
import { Button } from 'kitten/components/buttons/button'
import { Title } from 'kitten/components/typography/title'
import { Paragraph } from 'kitten/components/typography/paragraph'
import DocLinkBox from 'kitten/components/box/doc-link-box'
import { KarlMakerHeader } from 'app/maker/components/maker-header'
import { KarlMakerStepper } from 'app/maker/components/maker-stepper'

export class KarlMakerWhoAmIStep extends React.Component {
  getParamValue(name) {
    return this.props.project.params[name]
  }

  renderHeader() {
    return (
      <KarlMakerHeader { ...this.props.header } />
    )
  }

  renderStepper() {
    return (
      <KarlMakerStepper { ...this.props.stepper } />
    )
  }

  renderTitle() {
    return (
      <Title modifier="secondary">{ this.props.form.title }</Title>
    )
  }

  renderRadioButtons() {
    const { name, items } = this.props.form.radioButtons
    const currentValue = this.getParamValue(name)

    return items.map(item => {
      const checked = currentValue && currentValue == item.value

      return (
        <RadioButton className="k-u-margin-bottom-triple"
                     key={ item.id }
                     name={ name }
                     defaultChecked={ checked }
                     { ...item }>
          <Paragraph modifier="quaternary">{ item.content }</Paragraph>
        </RadioButton>
      )
    })
  }

  renderCheckboxes() {
    const { items } = this.props.form.checkboxes

    return items.map(item => {
      const currentValue = this.getParamValue(item.name)
      const checked = currentValue && currentValue == item.value

      return (
        <Checkbox key={ item.id } defaultChecked={ checked } { ...item } />
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

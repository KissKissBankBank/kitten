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

  renderBillingTypes() {
    const { items } = this.props.form.billingTypes
    return items.map(item => this.renderBillingTypesOption(item))
  }

  renderBillingTypesOption(option) {
    const { name, defaultValue } = this.props.form.billingTypes
    const currentValue = this.getParamValue(name)
    const checked = (defaultValue == option.value) ||
                    (currentValue && currentValue == option.value)

    return (
      <RadioButton className="k-u-margin-bottom-triple"
                   key={ option.id }
                   name={ name }
                   defaultChecked={ checked }
                   { ...option }>
        <Paragraph modifier="quaternary">{ option.children }</Paragraph>
      </RadioButton>
    )
  }

  renderChallenges() {
    const { items } = this.props.form.challenges
    return items.map(item => this.renderChallengesOption(item))
  }

  renderChallengesOption(option) {
    const currentValue = this.getParamValue(option.name)
    const checked = currentValue && currentValue == option.value

    return (
      <Checkbox key={ option.id } defaultChecked={ checked } { ...option } />
    )
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
              { this.renderBillingTypes() }
              { this.renderChallenges() }
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

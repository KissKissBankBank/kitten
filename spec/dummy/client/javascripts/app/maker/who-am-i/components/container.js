import React from 'react'
import classNames from 'classnames'
import { SideGrid,
         SideGridContent,
         SideGridAside } from 'kitten/components/grid/side-grid'
import { Grid, GridCol } from 'kitten/components/grid/grid'
import { Header,
         HeaderItems,
         HeaderItem } from 'kitten/components/headers/header'
import { Stepper } from 'kitten/components/steppers/stepper'
import { HeaderLogo } from 'kitten/components/headers/header-logo'
import { RadioButton } from 'kitten/components/form/radio-button'
import { Checkbox } from 'kitten/components/form/checkbox'
import { FormActions } from 'kitten/components/form/form-actions'
import DocLinkBox from 'kitten/components/box/doc-link-box'

export class MakerWhoAmIStep extends React.Component {

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

  render() {
    const { header, project } = this.props

    return (
      <div>
        <MakerHeader project={ project } { ...header } />

        { this.renderStepper() }

        <SideGrid className="k-VerticalGrid__fluid"
                  containerClassName="k-VerticalGrid__container">
          <SideGridContent>
            <Grid>
              <GridCol col-s="10" offset-s="1" col-l="8">
                <p className="k-Title k-Title--secondary">
                  Qui suis-je&nbsp;?
                </p>

                <RadioButton className="k-u-margin-bottom-triple"
                             id="karl-radio-button-1"
                             name="karl-radio-button"
                             text="Particulier / Auto-entrepreneur">
                  <p className="k-Paragraph k-Paragraph--quaternary">
                    Harum trium sententiarum nulli prorsus assentior. Nec enim
                    illa prima vera est, ut, quem ad modum in se quisque sit,
                    sic in amicum sit animatus
                  </p>
                </RadioButton>

                <RadioButton className="k-u-margin-bottom-triple"
                             id="karl-radio-button-2"
                             name="karl-radio-button"
                             text="Association">
                  <p className="k-Paragraph k-Paragraph--quaternary">
                    Harum trium sententiarum nulli prorsus assentior. Nec enim
                    illa prima vera est, ut, quem ad modum in se quisque sit,
                    sic in amicum sit animatus
                  </p>
                </RadioButton>

                <RadioButton className="k-u-margin-bottom-triple"
                             id="karl-radio-button-3"
                             name="karl-radio-button"
                             text="Entreprise">
                  <p className="k-Paragraph k-Paragraph--quaternary">
                    Harum trium sententiarum nulli prorsus assentior. Nec enim
                    illa prima vera est, ut, quem ad modum in se quisque sit,
                    sic in amicum sit animatus
                  </p>
                </RadioButton>

                <RadioButton className="k-u-margin-bottom-triple"
                             id="karl-radio-button-4"
                             name="karl-radio-button"
                             text="Collectivité territorial">
                  <p className="k-Paragraph k-Paragraph--quaternary">
                    Harum trium sententiarum nulli prorsus assentior. Nec enim
                    illa prima vera est, ut, quem ad modum in se quisque sit,
                    sic in amicum sit animatus
                  </p>
                </RadioButton>

                <Checkbox id="input-1"
                          text="Déposez un projet Scouts
                                et Guides de France." />

                <Checkbox id="input-2"
                          text="Déposez un projet Éclaireurs
                                Unionistes de France." />

                <FormActions className="k-u-margin-top-quadruple
                                        k-u-margin-bottom-quadruple">
                  <a href="#"
                     className="k-Button
                                k-Button--hydrogen">
                    Retour
                  </a>

                  <input type="submit"
                         value="Suivant"
                         className="k-Button
                                    k-Button--helium" />
                </FormActions>
              </GridCol>
            </Grid>
          </SideGridContent>

          <SideGridAside>
            <div className="k-u-margin-top-triple
                            k-u-margin-right-double
                            k-u-margin-left-quadruple">
              <DocLinkBox title="Lorem Ipsum"
                          text="Aenean leo ligula, porttitor eu, vitae
                                eleifend ac, enimiquam ante." />
            </div>

            <div className="k-u-margin-top-triple
                            k-u-margin-right-double
                            k-u-margin-left-quadruple">
              <DocLinkBox title="Lorem Ipsum"
                          text="Aenean leo ligula, porttitor eu, vitae
                                eleifend ac, enimiquam ante." />
            </div>
          </SideGridAside>
        </SideGrid>
      </div>
    )
  }
}

class MakerHeader extends React.Component {
  render() {
    return (
      <Header>
        <HeaderItems>
          <HeaderItem fixedSize={ true }>
            <HeaderLogo lightOnM={ true } { ...this.props.logo } />
          </HeaderItem>

          <HeaderItem className="k-Header__titles">
            <div>
              <p className="k-Header__title">TODO HeaderTitles - Étape 1</p>
              <p className="k-Header__subtitle">
                Commencez par l'essentiel
              </p>
            </div>
          </HeaderItem>
        </HeaderItems>

        <HeaderItems fixedSize={ true }>
          <HeaderItem>
            <p className="k-Paragraph k-Paragraph--quaternary">
              TODO Paragraph -
              Enregistré il y a { this.props.project.updated_at }
            </p>
          </HeaderItem>

          <HeaderItem>
            <a href={ this.props.button.href }
               className="k-Button k-Button--lithium">
              Sauvegarder et quitter
            </a>
          </HeaderItem>
        </HeaderItems>
      </Header>
    )
  }
}

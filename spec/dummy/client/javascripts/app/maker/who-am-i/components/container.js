import React from 'react'
import { Stepper } from 'kitten/components/steppers/stepper'
import DocLinkBox from 'kitten/components/box/doc-link-box'

export class MakerWhoAmIStep extends React.Component {
  render() {
    return (
      <div>
        <header className="k-Header" role="banner">

          <div className="k-Header__container">
            <div className="k-Header__row">
              <div className="k-Header__items">

                <p className="k-Header__item k-Header__item--fixedSize">
                  <a className="k-Header__logo k-Header__logo--lightOnM"
                     href="launcher-who-am-i">
                    LOGO
                  </a>
                </p>

                <div className="k-Header__item k-Header__titles">
                  <div>
                    <p className="k-Header__title">Étape 1</p>
                    <p className="k-Header__subtitle">
                      Commencez par l'essentiel
                    </p>
                  </div>
                </div>

              </div>

              <div className="k-Header__items k-Header__items--fixedSize">

                <div className="k-Header__item">
                  <p className="k-Paragraph k-Paragraph--quaternary">
                    Enregistré il y a 2 minutes
                  </p>
                </div>

                <div className="k-Header__item">
                  <a href="#" className="k-Button k-Button--lithium">
                    Sauvegarder et quitter
                  </a>
                </div>

              </div>
            </div>
          </div>

        </header>

        <div className="k-Row k-Row--centered k-Row--lightBottomBorder">
          <div className="k-Row__content">
            <Stepper items={ [
              {
                text: "Statut\n du créateur",
                href: "#",
                linkClassNames: "k-Stepper__link--inProgress",
                iconType: "inProgress",
              },
              {
                text: "Le projet",
                linkClassNames: "k-Stepper__link--inactive",
                iconType: "default",
              },
              {
                text: "Description\n sommaire",
                linkClassNames: "k-Stepper__link--inactive",
                iconType: "default",
              },
            ] } />
          </div>
        </div>

        <div className="k-SideGrid k-VerticalGrid__fluid">
          <div className="k-SideGrid__container k-VerticalGrid__container">
            <div className="k-SideGrid__row">
              <div className="k-SideGrid__content">

                <div className="k-Grid">
                  <div className="k-Grid__col--12
                              k-Grid__col--10@s
                              k-Grid__col--8@l
                              k-Grid__col--offset-1@s">

                    <p className="k-Title k-Title--secondary">
                      Qui suis-je&nbsp;?
                    </p>

                    <div className="k-RadioButton k-u-margin-bottom-triple">
                      <input id="karl-radio-button-1"
                             type="radio"
                             name="karl-radio-button"
                             className="k-RadioButton__input" />
                      <label for="karl-radio-button-1"
                             className="k-RadioButton__label">
                        Particulier / Auto-entrepreneur
                      </label>
                      <div className="k-RadioButton__labelContents">
                        <p className="k-Paragraph k-Paragraph--quaternary">
                          Harum trium sententiarum nulli prorsus assentior.
                          Nec enim illa prima vera est, ut, quem ad modum in
                          se quisque sit, sic in amicum sit animatus.
                        </p>
                      </div>
                    </div>

                    <div className="k-RadioButton k-u-margin-bottom-triple">
                      <input id="karl-radio-button-2"
                             type="radio"
                             name="karl-radio-button"
                             className="k-RadioButton__input" />
                      <label for="karl-radio-button-2"
                             className="k-RadioButton__label">
                        Association
                      </label>
                      <div className="k-RadioButton__labelContents">
                        <p className="k-Paragraph k-Paragraph--quaternary">
                          Harum trium sententiarum nulli prorsus assentior.
                          Nec enim illa prima vera est, ut, quem ad modum in
                          se quisque sit, sic in amicum sit animatus.
                        </p>
                      </div>
                    </div>

                    <div className="k-RadioButton k-u-margin-bottom-triple">
                      <input id="karl-radio-button-3"
                             type="radio"
                             name="karl-radio-button"
                             className="k-RadioButton__input" />
                      <label for="karl-radio-button-3"
                             className="k-RadioButton__label">
                        Entreprise
                      </label>
                      <div className="k-RadioButton__labelContents">
                        <p className="k-Paragraph k-Paragraph--quaternary">
                          Harum trium sententiarum nulli prorsus assentior.
                          Nec enim illa prima vera est, ut, quem ad modum in
                          se quisque sit, sic in amicum sit animatus.
                        </p>
                      </div>
                    </div>

                    <div className="k-RadioButton k-u-margin-bottom-triple">
                      <input id="karl-radio-button-4"
                             type="radio"
                             name="karl-radio-button"
                             className="k-RadioButton__input" />
                      <label for="karl-radio-button-4"
                             className="k-RadioButton__label">
                        Collectivité territorial
                      </label>
                      <div className="k-RadioButton__labelContents">
                        <p className="k-Paragraph k-Paragraph--quaternary">
                          Harum trium sententiarum nulli prorsus assentior.
                          Nec enim illa prima vera est, ut, quem ad modum in
                          se quisque sit, sic in amicum sit animatus.
                        </p>
                      </div>
                    </div>

                    <div className="k-Checkbox">
                      <input id="input-1"
                             type="checkbox"
                             className="k-Checkbox__input" />
                      <label for="input-1" className="k-Checkbox__label">
                        Déposez un projet Scouts et Guides de France.
                      </label>
                      <a href="#" className="k-Checkbox__link">
                        En savoir plus
                      </a>
                    </div>

                    <div className="k-Checkbox">
                      <input id="input-2"
                             type="checkbox"
                             className="k-Checkbox__input" />
                      <label for="input-2" className="k-Checkbox__label">
                        Déposez un projet Éclaireurs Unionistes de France.
                      </label>
                      <a href="#" className="k-Checkbox__link">
                        En savoir plus
                      </a>
                    </div>

                    <div className="k-FormActions
                                k-u-margin-top-quadruple
                                k-u-margin-bottom-quadruple">
                      <a className="k-Button k-Button--hydrogen" href="#">
                        Retour
                      </a>
                      <input className="k-Button k-Button--helium"
                             type="submit"
                             value="Suivant" />
                    </div>

                  </div>
                </div>
              </div>

              <div className="k-SideGrid__aside">
                <div className="k-SideGrid__asideContent">

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

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

import defaultProps from 'kitten/hoc/default-props'
import React from 'react'
import Dropdown from 'kitten/components/dropdowns/dropdown'
import ExternalRichLink from 'kitten/components/links/external-rich-link'
import objectAssign from 'core-js/library/fn/object/assign'

// Header platform switch common props
const unloggedHeaderPlatformSwitchButton = (<svg
    className="k-ButtonIcon__svg"
    viewBox="0 0 10 7"
    xmlns="http://www.w3.org/2000/svg">
  <path d="M5 6.243L3.586 4.828 7.828.586 9.243 2z"/>
  <path d="M5 6.243L.757 2 2.172.586l4.242 4.242z"/>
</svg>)

const platformSwitchProps = {
  positionedWithBorder: false,

  buttonId: 'k-PlatformSwitch',
  buttonClassName: 'k-ButtonIcon k-ButtonIcon--tiny',
  buttonContentOnExpanded: unloggedHeaderPlatformSwitchButton,
  buttonContentOnCollapsed: unloggedHeaderPlatformSwitchButton,

  refreshEvents: ['resize', 'karl:element#header:classToggled'],
  dropdownListClassName: 'k-PlatformSwitch',
  dropdownList: [
    <ExternalRichLink className="k-PlatformSwitch__item">
      <img src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44"
           alt="LOGO" />
    </ExternalRichLink>,
    <ExternalRichLink className="k-PlatformSwitch__item">
      <img src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44"
           alt="LOGO" />
    </ExternalRichLink>,
    <ExternalRichLink className="k-PlatformSwitch__item">
      <img src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44"
           alt="LOGO" />
    </ExternalRichLink>
  ],
}

// Unlogged header dropdown
const unloggedPlatformSwitchProps = objectAssign(
  { positionedWith: () => document.getElementById('header') },
  platformSwitchProps
)
const KarlUnloggedHeaderPlatformSwitch = defaultProps(
  Dropdown,
  unloggedPlatformSwitchProps
)

// Logged header dropdowns
const loggedPlatformSwitchProps = objectAssign(
  { positionedWith: () => document.getElementById('header-logged') },
  platformSwitchProps
)
const KarlLoggedHeaderPlatformSwitch = defaultProps(
  Dropdown,
  loggedPlatformSwitchProps
)

const KarlLoggedHeaderUserMenu = defaultProps(Dropdown, {
  positionedWith: () => document.getElementById('header-logged'),
  positionedWithBorder: false,
  positionedOn: 'right',

  buttonId: 'k-UserMenu',
  buttonTemplate: 'ButtonImageWithTextAndBadge',
  srcImg: 'https://placekitten.com/g/100/100',
  widthImg: 100,
  heightImg: 100,
  altImg: 'Alt Firstname',
  text: 'F',
  title: 'Profil',

  refreshEvents: ['resize', 'karl:element#header:classToggled'],
  dropdownListClassName: 'k-UserMenu',
  dropdownListArrow: (<span className="k-UserMenu__arrow" />),
  dropdownList: [
    <a className="k-UserMenu__item" href="#">Mon profil</a>,
    <a className="k-UserMenu__item" href="#">Mes projets</a>,
    <a className="k-UserMenu__item" href="#">Mes contributions</a>,
    <a className="k-UserMenu__item" href="#">Mes messages</a>,
    <a className="k-UserMenu__item
                  k-UserMenu__item--secondary
                  k-UserMenu__separation"
       href="#">
      Admin
    </a>,
    <a className="k-UserMenu__item k-UserMenu__item--secondary" href="#">
      Rapports
    </a>,
    <a className="k-UserMenu__item k-UserMenu__separation" href="#">
      Profil
    </a>,
    <a className="k-UserMenu__item" href="#">Réglages</a>,
    <a className="k-UserMenu__item" href="#">Déconnexion</a>
  ],
})

export { KarlUnloggedHeaderPlatformSwitch,
         KarlLoggedHeaderPlatformSwitch,
         KarlLoggedHeaderUserMenu }

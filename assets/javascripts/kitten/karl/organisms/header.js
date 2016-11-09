import defaultProps from 'kitten/hoc/default-props'
import React from 'react'
import Dropdown from 'kitten/components/dropdowns/dropdown'
import ExternalRichLink from 'kitten/components/links/external-rich-link'
import SimpleList from 'kitten/components/lists/simple-list'
import UserMenu from 'kitten/components/dropdowns/user-menu'
import objectAssign from 'core-js/library/fn/object/assign'

// Header platform switch common props
const platformSwitchDropdownList = [
  <ExternalRichLink
    className="k-PlatformSwitch__item"
    title="Se rendre sur le site de KissKissBankBank">
    <img className="k-ExternalRichLink__image"
         src="/assets/brand/kisskissbankbank.svg"
         alt="Logo de KissKissBankBank" />
  </ExternalRichLink>,
  <ExternalRichLink
    className="k-PlatformSwitch__item"
    title="Se rendre sur le site de hellomerci">
    <img className="k-ExternalRichLink__image"
         src="/assets/brand/hellomerci.svg"
         alt="Logo de hellomerci" />
  </ExternalRichLink>,
  <ExternalRichLink
    className="k-PlatformSwitch__item"
    title="Se rendre sur le site de LENDOPOLIS">
    <img className="k-ExternalRichLink__image"
         src="/assets/brand/lendopolis.svg"
         alt="Logo de LENDOPOLIS" />
  </ExternalRichLink>,
]

const unloggedHeaderPlatformSwitchButton = (<svg
    className="k-ButtonIcon__svg"
    viewBox="0 0 10 7"
    xmlns="http://www.w3.org/2000/svg">
  <path className="k-Dropdown__button__svgPath"
        d="M5 6.243L.757 2 2.172.586l4.242 4.242z"/>
  <path className="k-Dropdown__button__svgPath k-Dropdown__button__svgPathRight"
        d="M5 6.243L3.586 4.828 7.828.586 9.243 2z"/>
</svg>)

const platformSwitchProps = {
  positionedWithBorder: true,

  buttonId: 'k-PlatformSwitch',
  buttonClassName: 'k-ButtonIcon k-ButtonIcon--default k-ButtonIcon--dropdown ' +
                   'k-Dropdown__button--rotationOnExpanded',
  buttonContentOnExpanded: unloggedHeaderPlatformSwitchButton,
  buttonContentOnCollapsed: unloggedHeaderPlatformSwitchButton,

  refreshEvents: ['resize', 'karl:element#header:classToggled'],
  dropdownContent: <SimpleList className="k-PlatformSwitch
                                          k-PlatformSwitch--withoutBorderTop"
                               role="menubar"
                               list={ platformSwitchDropdownList } />
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

const userMenuDropdownList = [
  <a className="k-UserMenu__item" href="#">Mon profil</a>,
  <a className="k-UserMenu__item" href="#">Mes projets</a>,
  <a className="k-UserMenu__item" href="#">Mes contributions</a>,
  <a className="k-UserMenu__item" href="#">Mes messages</a>,
  <a className="k-UserMenu__item
                k-UserMenu__item--secondary
                k-UserMenu__borderTop"
     href="#">
    Admin
  </a>,
  <a className="k-UserMenu__item k-UserMenu__item--secondary" href="#">
    Rapports
  </a>,
  <a className="k-UserMenu__item k-UserMenu__borderTop" href="#">
    Profil
  </a>,
  <a className="k-UserMenu__item" href="#">Réglages</a>,
  <a className="k-UserMenu__item" href="#">Déconnexion</a>,
]

const KarlLoggedHeaderUserMenu = defaultProps(UserMenu, {
  // Position
  positionedWith: () => document.getElementById('header-logged'),
  positionedWithBorder: true,
  positionedOn: 'right',
  spaceAroundGrid: 20,

  // Button
  buttonId: 'k-UserMenu',
  buttonImgSrc: 'https://placekitten.com/g/100/100',
  buttonImgWidth: 100,
  buttonImgHeight: 100,
  buttonImgAlt: 'Alt Firstname',
  buttonText: 'Firstname Lastname',
  buttonTitle: 'Profil',
  buttonNotifications: 42,

  // Dropdown content
  dropdownList: [
    <a className="k-UserMenu__item" href="#">Mon profil</a>,
    <a className="k-UserMenu__item" href="#">Mes projets</a>,
    <a className="k-UserMenu__item" href="#">Mes contributions</a>,
    <a className="k-UserMenu__item" href="#">Mes messages</a>,
    <a className="k-UserMenu__item
                  k-UserMenu__item--secondary
                  k-UserMenu__borderTop"
       href="#">
      Admin
    </a>,
    <a className="k-UserMenu__item k-UserMenu__item--secondary" href="#">
      Rapports
    </a>,
    <a className="k-UserMenu__item k-UserMenu__borderTop" href="#">
      Profil
    </a>,
    <a className="k-UserMenu__item" href="#">Réglages</a>,
    <a className="k-UserMenu__item" href="#">Déconnexion</a>
  ],

  // Settings
  refreshEvents: ['resize', 'karl:element#header:classToggled'],
})

export { KarlUnloggedHeaderPlatformSwitch,
         KarlLoggedHeaderPlatformSwitch,
         KarlLoggedHeaderUserMenu }

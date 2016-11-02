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
    <img src="/assets/brand/kisskissbankbank.svg"
         alt="Logo de KissKissBankBank" />
  </ExternalRichLink>,
  <ExternalRichLink
    className="k-PlatformSwitch__item"
    title="Se rendre sur le site de hellomerci">
    <img src="/assets/brand/hellomerci.svg"
         alt="Logo de hellomerci" />
  </ExternalRichLink>,
  <ExternalRichLink
    className="k-PlatformSwitch__item"
    title="Se rendre sur le site de LENDOPOLIS">
    <img src="/assets/brand/lendopolis.svg"
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
  dropdownListClassName: 'k-PlatformSwitch k-PlatformSwitch--withoutBorderTop',
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
  <a className="k-UserMenu__item" href="#">Déconnexion</a>,
]

const KarlLoggedHeaderUserMenu = defaultProps(UserMenu, {
  // Position
  positionedWith: () => document.getElementById('header-logged'),
  positionedWithBorder: false,
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

  // Settings
  refreshEvents: ['resize', 'karl:element#header:classToggled'],
})

// Phone dropdown.

const phoneDropdownButton = (
  <svg className="k-ButtonIcon__svg"
       viewBox="0 0 16 18"
       xmlns="http://www.w3.org/2000/svg">
    <path d='M3.354 0C2.238 0 .496.498.207 2.268-.2 4.764 1.533 9.09
      4.047 12.202c2.49 3.084 6.305 5.63 8.86
      5.792.06.004.12.006.177.006 2.39 0 3.002-3.158
      2.694-3.548l-4.335-1.94c-.26-.15-.532-.225-.79-.225-.263
      0-.51.08-.713.24l-.866.63c-.093.034-.194.05-.302.05-1.807
      0-5.535-4.758-4.636-6.166.006-.008.79-.724.79-.724.387-.313.534-.882.347-1.444L4.275.206C4.18.088
      3.823 0 3.355 0' />
  </svg>
)

const phoneDropdownContent = (
  <div className="k-PhoneDropdown">
    <p className="k-PhoneDropdown__text--small
                  k-PhoneDropdown__text--strong">
      Vous avez une question&nbsp;?
    </p>
    <p>
      Notre équipe vous répond au&nbsp;: <br/>
      <strong className="k-PhoneDropdown__text--strong">09 72 32 49 42</strong>
    </p>
  </div>
)

const KarlPhoneDropdown = defaultProps(Dropdown, {
  // Position
  positionedWith: () => document.getElementById('header-logged'),
  positionedWithBorder: false,
  positionedOn: 'right',
  spaceAroundGrid: 20,

  // Button
  buttonClassName: 'k-ButtonIcon k-ButtonIcon--default k-ButtonIcon--signup',
  buttonContentOnExpanded: phoneDropdownButton,
  buttonContentOnCollapsed: phoneDropdownButton,

  // Content
  dropdownListClassName: '',
  dropdownContent: phoneDropdownContent,

  // Settings
  refreshEvents: ['resize', 'karl:element#header:classToggled']
})

export { KarlUnloggedHeaderPlatformSwitch,
         KarlLoggedHeaderPlatformSwitch,
         KarlLoggedHeaderUserMenu,
         KarlPhoneDropdown }

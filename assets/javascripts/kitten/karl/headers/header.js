import React from 'react'
import classNames from 'classnames'
import { defaultProps } from '../../hoc/default-props'
import { Dropdown } from '../../components/dropdowns/dropdown'
import { ExternalRichLink } from '../../components/links/external-rich-link'
import { NavList } from '../../components/lists/nav-list'
import { UserMenu } from '../../components/dropdowns/user-menu'
import { PhoneDropdown } from '../../components/dropdowns/phone-dropdown'
import { Search } from '../../components/form/search'
import {
  Header,
  HeaderItems,
  HeaderItem,
} from '../../components/headers/header'
import { HeaderTitles } from '../../components/headers/header-titles'
import { HeaderLogo } from '../../components/headers/header-logo'

export const KarlHeader = () => {
  return (
    <Header id="header">
      <HeaderItems>
        <HeaderItem fixedSize="true" id="k-Header__platformSwitchDropdown">
          <KarlUnloggedHeaderPlatformSwitch />
        </HeaderItem>

        <HeaderItem tag="p" fixedSize="true">
          <HeaderLogo
            href="pages/header"
            src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=40"
            alt="LOGO"
            lightOnM={true}
            lightOnXxs={true}
          />
        </HeaderItem>

        <HeaderItem tag="nav" className="k-Header__nav">
          <ul className="k-HorizontalNav" role="menubar">
            <li className="k-HorizontalNav__element" role="menuitem">
              <a className="k-HorizontalNav__item k-Header__nav__item" href="#">
                Nav link 1
              </a>
            </li>
            <li className="k-HorizontalNav__element" role="menuitem">
              <a className="k-HorizontalNav__item k-Header__nav__item" href="#">
                Nav link 2
              </a>
            </li>
            <li className="k-HorizontalNav__element" role="menuitem">
              <a className="k-HorizontalNav__item k-Header__nav__item" href="#">
                Nav link 3
              </a>
            </li>
            <li className="k-HorizontalNav__element" role="menuitem">
              <a
                className="k-HorizontalNav__item k-Header__nav__item is-selected"
                href="#"
              >
                Nav link 4
              </a>
            </li>
          </ul>
        </HeaderItem>
      </HeaderItems>

      <HeaderItems fixedSize="true">
        <HeaderItem id="k-PhoneDropdown">
          <button className="k-ButtonIcon k-ButtonIcon--hydrogen">
            <svg
              className="k-ButtonIcon__svg"
              viewBox="-0.7 -0.7 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7"
                cy="7"
                r="7"
                stroke="#333"
                strokeWidth="1.1"
                className="k-ButtonIcon__svg__stroke"
                fill="none"
              />
              <path d="M13 11 L17 15 L15.5 16.5 L11.5 12.7z" />
            </svg>
          </button>
        </HeaderItem>

        <HeaderItem className="k-Header__signup">
          <a
            href="#"
            className={classNames(
              'k-Button',
              'k-Button--hydrogen',
              'k-Header__button',
            )}
          >
            S'identifier
          </a>
        </HeaderItem>
      </HeaderItems>
    </Header>
  )
}

export const KarlHeaderWithSearchInput = () => {
  return (
    <Header id="header-search">
      <HeaderItems>
        <HeaderItem id="k-Header__platformSwitchDropdown">
          <KarlLoggedHeaderPlatformSwitch />
        </HeaderItem>

        <HeaderItem tag="p" fixedSize="true">
          <HeaderLogo
            href="pages/header"
            src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=40"
            alt="LOGO"
            lightOnM={true}
            lightOnXxs={true}
          />
        </HeaderItem>

        <HeaderItem tag="nav" className="k-Header__nav">
          <ul className="k-HorizontalNav" role="menubar">
            <li className="k-HorizontalNav__element" role="menuitem">
              <a className="k-HorizontalNav__item k-Header__nav__item" href="#">
                Nav link 1
              </a>
            </li>
            <li className="k-HorizontalNav__element" role="menuitem">
              <a className="k-HorizontalNav__item k-Header__nav__item" href="#">
                Nav link 2
              </a>
            </li>
            <li className="k-HorizontalNav__element" role="menuitem">
              <a className="k-HorizontalNav__item k-Header__nav__item" href="#">
                Nav link 3
              </a>
            </li>
            <li className="k-HorizontalNav__element" role="menuitem">
              <a
                className="k-HorizontalNav__item k-Header__nav__item is-selected"
                href="#"
              >
                Nav link 4
              </a>
            </li>
          </ul>
        </HeaderItem>
      </HeaderItems>

      <HeaderItems fixedSize="true">
        <HeaderItem className="k-Header__search">
          <Search
            inputId="q"
            inputName="q"
            inputPlaceholder="Rechercher…"
            submitLabel="Search"
            actionUrl="#"
          />
        </HeaderItem>

        <HeaderItem className="k-Header__signup">
          <a
            href="#"
            className={classNames(
              'k-Button',
              'k-Button--hydrogen',
              'k-Header__button',
            )}
          >
            S'identifier
          </a>
        </HeaderItem>
      </HeaderItems>
    </Header>
  )
}

export const KarlHeaderWhenLogged = () => {
  return (
    <Header id="header-logged">
      <HeaderItems>
        <HeaderItem id="k-Header__platformSwitchDropdown">
          <KarlLoggedHeaderPlatformSwitch />
        </HeaderItem>

        <HeaderItem tag="p" fixedSize="true">
          <HeaderLogo
            href="pages/header"
            src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=40"
            alt="LOGO"
            lightOnM={true}
            lightOnXxs={true}
          />
        </HeaderItem>

        <HeaderItem tag="nav" className="k-Header__nav">
          <ul className="k-HorizontalNav" role="menubar">
            <li className="k-HorizontalNav__element" role="menuitem">
              <a className="k-HorizontalNav__item k-Header__nav__item" href="#">
                Nav link 1
              </a>
            </li>
            <li className="k-HorizontalNav__element" role="menuitem">
              <a className="k-HorizontalNav__item k-Header__nav__item" href="#">
                Nav link 2
              </a>
            </li>
            <li className="k-HorizontalNav__element" role="menuitem">
              <a className="k-HorizontalNav__item k-Header__nav__item" href="#">
                Nav link 3
              </a>
            </li>
            <li className="k-HorizontalNav__element" role="menuitem">
              <a
                className="k-HorizontalNav__item k-Header__nav__item is-selected"
                href="#"
              >
                Nav link 4
              </a>
            </li>
          </ul>
        </HeaderItem>
      </HeaderItems>

      <HeaderItems fixedSize="true">
        <HeaderItem>
          <button className="k-ButtonIcon k-ButtonIcon--hydrogen">
            <svg
              className="k-ButtonIcon__svg"
              viewBox="-0.7 -0.7 18 18"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="7"
                cy="7"
                r="7"
                stroke="#333"
                strokeWidth="1.1"
                className="k-ButtonIcon__svg__stroke"
                fill="none"
              />
              <path d="M13 11 L17 15 L15.5 16.5 L11.5 12.7z" />
            </svg>
          </button>
        </HeaderItem>

        <HeaderItem id="k-UserMenuDropdownLogged">
          <KarlLoggedHeaderUserMenu />
        </HeaderItem>
      </HeaderItems>
    </Header>
  )
}

export const KarlHeaderWithTitles = () => {
  return (
    <Header id="header-with-titles">
      <HeaderItems>
        <HeaderItem tag="p" fixedSize="true">
          <a
            className={classNames(
              'k-Header__logo',
              'k-Header__logo--lightOnM',
              'k-Header__logo--lightOnXxs',
            )}
            href="pages/header"
          >
            <img
              src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=40"
              alt="LOGO"
            />
          </a>
        </HeaderItem>

        <HeaderTitles title="Title" subtitle="Lorem ipsum…" />
      </HeaderItems>

      <HeaderItems fixedSize="true">
        <HeaderItem className="k-Header__signup">
          <a
            href="#"
            className={classNames(
              'k-Button',
              'k-Button--hydrogen',
              'k-Header__button',
            )}
          >
            S'identifier
          </a>
        </HeaderItem>
      </HeaderItems>
    </Header>
  )
}

// Header platform switch common props
const platformSwitchDropdownList = [
  <ExternalRichLink
    className="k-PlatformSwitch__item"
    title="Se rendre sur le site de KissKissBankBank"
  >
    <img
      className="k-ExternalRichLink__image"
      src="/assets/images/brand/kisskissbankbank.svg"
      alt="Logo de KissKissBankBank"
    />
  </ExternalRichLink>,
  <ExternalRichLink
    className="k-PlatformSwitch__item"
    title="Se rendre sur le site de hellomerci"
  >
    <img
      className="k-ExternalRichLink__image"
      src="/assets/images/brand/hellomerci.svg"
      alt="Logo de hellomerci"
    />
  </ExternalRichLink>,
  <ExternalRichLink
    className="k-PlatformSwitch__item"
    title="Se rendre sur le site de LENDOPOLIS"
  >
    <img
      className="k-ExternalRichLink__image"
      src="/assets/images/brand/lendopolis.svg"
      alt="Logo de LENDOPOLIS"
    />
  </ExternalRichLink>,
]

const unloggedHeaderPlatformSwitchButton = (
  <svg
    className="k-ButtonIcon__svg"
    viewBox="0 0 10 7"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className="k-Dropdown__button__svgPath"
      d="M5 6.243L.757 2 2.172.586l4.242 4.242z"
    />
    <path
      className="k-Dropdown__button__svgPath k-Dropdown__button__svgPathRight"
      d="M5 6.243L3.586 4.828 7.828.586 9.243 2z"
    />
  </svg>
)

const platformSwitchProps = {
  positionedWithBorder: true,

  buttonId: 'k-PlatformSwitch',
  buttonClassName:
    'k-ButtonIcon k-ButtonIcon--hydrogen k-ButtonIcon--dropdown ' +
    'k-Dropdown__button--rotationOnExpanded',
  buttonContentOnExpanded: unloggedHeaderPlatformSwitchButton,
  buttonContentOnCollapsed: unloggedHeaderPlatformSwitchButton,

  refreshEvents: ['resize', 'karl:element#header:classToggled'],
  dropdownListClassName: 'k-PlatformSwitch k-PlatformSwitch--withoutBorderTop',
  dropdownContent: (
    <NavList
      className={classNames(
        'k-PlatformSwitch',
        'k-PlatformSwitch--withoutBorderTop',
      )}
      role="menubar"
      list={platformSwitchDropdownList}
    />
  ),
  onToggle: function() {
    // Example event to trigger
    const event = document.createEvent('Event')
    event.initEvent('karl:platformSwitch:toggle', true, true)
    window.dispatchEvent(event)
  },
}

// Unlogged header dropdown
const unloggedPlatformSwitchProps = {
  positionedWith: () => document.getElementById('header'),
  ...platformSwitchProps,
}
export const KarlUnloggedHeaderPlatformSwitch = defaultProps(
  Dropdown,
  unloggedPlatformSwitchProps,
)

// Logged header dropdowns
const loggedPlatformSwitchProps = {
  positionedWith: () => document.getElementById('header-logged'),
  ...platformSwitchProps,
}
export const KarlLoggedHeaderPlatformSwitch = defaultProps(
  Dropdown,
  loggedPlatformSwitchProps,
)

export const KarlLoggedHeaderUserMenu = defaultProps(UserMenu, {
  // Position
  positionedWith: () => document.getElementById('header-logged'),
  positionedWithBorder: true,
  positionedOn: 'right',
  spaceAroundGrid: 20,

  // Button
  buttonId: 'k-UserMenu',
  buttonImgSrc: 'https://placehold.it/200x200/caf4fe/caf4fe',
  buttonImgWidth: 100,
  buttonImgHeight: 100,
  buttonImgAlt: 'Alt Firstname',
  buttonText: 'Firstname Lastname',
  buttonTitle: 'Profil',
  buttonNotifications: 42,

  // Dropdown content
  dropdownList: [
    <a className="k-UserMenu__item" href="#">
      Mon profil
    </a>,
    <a className="k-UserMenu__item" href="#">
      Mes projets
    </a>,
    <a className="k-UserMenu__item" href="#">
      Mes contributions
    </a>,
    <a className="k-UserMenu__item" href="#">
      Mes messages
    </a>,
    <a
      className="k-UserMenu__item
                  k-UserMenu__item--secondary
                  k-UserMenu__borderTop"
      href="#"
    >
      Admin
    </a>,
    <a className="k-UserMenu__item k-UserMenu__item--secondary" href="#">
      Rapports
    </a>,
    <a className="k-UserMenu__item k-UserMenu__borderTop" href="#">
      Profil
    </a>,
    <a className="k-UserMenu__item" href="#">
      Réglages
    </a>,
    <a className="k-UserMenu__item" href="#">
      Déconnexion
    </a>,
  ],

  // Settings
  refreshEvents: ['resize', 'karl:element#header:classToggled'],
})

// Phone dropdown.

export const KarlPhoneDropdown = defaultProps(PhoneDropdown, {
  // Position
  positionedWith: () => document.getElementById('header-logged'),

  // Content
  dropdownContent: (
    <div className="k-PhoneDropdown k-Dropdown__content--large">
      <p
        className={classNames(
          'k-PhoneDropdown__text',
          'k-u-size-micro',
          'k-u-weight-regular',
        )}
      >
        Vous avez une question&nbsp;?
      </p>
      <p className="k-PhoneDropdown__text">
        Notre équipe vous répond au&nbsp;: <br />
        <strong className="k-u-weight-regular">
          <a className="k-PhoneDropdown__link" href="tel:+33972324942">
            09 72 32 49 42
          </a>
        </strong>
      </p>
    </div>
  ),

  // Settings
  refreshEvents: ['resize', 'karl:element#header:classToggled'],
})

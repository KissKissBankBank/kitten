import React from "react";
import { defaultProps } from "kitten/hoc/default-props";
import { ExternalRichLink } from "kitten/components/links/external-rich-link";
import { Dropdown } from "kitten/components/dropdowns/dropdown";
import { NavList } from "kitten/components/lists/nav-list";
import { UserMenu } from "kitten/components/dropdowns/user-menu";

// KarlPlatformSwitch
const karlPlatformSwitchButtonContent = (
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
);

const platformSwitchDropdownList = [
  <ExternalRichLink className="k-PlatformSwitch__item">
    <img
      src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44"
      alt="LOGO"
    />
  </ExternalRichLink>,
  <ExternalRichLink className="k-PlatformSwitch__item">
    <img
      src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44"
      alt="LOGO"
    />
  </ExternalRichLink>,
  <ExternalRichLink className="k-PlatformSwitch__item">
    <img
      src="https://placeholdit.imgix.net/~text?txt=LOGO&amp;w=180&amp;h=44"
      alt="LOGO"
    />
  </ExternalRichLink>
];

const KarlPlatformSwitch = defaultProps(Dropdown, {
  positionedWith: () => document.getElementById("k-PlatformSwitchDropdown"),
  positionedWithBorder: false,

  buttonId: "k-PlatformSwitch",
  buttonClassName: "k-ButtonIcon k-ButtonIcon--hydrogen k-ButtonIcon--dropdown",
  buttonContentOnExpanded: karlPlatformSwitchButtonContent,
  buttonContentOnCollapsed: karlPlatformSwitchButtonContent,

  dropdownContent: (
    <NavList
      className="k-PlatformSwitch"
      role="menubar"
      list={platformSwitchDropdownList}
    />
  )
});

const KarlUserMenuDropdown = defaultProps(UserMenu, {
  // Position
  positionedWith: () => document.getElementById("k-UserMenuDropdown"),
  positionedWithBorder: false,
  spaceAroundGrid: 20,

  // Button
  buttonId: "k-UserMenu",
  buttonImgSrc: "https://placehold.it/100x100/caf4fe/caf4fe",
  buttonImgWidth: 100,
  buttonImgHeight: 100,
  buttonImgAlt: "Alt Firstname",
  buttonText: "Firstname Lastname",
  buttonTitle: "Profil",
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
    </a>
  ]
});

export { KarlPlatformSwitch, KarlUserMenuDropdown };

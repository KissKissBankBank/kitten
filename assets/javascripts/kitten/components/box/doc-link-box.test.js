import React from "react";
import { DocLinkBox } from "kitten/components/box/doc-link-box";
import { LinkBox } from "kitten/components/box/link-box";

describe("<DocLinkBox />", () => {
  const component = shallow(<DocLinkBox />);

  it("renders a <LinkBox />", () => {
    expect(component.find(LinkBox).exists()).toBe(true);
  });

  it("renders an svg icon", () => {
    expect(component.props().displayIcon).toBe(true);
    expect(component.find(".k-LinkBox__icon--svg").exists()).toBe(true);
  });
});

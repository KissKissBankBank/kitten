import React from "react";
import { Badge } from "kitten/components/notifications/badge";

describe("<Badge />", () => {
  describe("by default", () => {
    const badge = shallow(<Badge />);

    it("is a <span />", () => {
      expect(badge.is("span")).toBe(true);
    });

    it("has a default class", () => {
      expect(badge.hasClass("k-Badge")).toBe(true);
    });
  });

  describe("with className prop", () => {
    const badge = shallow(<Badge className="custom__class" />);

    it("has a custom class", () => {
      expect(badge.hasClass("custom__class")).toBe(true);
    });
  });

  describe("with spaced prop", () => {
    const badge = shallow(<Badge spaced />);

    it("has a good class", () => {
      expect(badge.hasClass("k-Badge--spaced")).toBe(true);
    });
  });

  describe("with other prop", () => {
    const badge = shallow(<Badge aria-hidden="true" />);

    it("has an aria-hidden attribute", () => {
      expect(badge.props()["aria-hidden"]).toBe("true");
    });
  });

  describe("with children", () => {
    const badge = shallow(<Badge>42</Badge>);

    it("has text", () => {
      expect(badge.text()).toBe("42");
    });
  });
});

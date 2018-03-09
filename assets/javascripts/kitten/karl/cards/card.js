import React from "react";
import classNames from "classnames";
import { card } from "kitten/hoc/card";

const KarlCardComponent = props => (
  <div style={{ height: "100px" }} {...props} />
);

export const KarlCard = card(KarlCardComponent, {
  light: true
});

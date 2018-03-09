import React from "react";
import LinkBox from "./link-box";
import { LinkBoxIllustration } from "kitten/components/illustrations/link-box-illustration";

export class DocLinkBox extends React.Component {
  render() {
    return (
      <LinkBox {...this.props} displayIcon>
        <LinkBoxIllustration className="k-LinkBox__icon--svg" />
      </LinkBox>
    );
  }
}

// DEPRECATED: do not use default export.
export default DocLinkBox;

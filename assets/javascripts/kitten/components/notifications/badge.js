import React from "react";
import classNames from "classnames";

export class Badge extends React.Component {
  render() {
    const { className, spaced, ...others } = this.props;
    const badgeClassName = classNames("k-Badge", className, {
      "k-Badge--spaced": spaced
    });

    return <span className={badgeClassName} {...others} />;
  }
}

Badge.defaultProps = {
  className: null,
  spaced: false
};

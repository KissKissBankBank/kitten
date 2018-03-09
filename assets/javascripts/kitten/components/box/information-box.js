import React, { Component } from "react";
import classNames from "classnames";
import { Title } from "kitten/components/typography/title";
import { Marger } from "kitten/components/layout/marger";

export class InformationBox extends Component {
  render() {
    const { title, children, ...other } = this.props;

    return (
      <div className="k-InformationBox" {...other}>
        <div className="k-InformationBox__container">
          <Marger bottom="1">
            <Title tag="p" margin={false} modifier="quaternary">
              {title}
            </Title>
          </Marger>
          <Marger top="1">{children}</Marger>
        </div>
      </div>
    );
  }
}

InformationBox.defaultProps = {
  title: null,
  children: null
};

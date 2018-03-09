import React from "react";
import classNames from "classnames";
import { SideLayout } from "kitten/components/layout/side-layout";
import { Grid, GridCol } from "kitten/components/grid/grid";
import { Title } from "kitten/components/typography/title";
import { Paragraph } from "kitten/components/typography/paragraph";
import { InformationBox } from "kitten/components/box/information-box";
import { DocLinkBox } from "kitten/components/box/doc-link-box";
import { FormActions } from "kitten/components/form/form-actions";
import { Button } from "kitten/components/buttons/button";
import { Label } from "kitten/components/form/label";
import { TextInputWithLimit } from "kitten/components/form/text-input-with-limit";

export class KarlSideLayout extends React.Component {
  renderDocLinkBox(item) {
    const { id, ...docLinkBoxProps } = item;

    return (
      <div
        key={id}
        className={classNames(
          "k-u-margin-top-triple",
          "k-u-margin-right-double",
          "k-u-margin-left-quadruple"
        )}
      >
        <DocLinkBox {...docLinkBoxProps} />
      </div>
    );
  }

  renderDocLinkBoxes() {
    return this.props.sidebar.docLinkBoxes.items.map(this.renderDocLinkBox);
  }

  renderInformationBox() {
    return (
      <div
        key="karlSideLayoutInformationBox"
        className={classNames(
          "k-u-margin-top-quadruple",
          "k-u-margin-right-quadruple",
          "k-u-margin-left-quadruple"
        )}
      >
        <InformationBox title={this.props.sidebar.informationBox.title}>
          <p>{this.props.sidebar.informationBox.text.paragraph1}</p>
          <p className="k-u-margin-bottom-none">
            {this.props.sidebar.informationBox.text.paragraph2}
          </p>
        </InformationBox>
      </div>
    );
  }

  renderSidebar() {
    return [this.renderDocLinkBoxes(), this.renderInformationBox()];
  }

  renderTitle() {
    return <Title>{this.props.form.title}</Title>;
  }

  renderIntro() {
    return <Paragraph>{this.props.form.intro}</Paragraph>;
  }

  renderSummaryProjectForm() {
    return (
      <div className="k-u-margin-bottom-triple">
        <Label
          className="k-u-margin-bottom-single"
          tag="span"
          size="tiny"
          focusId={false}
        >
          {this.shortDescField().label}
        </Label>
        <TextInputWithLimit
          onBlur={this.handleInputUpdate}
          name={this.shortDescField().name}
          tag="textarea"
          placeholder={this.shortDescField().placeholder}
          rows="8"
          limit="500"
        />
      </div>
    );
  }

  renderActions() {
    return (
      <FormActions
        className={classNames(
          "k-u-margin-top-quadruple",
          "k-u-margin-bottom-quadruple"
        )}
      >
        <Button tag="a" modifier="hydrogen" href={this.props.previousStepUrl}>
          {this.props.previousStepLabel}
        </Button>

        <Button tag="a" modifier="helium" onClick={this.handleOnSubmit}>
          {this.props.nextStepLabel}
        </Button>
      </FormActions>
    );
  }

  renderSideLayout() {
    return (
      <SideLayout
        className="k-VerticalGrid__fluid"
        sidebar={this.renderSidebar()}
      >
        {this.renderTitle()}
        <Grid>
          <GridCol col-s="10" col-l="8">
            {this.renderIntro()}
            {this.renderSummaryProjectForm()}
            {this.renderActions()}
          </GridCol>
        </Grid>
      </SideLayout>
    );
  }

  render() {
    return (
      <div className="k-VerticalGrid__page">{this.renderSideLayout()}</div>
    );
  }

  shortDescField() {
    return this.props.form.fields["project[short_desc]"];
  }
}

import React from "react";

// Grid over all elements that is toggled when calling ctrl+g.
export class DevGrid extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: !!props.visible
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);

    if (window.sessionStorage.getItem(this.props.storageKey))
      this.setState({ visible: true });
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    const char = String.fromCharCode(e.keyCode).toLowerCase();
    if (!e.ctrlKey || char != "g") return;

    if (this.state.visible) this.hide();
    else this.show();
  }

  show() {
    window.sessionStorage.setItem(this.props.storageKey, "on");
    this.setState({ visible: true });
  }

  hide() {
    window.sessionStorage.removeItem(this.props.storageKey);
    this.setState({ visible: false });
  }

  render() {
    const style = this.state.visible ? null : { display: "none" };
    return (
      <div style={style}>
        <div className="k-DevBreakpoint" />

        <div className="k-DevGrid">
          <div className="k-DevGrid__container">
            <div className="k-DevGrid__row">
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
              <div className="k-DevGrid__col">
                <div className="k-DevGrid__inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

DevGrid.defaultProps = {
  storageKey: "k-devgrid"
};

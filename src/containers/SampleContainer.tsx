import React from "react";

import { Sample } from "Components";

class SampleContainer extends React.Component {
  public render() {
    return <Sample>{this.props.children}</Sample>;
  }
}

// connect to redux or something
export default SampleContainer;

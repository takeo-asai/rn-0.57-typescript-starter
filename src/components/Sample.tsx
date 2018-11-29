import React from "react";
import { Text } from "react-native";

class Sample extends React.Component {
  public render() {
    return <Text>Sample, {this.props.children}</Text>;
  }
}

export default Sample;

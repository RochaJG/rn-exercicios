import React, { Component } from "react";
import { View, Text } from "react-native";

export default class Simples extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.texto}</Text>
      </View>
    );
  }
}

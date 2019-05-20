import React, { Component } from "react";
import { View, Text } from "react-native";

import Padrao from "../style/Padrao";

export default class Simples extends Component {
  render() {
    return (
      <View>
        <Text style={Padrao.ex}>{this.props.texto}</Text>
      </View>
    );
  }
}

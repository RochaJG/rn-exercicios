import React from "react";
import { View, Text } from "react-native";

const fonte = { style: { fontSize: 30 } };
const margin = { style: { marginLeft: 20 } };

filhosComProps = props =>
  React.Children.map(props.children, c =>
    React.cloneElement(c, { ...props, ...c.props })
  );

export const Filho = props => (
  <View {...margin}>
    <Text {...fonte}>
      Filho: {props.nome} {props.sobrenome}
    </Text>
  </View>
);

export const Pai = props => (
  <View {...margin}>
    <Text {...fonte}>
      Pai: {props.nome} {props.sobrenome}
    </Text>
    {/* Funciona apenas para um elemento filho */}
    {/* {React.cloneElement(props.children, { ...props, ...props.children.props })} */}
    {filhosComProps(props)}
  </View>
);

export const Avo = props => (
  <View>
    <Text {...fonte}>
      Avô: {props.nome} {props.sobrenome}
    </Text>
    <Pai nome="André" sobrenome={props.sobrenome}>
      <Filho nome="Ana" />
      <Filho nome="Gui" />
      <Filho nome="Davi" />
    </Pai>
    <Pai {...props} nome="Pedro">
      <Filho nome="Rebeca" />
      <Filho nome="Renato" />
    </Pai>
  </View>
);

export default Avo;

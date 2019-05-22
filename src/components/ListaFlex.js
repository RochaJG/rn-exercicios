import React from "react";
import { ScrollView, View, FlatList, Text } from "react-native";

const alunos = [
  { id: 1, nome: "João", nota: 7.9 },
  { id: 2, nome: "Ana", nota: 9.1 },
  { id: 3, nome: "Claudia", nota: 5.4 },
  { id: 4, nome: "Roberto", nota: 7.6 },
  { id: 5, nome: "Rafael", nota: 3.8 },
  { id: 6, nome: "Guilherme", nota: 9.0 },
  { id: 7, nome: "Rebeca", nota: 10.0 },
  { id: 8, nome: "Bia", nota: 7.5 },
  { id: 9, nome: "Tobias", nota: 5.5 },
  { id: 10, nome: "Fernando", nota: 8.3 },

  { id: 11, nome: "João", nota: 7.9 },
  { id: 12, nome: "Ana", nota: 9.1 },
  { id: 13, nome: "Claudia", nota: 5.4 },
  { id: 14, nome: "Roberto", nota: 7.6 },
  { id: 15, nome: "Rafael", nota: 3.8 },
  { id: 16, nome: "Guilherme", nota: 9.0 },
  { id: 17, nome: "Rebeca", nota: 10.0 },
  { id: 18, nome: "Bia", nota: 7.5 },
  { id: 19, nome: "Tobias", nota: 5.5 },
  { id: 20, nome: "Fernando", nota: 8.3 }
];

const itemStyle = {
  paddingHorizontal: 15,
  height: 50,
  backgroundColor: "#ddd",
  borderWidth: 0.5,
  borderColor: "#222",

  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between"
};

export const Aluno = props => (
  <View style={itemStyle}>
    <Text>Nome: {props.nome}</Text>
    <Text style={{ fontWeight: "bold" }}>Nota: {props.nota}</Text>
  </View>
);

export default props => {
  const renderItem = ({ item }) => {
    return <Aluno {...item} />;
  };

  return (
    <ScrollView>
      <FlatList
        data={alunos}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
      />
    </ScrollView>
  );
};

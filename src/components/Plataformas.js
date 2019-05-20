import React from "react";
import {
  TouchableOpacity,
  Text,
  Alert,
  ToastAndroid,
  Platform
} from "react-native";

export default props => {
  const notificar = msg => {
    if (Platform.OS === "android") {
      ToastAndroid.show(msg, ToastAndroid.LONG);
    } else {
      Alert.alert("Informação", msg);
    }
  };

  return (
    <TouchableOpacity onPress={() => notificar("Parabéns")}>
      <Text>Plataforma?</Text>
    </TouchableOpacity>
  );
};

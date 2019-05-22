import React from "react";
import { createDrawerNavigator } from "react-navigation";

import Simples from "./components/Simples";
import Plataformas from "./components/Plataformas";
import ValidarProps from "./components/ValidarProps";
import Evento from "./components/Evento";
import Avo from "./components/ComunicacaoDireta";
import TextoSincronizado from "./components/ComunicacaoIndireta";
import ListaFlex from "./components/ListaFlex";

export default createDrawerNavigator(
  {
    ListaFlex: {
      screen: ListaFlex,
      navigationOptions: { title: "Lista (FlexBox)" }
    },
    TextoSincronizado: {
      screen: TextoSincronizado,
      navigationOptions: { title: "Texto Sincronizado" }
    },
    Avo: {
      screen: () => <Avo nome="João" sobrenome="Silva" />
    },
    Evento: {
      screen: Evento
    },
    ValidarProps: {
      screen: () => <ValidarProps ano={18} />
    },
    Plataformas: {
      screen: () => <Plataformas />
    },
    Simples: {
      screen: () => <Simples texto="Flexível!!!" />,
      navigationOptions: { title: "Simples" }
    }
  },
  { drawerWidth: 300 }
);

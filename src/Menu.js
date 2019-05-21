import React from "react";
import { createDrawerNavigator } from "react-navigation";

import Simples from "./components/Simples";
import Plataformas from "./components/Plataformas";
import ValidarProps from "./components/ValidarProps";
import Evento from "./components/Evento";

export default createDrawerNavigator(
  {
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

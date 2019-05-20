import React from "react";
import { createDrawerNavigator } from "react-navigation";

import Simples from "./components/Simples";
import Plataformas from "./components/Plataformas";

export default createDrawerNavigator(
  {
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

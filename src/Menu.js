import React from "react";
import { createDrawerNavigator } from "react-navigation";

import Simples from "./components/Simples";

export default createDrawerNavigator(
  {
    Simples: {
      screen: () => <Simples texto="Flexível!!!" />,
      navigationOptions: { title: "Simples" }
    }
  },
  { drawerWidth: 300 }
);

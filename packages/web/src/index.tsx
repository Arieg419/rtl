import React from "react";
import { Platform } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import { App } from "@rtl/common";
import * as serviceWorker from "./serviceWorker";

import { AppRegistry } from "react-native";

function Compose() {
  return (
    <React.Fragment>
      {Platform.OS === "web" ? (
        <style type="text/css">{`
        @font-face {
          font-family: 'MaterialCommunityIcons';
          src: url(${require("react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf")}) format('truetype');
        }
      `}</style>
      ) : null}
      <App />
    </React.Fragment>
  );
}

AppRegistry.registerComponent("App", () => Compose);
AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root"),
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

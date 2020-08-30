import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Home } from "./modules/Home";
import { Routes } from "./routes";
import { AppBar } from "./ui/AppBar";

export const App = (props: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Routes />
        {/* {props.children} */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    width: "100%",
    maxWidth: 425,
  },
});

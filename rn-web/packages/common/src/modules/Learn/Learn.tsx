import * as React from "react";
import { StyleSheet, View } from "react-native";
import { RouteComponentProps } from "react-router";
import Search from "./Search";
import { AppBar } from "../../ui/AppBar";

interface Props extends RouteComponentProps {}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  cardContainer: {
    flex: 1,
    padding: 10,
  },
  container: {
    flex: 1,
  },
});

export function Learn(props: React.FC<Props>) {
  return (
    <View style={{ flex: 1 }}>
      <AppBar title={"Run the List"} onPress={() => {}} />
      <View style={styles.container}>
        <Search navigation={props} />
      </View>
    </View>
  );
}

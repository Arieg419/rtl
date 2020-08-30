import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { RouteComponentProps } from "react-router";

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

export default function Handout(props: React.FC<Props>) {
  return (
    <View style={styles.container}>
      <Text>This is the Handout module.</Text>
    </View>
  );
}

import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { observer, Observer } from "mobx-react-lite";
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

const Home: React.FC<Props> = ({ history }) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>{history.location.pathname.toString()}</Text>
      <Button
        title="Tutorials"
        onPress={() => {
          history.push("/tutorials");
        }}
      />
    </View>
  );
};

export { Home };

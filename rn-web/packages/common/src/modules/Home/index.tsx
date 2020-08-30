import * as React from "react";
import { StyleSheet, View } from "react-native";
import { ShareCard } from "../../ui/ShareCard";
import { RouteComponentProps } from "react-router";
import PodcastFlatlist from "../../ui/PodcastFlatlist";
import { AppBar } from "../../ui/AppBar";

interface Props extends RouteComponentProps {}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  cardContainer: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});

export function Home(props: React.FC<Props>) {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <AppBar title={"Run the List"} onPress={() => {}} />
      <View style={styles.container}>
        <ShareCard
          onPress={() => {
            //@ts-ignore
            return props.history.push("/learn");
          }}
        />
        <PodcastFlatlist />
      </View>
    </View>
  );
}

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 110,
    borderRadius: 10,
    borderColor: "lightgray",
    borderWidth: 1,
    elevation: 10,
  },
  card: {
    width: "100%",
    borderRadius: 10,
    borderColor: "lightgray",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listItem: {
    margin: 10,
    padding: 25,
    backgroundColor: "#ecf0f1",
    width: "100%",
    flex: 1,
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    margin: 20,
  },
});

type PodcastItem = {
  item: {
    photo: string;
    name: string;
    topic: string;
  };
};

function Item({ item }: PodcastItem) {
  return (
    <View style={styles.listItem}>
      <Image
        source={{ uri: item.photo }}
        style={{ width: 60, height: 60, borderRadius: 30 }}
      />
      <View style={{ alignItems: "center", flex: 1 }}>
        <Text numberOfLines={1} style={{ fontWeight: "bold" }}>
          {item.topic}
        </Text>
        <Text numberOfLines={1}>{item.name}</Text>
        <Text numberOfLines={1}>{"Aired: 2/13/2020"}</Text>
      </View>
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "#0085bd" }}>Open</Text>
      </TouchableOpacity>
    </View>
  );
}

export default class PodcastFlatlist extends React.Component {
  state = {
    data: [
      {
        name: "Episode 43",
        link: "miyah.myles@gmail.com",
        topic: "Covid 19",
        photo:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
      },
      {
        name: "Episode 42",
        link: "june.cha@gmail.com",
        topic: "Cirrhosis",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Episode 41",
        link: "iida.niskanen@gmail.com",
        topic: "Pancreatitis",
        photo: "https://randomuser.me/api/portraits/women/68.jpg",
      },
      {
        name: "Episode 41",
        link: "renee.sims@gmail.com",
        topic: "Lower GI Bleed",
        photo: "https://randomuser.me/api/portraits/women/65.jpg",
      },
      {
        name: "Episode 40",
        link: "jonathan.nu\u00f1ez@gmail.com",
        topic: "Atrial fibrillation",
        photo: "https://randomuser.me/api/portraits/men/43.jpg",
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.h1}>Listen to the Podcast👂🎧</Text>
        <FlatList
          style={{ flex: 1 }}
          data={this.state.data}
          renderItem={({ item }) => <Item item={item} />}
          keyExtractor={(item) => item.link}
        />
      </View>
    );
  }
}

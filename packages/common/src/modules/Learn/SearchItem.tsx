import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import SearchTags from "./SearchTags";

export function SearchItem(
  item: {
    title: string;
    lastUpdated: string;
    resources: string;
  },
  navigation: any
) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.history.push(`/learn/${item.title}`);
      }}
    >
      <Text style={{ padding: 20, paddingBottom: 5, fontSize: 20 }}>
        {item.title}
      </Text>
      <Text style={{ paddingLeft: 20, padding: 4, fontSize: 14 }}>
        {Math.ceil(Math.random() * 10) + " resources"}
      </Text>
      <Text style={{ paddingLeft: 20, padding: 4, fontSize: 14 }}>
        {item.lastUpdated}
      </Text>
      <Text style={{ paddingLeft: 20, paddingTop: 5, fontSize: 15 }}>
        {"Tags:"}
      </Text>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 10,
          justifyContent: "flex-start",
        }}
      >
        <SearchTags />
        <SearchTags />
        <SearchTags />
      </View>
    </TouchableOpacity>
  );
}

export function SearchItemSeperator() {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
      }}
    />
  );
}

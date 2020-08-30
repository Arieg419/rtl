import React from "react";
import { RouteComponentProps } from "react-router";
import { FlatList } from "react-native";
import { SearchItem, SearchItemSeperator } from "./SearchItem";
import { CategoryItemType } from "./data";

interface Props extends RouteComponentProps {}

export default function SearchList(props: {
  searchBarFocused: boolean;
  data: Array<CategoryItemType>;
  navigation: React.FC<Props>;
}) {
  return (
    <FlatList
      style={{
        backgroundColor: props.searchBarFocused ? "rgba(0,0,0,0.3)" : "white",
      }}
      data={props.data}
      renderItem={({ item }) => SearchItem(item, props.navigation)}
      ItemSeparatorComponent={SearchItemSeperator}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

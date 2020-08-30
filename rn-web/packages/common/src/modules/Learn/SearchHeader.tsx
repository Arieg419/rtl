import React from "react";
import { CategoryItemType } from "./data";
import Icon from "react-native-vector-icons/FontAwesome";

import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";

export default function SearchList(props: {
  searchBarFocused: boolean;
  searchItems: (text: string) => void;
}) {
  return (
    <View
      style={{
        height: 80,
        backgroundColor: "#ccd6dd",
        justifyContent: "center",
        paddingHorizontal: 5,
      }}
    >
      <View
        style={{
          height: 50,
          backgroundColor: "white",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              padding: 10,
              paddingLeft: 0,
              backgroundColor: "white",
              marginHorizontal: 20,
              shadowOffset: { width: 0, height: 0 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 1,
              marginTop: Platform.OS == "android" ? 30 : 10,
            }}
          >
            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Try Cardiovascular"
              placeholderTextColor="grey"
              style={{
                flex: 1,
                fontWeight: "700",
                backgroundColor: "white",
                fontSize: 16,
              }}
              onChangeText={props.searchItems}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

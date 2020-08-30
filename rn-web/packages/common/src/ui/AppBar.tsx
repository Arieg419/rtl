import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Props {
  onPress: () => void;
  title: string;
}

export const AppBar: React.FC<Props> = ({ title }) => {
  return (
    <View
      style={{
        width: "100%",
        height: 50,
        backgroundColor: "#55acee",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          paddingLeft: 20,
          color: "#fff",
        }}
      >
        {title}
      </Text>
    </View>
  );
};

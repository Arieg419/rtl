import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface State {}
interface Props {
  width: number;
  height: number;
  type: string;
  price: number;
  topMargin: number;
  imageUri: string;
}

export default class HandoutItem extends Component<Props, State> {
  render() {
    return (
      <View
        style={{
          width: "100%",
          height: 250,
          borderWidth: 0.5,
          borderColor: "#dddddd",
          marginTop: this.props.topMargin,
        }}
      >
        <View style={{ flex: 1 }}>
          <Image
            style={{
              flex: 1,
              resizeMode: "cover",
            }}
            source={{
              uri: this.props.imageUri,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "flex-start",
            justifyContent: "space-evenly",
            paddingLeft: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "#b63838" }}>
            {this.props.type}
          </Text>
          <Text style={{ fontSize: 10 }}>
            Length: {this.props.price} minutes
          </Text>
        </View>
      </View>
    );
  }
}

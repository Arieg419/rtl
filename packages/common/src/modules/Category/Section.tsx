import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface State {}
interface Props {
  imageUri: string;
  //   name: string;
}

class Section extends Component<Props, State> {
  render() {
    return (
      <View
        style={{
          height: 130,
          width: 130,
          marginLeft: 20,
          borderWidth: 0.5,
          borderColor: "#dddddd",
        }}
      >
        <View style={{ flex: 2 }}>
          <Image
            source={{
              uri: this.props.imageUri,
            }}
            style={styles.imgStyle}
          />
        </View>
        {/* <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>{this.props.name}</Text>
        </View> */}
      </View>
    );
  }
}
export default Section;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgStyle: {
    flex: 1,
    resizeMode: "cover",
    height: undefined,
    width: undefined,
  },
});

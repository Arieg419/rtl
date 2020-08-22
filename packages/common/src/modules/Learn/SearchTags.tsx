import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextStyle,
} from "react-native";

const tagBgColors = ["#FF2FB4", "#DA6EF6", "#979CFF", "#00aced"];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}>
          <Text style={getBtnStyle()}>Cardio</Text>
        </TouchableOpacity>
      </View>
    );
  }

  handlePress = () => {};
}

const getBtnStyle: () => TextStyle = () => {
  return {
    backgroundColor:
      tagBgColors[Math.floor(Math.random() * tagBgColors.length)],
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 6,
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    overflow: "hidden",
    padding: 6,
    textAlign: "center",
  };
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
  },
});

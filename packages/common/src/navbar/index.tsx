import * as React from "react";
import { View, Text, Button } from "react-native";
import { Home } from "../modules/Home";
import { IllnessScript } from "../modules/IllnessScipt";
import { Schema } from "../modules/Schema";
import { Tutorials } from "../modules/Tutorials";

const Navbar = (props: { style: any }) => {
  return (
    <View style={props.style}>
      <Text>Navbar!</Text>
    </View>
  );
};

export default Navbar;

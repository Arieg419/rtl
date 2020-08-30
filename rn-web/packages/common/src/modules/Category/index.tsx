import React, { Component } from "react";
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
import { AppBar } from "../../ui/AppBar";
// import Icon from "react-native-vector-icons/Ionicons";
import Section from "./Section";
import HandoutItem from "./HandoutItem";
const { height, width } = Dimensions.get("window");
export class Category extends Component<{}, { startHeaderHeight: number }> {
  startHeaderHeight: number;
  componentWillMount() {
    this.startHeaderHeight = 80;
    if (Platform.OS == "android") {
      // @ts-ignore
      this.startHeaderHeight = 100 + StatusBar.currentHeight;
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, marginTop: 0 }}>
          <AppBar title="Cardiovascular" onPress={() => {}} />
          <ScrollView scrollEventThrottle={16}>
            <View style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
              <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "700" }}>
                  Handouts
                </Text>
                <Text style={{ fontWeight: "100", marginTop: 10 }}>
                  Curated cardiovascular handouts for review
                </Text>
                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                  <Image
                    style={{
                      flex: 1,
                      height: undefined,
                      width: undefined,
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "#dddddd",
                    }}
                    source={{
                      uri:
                        "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20,
                }}
              >
                Related Podcasts
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                }}
              >
                <HandoutItem
                  width={height}
                  height={width}
                  type="Cardiovascular events"
                  price={82}
                  topMargin={0}
                  imageUri={
                    "https://images.pexels.com/photos/1250655/pexels-photo-1250655.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }
                />
                <HandoutItem
                  height={height}
                  width={width}
                  type="Cardiovascular and Covid19"
                  price={82}
                  topMargin={20}
                  imageUri={
                    "https://images.pexels.com/photos/207601/pexels-photo-207601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }
                />
                <HandoutItem
                  height={height}
                  width={width}
                  type="Cardiovascular and Covid19"
                  price={82}
                  topMargin={20}
                  imageUri={
                    "https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  }
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

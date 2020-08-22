import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";

interface Props {
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },
  card: {
    width: "100%",
    borderRadius: 10,
    borderColor: "lightgray",
    backgroundColor: "#ecf0f1",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
  h1: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
    margin: 10,
  },
  body: {
    color: "#000",
    paddingHorizontal: 10,
    textAlign: "justify",
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  thumb: {
    width: 100,
    height: 100,
    marginTop: 20,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  shareBtn: {
    margin: 20,
    backgroundColor: "#FE7371",
    padding: 10,
    width: "80%",
    borderRadius: 20,
  },
  shareTxt: {
    fontSize: 20,
    color: "#fff",
    alignSelf: "center",
  },
});

export const ShareCard: React.FC<Props> = (props: Props) => {
  const ShareFn = async () => {
    try {
      const result = await Share.share({
        message: `
        If you are planning to build a camera app using expo camera SDK, you have came to the right place.
        In this article we’re going to explore the React Native Camera Expo in multiple ways.
        And I will try my best to make it a full in depth guide with examples, for future references.`,
        title: "React Native Camera Expo Example",
        url: "https://reactnativemaster.com/react-native-camera-expo-example/",
      });

      if (result.action === Share.sharedAction) {
        alert("Post Shared");
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        alert("Post cancelled");
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.thumb}
          source={{
            uri:
              "https://images.squarespace-cdn.com/content/v1/5d2501c14c57720001ff2b07/1565816227012-UMYL9OXSVM1BMNYWHHFU/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0topjEaZcWjtmMYdCWL4dkGbxs35J-ZjFa9s1e3LsxrX8g4qcOj2k2AL08mW_Htcgg/circle-cropped.png?format=100w",
          }}
        />
        <Text style={styles.h1}>Podcast summaries with ❤️</Text>
        <Text style={styles.body}>
          Offal austin distillery hella aesthetic celiac actually listicle
          artisan poutine four loko. Sartorial disrupt small batch, trust fund
          seitan gochujang meh PBR&B mustache kinfolk fixie marfa. Subway tile
          vegan lomo whatever tumblr. Chia gluten-free chartreuse mixtape poke
          pickled wolf bitters coloring book..
        </Text>
        <TouchableOpacity
          style={styles.shareBtn}
          onPress={() => props.onPress()}
        >
          <Text style={styles.shareTxt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

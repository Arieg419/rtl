import * as React from "react";
import { Text } from "react-native";
import { Card } from "./Card";

interface Props {
  header: string;
  onPress: () => void;
}

export const WelcomeCard: React.FC<Props> = ({ header, onPress }) => {
  return (
    <Card onPress={onPress}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {header}
      </Text>
      <Text>
        I'm baby vape tacos banh mi blog deep v. Gentrify bicycle rights
        whatever vinyl lomo knausgaard. Offal austin distillery hella aesthetic
        celiac actually listicle artisan poutine four loko. Sartorial disrupt
        small batch, trust fund seitan gochujang meh PBR&B mustache kinfolk
        fixie marfa. Subway tile vegan lomo whatever tumblr. Chia gluten-free
        chartreuse mixtape poke pickled wolf bitters coloring book.
      </Text>
    </Card>
  );
};

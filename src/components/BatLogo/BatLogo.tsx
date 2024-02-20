import React from "react";
import { Text, Image, View } from "react-native";

import { styles } from "./BatlogoStyles";
import batLogo from "../../../assets/bat-logo.png";

export function BatLogo() {
  return (
    <>
      <Text style={styles.title}>BAT PASS GENERATOR</Text>
      <Image
        source={batLogo}
        style={{
          resizeMode: "contain",
          height: 200,
        }}
      />
    </>
  );
}

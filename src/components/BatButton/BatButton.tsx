import React from "react";
import { Button, View, Text, Pressable } from "react-native";

import { styles } from "./BatButtonStyles";

export function BatButton() {
  return (
    <View>
      <Button
        onPress={() => {
          console.log("olá");
        }}
        title="Click Aqui"
        accessibilityLabel="click em mim"
      />

      <Pressable
        onPress={() => {
          console.log("pressionado");
        }}
        style={styles.button}
      >
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("pressionado");
        }}
      >
        <Text>⚡ COPY</Text>
      </Pressable>
    </View>
  );
}

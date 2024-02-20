import React, { useState } from "react";
import { Button, View, Text, Pressable } from "react-native";
import { BatTextInput } from "../BatTextInput/BatTextInput";

import { styles } from "./BatButtonStyles";
import generatePass from "../../services/passwordService";

export function BatButton() {
  const [pass, setPass] = useState("");

  function handleGenerateButton() {
    let generateToken = generatePass();
    setPass(generateToken);
  }

  return (
    <>
      <BatTextInput pass={pass} />

      <Pressable onPress={handleGenerateButton} style={styles.button}>
        <Text style={styles.text}>GENERATE</Text>
      </Pressable>

      <Pressable
        onPress={() => {
          console.log("pressionado");
        }}
        style={styles.button}
      >
        <Text style={styles.text}>⚡ COPY</Text>
      </Pressable>
    </>
  );
}

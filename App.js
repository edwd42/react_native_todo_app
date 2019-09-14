import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My Todo App</Text>
      <TextInput style={styles.inputStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputStyle: {
    height: 40,
    width: "80%",
    borderColor: "green",
    borderWidth: 1
  }
});

import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function DetailScreen({ navigation }) {
  return (
    <>
      <View style={styles.container}>
        <Text>DetailScreen</Text>
      </View>
      <Pressable onPress={() => navigation.navigate("Home")}>
        <Text>Home</Text>
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

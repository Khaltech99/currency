import {
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView>
      <StatusBar />
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
      <Pressable onPress={() => navigation.navigate("Detail")}>
        <Text>Details</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

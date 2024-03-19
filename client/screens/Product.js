import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const Product = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Product page</Text>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: { fontWeight: "bold", fontSize: 20 },
});

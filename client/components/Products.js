import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSelector } from "react-redux";

const Products = () => {
  const data = useSelector((state) => state.data.products);

  const renderPrizeItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.year}>{item.title}</Text>
      <Text style={styles.year}>{item.price}</Text>
      <Text style={styles.year}>{item.description}</Text>
    </View>
  );

  return (
    <FlatList
      style={styles.list}
      data={data}
      keyExtractor={(item) => {
        item.id;
      }}
      renderItem={renderPrizeItem}
    />
  );
};

export default Products;

const styles = StyleSheet.create({
  list: {
    alignContent: "stretch",
    width: "100%",
    marginTop: 10,
  },
  listItem: {
    alignSelf: "center",
    width: "80%",
    marginVertical: 10,
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 10,
    borderBottomColor: "#ddd",
    borderBottomWidth: 2,
  },
  itemHeader: { flexDirection: "row", alignItems: "center" },
  year: { fontSize: 20, color: "blue", fontWeight: "bold" },
  category: { fontSize: 16, fontWeight: "bold", marginLeft: 10 },
  name: { marginVertical: 10, fontStyle: "italic" },
});

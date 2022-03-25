import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Button({ onPress, title, style }) {
  return (
    <TouchableOpacity
      style={{ ...styles.container, ...style }}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    elevation: 8,
    backgroundColor: "#2D3748",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
  },
});

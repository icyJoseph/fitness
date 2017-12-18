import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { purple } from "../utils/colors";

const TextButton = ({ children, onPress, style = {} }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={[styles.reset, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  reset: {
    textAlign: "center",
    color: purple
  }
});

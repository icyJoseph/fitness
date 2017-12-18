import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform
} from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";

const Steppers = ({ max, unit, step, value, onIncrement, onDecrement }) => {
  return (
    <View style={(styles.row, { justifyContent: "space-between" })}>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={onDecrement}>
          <FontAwesome name="minus" size={30} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement}>
          <FontAwesome name="plus" size={30} color={"black"} />
        </TouchableOpacity>
      </View>
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  );
};

export default Steppers;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  }
});

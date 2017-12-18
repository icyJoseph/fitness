import React from "react";
import { Text } from "react-native";

const DateHeader = ({ date }) => {
  return <Text style={{ fontSize: 18 }}>{date}</Text>;
};

export default DateHeader;

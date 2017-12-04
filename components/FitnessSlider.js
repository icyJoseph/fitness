import React from "react";
import { View, Slider, Text } from "react-native";

const FitnessSlider = ({ max, unit, step, value, onChange }) => {
  return (
    <View>
      <Slider
        step={step}
        value={value}
        maximumValue={max}
        minimumValue={0}
        onValueChange={onChange}
      />
      <Text>{value}</Text>
      <Text>{unit}</Text>
    </View>
  );
};

export default FitnessSlider;

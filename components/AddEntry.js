import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import DateHeader from "./DateHeader";
import FitnessSlider from "./FitnessSlider";
import TextButton from "./TextButton";
import Steppers from "./Steppers";
import { getMetricMetaInfo, timeToString } from "../utils/helpers";
import { Ionicons } from "@expo/vector-icons";

const SubmitBtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>Submit</Text>
    </TouchableOpacity>
  );
};

class AddEntry extends Component {
  state = {
    run: 0,
    bike: 0,
    swim: 0,
    sleep: 0,
    eat: 0
  };

  increment = metric => {
    const { max, step } = getMetricMetaInfo(metric);
    this.setState(state => {
      const count = state[metric] + step;
      return {
        ...state,
        [metric]: count > max ? max : count
      };
    });
  };

  decrement = metric => {
    this.setState(state => {
      const count = state[metric] - getMetricMetaInfo(metric).step;
      return {
        ...state,
        [metric]: count < 0 ? 0 : count
      };
    });
  };

  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }));
  };

  submit = () => {
    const key = timeToString();
    const entry = this.state;

    this.setState(() => ({
      run: 0,
      bike: 0,
      swim: 0,
      sleep: 0,
      eat: 0
    }));

    // Update Redux
    // Navigate to home
    // Save to DB
    // Clear Local Notification
  };

  reset = () => {
    const date = timeToString();

    //Update Redux
    //Route to Home
    //Update DB
  };

  render() {
    const metaInfo = getMetricMetaInfo();
    const date = new Date();
    if (this.props.alreadyLogged) {
      return (
        <View>
          <Ionicons name="ios-happy-outline" size={100} />
          <Text>You already logged your information for today</Text>
          <TextButton onPress={this.reset}>Reset</TextButton>
        </View>
      );
    }
    return (
      <View>
        <DateHeader date={date.toLocaleDateString()} />
        {Object.keys(metaInfo).map(key => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];
          return (
            <View key={key}>
              {getIcon()}
              {type === "slider" ? (
                <FitnessSlider
                  value={value}
                  onChange={value => this.slide(key, value)}
                  {...rest}
                />
              ) : (
                <Steppers
                  value={value}
                  onIncrement={value => this.increment(key)}
                  onDecrement={value => this.decrement(key)}
                  {...rest}
                />
              )}
            </View>
          );
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}

export default AddEntry;

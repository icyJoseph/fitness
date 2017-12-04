import React, { Component } from "react";
import { View } from "react-native";
import DateHeader from "./DateHeader";
import Slider from "./Slider";
import Steppers from "./Steppers";
import { getMetricMetaInfo, timeToString } from "../utils/helpers";

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

  render() {
    const metaInfo = getMetricMetaInfo();
    const date = timeToString();
    return (
      <View>
        <DateHeader date={date} />
        {Object.keys(metaInfo).map(key => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];
          return (
            <View key={key}>
              {getIcon()}
              {type === "slider" ? (
                <Slider
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
      </View>
    );
  }
}

export default AddEntry;

import React, { Component } from "react";
import { StyleSheet, Text, View, Slider } from "react-native";
import AddEntry from "./components/AddEntry";

export default class App extends Component {
  state = {
    value: 0
  };

  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
        <Slider
          minimumValue={-10}
          maximumValue={10}
          step={1}
          value={this.state.value}
          onValueChange={value => this.setState(() => ({ value }))}
        />
        <Text>Value: {this.state.value}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    backgroundColor: "#E53224",
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  btnText: {
    color: "#fff"
  }
});

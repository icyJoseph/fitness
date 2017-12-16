import React, { Component } from "react";
import { StyleSheet, Text, View, Slider } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import AddEntry from "./components/AddEntry";

export default class App extends Component {
  state = {
    value: 0
  };

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View>
          <AddEntry />
        </View>
      </Provider>
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

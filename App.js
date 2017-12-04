import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Slider,
  Switch,
  TextInput,
  KeyboardAvoidingView
} from "react-native";
import AddEntry from "./components/AddEntry";

export default class App extends Component {
  state = {
    input: "@ic_joseph",
    showInput: false
  };
  handleTextChange = input => {
    this.setState(() => ({
      input
    }));
  };

  handleToggleSwitch = () => {
    this.setState(state => ({
      showInput: !state.showInput
    }));
  };
  render() {
    const { input, showInput } = this.state;
    return (
      <View style={styles.container}>
        <Switch value={showInput} onValueChange={this.handleToggleSwitch} />
        {showInput === true && (
          <TextInput
            style={styles.input}
            value={input}
            onChange={this.handleTextChange}
          />
        )}
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
  },
  input: {
    width: 200,
    height: 44,
    padding: 0,
    borderWidth: 1,
    borderColor: "#757575",
    margin: 30
  }
});

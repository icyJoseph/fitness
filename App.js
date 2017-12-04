import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import AddEntry from "./components/AddEntry";

export default class App extends Component {
  handlePress = () => {
    alert("Hello!");
  };

  render() {
    return (
      <View style={styles.container}>
        <AddEntry />
        <TouchableHighlight
          style={styles.btn}
          onPress={this.handlePress}
          underlayColor="#d4271b"
        >
          <Text style={styles.btnTxt}>Touchable Highlight</Text>
        </TouchableHighlight>
        <TouchableOpacity style={styles.btn} onPress={this.handlePress}>
          <Text style={styles.btnTxt}>Touchable Opacity</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback style={styles.btn} onPress={this.handlePress}>
          <View style={styles.btn}>
            <Text style={styles.btnTxt}>Touchable WithoutFeedback</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          style={styles.btn}
          onPress={this.handlePress}
        >
          <View style={styles.btn}>
            <Text style={styles.btnTxt}>Touchable Native Feedback</Text>
          </View>
        </TouchableNativeFeedback>
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

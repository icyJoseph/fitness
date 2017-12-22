import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";

class Live extends Component {
  state = {
    coords: null,
    status: null,
    director: ""
  };
  render() {
    const { status, coords, direction } = this.state;

    if (status === null) {
      return <ActivityIndicator style={{ marginTop: 30 }} />;
    }

    if (status == "denied") {
      return (
        <View>
          <Text>Denied</Text>
        </View>
      );
    }

    if (status == "undetermined") {
      return (
        <View>
          <Text>Undetermined</Text>
        </View>
      );
    }

    return (
      <View>
        <Text>Live </Text>
      </View>
    );
  }
}

export default Live;

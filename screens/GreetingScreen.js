import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default class GreetingScreen extends React.Component {
  static navigationOptions = {
    title: "Greeting"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>
            Hello in my first React Native app
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  textContainer: {
    backgroundColor: "rgb(0,150,0)",
    alignItems: "center",
    marginHorizontal: 50
  },
  greetingText: {
    fontSize: 25,
    lineHeight: 24,
    textAlign: "center"
  }
});

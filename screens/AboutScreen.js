import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: "About"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/images/me.jpg")}
            style={styles.meImage}
          />
        </View>

        <View style={styles.aboutMeContainer}>
          <Text style={styles.aboutMeText}>
            I'm Vasyl, almost 21-years-old programmer
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
  imageContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  meImage: {
    width: 400,
    height: 320,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  aboutMeContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  aboutMeText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  }
});

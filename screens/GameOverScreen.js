import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Game Over ! </Text>
      <View style={styles.imgContainer}>
        <Image
          source={require("../assets/Images/success.png")}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <Text>
        Your Phone needed{" "}
        <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds to
        guess the number{" "}
        <Text style={styles.highlight}> {props.userNumber}</Text>
      </Text>

      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold"
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imgContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    margin: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: {
    color: "#0BC3DF",
    fontSize: 24
  }
});

export default GameOverScreen;

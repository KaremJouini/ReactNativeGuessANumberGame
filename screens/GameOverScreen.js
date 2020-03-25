import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView //TO MAKE SURE THAT THE STYLE ADAPTS TO THE DEVICE
} from "react-native";

const GameOverScreen = props => {
  return (
    <SafeAreaView>
      <ScrollView>
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
            <Text style={styles.highlight}> {props.roundsNumber}</Text> rounds
            to guess the number{" "}
            <Text style={styles.highlight}> {props.userNumber}</Text>
          </Text>

          <Button title="New Game" onPress={props.onRestart} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold"
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10
  },
  imgContainer: {
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: Dimensions.get("window").height / 60
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: {
    color: "#0BC3DF",
    fontSize: Dimensions.get("window").height < 400 ? 16 : 20
  }
});

export default GameOverScreen;

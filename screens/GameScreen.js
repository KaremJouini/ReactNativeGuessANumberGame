import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from "react-native";

import { ScreenOrientation } from "expo";
import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";

const generate = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    //In case the function generates the number from the first attempt
    return generate(min, max, exclude);
  } else {
    return rndNum;
  }
};

const GameScreen = props => {
  //Manage screen's orientation
  //ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  const [currentGuess, setCurrentGuess] = useState(
    generate(1, 100, props.userChoice)
  );

  const [rounds, setRounds] = useState(0);
  // Survives component rerendering
  //Changing a state rerenders the component
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  // Distruct properties
  const { userChoice, onGameOver } = props;
  // This function runs after every componenet rendering  useEffect(() => {
  // the 2nd parameter is an array of dependencies
  //the effect wont run if only one of the states in the dependencies changes
  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong ...", [
        { text: "Sorry!", style: "Cancel" }
      ]);
      return;
    }
    if (direction === "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    nextNumber = generate(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    setRounds(cuRounds => cuRounds + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Oponent's guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>

      <Card style={styles.btnContainer}>
        <Button title="Lower" onPress={nextGuessHandler.bind(this, "lower")} />
        <Button
          title="Greater"
          onPress={nextGuessHandler.bind(this, "greater")}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%"
  }
});

export default GameScreen;

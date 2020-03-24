import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Card from "../components/Card";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";
const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setNumber] = useState();

  const numberInputHandler = inputText => {
    //Validating the input to delete ., instantly for allowing only integers
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    setNumber(parseInt(enteredValue));
    setConfirmed(true);
    setEnteredValue("");
  };

  let confirmedOutput, buttonStart;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          title="START GAME"
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>Start a new Game!</Text>
        <Card style={styles.inputContainer}>
          <Text> Select a number !</Text>
          <Input
            blurOnSubmit
            keyboardType="number-pad"
            autoCorrect={false}
            maxLength={2}
            value={enteredValue}
            onChangeText={numberInputHandler}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.btn}>
              <Button title="Reset" color="red" onPress={resetInputHandler} />
            </View>
            <View style={styles.btn}>
              <Button title="Confirm" onPress={confirmInputHandler} />
            </View>
          </View>
        </Card>
        {confirmedOutput}
        {buttonStart}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between"
  },
  btn: {
    width: 80
  },
  input: {
    width: 50,
    textAlign: "center"
  }
});

export default StartGameScreen;

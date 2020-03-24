import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = props => {
  return <Text styles={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans-bold"
  }
});

export default BodyText;

import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 70,
    paddingTop: 36,
    backgroundColor: "#6495ED",
    alignItems: "center"
  },
  title: {
    color: "black",
    fontSize: 18,
    fontFamily: "open-sans-bold"
  }
});

export default Header;

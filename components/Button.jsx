import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../constants/theme";
import { wp, hp } from "../helpers/common";
import Loading from "./Loading";

const Button = ({
  buttonStyle,
  textStyle,
  title = "",
  onPress = () => {},
  loading = true,
  hasShadow = true,
}) => {
  const shadowStyle = {
    shadowColor: theme.colors.dark,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  };

  if (loading) {
    <View style={[styles.button, buttonStyle, { backgroundColor: "white" }]}>
      <Loading />
    </View>;
  }

  return (
    <Pressable
      onPress={onPress}
      style={[styles.button, buttonStyle, hasShadow && shadowStyle]}
    >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    height: hp(6.6),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.radius.xl,
  },
  text: {
    fontSize: hp(2.6),
    color: "white",
    fontWeight: theme.fonts.bold,
  },
});

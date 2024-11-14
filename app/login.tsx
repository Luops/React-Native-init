import React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";
import Constants from "expo-constants";

type Props = {};

function login({}: Props) {
  const statusBarHeight: number = Constants.statusBarHeight;
  return (
    <ScrollView style={{ marginTop: statusBarHeight + 8 }}>
      <Text>Login</Text>
    </ScrollView>
  );
}

export default login;

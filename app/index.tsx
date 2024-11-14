import React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";

// Components
import { Header } from "@/components/header/Header";
export default function HomeScreen() {
  return (
    <ScrollView showsVerticalScrollIndicator={false} className="bg-slate-200">
      <Header />
      <Text className="">Hello</Text>
    </ScrollView>
  );
}

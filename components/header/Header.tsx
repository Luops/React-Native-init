import React from "react";
import { Pressable, View } from "react-native";
import Constants from "expo-constants";

// Icons
import { Ionicons } from "@expo/vector-icons";

export function Header() {
  // Pegar a altura da barra de status do aparelho
  const statusBarHeight: number = Constants.statusBarHeight;
  return (
    <View className={`w-full px-2`} style={{ marginTop: statusBarHeight + 8 }}>
      <Pressable>
        <Ionicons name="menu" size={24} color="black" />
      </Pressable>
    </View>
  );
}

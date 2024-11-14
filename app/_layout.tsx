import { Stack, Tabs, Slot, useRouter, Link } from "expo-router";
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

// Tailwind
import "../styles/global.css";
import { Header } from "@/components/header/Header";

export default function TabLayout() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  console.log(user);

  // Verifica se o usuário está logado
  useEffect(() => {
    const checkUser = async () => {
      // Verificar se há cookies de autenticação
      // const cookies = await SecureStore.getItemAsync('cookies');
      const cookies = null;
      if (!cookies) {
        // Se não houver cookies, redirecionar para a tela de login
        setUser(null);
        router.push("/login");
      } else {
        // Se houver cookies, obter o usuário
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1"
        );
        const data = await response.json();
        setUser(data);
      }
    };
    checkUser();
  }, []);
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#fff" },
        headerTintColor: "#000",
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="login" options={{ title: "Login", headerShown: false }} />
    </Stack>
  );
}

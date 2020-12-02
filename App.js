import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { renderInitialScreen } from "./src/utils/helpers";
import * as Font from "expo-font";
const { Navigator, Screen } = createStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [initialScreen, setinItialScreen] = useState("Login");

  const loadRessources = async () => {
    try {
      await Font.loadAsync({
        Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
        LeckerliOne: require("./assets/fonts/LeckerliOne-Regular.ttf"),
      });
      const screen = await renderInitialScreen();
      if (screen) setinItialScreen(screen);
      setLoading(false);
    } catch (e) {
      console.error("loading ressources error:", e);
    }
  };

  useEffect(() => {
    loadRessources();
  }, []);

  const { container } = styles;

  if (loading) {
    return (
      <View style={container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={initialScreen}
        // screenOptions={{headerShown: false}}
      >
        <Screen name="Login Screen" component={LoginScreen} />
        <Screen name="Home" component={HomeScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

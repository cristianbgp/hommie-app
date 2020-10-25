import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import {
  Platform,
  SafeAreaView as NativeSafeAreaView,
  StyleSheet,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./components/Header";
import Main from "./components/Main";
import { ThemeContext, ThemeProvider } from "./contexts/ThemeContext";
import { BottomSheetProvider } from "./contexts/BottomSheetContext";
import { TasksProvider } from "./contexts/TasksContext";

const SafeArea = Platform.OS === "ios" ? NativeSafeAreaView : SafeAreaView;

function Wrapper() {
  const [theme] = useContext(ThemeContext);
  const isLightTheme = theme === "light";

  return (
    <SafeArea
      style={[
        styles.container,
        { backgroundColor: isLightTheme ? "white" : "black" },
      ]}
    >
      <StatusBar style={isLightTheme ? "dark" : "light"} />
      <Header />
      <Main />
    </SafeArea>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <TasksProvider>
          <BottomSheetProvider>
            <Wrapper />
          </BottomSheetProvider>
        </TasksProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

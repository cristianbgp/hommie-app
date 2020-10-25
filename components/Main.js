import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useEffect, useState } from "react";
import { FlatList, Keyboard, Platform, StyleSheet, View } from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import Card from "./Card";
import BottomSheetWrapper from "./BottomSheetWrapper";
import { TasksContext } from "../contexts/TasksContext";

export default function Main() {
  const [theme] = useContext(ThemeContext);
  const { tasks } = useContext(TasksContext);
  const isLight = theme === "light";
  const colorsGradient = isLight
    ? ["rgba(255,255,255,1)", "rgba(255,255,255,0)"]
    : ["rgba(0,0,0,1)", "rgba(0,0,0,0)"];
  const [showLinearGradient, setShowLinearGradient] = useState(true);

  const handleKeyboardShow = () => {
    !Platform.OS === "ios" && setShowLinearGradient(false);
  };

  const handleKeyboardHide = () => {
    !Platform.OS === "ios" && setShowLinearGradient(true);
  };

  useEffect(() => {
    const keyboardShow = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      handleKeyboardShow
    );
    const keyboardHide = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      handleKeyboardHide
    );

    return () => {
      keyboardShow.remove();
      keyboardHide.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {showLinearGradient && (
        <LinearGradient
          colors={colorsGradient}
          style={styles.linearGradient}
          pointerEvents="none"
        />
      )}
      <View style={styles.listContainer}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <Card
              item={item}
              isFirst={index === 0}
              isLast={index === tasks.length - 1}
            />
          )}
        />
      </View>

      <BottomSheetWrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listContainer: {
    flex: 1,
  },
  linearGradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
    height: 20,
  },
});

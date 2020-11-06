import React, { useContext } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { BottomSheetContext } from "../contexts/BottomSheetContext";
import { ThemeContext } from "../contexts/ThemeContext";
import HommieIcon from "./icons/HommieIcon";
import PlusIcon from "./icons/PlusIcon";
import ToggleThemeButton from "./ToggleButton";

export default function Header() {
  const [theme] = useContext(ThemeContext);
  const isLightTheme = theme === "light";
  const bottomSheetRef = useContext(BottomSheetContext);

  const handlePlusIcon = () => {
    bottomSheetRef.current.expand();
  };

  const handleHomeIcon = () => {
    bottomSheetRef.current.collapse();
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleHomeIcon}>
        {({ pressed }) => (
          <View style={[styles.logo, pressed && { opacity: 0.7 }]}>
            <Text style={[styles.text, !isLightTheme && { color: "white" }]}>
              Hommie
            </Text>
            <View style={styles.hommieIcon} testID="hommie-icon">
              <HommieIcon
                height={40}
                width={40}
                stroke={isLightTheme ? "black" : "white"}
              />
            </View>
          </View>
        )}
      </Pressable>
      <View style={styles.actions}>
        <Pressable onPress={handlePlusIcon} testID="plus-icon">
          {({ pressed }) => (
            <View
              style={[
                styles.circlePlus,
                !isLightTheme && { backgroundColor: "white" },
                pressed && { opacity: 0.7 },
              ]}
            >
              <PlusIcon
                height={20}
                width={20}
                fill={isLightTheme ? "white" : "black"}
              />
            </View>
          )}
        </Pressable>
        <ToggleThemeButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "black",
    fontSize: 36,
    fontWeight: "700",
  },
  hommieIcon: {
    marginLeft: 15,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
  },
  circlePlus: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 35,
    borderRadius: 18,
    marginRight: 15,
  },
});

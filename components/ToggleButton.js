import React, { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";
import SunIcon from "./icons/SunIcon";
import MoonIcon from "./icons/MoonIcon";
import { ThemeContext } from "../contexts/ThemeContext";

export default function ToggleThemeButton() {
  const [theme, setTheme] = useContext(ThemeContext);
  const isLightTheme = theme === "light";
  const Icon = isLightTheme ? MoonIcon : SunIcon;

  const iconProps = {
    fill: isLightTheme ? "black" : "none",
    stroke: isLightTheme ? "none" : "white",
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.toggle,
        theme === "dark" && { backgroundColor: "black" },
        pressed && { opacity: 0.7 },
      ]}
      onPress={() =>
        setTheme((actualTheme) => (actualTheme === "light" ? "dark" : "light"))
      }
      testID="theme-icon"
    >
      <Icon height={20} width={20} {...iconProps} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  toggle: {
    justifyContent: "center",
    alignItems: "center",
    height: 35,
    width: 35,
    borderRadius: 7,
  },
});

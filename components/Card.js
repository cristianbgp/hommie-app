import React, { useContext } from "react";
import { Pressable, Text, StyleSheet, View } from "react-native";
import { BottomSheetContext } from "../contexts/BottomSheetContext";
import { TasksContext } from "../contexts/TasksContext";
import CheckIcon from "./icons/CheckIcon";

export default function Card({ item, isFirst, isLast }) {
  const { id, title, description, completed } = item;
  const { setShowedTask, toggleCompleted } = useContext(TasksContext);
  const bottomSheetRef = useContext(BottomSheetContext);

  const handlePress = () => {
    setShowedTask(item);
    bottomSheetRef.current.expand();
  };

  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && { opacity: 0.7 },
        isFirst && { marginTop: 20 },
        isLast && { marginBottom: 60 },
      ]}
      onPress={handlePress}
    >
      {({ pressed }) => (
        <>
          <Pressable onPress={() => toggleCompleted(id)}>
            <View style={[styles.checkbox, pressed && { opacity: 0.7 }]}>
              {completed && (
                <CheckIcon
                  height={30}
                  width={30}
                  stroke="black"
                  strokeWidth={2}
                />
              )}
            </View>
          </Pressable>
          <View style={styles.textSection}>
            <Text
              style={[
                styles.title,
                completed && { textDecorationLine: "line-through" },
              ]}
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              style={[
                styles.description,
                completed && { textDecorationLine: "line-through" },
              ]}
              numberOfLines={1}
            >
              {description}
            </Text>
          </View>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 5,
    padding: 10,
    marginHorizontal: 20,
    marginBottom: 20,
    //shadow
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  checkbox: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  textSection: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
});

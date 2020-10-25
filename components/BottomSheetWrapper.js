import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  Platform,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { BottomSheetContext } from "../contexts/BottomSheetContext";
import { TasksContext } from "../contexts/TasksContext";

export default function BottomSheetWrapper() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [disabled, setDisabled] = useState(true);
  const bottomSheetRef = useContext(BottomSheetContext);
  const {
    addTask,
    editTask,
    removeTask,
    showedTask,
    setShowedTask,
  } = useContext(TasksContext);

  const snapPoints = useMemo(
    () => (Platform.OS === "ios" ? ["5%", "82%"] : ["5%", "50%"]),
    []
  );

  useEffect(() => {
    if (showedTask) {
      setTitle(showedTask.title);
      setDescription(showedTask.description);
      setDisabled(true);
    } else {
      clearInput();
    }
  }, [showedTask]);

  const handleCreateOrEdit = () => {
    showedTask
      ? editTask(showedTask.id, title, description)
      : addTask(title, description);
    clearInput();
    Keyboard.dismiss();
    bottomSheetRef.current.collapse();
  };

  const handleDelete = () => {
    removeTask(showedTask.id);
    clearInput();
    Keyboard.dismiss();
    bottomSheetRef.current.collapse();
  };

  const handleTitle = (text) => {
    setDisabled(text.trim() === "");
    setTitle(text);
  };

  const handleDescription = (text) => {
    setDisabled(title.trim() === "");
    setDescription(text);
  };

  const clearInput = () => {
    setTitle("");
    setDescription("");
    setDisabled(true);
  };

  const handleSheetChanges = useCallback((index) => {
    if (index === 0) {
      Keyboard.dismiss();
      setShowedTask(null);
    }
  }, []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      initialSnapIndex={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.container}>
        <Text style={styles.header}>
          {showedTask ? "Edit a task" : "Add a new task"}
        </Text>
        <KeyboardAwareScrollView keyboardShouldPersistTaps="handled">
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.titleInput}
            value={title}
            onChangeText={handleTitle}
            placeholder="Add a new task title"
          />
          <Text style={styles.label}>
            Description <Text style={styles.optionalText}>(optional)</Text>
          </Text>
          <TextInput
            style={styles.descriptionInput}
            value={description}
            onChangeText={handleDescription}
            placeholder="Add a description"
            multiline={true}
          />
          <View style={styles.footer}>
            {showedTask && (
              <TouchableOpacity onPress={handleDelete}>
                <View style={[styles.button, { marginRight: 20 }]}>
                  <Text style={styles.buttonText}>Delete</Text>
                </View>
              </TouchableOpacity>
            )}
            <TouchableOpacity onPress={handleCreateOrEdit} disabled={disabled}>
              <View
                style={[styles.button, disabled && { backgroundColor: "gray" }]}
              >
                <Text style={styles.buttonText}>
                  {showedTask ? "Edit" : "Create"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 5,
    flex: 1,
  },
  header: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 25,
    textAlign: "center",
  },
  label: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 10,
  },
  titleInput: {
    lineHeight: 20,
    backgroundColor: "rgb(249, 249, 249)",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
  },
  descriptionInput: {
    lineHeight: 20,
    backgroundColor: "rgb(249, 249, 249)",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginBottom: 20,
  },
  optionalText: {
    fontSize: 16,
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "black",
    borderRadius: 12,
  },
  buttonText: {
    fontSize: 20,
    paddingHorizontal: 30,
    paddingVertical: 10,
    color: "white",
  },
});

import { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { NoteForm, NoteFormErrors } from "./types";

type AddNoteModalProps = {
  visible: boolean;
  onClose: () => void;
  onSave: (title: string, description: string) => void;
};

const INITIAL_FORM: NoteForm = { title: "", description: "" };
const INITIAL_ERRORS: NoteFormErrors = { title: "", description: "" };

export function AddNoteModal({ visible, onClose, onSave }: AddNoteModalProps) {
  const [form, setForm] = useState<NoteForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<NoteFormErrors>(INITIAL_ERRORS);

  const handleClose = () => {
    setForm(INITIAL_FORM);
    setErrors(INITIAL_ERRORS);
    Keyboard.dismiss();
    onClose();
  };

  const handleSave = () => {
    const title = form.title.trim();
    const description = form.description.trim();

    if (!title && !description) {
      setErrors({
        title: "Title is required",
        description: "Description is required"
      });
      return;
    }
    if (!title) {
      setErrors({ ...errors, title: "Title is required" });
      return;
    }
    if (!description) {
      setErrors({ ...errors, description: "Description is required" });
      return;
    }

    onSave(title, description);
    handleClose();
  };

  const updateField = (field: keyof NoteForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={handleClose}
    >
      <Pressable style={styles.overlay} onPress={handleClose}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardWrap}
        >
          <View
            style={styles.content}
            onStartShouldSetResponder={() => true}
          >
            <View style={styles.header}>
              <Text style={styles.title}>Add a New Note</Text>
              <TouchableOpacity
                onPress={handleClose}
                style={styles.closeButton}
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
              >
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>

            <Text style={styles.inputLabel}>Title</Text>
            <TextInput
              style={[styles.input, errors.title && styles.inputError]}
              placeholder="Enter note title"
              placeholderTextColor="#999"
              value={form.title}
              onChangeText={(text) => updateField("title", text)}
              autoCapitalize="sentences"
            />
            {errors.title ? (
              <Text style={styles.errorText}>{errors.title}</Text>
            ) : null}

            <Text style={styles.inputLabel}>Description</Text>
            <TextInput
              style={[
                styles.input,
                styles.inputMultiline,
                errors.description && styles.inputError
              ]}
              placeholder="Enter note description"
              placeholderTextColor="#999"
              value={form.description}
              onChangeText={(text) => updateField("description", text)}
              multiline
              numberOfLines={3}
              textAlignVertical="top"
              autoCapitalize="sentences"
            />
            {errors.description ? (
              <Text style={styles.errorText}>{errors.description}</Text>
            ) : null}

            <View style={styles.buttons}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={handleClose}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={handleSave}
              >
                <Text style={styles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24
  },
  keyboardWrap: {
    width: "100%",
    maxWidth: 400
  },
  content: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1a1a1a"
  },
  closeButton: {
    padding: 4
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#e0e0e0",
    borderRadius: 12,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#fafafa",
    marginBottom: 16
  },
  inputMultiline: {
    minHeight: 100,
    paddingTop: 14
  },
  inputError: {
    borderColor: "#e74c3c",
    backgroundColor: "#fef5f5"
  },
  errorText: {
    color: "#e74c3c",
    fontSize: 13,
    marginTop: -12,
    marginBottom: 12
  },
  buttons: {
    flexDirection: "row",
    gap: 12,
    marginTop: 24
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
  },
  cancelButton: {
    backgroundColor: "#f0f0f0"
  },
  cancelButtonText: {
    color: "#333",
    fontWeight: "600",
    fontSize: 16
  },
  saveButton: {
    backgroundColor: "#007BFF"
  },
  saveButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16
  }
});

import { memo } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { Note } from "./types";

type NoteItemProps = {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (id: number) => void;
};

function NoteItemComponent({ note, onEdit, onDelete }: NoteItemProps) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.description}>{note.description}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity
          onPress={() => onEdit(note)}
          style={styles.iconButton}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Ionicons name="create-outline" size={22} color="#007BFF" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onDelete(note.id)}
          style={styles.iconButton}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Ionicons name="trash-outline" size={22} color="#e74c3c" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const NoteItem = memo(NoteItemComponent);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12
  },
  content: {
    flex: 1
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000"
  },
  description: {
    fontSize: 14,
    color: "#333",
    marginTop: 4
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8
  },
  iconButton: {
    padding: 6
  }
});

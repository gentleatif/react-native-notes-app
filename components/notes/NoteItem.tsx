import { memo } from "react";
import { StyleSheet, Text, View } from "react-native";
import type { Note } from "./types";

type NoteItemProps = {
  note: Note;
};

function NoteItemComponent({ note }: NoteItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.description}>{note.description}</Text>
    </View>
  );
}

export const NoteItem = memo(NoteItemComponent);

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 16,
    borderRadius: 10,
    marginBottom: 12
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
  }
});
